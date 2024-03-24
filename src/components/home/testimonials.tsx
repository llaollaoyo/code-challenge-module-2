"use client";

import axios from "axios";
import { useQuery } from "react-query";
import "./testimonials.css";
import Image from "next/image";

async function getData() {
  const initialData = await axios.get("https://randomuser.me/api/?results=7");
  return initialData;
}

// export const revalidate = 3600;

export default function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: getData,
  });

  const testimonials = [
    "I'm picky about lip gloss, but SECONDATE Beauty's formula exceeded my expectations! It's not sticky at all, just pure glossiness!",
    "I've tried countless mascaras, but SECONDATE Beauty's is the only one that doesn't smudge or flake throughout the day. Lifesaver!",
    "SECONDATE Beauty's blush is my secret weapon for a natural flush! The color payoff is fantastic, and it blends like a dream!",
    "Obsessed with SECONDATE Beauty's lipstick! Long-lasting color and so hydrating!",
    "Can't get enough of SECONDATE Beauty's eyeshadow palette! Stunning colors and great pigment!",
    "SECONDATE Beauty's highlighter is my go-to for that perfect glow. It gives me a natural radiance that lasts all day!",
    "I'm blown away by SECONDATE Beauty's setting spray! It keeps my makeup in place all day, even through sweat and humidity!",
  ];

  return (
    <div className="mt-20">
      <h1 className="text-center font-semibold text-[#aa1f24] text-2xl">
        Our Testimonials
      </h1>
      <div className="flex-testi flex flex-row max-w-3xl mx-auto">
        <div className="basis-1/2 mx-4">
          <div className="bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[0]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[0].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[0].name.first}{" "}
                {data?.data.results[0].name.last}
              </h1>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[1]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[1].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[1].name.first}{" "}
                {data?.data.results[1].name.last}
              </h1>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[2]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[2].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[2].name.first}{" "}
                {data?.data.results[2].name.last}
              </h1>
            </div>
          </div>
        </div>
        <div className="basis-1/2 mx-4">
          <div className="testi-4 bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[3]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[3].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[3].name.first}{" "}
                {data?.data.results[3].name.last}
              </h1>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[4]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[4].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[4].name.first}{" "}
                {data?.data.results[4].name.last}
              </h1>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[5]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[5].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[5].name.first}{" "}
                {data?.data.results[5].name.last}
              </h1>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 my-3">
            <p className="italic">{testimonials[6]}</p>
            <div className="flex mt-4">
              <Image
                src={data?.data.results[6].picture.large}
                width={50}
                height={20}
                alt="profile-photo"
                className="rounded-full mr-4"
              />
              <h1 className="font-bold mt-3">
                {data?.data.results[6].name.first}{" "}
                {data?.data.results[6].name.last}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
