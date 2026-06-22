"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  TreePalm,
  Users,
} from "lucide-react";

const campusImages = [
  "/images/campus-top-view.jpeg",
  "/images/campus-front-view.png",
  "/images/campus2.jpeg",
  "/images/campus4.jpeg",
];

export default function CampusSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 90,
      anchorPlacement: "top-bottom",
    });

    AOS.refreshHard();

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % campusImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[28px] bg-white lg:grid-cols-[50%_50%]">
          {/* Left Image Carousel */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]"
          >
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeImage * 100}%)`,
              }}
            >
              {campusImages.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img
                    src={image}
                    alt={`Campus ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {campusImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeImage === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex min-h-[420px] items-center px-6 py-10 sm:px-10 lg:min-h-[520px] lg:px-14 xl:px-16">
            <div className="max-w-xl">
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="mb-8 font-heading text-3xl leading-tight text-dark-navy sm:text-4xl lg:text-5xl"
              >
                A campus designed
                <br />
                for childhood.
              </h2>

              <div className="mb-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                <CampusPoint delay={300} icon={<Leaf className="h-4 w-4" />} text="8 acres of exploration" />
                <CampusPoint delay={400} icon={<Sparkles className="h-4 w-4" />} text="Creative studios" />
                <CampusPoint delay={500} icon={<TreePalm className="h-4 w-4" />} text="Nature-rich learning spaces" />
                <CampusPoint delay={600} icon={<Users className="h-4 w-4" />} text="Farm experiences" />
                <CampusPoint delay={700} icon={<HeartHandshake className="h-4 w-4" />} text="Outdoor classrooms" />
                <CampusPoint delay={800} icon={<ShieldCheck className="h-4 w-4" />} text="Moments of wonder around every corner" />
              </div>

              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="inline-flex items-center rounded-full bg-deep-teal px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-dark-navy"
              >
                Explore Our Campus
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CampusPointProps = {
  icon: React.ReactNode;
  text: string;
  delay: number;
};

function CampusPoint({ icon, text, delay }: CampusPointProps) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fresh-green/20 text-deep-teal">
        {icon}
      </span>

      <span className="text-sm font-medium text-dark-navy/80">{text}</span>
    </div>
  );
}