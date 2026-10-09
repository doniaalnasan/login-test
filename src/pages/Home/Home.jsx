import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../../components/Hero/Hero";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getCategories, getProducts } from "../../services/dataService";
import "../../styles/Home.css";

/* صف منتجات أفقي مع أسهم يمين ويسار */
function ProductRow({ products, headerLeft, headerRight }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    const row = rowRef.current;
    if (row) row.scrollBy({ left: dir * row.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="product-row">
      <div className="product-row__head">
        <div className="product-row__left">{headerLeft}</div>
        <div className="product-row__actions">
          {headerRight}
          <button type="button" className="arrow-btn" onClick={() => scroll(-1)} aria-label="Previous">
            ‹
          </button>
          <button type="button" className="arrow-btn" onClick={() => scroll(1)} aria-label="Next">
            ›
          </button>
        </div>
      </div>

      {products.length ? (
        <div className="product-row__list" ref={rowRef} dir="ltr">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="empty-text">No products in this category yet.</p>
      )}
    </div>
  );
}

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const trendingRef = useRef(null);

  // جلب البيانات من services عند فتح الصفحة
  useEffect(() => {
    let ignore = false;
    Promise.all([getCategories(), getProducts()]).then(([cats, prods]) => {
      if (ignore) return;
      setCategories(cats);
      setProducts(prods);
      setLoading(false);
    });
    return () => {
      ignore = true;
    };
  }, []);

  const selectCategory = (name) => {
    setActiveCategory(name);
    trendingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const trendingProducts =
    activeCategory === "All"
      ? products.filter((p) => p.trending)
      : products.filter((p) => p.category === activeCategory);

  if (loading) {
    return <div className="home-loading">Loading...</div>;
  }

  return (
    <main className="home">
      {/* 1) البانرات */}
      <HeroSlider />

      {/* 2) قائمة التصنيفات */}
      <section className="home-categories">
        {categories.map((cat) => (
          <CategoryButton
            key={cat.id}
            variant="icon"
            name={cat.name}
            icon={cat.icon}
            active={activeCategory === cat.name}
            onClick={() => selectCategory(cat.name)}
          />
        ))}
      </section>

      {/* 3) كل المنتجات */}
      <section className="home-section">
        <ProductRow
          products={products}
          headerLeft={<h2 className="section-title">All Products</h2>}
          headerRight={
            <button type="button" className="view-all-btn" onClick={() => selectCategory("All")}>
              View All (+{products.length}) →
            </button>
          }
        />
      </section>

      {/* 4) Trending Store Favorites */}
      <section className="home-section trending" ref={trendingRef}>
        <div className="trending__main">
          <h2 className="section-title">Trending Store Favorites</h2>
          <ProductRow
            products={trendingProducts}
            headerLeft={
              <div className="chips">
                <CategoryButton
                  name="All"
                  active={activeCategory === "All"}
                  onClick={() => setActiveCategory("All")}
                />
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.id}
                    name={cat.name}
                    active={activeCategory === cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                  />
                ))}
              </div>
            }
          />
        </div>

        <aside className="trending__promo">
          <span className="promo-badge">✓ Freshness Guarantee</span>
          <h3>Weekly sold 1k+</h3>
          <button type="button" className="promo-btn" onClick={() => setActiveCategory("All")}>
            View More →
          </button>
        </aside>
      </section>

      {/* 5) Order Now */}
      <section className="home-section order-now">
        
      <div className="order-now__products">
        {products.slice(0, 3).map((p) => (
          <div className="order-now__product" key={p.id}>
            <ProductCard product={p} />
            <span className="order-now__check">✓</span>
          </div>
        ))}
      </div>

        <div className="order-now__info">
          <span className="order-now__tag">Get 10% OFF On Your First Order</span>
          <h2>Order Now Your Grocery!</h2>
          <div className="order-now__stats">
            <div>
              <strong>1k+</strong>
              <span>Items</span>
            </div>
            <div>
              <strong>20</strong>
              <span>Minutes</span>
            </div>
            <div>
              <strong>30%</strong>
              <span>Up to offers</span>
            </div>
          </div>
          <Link to="/cart" className="order-now__btn">
            Order Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
