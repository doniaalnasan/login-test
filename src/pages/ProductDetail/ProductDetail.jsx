import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductById, getProducts } from "../../services/dataService";
import "../../styles/ProductDetail.css";
import { ShoppingCart } from "lucide-react";


export default function ProductDetails() {
  // 1) نجيب رقم المنتج من الرابط: /product/3  =>  id = "3"
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    let ignore = false;
    window.scrollTo(0, 0); // نطلع لأول الصفحة

    Promise.all([getProductById(id), getProducts()]).then(([prod, all]) => {
      if (ignore) return;
      setProduct(prod);
      // منتجات مقترحة: من نفس التصنيف، بدون المنتج الحالي
      if (prod) {
        setRelated(all.filter((p) => p.category === prod.category && p.id !== prod.id));
      }
      setLoading(false);
    });

    return () => {
      ignore = true;
    };
  }, [id]);

  // 3) حالات التحميل وعدم وجود المنتج
  if (loading) return <div className="home-loading">Loading...</div>;

  if (!product) {
    return (
      <div className="pd-page">
        <h2>Product not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <main className="pd-page">
      <p className="pd-breadcrumb">
        <Link to="/">Home</Link> / <span>Setiting</span> / <span>Team</span>
      </p>

      <section className="pd-top">
        <div className="pd-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="pd-info">
          <h1>Chosen Foods 100% Pure</h1>
            <h1>Avocado Oil Spray 4.7 oz</h1>
          <p className="pd-unit">
            ${product.unitPrice}/{product.unit}
          </p>

          <p>
            <span className="pd-price">${product.price}</span>
            {product.oldPrice && <span className="pd-old">${product.oldPrice}</span>}
          </p>

          <p className="pd-stock">{product.stock} Left</p>

          {/* الكمية */}
          <div className="pd__cart">
            <button className="pd__add">
              <ShoppingCart/>
            </button>
          </div>

          <h3>About Product</h3>
          <p className="pd-about">Best Seller Product · {product.sold}+ sold</p>
          <p className="pd-about">100% satisfaction guarantee</p>
        </div>
      </section>

      
      <section className="pd-details">
        <h2>Details</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U</p>
        <h2>Conservation and storage</h2>
        <h2>Ingredients</h2>
      </section>

      {/* منتجات مقترحة */}
      {related.length > 0 && (
        <section>
          <h2 className="section-title">Recommendations</h2>
          <div className="pd-related">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
