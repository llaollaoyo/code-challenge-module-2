import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <div className="bg-[#f8ccb4]">
      <div className="flex-footer flex flex-row mt-10 max-w-[85%] mx-auto">
        <div className="footer-1 basis-1/3 max-h-[300px]">
          <Image
            src="/logo-merah-short_900x.png"
            width={200}
            height={100}
            alt="company-logo"
            className="mt-14"
          />
        </div>
        <div className="basis-1/3">
          <ul className="mt-14 ml-5 text-sm">
            <li className="font-semibold mb-4">INFO</li>
            <li className="mb-2">
              <Link href="">FAQ</Link>
            </li>
            <li className="mb-2">
              <Link href="">Order & Delivery</Link>
            </li>
            <li className="mb-2">
              <Link href="">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/3">
          <Link
            href="https://www.instagram.com/secondatebeauty/"
            target="_blank"
          >
            <div className="footer-3 flex max-w-[90%] mt-14 ml-10">
              <div className="">
                <Image
                  src="/instagram-logo.png"
                  width={35}
                  height={35}
                  alt="company-logo"
                  className=""
                />
              </div>
              <div className="ml-4 text-[#aa1f24] text-2xl font-bold my-auto">
                let's get social!
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="foot-bot mt-20 max-w-[85%] mx-auto text-xs pb-20">
        © 2024 SECONDATE PROTOTYPE WEBSITE
      </div>
    </div>
  );
}
