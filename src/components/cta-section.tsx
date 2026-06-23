"use client";

import { useEffect } from "react";
import { Heart, Leaf, Mountain, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const values = [
  { title: "Courage", icon: Mountain },
  { title: "Compassion", icon: Heart },
  { title: "Confidence", icon: Star },
  { title: "Conviction", icon: Leaf },
];

export default function LeaveSchoolSection() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 90,
    });

    AOS.refreshHard();
  }, []);

  return (
    <section className="relative h-[360px] w-full overflow-hidden sm:h-[460px] md:h-[540px] lg:h-[620px] py-12 md:py-14">
      {/* Image */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="absolute inset-0"
      >
        <img
          src="/images/cta.png"
          alt="Child looking at future"
          className="h-full w-full object-cover object-left"
        />
      </div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#082B35]/20 to-[#082B35]/75" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-end px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="max-w-[560px] text-center">
          <h2
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1700"
            className="!text-white text-[34px] leading-[1.02] tracking-[-0.03em] sm:text-[46px] md:text-[58px] lg:text-[70px]"
            style={{
              fontFamily: "DM Serif Display",
              color: "#FFFFFF",
            }}
          >
            One day,
            your child will
            leave school.
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1700"
            className="mx-auto mt-5 max-w-[430px] text-[14px] font-medium leading-[1.7] text-white/90 sm:text-[16px] md:text-[18px]"
            style={{ fontFamily: "Inter" }}
          >
            When they do, we hope they leave with more than knowledge.
          </p>

          <div className="mt-8 grid grid-cols-4 gap-4 sm:gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={750 + index * 150}
                  data-aos-duration="1600"
                  className="group text-center"
                >
                  <div className="mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/80 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px]">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-white md:size-[26px]"
                    />
                  </div>

                  <p
                    className="mt-2 text-[11px] font-medium text-white sm:text-[13px] md:text-[15px]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}