"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  Brain,
  Footprints,
  HeartHandshake,
  Leaf,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TreePalm,
  Users,
} from "lucide-react";

import familyImage from "/images/campus-front-view.png";
import campusImage from "/images/campus-top-view.jpeg";

const slides = [
  {
    id: 1,
    title: (
      <>
        Why families
        <br />
        choose GenBright.
      </>
    ),
    image: familyImage,
    imageAlt: "Children learning",
    type: "families",
  },
  {
    id: 2,
    title: (
      <>
        A campus designed
        <br />
        for childhood.
      </>
    ),
    image: campusImage,
    imageAlt: "School campus",
    type: "campus",
  },
];

const FamilyCampusCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#FAF8F1]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="grid min-w-full grid-cols-1 overflow-hidden lg:grid-cols-[50%_50%]"
              >
                <div className="flex min-h-[420px] items-center px-6 py-12 sm:px-10 lg:min-h-[520px] lg:px-14 xl:px-16">
                  <div className="w-full max-w-xl">
                    <h2 className="mb-8 font-serif text-3xl font-bold leading-tight text-dark-navy sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h2>

                    {slide.type === "families" && <FamiliesContent />}
                    {slide.type === "campus" && <CampusContent />}
                  </div>
                </div>

                <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-deep-teal"
                    : "w-2.5 bg-deep-teal/25"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FamiliesContent = () => {
  return (
    <>
      <div className="mb-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        <FamilyItem icon={<Brain />} text={<>Their child<br />is known.</>} />
        <FamilyItem icon={<PlayCircle />} text={<>Their child<br />is heard.</>} />
        <FamilyItem icon={<Footprints />} text={<>Their child<br />is encouraged.</>} />
        <FamilyItem icon={<ShieldCheck />} text={<>Their child<br />belongs.</>} />
      </div>

      <p className="max-w-xl text-sm font-semibold leading-7 text-dark-navy sm:text-base">
        And because learning feels joyful again — every day, in every space,
        with every child.
      </p>
    </>
  );
};

const CampusContent = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        <CampusPoint icon={<Leaf />} text="8 acres of exploration" />
        <CampusPoint icon={<Sparkles />} text="Creative studios" />
        <CampusPoint icon={<TreePalm />} text="Nature-rich learning spaces" />
        <CampusPoint icon={<Users />} text="Farm experiences" />
        <CampusPoint icon={<HeartHandshake />} text="Outdoor classrooms" />
        <CampusPoint icon={<ShieldCheck />} text="Moments of wonder around every corner" />
      </div>

      <button className="inline-flex items-center rounded-full bg-deep-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-dark-navy">
        Explore Our Campus
        <span className="ml-2">→</span>
      </button>
    </>
  );
};

type FamilyItemProps = {
  icon: ReactNode;
  text: ReactNode;
};

const FamilyItem = ({ icon, text }: FamilyItemProps) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-deep-teal/35 text-deep-teal">
        <div className="h-7 w-7">{icon}</div>
      </div>

      <p className="text-xs font-semibold leading-5 text-dark-navy/80 sm:text-sm">
        {text}
      </p>
    </div>
  );
};

type CampusPointProps = {
  icon: ReactNode;
  text: string;
};

const CampusPoint = ({ icon, text }: CampusPointProps) => {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-dark-navy/80">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fresh-green/20 text-deep-teal">
        <span className="h-3.5 w-3.5">{icon}</span>
      </span>
      <span>{text}</span>
    </div>
  );
};

export default FamilyCampusCarousel;