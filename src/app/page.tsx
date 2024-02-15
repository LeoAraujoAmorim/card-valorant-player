"use client"


import Footer from "@/components/footer/footer";
import Perfil from "@/components/perfil/perfil";
import About from "@/components/about/about";
import Ranks from "@/components/rank/ranks";
import Roles from "@/components/roles/roles";


export default function Home() {
  return (
    <main>
      <Footer />
      <div className=" mx-auto w-full max-w-4xl lg:px-8">
        <Perfil />
        <About />
        <Ranks />
        <Roles />
      </div>
    </main>
  );
}
