"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import banyaraImage from "/images/banara section.jpg";

const BanyaraSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-[#F5F5F5] py-8 md:py-10 lg:py-[50px]">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden bg-[#FAF8F1] lg:flex-row">
        {/* Image side */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="relative h-[240px] w-full lg:h-[300px] lg:w-1/2"
        >
          <img
            src={banyaraImage}
            alt="Banyara"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F1] to-transparent lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-40 lg:bg-gradient-to-l" />
        </div>

        {/* Text side */}
        <div className="relative flex w-full items-center overflow-hidden px-6 py-10 sm:px-10 lg:w-1/2 lg:px-12 lg:py-0">
          {/* Soft leaf watermark */}
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-delay="300"
            className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 opacity-35 sm:block"
          >
            <svg
              width="220"
              height="300"
              viewBox="0 0 220 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-6deg]"
            >
              <path
                d="M88 270C88 225 88 175 91 130C94 82 104 44 126 18"
                stroke="#B8BE9D"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M129 48C151 28 174 25 188 31C182 54 162 72 135 79C128 68 125 56 129 48Z"
                fill="#B8BE9D"
                fillOpacity="0.75"
              />
              <path
                d="M92 86C68 66 44 62 29 70C36 96 60 114 91 117C99 105 101 94 92 86Z"
                fill="#B8BE9D"
                fillOpacity="0.72"
              />
              <path
                d="M104 123C134 95 165 88 184 98C175 129 145 151 106 157C98 143 96 132 104 123Z"
                fill="#B8BE9D"
                fillOpacity="0.75"
              />
              <path
                d="M84 160C55 137 27 133 10 143C20 174 48 194 84 196C93 183 94 169 84 160Z"
                fill="#B8BE9D"
                fillOpacity="0.7"
              />
              <path
                d="M96 196C124 174 153 169 171 178C162 207 134 228 98 232C90 219 89 204 96 196Z"
                fill="#B8BE9D"
                fillOpacity="0.72"
              />
              <path
                d="M82 226C55 207 31 205 15 214C27 239 52 254 83 255C91 245 91 234 82 226Z"
                fill="#B8BE9D"
                fillOpacity="0.68"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-md text-[#163B3F]">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
              className="mb-5 font-serif text-3xl font-bold leading-tight sm:text-[34px]"
            >
              Meet Banyara.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              className="mb-5 text-sm leading-6 text-[#163B3F]/80 sm:text-[15px]"
            >
              A banyan tree doesn&apos;t grow overnight.
              <br />
              Neither does a child.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="800"
              className="mb-5 text-sm font-bold leading-6 text-[#163B3F] sm:text-[15px]"
            >
              Roots first.
              <br />
              Then branches.
              <br />
              Then possibilities.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1100"
              className="text-sm leading-6 text-[#163B3F]/80 sm:text-[15px]"
            >
              Banyara journeys alongside every GenBright child, reminding them
              to stay grounded, stay curious, and keep growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanyaraSection;