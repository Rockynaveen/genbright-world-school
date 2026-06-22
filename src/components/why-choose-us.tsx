"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Brain,
  Footprints,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

import familyImage from "/images/campus-front-view.png";

export default function FamiliesSection() {
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
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          data-aos="fade-up"
          className="mb-10 text-center"
        >
          <p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-[#29A7D1]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            WHY CHOOSE US
          </p>

          <div className="mx-auto mt-3 h-[2px] w-16 bg-[#29A7D1]" />

          <h2
            className="mt-4 text-[34px] leading-none text-[#082B35] sm:text-[42px] md:text-[48px]"
            style={{
              fontFamily: "DM Serif Display, serif",
              fontWeight: 400,
            }}
          >
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-[28px] bg-white lg:grid-cols-[50%_50%]">
          {/* Content */}
          <div
            data-aos="fade-up"
            className="flex min-h-[420px] items-center px-6 py-10 sm:px-10 lg:min-h-[520px] lg:px-14"
          >
            <div className="max-w-xl">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-8 text-3xl leading-tight text-dark-navy sm:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontWeight: 400,
                }}
              >
                Why families
                <br />
                choose GenBright.
              </h2>

              <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                <FamilyItem
                  delay={200}
                  icon={<Brain />}
                  text={
                    <>
                      Their child
                      <br />
                      is known.
                    </>
                  }
                />

                <FamilyItem
                  delay={320}
                  icon={<PlayCircle />}
                  text={
                    <>
                      Their child
                      <br />
                      is heard.
                    </>
                  }
                />

                <FamilyItem
                  delay={440}
                  icon={<Footprints />}
                  text={
                    <>
                      Their child
                      <br />
                      is encouraged.
                    </>
                  }
                />

                <FamilyItem
                  delay={560}
                  icon={<ShieldCheck />}
                  text={
                    <>
                      Their child
                      <br />
                      belongs.
                    </>
                  }
                />
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="text-sm font-semibold leading-7 text-dark-navy sm:text-base"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                And because learning feels joyful again — every day, in every
                space, with every child.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]"
          >
            <img
              src={familyImage}
              alt="Families"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type FamilyItemProps = {
  icon: ReactNode;
  text: ReactNode;
  delay: number;
};

function FamilyItem({ icon, text, delay }: FamilyItemProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="text-center"
    >
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-deep-teal/35 text-deep-teal transition duration-300 hover:-translate-y-1 hover:bg-deep-teal hover:text-white">
        <div className="h-7 w-7">{icon}</div>
      </div>

      <p
        className="text-xs font-semibold leading-5 text-dark-navy/80 sm:text-sm"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}