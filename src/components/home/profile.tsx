import Image from "next/image";
import "./profile.css";

export default function Profile() {
  return (
    <div className="mt-20">
      <h1 className="text-center font-semibold text-[#aa1f24] text-2xl">
        About Us
      </h1>
      <div className="flex-profile flex flex-row max-w-7xl mx-auto px-1 mt-2">
        <div className="profile-base mx-1 basis-1/3">
          <div className="text-center">
            <div className="container-profile h-80">
              <Image
                src="/home/about-us/hero-image-4.webp"
                fill
                style={{ objectFit: "cover" }}
                alt="product-mglt"
                className="mx-auto image-profile"
              />
              <h1 className="centered-text text-white font-bold text-4xl w-full">
                Our History
              </h1>
              <div className="overlay-profile">
                <p className="p-profile w-full px-5">
                  Founded in 2010, SECONDATE emerged as a cosmetics brand
                  dedicated to celebrating diversity and empowering individuals
                  through high-quality, cruelty-free products. Starting as an
                  online venture, it quickly gained recognition for its
                  inclusive shade ranges and innovative formulations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-base mx-1 basis-1/3">
          <div className="mx-auto text-center">
            <div className="container-profile h-80">
              <Image
                src="/home/about-us/hero-image-2.webp"
                fill
                style={{ objectFit: "cover" }}
                alt="product-mglt"
                className="mx-auto image-profile"
              />
              <h1 className="centered-text text-white font-bold text-4xl w-full">
                Our Team
              </h1>
              <div className="overlay-profile">
                <p className="p-profile w-full px-5">
                  Led by our CEO, the SECONDATE team comprises professionals
                  from diverse backgrounds who share a passion for beauty and a
                  commitment to excellence. Together, they work collaboratively
                  to deliver exceptional products and experiences to customers
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-base mx-1 basis-1/3">
          <div className="text-center">
            <div className="container-profile h-80">
              <Image
                src="/home/about-us/hero-image-3.webp"
                fill
                style={{ objectFit: "cover" }}
                alt="product-mglt"
                className="mx-auto image-profile"
              />
              <h1 className="centered-text text-white font-bold text-4xl w-full">
                Our Culture
              </h1>
              <div className="overlay-profile">
                <p className="p-profile w-full px-5">
                  SECONDATE fosters a culture of inclusivity, creativity, and
                  empowerment, celebrating diversity at every level of the
                  organization. The company prioritizes sustainability and
                  ethical practices, sourcing ingredients responsibly and
                  minimizing its environmental footprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
