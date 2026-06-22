"use client";

import { useEffect } from "react";
import {
  Footprints,
  Heart,
  Leaf,
  Search,
  Sprout,
  Sunrise,
  TreePine,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const growthPoints = [
  {
    title: "Roots first.",
    text: "Strong beginnings create a strong foundation.",
    icon: Sprout,
  },
  {
    title: "Then branches.",
    text: "Every experience helps them grow.",
    icon: TreePine,
  },
  {
    title: "Then possibilities.",
    text: "Endless paths open up for their future.",
    icon: Leaf,
  },
];

const bottomValues = [
  {
    title: "Kind at heart",
    text: "I care for myself, others and nature.",
    icon: Heart,
  },
  {
    title: "Curious always",
    text: "I ask, explore and never stop wondering.",
    icon: Search,
  },
  {
    title: "Brave to try",
    text: "I step out, take risks and keep learning.",
    icon: Footprints,
  },
  {
    title: "Mindful & calm",
    text: "I pause, reflect and be present.",
    icon: Sunrise,
  },
];

export default function BanayaraSection() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 90,
      anchorPlacement: "top-bottom",
    });

    AOS.refreshHard();
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-white py-14 md:py-20 font-['Inter']">
      <div className="w-full overflow-hidden bg-white">
        <div className="grid items-stretch lg:grid-cols-[42%_58%]">
          {/* Left Content */}
          <div className="relative z-20 flex flex-col justify-center bg-white px-6 py-10 sm:px-10 md:px-14 lg:px-20 lg:py-16 xl:px-24">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="mb-1 flex items-center gap-2 text-[18px] font-bold text-deep-teal sm:text-[22px]">
                <Leaf size={18} className="text-fresh-green" />
                Meet
                <Leaf size={18} className="text-fresh-green" />
              </p>

              <h2 className="font-['DM_Serif_Display'] text-[58px] leading-[0.9] tracking-[-0.03em] text-dark-navy sm:text-[76px] md:text-[90px] lg:text-[82px] xl:text-[92px]">
                Banayara
              </h2>

              <div className="mt-5 h-[2px] w-28 bg-fresh-green" />
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="220"
              className="mt-6 max-w-[360px] text-[15px] font-medium leading-7 text-dark-navy/80 sm:text-[16px]"
            >
              Our friend. Our guide. Our reminder to keep growing.
              <br />
              <br />A banyan tree doesn’t grow overnight. Neither does a child.
            </p>

            <div className="mt-7 space-y-5">
              {growthPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={340 + index * 130}
                    className="group flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fresh-green/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-fresh-green/30">
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-deep-teal"
                      />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-bold text-deep-teal">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-5 text-dark-navy/75">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="760"
              className="mt-8 max-w-[390px] text-[14px] font-medium leading-7 text-dark-navy/80 sm:text-[15px]"
            >
              Banayara journeys alongside every GenBright child, reminding them
              to stay grounded, stay curious, and keep growing.
            </p>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="240"
            className="relative min-h-[360px] overflow-hidden bg-white sm:min-h-[500px] md:min-h-[580px] lg:min-h-[720px]"
          >
            <img
              src="/images/meetbanayara.png"
              alt="Banayara character"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Bottom Card */}
        <div className="relative z-30 px-4 pb-8 sm:px-6 md:px-10 lg:-mt-20 lg:pb-12">
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="mx-auto grid w-full gap-5 rounded-[26px] bg-white px-5 py-6 shadow-[0_20px_55px_rgba(8,43,53,0.1)] sm:grid-cols-2 sm:px-7 lg:grid-cols-4 lg:gap-0 lg:px-8"
          >
            {bottomValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={460 + index * 120}
                  className="group flex gap-4 lg:border-r lg:border-deep-teal/10 lg:px-7 last:lg:border-r-0"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-fresh-green/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-fresh-green/30">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className="text-deep-teal"
                    />
                  </div>

                  <div>
                    <h4 className="text-[14px] font-bold text-deep-teal">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-5 text-dark-navy/75">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}