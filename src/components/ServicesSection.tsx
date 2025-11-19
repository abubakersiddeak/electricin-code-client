
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/electrician-data";
import { Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section
      id="services"
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
        className="absolute top-20 left-10 w-72 h-72 bg-mest-blue-6/20 dark:bg-mest-blue-7/20 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-mest-amber-6/20 dark:bg-mest-amber-7/20 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-mest-blue-6/10 dark:bg-mest-blue-7/10 border border-mest-blue-6/30 dark:border-mest-blue-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(0,144,255,0.2)]">
            <Wrench className="w-4 h-4 text-mest-blue-6 dark:text-mest-blue-7" />
            <span className="text-sm font-medium text-mest-blue-6 dark:text-mest-blue-7">
              What We Offer
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-blue-6 via-mest-amber-6 to-mest-teal-6 dark:from-mest-blue-7 dark:via-mest-amber-7 dark:to-mest-teal-7 drop-shadow-[0_0_30px_rgba(0,144,255,0.3)]">
                Electrical Services
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-blue-6 via-mest-amber-6 to-mest-teal-6 dark:from-mest-blue-7 dark:via-mest-amber-7 dark:to-mest-teal-7 rounded-full shadow-[0_0_10px_rgba(0,144,255,0.5)]" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical solutions for{" "}
            <span className="text-mest-blue-6 dark:text-mest-blue-7 font-semibold">
              residential
            </span>
            ,{" "}
            <span className="text-mest-amber-6 dark:text-mest-amber-7 font-semibold">
              commercial
            </span>
            , and{" "}
            <span className="text-mest-teal-6 dark:text-mest-teal-7 font-semibold">
              industrial
            </span>{" "}
            needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = [
              { bg: "amber", text: "mest-amber-6", darkText: "mest-amber-7" },
              { bg: "blue", text: "mest-blue-6", darkText: "mest-blue-7" },
              { bg: "teal", text: "mest-teal-6", darkText: "mest-teal-7" },
            ];
            const color = colors[index % 3];

            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                    color.bg === "amber"
                      ? "bg-mest-amber-6/20 dark:bg-mest-amber-7/20"
                      : color.bg === "blue"
                      ? "bg-mest-blue-6/20 dark:bg-mest-blue-7/20"
                      : "bg-mest-teal-6/20 dark:bg-mest-teal-7/20"
                  }`}
                />

                <Card className="relative h-full border-slate-200 dark:border-mest-gray-3 bg-slate-50 dark:bg-mest-gray-2 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group-hover:shadow-[0_0_40px_rgba(0,144,255,0.2)]">
                  {/* Top Gradient Border */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      color.bg === "amber"
                        ? "from-mest-amber-6 to-mest-amber-7"
                        : color.bg === "blue"
                        ? "from-mest-blue-6 to-mest-blue-7"
                        : "from-mest-teal-6 to-mest-teal-7"
                    }`}
                  />

                  <CardContent className="p-6 sm:p-8 text-center relative">
                    {/* Icon Container */}
                    <div className="mb-6 flex justify-center">
                      <div
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                          color.bg === "amber"
                            ? "bg-linear-to-br from-mest-amber-6 to-mest-amber-7"
                            : color.bg === "blue"
                            ? "bg-linear-to-br from-mest-blue-6 to-mest-blue-7"
                            : "bg-linear-to-br from-mest-teal-6 to-mest-teal-7"
                        }`}
                        style={{
                          boxShadow:
                            color.bg === "amber"
                              ? "0 8px 24px rgba(231,157,19,0.3)"
                              : color.bg === "blue"
                              ? "0 8px 24px rgba(0,144,255,0.3)"
                              : "0 8px 24px rgba(12,151,132,0.3)",
                        }}
                      >
                        <Icon
                          className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg"
                          aria-hidden="true"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse opacity-80" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-mest-gray-10 group-hover:text-${color.text} dark:group-hover:text-${color.darkText} transition-colors duration-300`}
                    >
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-mest-gray-9 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List (if exists) */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 text-left mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-mest-gray-8"
                          >
                            <span
                              className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                color.bg === "amber"
                                  ? "bg-mest-amber-6"
                                  : color.bg === "blue"
                                  ? "bg-mest-blue-6"
                                  : "bg-mest-teal-6"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Learn More Link */}
                    <button
                      className={`group/btn inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                        color.bg === "amber"
                          ? "text-mest-amber-6 dark:text-mest-amber-7 hover:text-mest-amber-7 dark:hover:text-mest-amber-8"
                          : color.bg === "blue"
                          ? "text-mest-blue-6 dark:text-mest-blue-7 hover:text-mest-blue-7 dark:hover:text-mest-blue-8"
                          : "text-mest-teal-6 dark:text-mest-teal-7 hover:text-mest-teal-7 dark:hover:text-mest-teal-8"
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Bottom Gradient */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        color.bg === "amber"
                          ? "from-transparent via-mest-amber-6 dark:via-mest-amber-7 to-transparent"
                          : color.bg === "blue"
                          ? "from-transparent via-mest-blue-6 dark:via-mest-blue-7 to-transparent"
                          : "from-transparent via-mest-teal-6 dark:via-mest-teal-7 to-transparent"
                      }`}
                    />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-lg text-slate-600 dark:text-mest-gray-9 mb-6">
            Need a custom electrical solution?
          </p>
          <Button
            size="lg"
            asChild
            className="group bg-linear-to-r from-mest-blue-6 to-mest-blue-7 hover:from-mest-blue-7 hover:to-mest-blue-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-blue-6/30 transition-all duration-300 hover:scale-105"
          >
            <a href="#contact" className="flex items-center gap-2">
              Contact Us for Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
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
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
