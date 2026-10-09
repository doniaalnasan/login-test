import { createContext, useContext } from "react";

// Context للسلة حتى يقدر أي مكوّن (Navbar, ProductCard, ProductDetail, Cart) يوصل لها
export const CartContext = createContext(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
