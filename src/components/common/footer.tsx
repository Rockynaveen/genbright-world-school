"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconWorld,
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

const socialIcons = [
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconWorld,
];

export default function Footer() {
  return (
    <footer className="bg-[#082B35] font-['Inter'] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="GenBright"
              className="h-16 w-auto"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/80">
              A holistic learning community where children grow in thought,
              heart, body, and balance while discovering their true potential.
            </p>

            <div className="mt-6 flex gap-3">
              {socialIcons.map((SocialIcon, index) => (
                <button
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#29A7D1]/30 text-[#29A7D1] transition-all duration-300 hover:bg-[#29A7D1] hover:text-white"
                >
                  <SocialIcon size={18} />
                </button>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Explore"
            items={[
              "About Us",
              "Our Approach",
              "Learning Centers",
              "Programs",
              "Campus Life",
              "Careers",
            ]}
          />

          <FooterColumn
            title="Admissions"
            items={[
              "Admissions Process",
              "Age Criteria",
              "Fee Structure",
              "Scholarships",
              "FAQs",
              "Book a Tour",
            ]}
          />

          <FooterColumn
            title="Resources"
            items={[
              "Parent Partnership",
              "Mentor Development",
              "Blogs & Insights",
              "Events",
              "Handbook",
              "School Policies",
            ]}
          />

          {/* Contact */}
          <div>
            <h3 className="font-['DM_Serif_Display'] text-2xl text-[#F2B233]">
              Connect
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <IconMapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#29A7D1]"
                />
                <p className="text-sm leading-6 text-white/80">
                  Attibele, Anekal Taluk,
                  <br />
                  Bengaluru – 562107
                </p>
              </div>

              <div className="flex gap-3">
                <IconPhone
                  size={18}
                  className="mt-1 shrink-0 text-[#8BC34A]"
                />
                <p className="text-sm text-white/80">
                  +91 888 444 1234
                </p>
              </div>

              <div className="flex gap-3">
                <IconMail
                  size={18}
                  className="mt-1 shrink-0 text-[#F26A2E]"
                />
                <p className="text-sm text-white/80">
                  hello@genbright.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 py-2">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/60">
              © 2026 GenBright World School. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
              <button className="transition hover:text-[#29A7D1]">
                Privacy Policy
              </button>

              <span className="text-white/20">|</span>

              <button className="transition hover:text-[#29A7D1]">
                Terms of Use
              </button>

              <span className="text-white/20">|</span>

              <button className="transition hover:text-[#29A7D1]">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-['DM_Serif_Display'] text-2xl text-[#F2B233]">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="cursor-pointer text-sm text-white/80 transition-colors duration-300 hover:text-[#29A7D1]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}