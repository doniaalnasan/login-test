import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";

import blue from "../../assets/blue.png";
import pink from "../../assets/pink.png";
import green from "../../assets/green.png";
import red from "../../assets/red.png";
import white from "../../assets/white.png";

const topBanners = [
  { id: 1, image: blue, alt: "Crazy 8 weekly deals", link: "/" },
  { id: 2, image: pink, alt: "618 Shopping Festival", link: "/" },
  { id: 3, image: green, alt: "Refreshing summer sips", link: "/" },
  { id: 4, image: red, alt: "Father's Day sale", link: "/" },
];

const mainBanners = [
  { id: 1, image: red, alt: "Mother's Day", link: "/" },
  { id: 2, image: white, alt: "Father's Day", link: "/" },
  { id: 3, image: red, alt: "618 Festival", link: "/" },
];



function Carousel({ slides, variant, interval = 4000, direction = "left" }) {
  const len = slides.length;
  const extended = [...slides, ...slides, ...slides];

  const [index, setIndex] = useState(len);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const moving = useRef(false);
  const touchX = useRef(null);

  // نمرر رقم الشريحة للـ CSS كمتغير بدل inline style
  useLayoutEffect(() => {
    trackRef.current?.style.setProperty("--index", index);
  }, [index]);

  const move = useCallback((step) => {
    if (moving.current) return;
    moving.current = true;
    setAnimate(true);
    setIndex((i) => i + step);
  }, []);

  useEffect(() => {
    if (paused) return;
    const step = direction === "right" ? -1 : 1;
    const timer = setInterval(() => move(step), interval);
    return () => clearInterval(timer);
  }, [paused, move, interval, direction]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    moving.current = false;
    if (index >= len * 2) {
      setAnimate(false);
      setIndex(index - len);
    } else if (index < len) {
      setAnimate(false);
      setIndex(index + len);
    }
  };

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (diff > 50) move(-1);
    if (diff < -50) move(1);
    touchX.current = null;
  };

  return (
    <div
      className={`carousel carousel--${variant}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        className={`carousel-track ${animate ? "is-animating" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((slide, i) => (
          <Link key={`${slide.id}-${i}`} to={slide.link} className="carousel-slide">
            <img src={slide.image} alt={slide.alt} draggable="false" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <section className="hero" dir="ltr">
      <Carousel slides={topBanners} variant="top" interval={3500} direction="left" />
      <Carousel slides={mainBanners} variant="main" interval={4500} direction="right" />
    </section>
  );
}
