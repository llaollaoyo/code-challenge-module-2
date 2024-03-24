import Image from "next/image";
import "./products.css";
import Link from "next/link";

export default function Products() {
  return (
    <div className=" mt-10">
      <h1 className="text-center font-semibold text-[#aa1f24] text-2xl">
        Our Products
      </h1>
      <div className="home-products flex flex-row max-w-7xl mx-auto">
        <div className="home-product py-2 pr-1 pl-2 basis-1/2">
          <div className="container">
            <Image
              src="/home/products/mglt-2_2048x2048.webp"
              width={650}
              height={100}
              alt="product-mglt"
              className="mx-auto"
            />
            <div className="overlay" />
            <Link href="/products">
              <button className="shop-button flex mx-auto border-2 border-black px-6 py-2 bg-white font-semibold text-sm">
                go to shop →
              </button>
            </Link>
          </div>
        </div>
        <div className="produk py-2 pr-2 pl-1 flex flex-col basis-1/2">
          <div className="home-products flex flex-row basis-1/2">
            <div className="home-product pr-1 pb-1 basis-1/2">
              <div className="container">
                <Image
                  src="/home/products/01_1_2048x2048.webp"
                  width={430}
                  height={100}
                  alt="product-skintint"
                  className="mx-auto"
                />
                <div className="overlay" />
                <Link href="/products">
                  <button className="shop-button flex mx-auto border-2 border-black px-6 py-2 bg-white font-semibold text-sm">
                    go to shop →
                  </button>
                </Link>
              </div>
            </div>
            <div className="home-product pl-1 pb-1 basis-1/2">
              <div className="container">
                <Image
                  src="/home/products/2_1_2048x2048.webp"
                  width={430}
                  height={100}
                  alt="product-powder"
                  className="mx-auto"
                />
                <div className="overlay" />
                <Link href="/products">
                  <button className="shop-button flex mx-auto border-2 border-black px-6 py-2 bg-white font-semibold text-sm">
                    go to shop →
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-products flex flex-row basis-1/2">
            <div className="home-product pr-1 pt-1 basis-1/2">
              <div className="container">
                <Image
                  src="/home/products/GIF_4_2048x2048.webp"
                  width={430}
                  height={100}
                  alt="product-concealer"
                  className="mx-auto flex-image"
                  unoptimized
                />
                <div className="overlay" />
                <Link href="/products">
                  <button className="shop-button flex mx-auto border-2 border-black px-6 py-2 bg-white font-semibold text-sm">
                    go to shop →
                  </button>
                </Link>
              </div>
            </div>
            <div className="home-product pl-1 pt-1 basis-1/2">
              <div className="container">
                <Image
                  src="/home/products/holding-brow-updo_2048x2048.webp"
                  width={430}
                  height={100}
                  alt="product-brow"
                  className="mx-auto"
                />
                <div className="overlay" />
                <Link href="/products">
                  <button className="shop-button flex mx-auto border-2 border-black px-6 py-2 bg-white font-semibold text-sm">
                    go to shop →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#aa1f24]">
        <Image
          src="/home/products/footer-icons-desktop-01.svg"
          width={1170}
          height={162}
          alt="bpom-logo"
          className="mx-auto mt-2"
        />
      </div>
    </div>
  );
}
