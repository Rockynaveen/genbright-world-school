"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, HeartHandshake, Lightbulb, Sprout } from "lucide-react";

const items = [
  {
    icon: Sprout,
    title: "Self-awareness first.",
    text: "Before children can excel, they need to understand themselves.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy before leadership.",
    text: "Before they can lead others, they need empathy.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity before achievement.",
    text: "Before they can change the world, they need curiosity.",
  },
];

export default function ChildrenFirstSection() {
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
    <section className="w-full bg-white py-8 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[34%_66%] lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center border-b border-deep-teal/15 pb-7 text-center lg:items-start lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12 lg:text-left">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-[520px] text-[32px] leading-[1.08] text-dark-navy sm:text-[40px] md:text-[44px] lg:max-w-[340px] lg:text-[48px]"
              style={{
                fontFamily: "DM Serif Display, serif",
                fontWeight: 400,
              }}
            >
              We don’t start
              <br className="hidden lg:block" />
              with subjects.
              <br />
              We start with
              <br className="hidden lg:block" />
              children.
            </h2>

            <button
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep-teal px-6 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-dark-navy"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our Learning Approach
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid gap-0 divide-y divide-deep-teal/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:gap-0">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={index * 450}
                  className="flex min-h-[145px] items-center gap-4 px-2 py-5 text-left sm:min-h-[230px] sm:flex-col sm:justify-center sm:px-4 sm:py-0 sm:text-center lg:px-10"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-fresh-green/15 text-fresh-green sm:mx-auto sm:mb-5 sm:h-16 sm:w-16 sm:bg-transparent">
                    <Icon strokeWidth={1.5} className="h-9 w-9 sm:h-12 sm:w-12" />
                  </div>

                  <div>
                    <h3
                      className="text-[18px] leading-tight text-deep-teal sm:text-[20px]"
                      style={{
                        fontFamily: "DM Serif Display, serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-2 max-w-[260px] text-[13px] leading-[1.55] text-dark-navy/75 sm:mx-auto sm:mt-4 sm:max-w-[210px] sm:text-[14px] sm:leading-[1.7]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
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