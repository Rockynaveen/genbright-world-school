"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BookOpen,
  Globe2,
  Heart,
  Smile,
  Sprout,
  Star,
} from "lucide-react";

const colors = {
  deepTeal: "#0D4B5A",
  skyBlue: "#29A7D1",
  goldenYellow: "#F2B233",
  orange: "#F26A2E",
  freshGreen: "#8BC34A",
  darkNavy: "#082B35",
};

type CardProps = {
  icon: ReactNode;
  iconBg: string;
  title: ReactNode;
  className?: string;
};

function QuestionCard({ icon, iconBg, title, className = "" }: CardProps) {
  return (
    <div
      className={`relative w-[118px] rounded-[16px] bg-white px-3 pb-3 pt-7 text-center shadow-[0_8px_24px_rgba(8,43,53,0.08)] sm:w-[140px] sm:rounded-[18px] sm:px-4 sm:pb-4 sm:pt-8 lg:w-[150px] lg:rounded-[20px] ${className}`}
    >
      <div className="absolute left-1/2 top-[-20px] -translate-x-1/2 sm:top-[-24px]">
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-md sm:h-[50px] sm:w-[50px]">
          <div
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-white sm:h-[40px] sm:w-[40px]"
            style={{ backgroundColor: iconBg }}
          >
            {icon}
          </div>
        </div>
      </div>

      <h3
        className="text-[11px] font-medium leading-[1.35] sm:text-[12px] lg:text-[13px]"
        style={{ color: colors.darkNavy, fontFamily: "Inter" }}
      >
        {title}
      </h3>

      <div
        className="mx-auto mt-2 h-[2px] w-5 rounded-full sm:w-6"
        style={{ backgroundColor: iconBg }}
      />
    </div>
  );
}

export default function ParentQuestionsSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 90,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="overflow-hidden bg-[#FFFDF8] py-[50px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.35em]"
            style={{ color: colors.goldenYellow, fontFamily: "Inter" }}
          >
            Every Parent Asks...
          </p>

          <div
            className="mx-auto mt-2 h-[2px] w-14 sm:w-16"
            style={{ backgroundColor: colors.goldenYellow }}
          />

          <h2
            className="mt-3 text-[38px] leading-none sm:text-[52px] md:text-[62px] lg:text-[68px]"
            style={{
              color: colors.darkNavy,
              fontFamily: "DM Serif Display",
            }}
          >
            Every parent asks...
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
            <span
              className="h-px w-14 border-t border-dotted sm:w-20"
              style={{ borderColor: colors.goldenYellow }}
            />
            <Sprout size={20} style={{ color: colors.goldenYellow }} />
            <span
              className="h-px w-14 border-t border-dotted sm:w-20"
              style={{ borderColor: colors.goldenYellow }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-8 h-[520px] max-w-[360px] sm:h-[620px] sm:max-w-[700px] md:h-[650px] md:max-w-[850px] lg:h-[720px] lg:max-w-[1000px]">
          <div
            data-aos="zoom-in"
            className="absolute left-1/2 top-[47%] z-0 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted sm:h-[450px] sm:w-[450px] md:h-[520px] md:w-[520px] lg:h-[600px] lg:w-[600px]"
            style={{ borderColor: `${colors.deepTeal}70` }}
          />

          <div
            data-aos="fade-up"
            className="absolute left-1/2 top-[47%] z-20 h-[300px] w-[240px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[320px] md:h-[430px] md:w-[350px] lg:h-[470px] lg:w-[380px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29A7D1]/20 blur-[100px] sm:h-[300px] sm:w-[300px]" />

            <img
              src="/images/women-thinking-removebg-preview.png"
              alt="Parent thinking"
              className="relative z-10 h-full w-full object-contain"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 90%, transparent 100%)",
              }}
            />

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[90px] bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8]/60 to-transparent sm:h-[110px]" />
          </div>

          <div
            data-aos="fade-up"
            className="absolute left-2 top-[50px] z-30 sm:left-[90px] sm:top-[90px] md:left-[150px] lg:left-[185px] lg:top-[100px]"
          >
            <QuestionCard
              icon={<Smile size={16} />}
              iconBg={colors.orange}
              title={
                <>
                  Will my child
                  <br />
                  be <span style={{ color: colors.orange }}>happy?</span>
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="absolute right-2 top-[50px] z-30 sm:right-[90px] sm:top-[90px] md:right-[150px] lg:right-[185px] lg:top-[100px]"
          >
            <QuestionCard
              icon={<Star size={16} />}
              iconBg={colors.freshGreen}
              title={
                <>
                  Will they
                  <br />
                  be{" "}
                  <span style={{ color: colors.freshGreen }}>confident?</span>
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="absolute left-0 top-[235px] z-30 sm:left-[30px] sm:top-[300px] md:left-[70px] lg:top-[310px]"
          >
            <QuestionCard
              icon={<Heart size={16} />}
              iconBg={colors.skyBlue}
              title={
                <>
                  Will they
                  <br />
                  be <span style={{ color: colors.skyBlue }}>kind?</span>
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute right-0 top-[235px] z-30 sm:right-[30px] sm:top-[300px] md:right-[70px] lg:top-[310px]"
          >
            <QuestionCard
              icon={<BookOpen size={16} />}
              iconBg={colors.goldenYellow}
              title={
                <>
                  Will they
                  <br />
                  <span style={{ color: colors.goldenYellow }}>
                    love learning?
                  </span>
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="absolute bottom-[35px] left-1/2 z-30 -translate-x-1/2 sm:bottom-[70px] lg:bottom-[85px]"
          >
            <QuestionCard
              icon={<Globe2 size={16} />}
              iconBg={colors.deepTeal}
              className="w-[240px] sm:w-[270px] lg:w-[280px]"
              title={
                <>
                  Will they be ready for a world
                  <br />
                  we{" "}
                  <span style={{ color: colors.deepTeal }}>
                    cannot predict?
                  </span>
                </>
              }
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-[-20px] flex items-center justify-center gap-3 sm:mt-[-35px] lg:mt-[-45px]"
        >
          <Sprout size={20} style={{ color: colors.goldenYellow }} />

          <p
            className="text-center text-[18px] leading-snug sm:text-[22px] lg:text-[24px]"
            style={{
              color: colors.darkNavy,
              fontFamily: "DM Serif Display",
            }}
          >
            At GenBright, these questions shape everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}