"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    title: "Is known.",
    color: "text-[#5F8F72]",
    bg: "bg-[#EEF6EF]",
    delay: "100",
    icon: "user",
  },
  {
    title: "Is heard.",
    color: "text-[#2F8FC8]",
    bg: "bg-[#EEF7FF]",
    delay: "200",
    icon: "chat",
  },
  {
    title: "Is encouraged.",
    color: "text-[#D99A00]",
    bg: "bg-[#FFF6DC]",
    delay: "300",
    icon: "arrow",
  },
  {
    title: "Belongs.",
    color: "text-[#E85B88]",
    bg: "bg-[#FFF0F6]",
    delay: "400",
    icon: "people",
  },
];

function CardIcon({ type }: { type: string }) {
  if (type === "chat") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[30px] w-[30px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 6h14a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H10l-5 4v-4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" />
        <circle cx="9" cy="11" r="1" />
        <circle cx="12" cy="11" r="1" />
        <circle cx="15" cy="11" r="1" />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[30px] w-[30px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[30px] w-[30px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 20c.8-4 3.5-6 5-6s4.2 2 5 6" />
        <path d="M11 20c.8-4 3.5-6 5-6s4.2 2 5 6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[30px] w-[30px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

export default function WhyChoose() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 80,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });

    AOS.refreshHard();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 md:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 text-center" data-aos="fade-up">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[2.8px] text-[#1c1c1c]/80">
            Why families choose GenBright
          </p>

          <h2
            className="text-[28px] leading-none text-[#1c1c1c] md:text-[36px] lg:text-[42px]"
            style={{ fontFamily: "DM Serif Display" }}
          >
            Because here, their child...
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.65fr] lg:gap-5">
          {cards.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="flex h-[155px] flex-col items-center justify-center gap-4 rounded-[14px] border border-[#ECECEC] bg-white transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`flex h-[56px] w-[56px] items-center justify-center rounded-full ${item.bg} ${item.color}`}
              >
                <CardIcon type={item.icon} />
              </div>

              <h4 className="text-[17px] font-semibold text-[#111111]">
                {item.title}
              </h4>
            </div>
          ))}

          {/* CTA Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex h-[155px] items-center justify-between rounded-[14px] bg-[#7EAD9D] px-7 sm:col-span-2 lg:col-span-1"
          >
            <p className="text-[20px] font-medium leading-[1.15] text-white">
              And because
              <br />
              learning feels
              <br />
              joyful again.
            </p>

            <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[22px] text-[#5F9382] transition-all duration-300 hover:translate-x-1">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}