import About from "@/components/About";
import Explore from "@/components/Explore";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import GetStarted from "@/components/Get-Started";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import New from "@/components/New";
import World from "@/components/World";
import React from "react";

export default function Home() {
  return (
    <div className=" bg-black  overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />

          <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
          <New />
  
  
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
          <Feedback />
   
      </div>
      <Footer />
    </div>
  );
}
