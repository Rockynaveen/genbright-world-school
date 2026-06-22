"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const centers = [
  { title: "FARM", subtitle: "Nature & Living", image: "/images/learn1.png", icon: "🌿" },
  { title: "FORGE", subtitle: "Innovation & Making", image: "/images/learn2.png", icon: "⚙️" },
  { title: "FLOW", subtitle: "Performing Arts", image: "/images/learn3.png", icon: "🎭" },
  { title: "FOCUS", subtitle: "Reflection & Mindfulness", image: "/images/learn4.png", icon: "🧘" },
  { title: "FELLOW", subtitle: "Collaboration & Community", image: "/images/learn5.png", icon: "🤝" },
  { title: "FORM", subtitle: "Design & Creativity", image: "/images/learn6.png", icon: "✏️" },
  { title: "FLY", subtitle: "Exploration & Leadership", image: "/images/learn4.png", icon: "🧭" },
  { title: "FIELD", subtitle: "Outdoor Discovery", image: "/images/learn1.png", icon: "🌾" },
  { title: "FUTURE", subtitle: "Technology & Ideas", image: "/images/learn2.png", icon: "💡" },
];

export default function LearningWallsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="bg-white py-8 md:py-10 lg:py-[50px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div data-aos="fade-up" data-aos-duration="1800">
              <h2 className="font-['DM_Serif_Display'] text-3xl font-normal leading-tight text-[#082B35] md:text-4xl">
                What if learning had no walls?
              </h2>

              <p className="mt-2 text-sm font-medium text-[#0D4B5A]">
                Explore our 13 Learning Centres.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-3"
            >
              <CarouselPrevious className="static left-auto top-auto h-9 w-9 translate-x-0 translate-y-0 border border-[#0D4B5A]/30 bg-white text-[#0D4B5A] hover:bg-[#0D4B5A] hover:text-white" />

              <CarouselNext className="static right-auto top-auto h-9 w-9 translate-x-0 translate-y-0 border border-[#0D4B5A] bg-[#0D4B5A] text-white hover:bg-[#082B35] hover:text-white" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {centers.map((item, index) => (
              <CarouselItem
                key={`${item.title}-${index}`}
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay={index * 300}
                data-aos-easing="ease-out-cubic"
                className="basis-[82%] pl-4 sm:basis-[45%] md:basis-[30%] lg:basis-[20%]"
              >
                <div className="group">
                  <div className="relative h-[140px] overflow-hidden rounded-2xl border border-[#0D4B5A]/10 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#082B35]/75 via-[#082B35]/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#0D4B5A]/70 text-sm text-white backdrop-blur-sm">
                      {item.icon}
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-sm font-extrabold tracking-wide text-[#082B35]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-4 text-[#0D4B5A]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}