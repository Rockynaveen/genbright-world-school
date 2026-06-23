"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Brain, Heart, PauseCircle } from "lucide-react";

import foundationImg1 from "/images/foundation3.png";
import foundationImg2 from "/images/foundation4.png";
import foundationImg3 from "/images/child.png";
import foundationImg4 from "/images/girl.png";

export default function FoundationsSection() {
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
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const fadeUp =
    "opacity-0 translate-y-10 animate-[foundationFadeUp_1.4s_ease-out_forwards]";

  const imageMask = {
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.75) 88%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.75) 88%, transparent 100%)",
  };

  return (
    <section ref={sectionRef} className="bg-white py-10 md:py-14">
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

      <div key={animateKey} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`${fadeUp} mb-8 text-center text-[26px] leading-tight text-dark-navy sm:text-[34px] lg:text-[36px]`}
          style={{
            fontFamily: "DM Serif Display, serif",
            animationDelay: "0.1s",
          }}
        >
          Four Foundations. A Lifetime of Impact.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* THINK */}
          <div
            className={`${fadeUp} relative h-[285px] overflow-hidden rounded-[18px] bg-sky-blue shadow-[0_14px_35px_rgba(8,43,53,0.14)] sm:h-[305px] lg:h-[325px]`}
            style={{ animationDelay: "0.35s" }}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />

            <div className="absolute bottom-0 right-0 z-10 h-[92%] w-[85%] overflow-visible">
              <img
                src={foundationImg1}
                alt="THINK"
                className="absolute bottom-[40px] right-[10]px h-full w-full scale-[1.35] object-contain object-bottom"
                style={imageMask}
              />
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

            <div className="relative z-30 flex h-full flex-col p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[22px] font-semibold tracking-wide"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  THINK
                </h3>

                <Brain className="h-8 w-8 text-white/70" strokeWidth={1.7} />
              </div>

              <p
                className="mt-3 max-w-[135px] text-[18px] leading-snug"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                “I wonder why...”
              </p>

              <p className="mt-3 max-w-[145px] text-[14px] font-medium leading-relaxed text-white/90">
                The beginning of every discovery.
              </p>
            </div>
          </div>

          {/* FEEL */}
          <div
            className={`${fadeUp} relative h-[285px] overflow-hidden rounded-[18px] bg-orange shadow-[0_14px_35px_rgba(8,43,53,0.14)] sm:h-[305px] lg:h-[325px]`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />

            <div className="absolute bottom-[20px] right-0 z-10 h-[100%] w-[86%] overflow-visible">
              <img
                src={foundationImg2}
                alt="FEEL"
                className="absolute bottom- -right-[28px] h-full w-full scale-[1.18] object-contain object-bottom"
                style={imageMask}
              />
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

            <div className="relative z-30 flex h-full flex-col p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[22px] font-semibold tracking-wide"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  FEEL
                </h3>

                <Heart className="h-8 w-8 text-white/70" strokeWidth={1.7} />
              </div>

              <p
                className="mt-3 max-w-[135px] text-[18px] leading-snug"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                “I understand how you feel.”
              </p>

              <p className="mt-3 max-w-[145px] text-[14px] font-medium leading-relaxed text-white/90">
                The beginning of meaningful relationship.
              </p>
            </div>
          </div>

          {/* MOVE */}
          <div
            className={`${fadeUp} relative h-[285px] overflow-hidden rounded-[18px] bg-fresh-green shadow-[0_14px_35px_rgba(8,43,53,0.14)] sm:h-[305px] lg:h-[325px]`}
            style={{ animationDelay: "0.85s" }}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />

            <div className="absolute bottom-0 right-0 z-10 h-[98%] w-[90%] overflow-visible">
              <img
                src={foundationImg3}
                alt="MOVE"
                className="absolute bottom-[30px] -right-[22px] h-full w-full scale-[1.32] object-contain object-bottom"
                style={imageMask}
              />
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

            <div className="relative z-30 flex h-full flex-col p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[22px] font-semibold tracking-wide"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  MOVE
                </h3>

                <Activity
                  className="h-8 w-8 text-white/70"
                  strokeWidth={1.7}
                />
              </div>

              <p
                className="mt-3 max-w-[135px] text-[18px] leading-snug"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                “Let’s try.”
              </p>

              <p className="mt-3 max-w-[145px] text-[14px] font-medium leading-relaxed text-white/90">
                The beginning of confidence.
              </p>
            </div>
          </div>

          {/* PAUSE */}
          <div
            className={`${fadeUp} relative h-[285px] overflow-hidden rounded-[18px] bg-golden-yellow shadow-[0_14px_35px_rgba(8,43,53,0.14)] sm:h-[305px] lg:h-[325px]`}
            style={{ animationDelay: "1.1s" }}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />

            <div className="absolute bottom-0 right-0 z-10 h-[92%] w-[88%] overflow-visible">
              <img
                src={foundationImg4}
                alt="PAUSE"
                className="absolute bottom-[30px] -right-[15px] h-full w-full scale-[1.25] object-contain object-bottom"
                style={imageMask}
              />
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

            <div className="relative z-30 flex h-full flex-col p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[22px] font-semibold tracking-wide"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  PAUSE
                </h3>

                <PauseCircle
                  className="h-8 w-8 text-white/70"
                  strokeWidth={1.7}
                />
              </div>

              <p
                className="mt-3 max-w-[135px] text-[18px] leading-snug"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                “I noticed.”
              </p>

              <p className="mt-3 max-w-[145px] text-[14px] font-medium leading-relaxed text-white/90">
                The beginning of wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}