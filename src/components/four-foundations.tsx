"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Brain, Heart, PauseCircle } from "lucide-react";

import foundationImg1 from "/images/foundation3.png";
import foundationImg2 from "/images/foundation4.png";
import foundationImg3 from "/images/foundation1.png";
import foundationImg4 from "/images/foundation2.png";

const foundations = [
  {
    title: "THINK",
    quote: "I wonder why...",
    subtitle: "The beginning of every discovery.",
    bg: "bg-sky-blue",
    icon: Brain,
    image: foundationImg1,
  },
  {
    title: "FEEL",
    quote: "I understand how you feel.",
    subtitle: "The beginning of   meaningful relationship.",
    bg: "bg-orange",
    icon: Heart,
    image: foundationImg2,
  },
  {
    title: "MOVE",
    quote: "Let’s try.",
    subtitle: "The beginning of confidence.",
    bg: "bg-fresh-green",
    icon: Activity,
    image: foundationImg3,
  },
  {
    title: "PAUSE",
    quote: "I noticed.",
    subtitle: "The beginning of wisdom.",
    bg: "bg-golden-yellow",
    icon: PauseCircle,
    image: foundationImg4,
  },
];

const FoundationsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible) {
          setAnimateKey((prev) => prev + 1);
          wasVisible = true;
        }

        if (!entry.isIntersecting) {
          wasVisible = false;
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const fadeUp =
    "opacity-0 translate-y-10 animate-[foundationFadeUp_1.4s_ease-out_forwards]";

  return (
    <section ref={sectionRef} className="bg-white py-14 md:py-20">
      <style>{`
        @keyframes foundationFadeUp {
          from {
            opacity: 0;
            transform: translateY(45px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        key={animateKey}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <h2
          className={`${fadeUp} mb-8 text-center text-2xl leading-tight text-dark-navy sm:text-3xl lg:text-[34px]`}
          style={{
            fontFamily: "DM Serif Display, serif",
            animationDelay: "0.1s",
          }}
        >
          Four Foundations. A Lifetime of Impact.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`${fadeUp} relative h-[280px] sm:h-[300px] lg:h-[320px] overflow-hidden rounded-[18px] ${item.bg} shadow-[0_14px_35px_rgba(8,43,53,0.14)]`}
                style={{
                  animationDelay: `${0.35 + index * 0.25}s`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute bottom-0 right-0 z-10 object-cover ${index === 1
                    ? "h-[190px] w-[140px] sm:h-[210px] sm:w-[160px] lg:h-[230px] lg:w-[175px] object-center"
                    : index === 2
                      ? "h-[240px] w-[180px] sm:h-[260px] sm:w-[200px] lg:h-[280px] lg:w-[230px] object-[35%_center]"
                      : "h-[240px] w-[140px] sm:h-[260px] sm:w-[160px] lg:h-[280px] lg:w-[180px] object-center"
                    }`}
                />

                <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />

                <div className="relative z-30 flex h-full flex-col p-5 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-xl font-semibold tracking-wide"
                      style={{ fontFamily: "DM Serif Display, serif" }}
                    >
                      {item.title}
                    </h3>

                    <Icon className="h-8 w-8 text-white/70" strokeWidth={1.7} />
                  </div>

                  <p
                    className="mt-3 max-w-[135px] text-base leading-snug"
                    style={{ fontFamily: "DM Serif Display, serif" }}
                  >
                    “{item.quote}”
                  </p>

                  <p className="mt-3 max-w-[135px] text-[12px] font-medium leading-relaxed text-white/90">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoundationsSection;
