"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
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
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const fadeUp =
    "opacity-0 translate-y-10 animate-[heroFadeUp_1.5s_ease-out_forwards]";

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] overflow-hidden bg-[#F8FAF4] sm:h-[650px] lg:h-[680px]"
    >
      <style>{`
        @keyframes heroFadeUp {
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

      <img
        src="/images/hero.png"
        alt="GenBright Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/10 to-transparent" />

      <div
        key={animateKey}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10"
      >
        <div className="max-w-[560px]">
          <h1
            className={`${fadeUp} font-['DM_Serif_Display'] text-[48px] leading-[0.9] text-[#082B35] sm:text-[64px] lg:text-[76px]`}
            style={{ animationDelay: "0.1s" }}
          >
            Childhood
            <br />
            deserves <span className="text-[#0D4B5A]">better.</span>
          </h1>

          <div className="mt-7 space-y-3 text-[15px] text-[#082B35]">
            {[
              "Not more pressure.",
              "Not more worksheets.",
              "Not more rushing.",
            ].map((text, index) => (
              <p
                key={text}
                className={fadeUp}
                style={{ animationDelay: `${0.4 + index * 0.25}s` }}
              >
                <span className="mr-3 text-[#8BC34A]">🌿</span>
                {text}
              </p>
            ))}

            <p
              className={`${fadeUp} font-['DM_Serif_Display'] text-[26px] text-[#0D4B5A]`}
              style={{ animationDelay: "1.15s" }}
            >
              <span className="mr-3 text-[#8BC34A]">🌿</span>
              Just more wonder.
            </p>
          </div>

          <p
            className={`${fadeUp} mt-6 text-[16px] font-medium text-[#082B35]`}
            style={{ animationDelay: "1.4s" }}
          >
            Look Within. Look Around. Look Beyond.
          </p>

          <div
            className={`${fadeUp} mt-8 flex flex-wrap items-center gap-4`}
            style={{ animationDelay: "1.65s" }}
          >
            <button className="flex h-12 items-center rounded-full bg-[#0D4B5A] px-7 text-sm font-semibold text-white transition hover:bg-[#082B35]">
              Book a Campus Visit
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>

            <button className="flex h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#082B35] shadow-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0D4B5A]">
                <Play className="h-3 w-3 fill-[#0D4B5A] text-[#0D4B5A]" />
              </span>
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      <div
        key={`banyara-${animateKey}`}
        className={`${fadeUp} absolute bottom-16 right-10 hidden items-center gap-5 lg:flex`}
        style={{ animationDelay: "1.9s" }}
      >
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/20 text-xl text-white backdrop-blur-md">
          ↓
        </div>
      </div>
    </section>
  );
}