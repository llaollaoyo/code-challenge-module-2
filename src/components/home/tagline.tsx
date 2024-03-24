import Image from "next/image";
import Link from "next/link";

export default function Tagline() {
  return (
    <div className="mt-20">
      <div className="company-logo">
        <Image
          src="/logo-merah-short_900x.png"
          width={370}
          height={100}
          alt="company-logo"
          className="mx-auto"
        />
      </div>
      <div className="text-center mt-2 text-2xl">
        <h1 className="font-semibold">
          is the freedom to be unapologetically you.
        </h1>
        <h1 className="mt-6">everyone's story is different,</h1>
        <h1 className="mb-8">why should yours be the same?</h1>
      </div>
      <Link href="/about-us">
        <button className="flex mx-auto border-2 border-black px-6 py-2 bg-white font-semibold text-sm">
          Our Story
        </button>
      </Link>
      <Image
        src="/icon_logo_cruelty_halal_red-02.svg"
        width={1170}
        height={162}
        alt="bpom-logo"
        className="mx-auto mt-10"
      />
    </div>
  );
}
