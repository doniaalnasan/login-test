
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "../../styles/Cart.css";

function Cart() {
  const {cartItems,addToCart,decreaseQuantity,removeFromCart,clearCart,cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart cart--empty">
        <div className="cart__empty-icon">🛒</div>
        <h1>Your cart is empty</h1>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="cart__shop-btn">
          Start Shopping →
        </Link>
      </main>
    );
  }

  return (
    <main className="cart">
      <div className="cart__header">
        <div>
          <span className="cart__eyebrow">YOUR SHOPPING</span>
          <h1>My Cart</h1>
          <p>{cartItems.length} product(s) in your cart</p>
        </div>

        <button
          type="button"
          className="cart__clear"
          onClick={clearCart}
        >
          Clear cart
        </button>
      </div>

      <div className="cart__content">
        <section className="cart__products">
          <ul className="cart__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart__item">
                <Link
                  to={`/product/${item.id}`}
                  className="cart__item-image"
                >
                  <img src={item.image} alt={item.title} />
                </Link>

                <div className="cart__item-info">
                  <h3>
                    <Link to={`/product/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <span className="cart__price">
                    ${Number(item.price).toFixed(2)}
                  </span>
                  <button
                    type="button"
                    className="cart__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="cart__qty">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label={`Decrease ${item.title} quantity`}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    aria-label={`Increase ${item.title} quantity`}
                  >
                    +
                  </button>
                </div>

                <strong className="cart__subtotal">
                  ${(Number(item.price) * item.quantity).toFixed(2)}
                </strong>
              </li>
            ))}
          </ul>
        </section>

        <aside className="cart__summary">
          <h2>Order Summary</h2>

          <div className="cart__summary-row">
            <span>Products</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="cart__summary-row">
            <span>Delivery</span>
            <span className="cart__free">Free</span>
          </div>

          <div className="cart__summary-total">
            <span>Total</span>
            <strong>${Number(cartTotal).toFixed(2)}</strong>
          </div>

          <button
            type="button"
            className="cart__checkout"
            onClick={() =>
              alert("Checkout functionality will be added later.")
            }
          >
            Proceed to Checkout →
          </button>

          <Link to="/" className="cart__continue">
            ← Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;