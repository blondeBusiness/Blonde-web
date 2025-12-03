'use client'

import NavbarWeb from "../components/NavbarWeb";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import { Divider } from "@heroui/react";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <NavbarWeb />

      <main className="flex-1 w-full ">
        <div className="container mx-auto h-full w-full px-4 py-8 flex flex-col gap-16">
          <Hero />
          <Divider className="my-8 w-full bg-white/20" />
          <AboutUs />
          <Divider className="my-8 w-full bg-white/20" />
          <Services />
          <Divider className="my-8 w-full bg-white/20" />
        </div>
      </main>
    </div>
  );
}
