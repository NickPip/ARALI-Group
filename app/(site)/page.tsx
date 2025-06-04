import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import VideoHeroSection from "@/components/VideoHeroSection";
import HeroDynamic from "@/components/HeroDynamic";
import FunFactDynamic from "@/components/FunFactDynamic";
import VideoHeroSectionDynamic from "@/components/VideoHeroSectionDynamic";
import BlogDynamic from "@/components/Blog/BlogDynamic";

export const metadata: Metadata = {
  title: "AraliGroup – Home",
  description:
    "Welcome to AraliGroup - Your trusted partner in construction and development",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <HeroDynamic /> */}
      {/* <FunFactDynamic /> */}
      <FunFact />
      {/* <Brands /> */}
      {/* <FeaturesTab /> */}

      {/* <About /> */}

      {/* <Integration /> */}
      {/* <CTA /> */}

      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <VideoHeroSection /> */}
      <VideoHeroSectionDynamic />
      {/* <Blog /> */}
      <BlogDynamic />
      <FAQ />
      {/* <Contact /> */}
      <Feature />
    </main>
  );
}
