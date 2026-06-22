"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const values = [
  "Roots First",
  "Then Branches",
  "Then Possibilities",
];

export default function BanyaraSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-[#0D4B5A]">
      <div className="grid items-stretch lg:grid-cols-[1fr_1.1fr]">
        {/* Left Image */}
        <div
          data-aos="fade-right"
          className="relative min-h-[380px] overflow-hidden lg:min-h-full"
        >
          <img
            src="/images/school.png"
            alt="Banyara"
            className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#082B35]/20 via-transparent to-transparent" />
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          className="relative flex flex-col justify-center px-8 py-12 text-white md:px-14 lg:px-20 lg:py-16"
        >
          {/* Decorative Shape */}
          <div className="absolute bottom-8 right-8 hidden opacity-10 lg:block">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M60 15C35 35 30 70 60 105C90 70 85 35 60 15Z"
                fill="#8BC34A"
              />
              <path
                d="M90 35C70 45 65 70 85 95C105 70 105 50 90 35Z"
                fill="#F2B233"
              />
            </svg>
          </div>

          {/* Label */}
          <span className="body-font mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#8BC34A]">
            MEET BANYARA
          </span>

          {/* Heading */}
          <h2 className="heading-font max-w-xl text-4xl leading-tight md:text-5xl xl:text-6xl">
            <span className="text-white">
              A banyan tree doesn't
            </span>
            <br />
            <span className="text-[#8BC34A]">
              grow overnight.
            </span>
          </h2>

          {/* Quote */}
          <p className="heading-font mt-4 text-xl italic text-[#F2B233] md:text-2xl">
            Neither does a child.
          </p>

          {/* Values */}
          <div className="mt-8 space-y-4">
            {values.map((item) => (
              <div
                key={item}
                className="body-font flex items-center gap-3 text-lg font-semibold"
              >
                <span className="text-2xl text-[#F2B233]">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="body-font mt-8 max-w-xl text-base leading-8 text-white/80">
            Banyara journeys alongside every GenBright child,
            reminding them to stay grounded, stay curious,
            and keep growing. Through every stage of learning,
            Banyara symbolizes resilience, wisdom, and the
            endless possibilities that emerge from strong roots.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="body-font rounded-full bg-[#F2B233] px-8 py-3 font-semibold text-[#082B35] transition-all duration-300 hover:scale-105 hover:bg-[#FFD166]">
              Discover Banyara
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}