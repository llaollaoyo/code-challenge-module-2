"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import "./page.css";
import Footer from "@/components/footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="products">
        <div className="flex-products flex flex-row mt-16 max-w-6xl mx-auto">
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/silky-blur-powder_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/silky-blur-powder-5_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">silky blur powder</h1>
              <h2 className="font-light text-sm">Rp 149,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/good-skin-day-concealer_713530fa-024a-40da-978c-188860defd61.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/concealernew-03_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">
                good skin day concealer
              </h1>
              <h2 className="font-light text-sm">Rp 139,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/brunch-1_fb5fd813-e215-46d1-aa60-85acdaaee261.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/brunch-2_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">brunch</h1>
              <h2 className="font-light text-sm">Rp 129,000.00</h2>
            </div>
          </div>
        </div>
        <div className="flex-products-2 flex flex-row mt-16 max-w-6xl mx-auto">
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/cuddle-1.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/cuddle-2_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">cuddle</h1>
              <h2 className="font-light line-through text-sm">Rp 149,000.00</h2>
              <h2 className="font-light text-sm">Rp 95,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/picnic-1.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/picnic-2_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">picnic</h1>
              <h2 className="font-light line-through text-sm">Rp 149,000.00</h2>
              <h2 className="font-light text-sm">Rp 95,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/glg-from-mars.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/from-mars-1_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">from mars</h1>
              <h2 className="font-light text-sm">Rp 99,000.00</h2>
            </div>
          </div>
        </div>
        <div className="flex-products-2 flex flex-row mt-16 max-w-6xl mx-auto">
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/glg-moon-river.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/moon-river-1_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">moon river</h1>
              <h2 className="font-light text-sm">Rp 99,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/gallery-2.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/gallery-1_aae66173-ea5d-47f8-a61e-74b58d2083cc_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">gallery</h1>
              <h2 className="font-light text-sm">Rp 129,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/naughty-2.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/naughty-1_66d6d8d0-29e4-4fe4-895a-ffe7be98f8d3_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">naughty</h1>
              <h2 className="font-light text-sm">Rp 129,000.00</h2>
            </div>
          </div>
        </div>
        <div className="flex-products-2 flex flex-row mt-16 max-w-6xl mx-auto">
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/archeryonmodel.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/archerymodelhold_900x.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">
                royal lip mousse in archery
              </h1>
              <h2 className="font-light line-through text-sm">Rp 149,000.00</h2>
              <h2 className="font-light text-sm">Rp 95,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/seasideonmodel.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/seasidemodelhold_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">
                royal lip mousse in seaside
              </h1>
              <h2 className="font-light text-sm">Rp 149,000.00</h2>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="photo-prod max-w-[426.66px] px-[30px]">
              <div className="container">
                <Image
                  src="/products/secondatedisneyprincesscollectionwaterfallonmodel.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-1"
                  alt="product-picture"
                />
                <Image
                  src="/products/secondatedisneyprincesscollectionwaterfallmodelhold_2000x2000.webp"
                  width={350}
                  height={350}
                  className="mx-auto product-2"
                  alt="product-picture"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h1 className="font-bold text-[#aa1f24]">
                royal lip mousse in waterfall
              </h1>
              <h2 className="font-light text-sm">Rp 149,000.00</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
