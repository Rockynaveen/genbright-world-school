"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookOpen, Globe2, Heart, Smile, Star } from "lucide-react";

const colors = {
    deepTeal: "#0D4B5A",
    skyBlue: "#29A7D1",
    goldenYellow: "#F2B233",
    orange: "#F26A2E",
    freshGreen: "#8BC34A",
    darkNavy: "#082B35",
};

type CardProps = {
    icon: ReactNode;
    iconBg: string;
    title: ReactNode;
    className?: string;
};

function QuestionCard({ icon, iconBg, title, className = "" }: CardProps) {
    return (
        <div
            className={`relative w-[105px] rounded-[16px] bg-white px-2.5 pb-3 pt-7 text-center shadow-[0_8px_20px_rgba(8,43,53,0.10)] sm:w-[170px] sm:px-5 sm:pb-6 sm:pt-11 lg:w-[185px] ${className}`}
        >
            <div className="absolute left-1/2 top-[-18px] -translate-x-1/2 sm:top-[-32px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-md sm:h-[66px] sm:w-[66px]">
                    <div
                        className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-white sm:h-[54px] sm:w-[54px]"
                        style={{ backgroundColor: iconBg }}
                    >
                        {icon}
                    </div>
                </div>
            </div>

            <h3
                className="text-[10px] font-medium leading-[1.35] sm:text-[14px] lg:text-[15px]"
                style={{ color: colors.darkNavy, fontFamily: "Inter" }}
            >
                {title}
            </h3>

            <div
                className="mx-auto mt-2 h-[2px] w-5 rounded-full sm:mt-3 sm:w-7"
                style={{ backgroundColor: iconBg }}
            />
        </div>
    );
}

export default function ParentQuestionsSection() {
    useEffect(() => {
        AOS.init({
            duration: 1100,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
            offset: 100,
            anchorPlacement: "top-bottom",
        });

        AOS.refreshHard();
    }, []);

    return (
        <section className="overflow-hidden bg-white py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div data-aos="fade-up" data-aos-delay="0" className="text-center">
                    <p
                        className="text-[13px] font-semibold uppercase tracking-[0.25em] sm:text-[15px] sm:tracking-[0.35em]"
                        style={{
                            color: "#000000",
                            fontFamily: "DM Serif Display, serif",
                        }}
                    >
                        Every Parent Asks
                    </p>
                </div>

                <div
                    id="parent-questions-stage"
                    className="relative mx-auto mt-8 h-[380px] max-w-[320px] sm:h-[660px] sm:max-w-[740px] md:h-[690px] md:max-w-[900px] lg:h-[750px] lg:max-w-[1080px]"
                >
                    {/* Circle first */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute left-1/2 top-[47%] z-0 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted sm:h-[460px] sm:w-[460px] md:h-[530px] md:w-[530px] lg:h-[610px] lg:w-[610px]"
                        style={{ borderColor: `${colors.deepTeal}70` }}
                    />

                    {/* Image fade up first */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute left-1/2 top-[47%] z-20 h-[140px] w-[110px] -translate-x-1/2 -translate-y-1/2 sm:h-[330px] sm:w-[270px] md:h-[440px] md:w-[360px] lg:h-[480px] lg:w-[390px]"
                    >
                        <div className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29A7D1]/20 blur-[40px] sm:h-[250px] sm:w-[250px] md:h-[310px] md:w-[310px]" />

                        <img
                            src="/images/women-thinking.png"
                            alt="Parent thinking"
                            className="relative z-10 aspect-square w-full max-w-[400px] rounded-full object-cover"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 90%, transparent 100%)",
                                maskImage:
                                    "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 90%, transparent 100%)",
                            }}
                        />

                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[45px] bg-gradient-to-t from-white via-white/60 to-transparent sm:h-[90px] md:h-[110px]" />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="900"
                        data-aos-duration="900"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute left-[8px] top-[60px] z-30 sm:left-[95px] sm:top-[120px] md:left-[150px] lg:left-[205px] lg:top-[135px]"
                    >
                        <QuestionCard
                            icon={<Smile size={14} />}
                            iconBg={colors.orange}
                            title={
                                <>
                                    Will my child
                                    <br />
                                    be <span style={{ color: colors.orange }}>happy?</span>
                                </>
                            }
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="1400"
                        data-aos-duration="900"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute right-[8px] top-[60px] z-30 sm:right-[95px] sm:top-[120px] md:right-[150px] lg:right-[205px] lg:top-[135px]"
                    >
                        <QuestionCard
                            icon={<Star size={14} />}
                            iconBg={colors.freshGreen}
                            title={
                                <>
                                    Will they
                                    <br />
                                    be{" "}
                                    <span style={{ color: colors.freshGreen }}>confident?</span>
                                </>
                            }
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="1900"
                        data-aos-duration="900"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute left-[-4px] top-[190px] z-30 sm:left-[55px] sm:top-[320px] md:left-[110px] lg:left-[145px] lg:top-[330px]"
                    >
                        <QuestionCard
                            icon={<Heart size={14} />}
                            iconBg={colors.skyBlue}
                            title={
                                <>
                                    Will they
                                    <br />
                                    be <span style={{ color: colors.skyBlue }}>kind?</span>
                                </>
                            }
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="2400"
                        data-aos-duration="900"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute right-[-4px] top-[190px] z-30 sm:right-[55px] sm:top-[320px] md:right-[110px] lg:right-[145px] lg:top-[330px]"
                    >
                        <QuestionCard
                            icon={<BookOpen size={14} />}
                            iconBg={colors.goldenYellow}
                            title={
                                <>
                                    Will they
                                    <br />
                                    <span style={{ color: colors.goldenYellow }}>
                                        love learning?
                                    </span>
                                </>
                            }
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="2900"
                        data-aos-duration="900"
                        data-aos-anchor="#parent-questions-stage"
                        className="absolute bottom-[35px] left-1/2 z-30 -translate-x-1/2 sm:bottom-[105px] lg:bottom-[120px]"
                    >
                        <QuestionCard
                            icon={<Globe2 size={14} />}
                            iconBg={colors.deepTeal}
                            className="w-[210px] sm:w-[330px] lg:w-[350px]"
                            title={
                                <>
                                    Will they be ready for a world
                                    <br />
                                    we{" "}
                                    <span style={{ color: colors.deepTeal }}>
                                        cannot predict?
                                    </span>
                                </>
                            }
                        />
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="3400"
                    data-aos-duration="900"
                    data-aos-anchor="#parent-questions-stage"
                    className="mt-[-5px] flex items-center justify-center gap-3 sm:mt-[-35px] lg:mt-[-45px]"
                >
                    <p
                        className="text-center text-[18px] leading-snug sm:text-[23px] lg:text-[25px]"
                        style={{
                            color: colors.darkNavy,
                            fontFamily: "DM Serif Display",
                        }}
                    >
                        At GenBright, these questions shape everything we do.
                    </p>
                </div>
            </div>
        </section>
    );
}