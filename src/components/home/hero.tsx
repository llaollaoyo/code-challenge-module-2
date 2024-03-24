import Navbar from "../navbar";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-text-1 fade-in-text-1 font-base text-[40px]">
        Beauty begins with you:
      </div>
      <div className="hero-text-2 fade-in-text-2 text-white font-bold text-[60px]">
        Unveil your true radiance
      </div>
    </div>
  );
}
