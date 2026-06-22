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
      duration: 1400,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-bottom",
    });

    AOS.refreshHard();
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[34%_66%] lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center border-b border-deep-teal/15 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-[340px] font-heading text-[36px] leading-[1.05] text-dark-navy sm:text-[44px] lg:text-[48px]"
            >
              We don’t start
              <br />
              with subjects.
              <br />
              We start with
              <br />
              children.
            </h2>

            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-deep-teal px-6 py-3 font-sans text-[13px] font-semibold text-white transition-all duration-300 hover:bg-dark-navy"
            >
              Our Learning Approach
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid gap-8 sm:grid-cols-3 lg:gap-0">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  data-aos-delay={index * 800}
                  className="flex min-h-[230px] flex-col justify-center border-deep-teal/15 px-4 text-center sm:border-r sm:last:border-r-0 lg:px-10"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center text-fresh-green">
                    <Icon strokeWidth={1.5} className="h-12 w-12" />
                  </div>

                  <h3 className="font-heading text-[20px] leading-tight text-deep-teal">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[210px] font-sans text-[14px] leading-[1.7] text-dark-navy/75">
                    {item.text}
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