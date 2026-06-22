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
      duration: 1300,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="bg-white pt-6 pb-10 md:pt-14 md:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
          <div className="mb-5 flex items-end justify-between gap-6">
            <div data-aos="fade-up">
              <h2 
                className="text-3xl font-normal leading-tight text-dark-navy md:text-4xl"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                What if learning had no walls?
              </h2>

              <p 
                className="mt-2 text-sm font-medium text-deep-teal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore our 13 Learning Centres.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="flex items-center gap-3">
              <CarouselPrevious className="static h-9 w-9 translate-x-0 translate-y-0 border border-deep-teal/30 bg-white text-deep-teal hover:bg-deep-teal hover:text-white" />
              <CarouselNext className="static h-9 w-9 translate-x-0 translate-y-0 border border-deep-teal bg-deep-teal text-white hover:bg-dark-navy hover:text-white" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {centers.map((item, index) => (
              <CarouselItem
                key={`${item.title}-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="basis-[82%] pl-4 sm:basis-[45%] md:basis-[30%] lg:basis-[20%]"
              >
                <div className="group">
                  <div className="relative h-[140px] overflow-hidden rounded-2xl border border-deep-teal/10 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/75 via-dark-navy/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-deep-teal/70 text-sm text-white backdrop-blur-sm">
                      {item.icon}
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 
                      className="text-sm font-extrabold tracking-wide text-dark-navy"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      className="mt-1 text-xs leading-4 text-deep-teal"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
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