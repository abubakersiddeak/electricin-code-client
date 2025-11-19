"use client";

import { Award, CheckCircle } from "lucide-react";
import { whyChooseUs } from "@/data/electrician-data";

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-mest-gray-1 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0090ff_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0090ff_0.5px,transparent_0.5px)] bg-size-[100px_100px]" />
      </div>

      {/* Decorative Glow Elements */}
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-mest-blue-6/10 dark:bg-mest-blue-7/10 rounded-full blur-3xl opacity-50 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-mest-amber-6/10 dark:bg-mest-amber-7/10 rounded-full blur-3xl opacity-50 animate-pulse"
        aria-hidden="true"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-mest-blue-6/10 dark:bg-mest-blue-7/10 border border-mest-blue-6/30 dark:border-mest-blue-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(0,144,255,0.2)]">
            <Award className="w-4 h-4 text-mest-blue-6 dark:text-mest-blue-7" />
            <span className="text-sm font-medium text-mest-blue-6 dark:text-mest-blue-7">
              Why Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-blue-6 via-mest-amber-6 to-mest-teal-6 dark:from-mest-blue-7 dark:via-mest-amber-7 dark:to-mest-teal-7 drop-shadow-[0_0_30px_rgba(0,144,255,0.3)]">
                SparkFix
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-blue-6 via-mest-amber-6 to-mest-teal-6 dark:from-mest-blue-7 dark:via-mest-amber-7 dark:to-mest-teal-7 rounded-full shadow-[0_0_10px_rgba(0,144,255,0.5)]" />
            </span>
            ?
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto">
            Your trusted electrical service partner for over{" "}
            <span className="text-mest-blue-6 dark:text-mest-blue-7 font-semibold">
              15 years
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            const colors = {
              blue: {
                gradient: "from-mest-blue-6 to-mest-blue-7",
                shadow: "shadow-[0_8px_24px_rgba(0,144,255,0.3)]",
                hoverShadow:
                  "group-hover:shadow-[0_12px_32px_rgba(0,144,255,0.4)]",
                text: "text-mest-blue-6 dark:text-mest-blue-7",
                bg: "bg-mest-blue-6/5 dark:bg-mest-blue-7/5",
                border: "border-mest-blue-6/20 dark:border-mest-blue-7/20",
                hoverBorder:
                  "hover:border-mest-blue-6/50 dark:hover:border-mest-blue-7/50",
              },
              amber: {
                gradient: "from-mest-amber-6 to-mest-amber-7",
                shadow: "shadow-[0_8px_24px_rgba(231,157,19,0.3)]",
                hoverShadow:
                  "group-hover:shadow-[0_12px_32px_rgba(231,157,19,0.4)]",
                text: "text-mest-amber-6 dark:text-mest-amber-7",
                bg: "bg-mest-amber-6/5 dark:bg-mest-amber-7/5",
                border: "border-mest-amber-6/20 dark:border-mest-amber-7/20",
                hoverBorder:
                  "hover:border-mest-amber-6/50 dark:hover:border-mest-amber-7/50",
              },
              teal: {
                gradient: "from-mest-teal-6 to-mest-teal-7",
                shadow: "shadow-[0_8px_24px_rgba(12,151,132,0.3)]",
                hoverShadow:
                  "group-hover:shadow-[0_12px_32px_rgba(12,151,132,0.4)]",
                text: "text-mest-teal-6 dark:text-mest-teal-7",
                bg: "bg-mest-teal-6/5 dark:bg-mest-teal-7/5",
                border: "border-mest-teal-6/20 dark:border-mest-teal-7/20",
                hoverBorder:
                  "hover:border-mest-teal-6/50 dark:hover:border-mest-teal-7/50",
              },
              green: {
                gradient: "from-mest-green-6 to-mest-green-7",
                shadow: "shadow-[0_8px_24px_rgba(26,147,111,0.3)]",
                hoverShadow:
                  "group-hover:shadow-[0_12px_32px_rgba(26,147,111,0.4)]",
                text: "text-mest-green-6 dark:text-mest-green-7",
                bg: "bg-mest-green-6/5 dark:bg-mest-green-7/5",
                border: "border-mest-green-6/20 dark:border-mest-green-7/20",
                hoverBorder:
                  "hover:border-mest-green-6/50 dark:hover:border-mest-green-7/50",
              },
            };

            const colorScheme =
              colors[item.color as keyof typeof colors] || colors.blue;

            return (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                    item.color === "blue"
                      ? "bg-mest-blue-6/20 dark:bg-mest-blue-7/20"
                      : item.color === "amber"
                      ? "bg-mest-amber-6/20 dark:bg-mest-amber-7/20"
                      : item.color === "teal"
                      ? "bg-mest-teal-6/20 dark:bg-mest-teal-7/20"
                      : "bg-mest-green-6/20 dark:bg-mest-green-7/20"
                  }`}
                />

                {/* Card */}
                <div
                  className={`relative h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-mest-gray-2 border ${colorScheme.border} ${colorScheme.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${colorScheme.hoverShadow} text-center`}
                >
                  {/* Icon Container */}
                  <div className="relative mb-6 inline-flex">
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br ${colorScheme.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${colorScheme.shadow}`}
                    >
                      <Icon
                        className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg"
                        aria-hidden="true"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse opacity-80" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-mest-gray-10 group-hover:${colorScheme.text} transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-mest-gray-9 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features List (if exists) */}
                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-2 text-left">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-mest-gray-8"
                        >
                          <CheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 ${colorScheme.text} group-hover:scale-110 transition-transform`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Bottom Gradient */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-${item.color}-6 dark:via-${item.color}-7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-12 sm:mt-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-slate-600 dark:text-mest-gray-9 mb-4">
            Ready to experience the SparkFix difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-mest-blue-6 to-mest-blue-7 hover:from-mest-blue-7 hover:to-mest-blue-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-blue-6/30 transition-all duration-300 hover:scale-105 group"
          >
            <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get Started Today
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
