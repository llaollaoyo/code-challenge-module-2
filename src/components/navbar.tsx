import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="flex-box-nav-1">
        <Image
          src="/logo-merah-short_900x.png"
          width={300}
          height={100}
          className="logo-nav"
          alt="logo"
        />
      </div>
      <div className="flex-box-nav-2">
        <ul id="nav">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about-us">
            <li>About Us</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/teams">
            <li>Teams</li>
          </Link>
        </ul>
        <div className="dropdown">
          <Image
            src="/icons8-menu-384.png"
            className="dropbtn"
            width={46}
            height={46}
            alt="menu"
          />
          <div className="dropdown-content">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/teams">Teams</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
