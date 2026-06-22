"use client";

import {
    BookOpen,
    Globe2,
    Heart,
    Smile,
    Sprout,
    Star,
} from "lucide-react";

const colors = {
    deepTeal: "#0D4B5A",
    skyBlue: "#29A7D1",
    goldenYellow: "#F2B233",
    orange: "#F26A2E",
    freshGreen: "#8BC34A",
    darkNavy: "#082B35",
};

type CardProps = {
    icon: React.ReactNode;
    iconBg: string;
    title: React.ReactNode;
    width: string;
};

function QuestionCard({ icon, iconBg, title, width }: CardProps) {
    return (
        <div
            style={{ width }}
            className="relative rounded-[20px] bg-white px-4 pb-4 pt-9 text-center shadow-[0_8px_24px_rgba(8,43,53,0.08)]"
        >
            <div className="absolute left-1/2 top-[-25px] -translate-x-1/2">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-md">
                    <div
                        className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: iconBg }}
                    >
                        {icon}
                    </div>
                </div>
            </div>

            <h3
                className="text-[13px] font-medium leading-[1.35]"
                style={{ color: colors.darkNavy, fontFamily: "Inter" }}
            >
                {title}
            </h3>

            <div
                className="mx-auto mt-2 h-[2px] w-6 rounded-full"
                style={{ backgroundColor: iconBg }}
            />
        </div>
    );
}

export default function ParentQuestionsSection() {
    return (
        <section className="overflow-hidden bg-[#FFFDF8] py-8">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <p
                        className="text-sm font-semibold uppercase tracking-[0.35em]"
                        style={{ color: colors.goldenYellow, fontFamily: "Inter" }}
                    >
                        Every Parent Asks...
                    </p>

                    <div
                        className="mx-auto mt-2 h-[2px] w-16"
                        style={{ backgroundColor: colors.goldenYellow }}
                    />

                    <h2
                        className="mt-3 text-[56px] leading-none md:text-[68px]"
                        style={{
                            color: colors.darkNavy,
                            fontFamily: "DM Serif Display",
                        }}
                    >
                        Every parent asks...
                    </h2>

                    <div className="mt-4 flex items-center justify-center gap-4">
                        <span
                            className="h-px w-20 border-t border-dotted"
                            style={{ borderColor: colors.goldenYellow }}
                        />
                        <Sprout size={20} style={{ color: colors.goldenYellow }} />
                        <span
                            className="h-px w-20 border-t border-dotted"
                            style={{ borderColor: colors.goldenYellow }}
                        />
                    </div>
                </div>

                <div className="relative mx-auto mt-3 h-[720px] max-w-[1000px]">
                    <div
                        className="absolute left-1/2 top-[48%] z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted"
                        style={{ borderColor: `${colors.deepTeal}70` }}
                    />

                    <div className="absolute left-1/2 top-[46%] z-20 h-[470px] w-[380px] -translate-x-1/2 -translate-y-1/2">                          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29A7D1]/10 blur-3xl" />

                        <img
                            src="/images/women-thinking-removebg-preview.png"
                            alt="Parent thinking"
                            className="relative z-10 h-full w-full object-contain"
                        />

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8]/90 to-transparent" />
                    </div>

                    <div className="absolute left-[185px] top-[100px] z-30">
                        <QuestionCard
                            icon={<Smile size={18} />}
                            iconBg={colors.orange}
                            width="150px"
                            title={
                                <>
                                    Will my child
                                    <br />
                                    be{" "}
                                    <span
                                        className="font-semibold"
                                        style={{ color: colors.orange }}
                                    >
                                        happy?
                                    </span>
                                </>
                            }
                        />
                    </div>

                    <div className="absolute right-[185px] top-[100px] z-30">
                        <QuestionCard
                            icon={<Star size={18} />}
                            iconBg={colors.freshGreen}
                            width="150px"
                            title={
                                <>
                                    Will they
                                    <br />
                                    be{" "}
                                    <span
                                        className="font-semibold"
                                        style={{ color: colors.freshGreen }}
                                    >
                                        confident?
                                    </span>
                                </>
                            }
                        />
                    </div>

                    <div className="absolute left-[70px] top-[310px] z-30">
                        <QuestionCard
                            icon={<Heart size={18} />}
                            iconBg={colors.skyBlue}
                            width="145px"
                            title={
                                <>
                                    Will they
                                    <br />
                                    be{" "}
                                    <span
                                        className="font-semibold"
                                        style={{ color: colors.skyBlue }}
                                    >
                                        kind?
                                    </span>
                                </>
                            }
                        />
                    </div>

                    <div className="absolute right-[70px] top-[310px] z-30">
                        <QuestionCard
                            icon={<BookOpen size={18} />}
                            iconBg={colors.goldenYellow}
                            width="150px"
                            title={
                                <>
                                    Will they
                                    <br />
                                    <span
                                        className="font-semibold"
                                        style={{ color: colors.goldenYellow }}
                                    >
                                        love learning?
                                    </span>
                                </>
                            }
                        />
                    </div>

                    <div className="absolute bottom-[85px] left-1/2 z-30 -translate-x-1/2">
                        <QuestionCard
                            icon={<Globe2 size={18} />}
                            iconBg={colors.deepTeal}
                            width="280px"
                            title={
                                <>
                                    Will they be ready for a world
                                    <br />
                                    we{" "}
                                    <span
                                        className="font-semibold"
                                        style={{ color: colors.deepTeal }}
                                    >
                                        cannot predict?
                                    </span>
                                </>
                            }
                        />
                    </div>
                </div>

                <div className="mt-[-45px] flex items-center justify-center gap-3">
                    <Sprout size={20} style={{ color: colors.goldenYellow }} />

                    <p
                        className="text-center text-[24px]"
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