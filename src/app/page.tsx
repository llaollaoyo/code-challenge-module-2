"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/home/hero";
import Profile from "@/components/home/profile";

const Tagline = dynamic(() => import("../components/home/tagline"));
const Products = dynamic(() => import("../components/home/products"));
const Testimonials = dynamic(() => import("../components/home/testimonials"));
const Footer = dynamic(() => import("../components/footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <Tagline />
      <Products />
      <Testimonials />
      <Profile />
      <Footer />
    </main>
  );
}
