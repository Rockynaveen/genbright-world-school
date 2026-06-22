"use client";

import type { ReactNode } from "react";
import {
  Brain,
  Footprints,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

import familyImage from "/images/campus-front-view.png";

export default function FamiliesSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-[50px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[28px] bg-[#FAF8F1] lg:grid-cols-[50%_50%]">
          {/* Content */}
          <div className="flex min-h-[420px] items-center px-6 py-12 sm:px-10 lg:min-h-[520px] lg:px-14">
            <div className="max-w-xl">
              <h2 className="mb-8 font-serif text-3xl font-bold leading-tight text-[#163B3F] sm:text-4xl lg:text-5xl">
                Why families
                <br />
                choose GenBright.
              </h2>

              <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                <FamilyItem
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

              <p className="text-sm font-semibold leading-7 text-[#163B3F] sm:text-base">
                And because learning feels joyful again — every day, in every
                space, with every child.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[320px] lg:min-h-[520px]">
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
};

function FamilyItem({ icon, text }: FamilyItemProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#A8B5AA] text-[#789083]">
        <div className="h-7 w-7">{icon}</div>
      </div>

      <p className="text-xs font-semibold leading-5 text-[#163B3F]/80 sm:text-sm">
        {text}
      </p>
    </div>
  );
}