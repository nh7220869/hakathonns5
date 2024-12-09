import DontMiss from "@/components/DONTMISS";
import Essential from "@/components/ennisial";
// import Featuredfrom "@/components/FEATURED";
import GearUp from "@/components/gearup";
import Hero from "@/components/HERO";
import Navigation from "@/components/Navigation";
import { CarouselSize } from "@/components/BEST"
import Featured from "./sidebae.tsx/page";



export default function Home() {
  return (
  <main>
 
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}