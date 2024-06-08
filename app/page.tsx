import Bento from "@/components/Bento";
import ExpertCard from "@/components/ExpertCard";
import Hero from "@/components/Hero";
import NeonGradient from "@/components/NeonGradient";
import Story from "@/components/Story";
import WorkPrice from "@/components/WorkPrice";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <ExpertCard></ExpertCard>
      <Story/>
      <Bento/>
      <WorkPrice></WorkPrice>
    </main>
  );
}
