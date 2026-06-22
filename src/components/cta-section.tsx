"use client";

import { useEffect } from "react";
import { Heart, Leaf, Mountain, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const values = [
  { title: "Courage", icon: Mountain, color: "#0D4B5A", bg: "#EAF4F6" },
  { title: "Compassion", icon: Heart, color: "#F26A2E", bg: "#FFF1EA" },
  { title: "Confidence", icon: Star, color: "#F2B233", bg: "#FFF7E3" },
  { title: "Conviction", icon: Leaf, color: "#8BC34A", bg: "#F1FAE8" },
];

export default function LeaveSchoolSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="overflow-hidden bg-white">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_1.1fr]">
        {/* Image */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] md:min-h-[420px] lg:min-h-[560px]"
        >
          <img
            src="/images/school.png"
            alt="Child leaving school"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/45 via-dark-navy/15 to-transparent lg:bg-gradient-to-r lg:from-dark-navy/55 lg:via-dark-navy/25" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center bg-white px-5 py-14 md:py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-[620px] text-[34px] leading-[1.08] tracking-[-0.02em] text-dark-navy sm:text-[42px] md:text-[52px] lg:text-[56px]"
            style={{ fontFamily: "DM Serif Display" }}
          >
            One day,
            <br />
            your child will
            <br />
            leave school.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-10 sm:grid-cols-4 sm:gap-x-5 md:gap-x-6 lg:mt-12">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 120}
                  className="group text-center"
                >
                  <div
                    className="mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:shadow-[0_14px_35px_rgba(8,43,53,0.16)] sm:h-[58px] sm:w-[58px] md:h-[64px] md:w-[64px]"
                    style={{
                      borderColor: `${item.color}33`,
                      backgroundColor: item.bg,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      style={{ color: item.color }}
                      className="transition-transform duration-300 group-hover:scale-110 sm:size-[22px]"
                    />
                  </div>

                  <p
                    className="mt-2.5 text-[13px] font-semibold leading-[1.3] text-deep-teal transition-colors duration-300 group-hover:text-dark-navy sm:text-[14px]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="850"
            className="mt-8 max-w-[650px] text-[15px] font-medium leading-[1.75] text-dark-navy/80 sm:mt-10 sm:text-[16px] md:text-[17px] lg:mt-12"
            style={{ fontFamily: "Inter" }}
          >
            When they do, we hope they leave with more than knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}