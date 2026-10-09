import "../../styles/CategoryButton.css";

// variant="icon"  → زر مع أيقونة (قائمة التصنيفات تحت البانرات)
// variant="chip"  → زر نصي صغير (فلاتر قسم Trending)
export default function CategoryButton({ name, icon, active = false, variant = "chip", onClick }) {
  return (
    <button
      type="button"
      className={`category-btn category-btn--${variant} ${active ? "is-active" : ""}`}
      onClick={onClick}
    >
      {variant === "icon" && icon && <span className="category-btn__icon">{icon}</span>}
      {name}
    </button>
  );
}
