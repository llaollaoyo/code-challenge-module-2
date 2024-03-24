"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import "./page.css";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="flex-about flex flex-row max-w-6xl mx-auto mt-16">
        <div className="flex-about-1 basis-[30%] w-[300px] h-[333px] px-10">
          <Image
            src="/about-us/02_2_2048x2048.webp"
            width={300}
            height={300}
            alt="company-logo"
            className="mx-auto"
          />
        </div>
        <div className="flex-about-2 basis-[70%] px-10">
          <Image
            src="/about-us/meet-secondate-01.svg"
            width={300}
            height={300}
            alt="company-logo"
            className=""
          />
          <div className="about-body leading-8 font-medium pt-6">
            at SECONDATE, we make products that celebrate real people and real
            stories. Everyone’s story is different. Your story is uniquely your
            own and we love that. We painstakingly perfect our products and
            handpick all of the ingredients, so that all you have to do now, is
            choose. We were founded in 2020 on the belief that your beauty is a
            part of the story you are writing for yourself. We are building the
            future beauty company where everything we make revolves around your
            story. We believe in always cruelty-free and ethically sourced
            efficacious formulas, thoughtful design, and enabling conversation
            (which is where it all starts). But most of all, we believe that
            beauty is about having fun, wherever you are in your story. We wish
            nothing more now, than to be a part of your story, because you
            already are a part of ours :)
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-20 mx-auto">
        <Image
          src="/about-us/about_us-01.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="mx-auto desktop"
        />
        <Image
          src="/about-us/about_us_mobile-01.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="mx-auto mobile"
        />
        <Image
          src="/about-us/our_backstory-01.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="desktop mx-auto"
        />
        <Image
          src="/about-us/our-backstory-mobile-01.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="mobile mx-auto"
        />
        <Image
          src="/about-us/shades-desktop-1.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="desktop mx-auto"
        />
        <Image
          src="/about-us/shades-mobile-1.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="mobile mx-auto"
        />
        <Image
          src="/about-us/we_are_your_second_date-01.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="desktop mx-auto"
        />
        <Image
          src="/about-us/we_are_your_second_date_mobile-01.webp"
          width={1120}
          height={1000}
          alt="company-about-us"
          className="mobile mx-auto"
        />
      </div>
      <Footer />
    </div>
  );
}
