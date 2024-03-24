"use client";

import axios from "axios";
import { useQuery } from "react-query";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./page.css";
import Image from "next/image";

async function getData() {
  const initialData = await axios.get("https://randomuser.me/api/?results=7");
  return initialData;
}

export default function AboutUs() {
  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: getData,
  });

  return (
    <div>
      <div className="title">
        <Navbar />
        <h1 className="teams-title text-[100px] font-extrabold pl-[50px] p-[100px] text-white">
          meet <span className="text-[#aa1f24] fade">THE TEAM</span>
        </h1>
      </div>
      <div className="teams-flex flex flex-row max-w-4xl mx-auto">
        <div className="basis-1/3 border-2 border-black bg-white m-[30px]">
          <div className="container-team h-[300px]">
            <Image
              src={data?.data.results[0].picture.large}
              fill
              style={{ objectFit: "cover" }}
              alt="profile-photo"
              className="profile-image"
            />
          </div>
          <div className="font-bold text-center pt-4">
            {data?.data.results[0].name.first} {data?.data.results[0].name.last}
          </div>
          <div className="text-center text-sm pb-4">Founder</div>
        </div>
        <div className="basis-1/3 border-2 border-black bg-white m-[30px]">
          <div className="container-team h-[300px]">
            <Image
              src={data?.data.results[1].picture.large}
              fill
              style={{ objectFit: "cover" }}
              alt="profile-photo"
              className="profile-image"
            />
          </div>
          <div className="font-bold text-center pt-4">
            {data?.data.results[1].name.first} {data?.data.results[1].name.last}
          </div>
          <div className="text-center text-sm pb-4">Co-Founder</div>
        </div>
        <div className="basis-1/3 border-2 border-black bg-white m-[30px]">
          <div className="container-team h-[300px]">
            <Image
              src={data?.data.results[2].picture.large}
              fill
              style={{ objectFit: "cover" }}
              alt="profile-photo"
              className="profile-image"
            />
          </div>
          <div className="font-bold text-center pt-4">
            {data?.data.results[2].name.first} {data?.data.results[2].name.last}
          </div>
          <div className="text-center text-sm pb-4">CEO</div>
        </div>
      </div>
      <div className="teams-flex flex flex-row max-w-4xl mx-auto">
        <div className="basis-1/3 border-2 border-black bg-white m-[30px]">
          <div className="container-team h-[300px]">
            <Image
              src={data?.data.results[3].picture.large}
              fill
              style={{ objectFit: "cover" }}
              alt="profile-photo"
              className="profile-image"
            />
          </div>
          <div className="font-bold text-center pt-4">
            {data?.data.results[3].name.first} {data?.data.results[3].name.last}
          </div>
          <div className="text-center text-sm pb-4">CPO</div>
        </div>
        <div className="basis-1/3 border-2 border-black bg-white m-[30px]">
          <div className="container-team h-[300px]">
            <Image
              src={data?.data.results[4].picture.large}
              fill
              style={{ objectFit: "cover" }}
              alt="profile-photo"
              className="profile-image"
            />
          </div>
          <div className="font-bold text-center pt-4">
            {data?.data.results[4].name.first} {data?.data.results[4].name.last}
          </div>
          <div className="text-center text-sm pb-4">CTO</div>
        </div>
        <div className="basis-1/3 border-2 border-black bg-white m-[30px]">
          <div className="container-team h-[300px]">
            <Image
              src={data?.data.results[5].picture.large}
              fill
              style={{ objectFit: "cover" }}
              alt="profile-photo"
              className="profile-image"
            />
          </div>
          <div className="font-bold text-center pt-4">
            {data?.data.results[5].name.first} {data?.data.results[5].name.last}
          </div>
          <div className="text-center text-sm pb-4">CMO</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
