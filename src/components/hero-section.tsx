"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

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
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const fadeUp =
    "opacity-0 translate-y-10 animate-[heroFadeUp_1.5s_ease-out_forwards]";

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] overflow-visible bg-white sm:h-[650px] lg:h-[680px]"
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

        @keyframes arrowFloat {
          0%, 100% {
            opacity: 0.45;
            transform: translateY(-4px);
          }
          50% {
            opacity: 1;
            transform: translateY(7px);
          }
        }

        @keyframes arrowPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(8, 43, 53, 0.12);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 14px 36px rgba(8, 43, 53, 0.18);
          }
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero.png"
          alt="GenBright Hero"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/10 to-transparent" />
      </div>

      <div
        key={animateKey}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10"
      >
        <div className="max-w-[560px]">
          <h1
            className={`${fadeUp} font-heading text-[48px] leading-[0.9] text-dark-navy sm:text-[64px] lg:text-[76px]`}
            style={{ animationDelay: "0.1s" }}
          >
            Childhood
            <br />
            deserves <span className="text-deep-teal">better.</span>
          </h1>

          <div className="mt-7 space-y-3 text-[15px] text-dark-navy">
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
                <span className="mr-3 text-fresh-green">🌿</span>
                {text}
              </p>
            ))}

            <p
              className={`${fadeUp} font-heading text-[26px] text-deep-teal`}
              style={{ animationDelay: "1.15s" }}
            >
              <span className="mr-3 text-fresh-green">🌿</span>
              Just more wonder.
            </p>
          </div>

          <p
            className={`${fadeUp} mt-6 text-[16px] font-medium text-dark-navy`}
            style={{ animationDelay: "1.4s" }}
          >
            Look Within. Look Around. Look Beyond.
          </p>

          <div
            className={`${fadeUp} mt-8 flex flex-wrap items-center gap-4`}
            style={{ animationDelay: "1.65s" }}
          >
            <button className="flex h-12 items-center rounded-full bg-deep-teal px-7 text-sm font-semibold text-white transition hover:bg-dark-navy">
              Book a Campus Visit
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>

            <button className="flex h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-dark-navy shadow-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-deep-teal">
                <Play className="h-3 w-3 fill-deep-teal text-deep-teal" />
              </span>
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Arrow - same style like reference image */}
      <div className="absolute bottom-[-28px] left-1/2 z-30 -translate-x-1/2">
        <button
          aria-label="Scroll down"
          className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/80 bg-white/20 backdrop-blur-xl"
          style={{
            animation: "arrowPulse 1.8s ease-in-out infinite",
          }}
        >
          <ChevronDown
            className="h-7 w-7 text-white"
            strokeWidth={1.8}
            style={{
              animation: "arrowFloat 1.5s ease-in-out infinite",
            }}
          />
        </button>
      </div>
    </section>
  );
}