
"use client";

import { Star, Quote, ThumbsUp, User, CheckCircle, Award } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/electrician-data";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-darkbg-1 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#f59e0b_0.5px,transparent_0.5px)] bg-size-[100px_100px]" />
      </div>

      {/* Decorative Glow Elements */}
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-mest-amber-6/10 dark:bg-mest-amber-7/10 rounded-full blur-3xl opacity-50 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-mest-blue-6/10 dark:bg-mest-blue-7/10 rounded-full blur-3xl opacity-50 animate-pulse"
        aria-hidden="true"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-mest-amber-6/10 dark:bg-mest-amber-7/10 border border-mest-amber-6/30 dark:border-mest-amber-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <ThumbsUp className="w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7" />
            <span className="text-sm font-medium text-mest-amber-6 dark:text-mest-amber-7">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            What Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-amber-6 via-mest-blue-6 to-mest-teal-6 dark:from-mest-amber-7 dark:via-mest-blue-7 dark:to-mest-teal-7 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                Customers Say
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-amber-6 via-mest-blue-6 to-mest-teal-6 dark:from-mest-amber-7 dark:via-mest-blue-7 dark:to-mest-teal-7 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto">
            Real feedback from{" "}
            <span className="text-mest-amber-6 dark:text-mest-amber-7 font-semibold">
              satisfied customers
            </span>{" "}
            across residential, commercial, and industrial projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-mest-amber-6/20 dark:bg-mest-amber-7/20" />

              <Card className="relative h-full border-slate-200 dark:border-mest-gray-3 bg-white dark:bg-mest-gray-2 hover:border-mest-amber-6 dark:hover:border-mest-amber-7 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-mest-amber-6/10 dark:hover:shadow-mest-amber-7/10">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="relative mb-4">
                    <Quote
                      className="w-12 h-12 text-mest-amber-6/20 dark:text-mest-amber-7/20 absolute -top-2 -left-2"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Stars Rating */}
                  <div
                    className="flex gap-1 mb-4"
                    aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${
                          i < testimonial.rating
                            ? "text-mest-amber-6 dark:text-mest-amber-7 fill-current drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                            : "text-slate-300 dark:text-mest-gray-6"
                        }`}
                        style={{ animationDelay: `${i * 50}ms` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="grow mb-6">
                    <p className="text-sm sm:text-base text-slate-700 dark:text-mest-gray-9 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-mest-gray-3">
                    {/* Avatar */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-mest-amber-6/20 dark:ring-mest-amber-7/20 group-hover:ring-mest-amber-6/50 dark:group-hover:ring-mest-amber-7/50 transition-all duration-300">
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="56px"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-mest-amber-6 to-mest-amber-7 flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Name & Role */}
                    <div className="grow min-w-0">
                      <p className="font-bold text-slate-900 dark:text-mest-gray-10 truncate group-hover:text-mest-amber-6 dark:group-hover:text-mest-amber-7 transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-mest-gray-8 truncate">
                        {testimonial.role}
                      </p>
                      {testimonial.location && (
                        <p className="text-xs text-slate-500 dark:text-mest-gray-7 truncate">
                          {testimonial.location}
                        </p>
                      )}
                    </div>

                    {/* Date Badge (if exists) */}
                    {testimonial.date && (
                      <div className="shrink-0 hidden sm:block">
                        <span className="inline-block px-2 py-1 bg-mest-amber-6/10 dark:bg-mest-amber-7/10 rounded-md text-xs font-medium text-mest-amber-6 dark:text-mest-amber-7">
                          {testimonial.date}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Gradient Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-mest-amber-6 dark:via-mest-amber-7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div
          className="mt-12 sm:mt-16 max-w-4xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Customer Satisfaction", value: "99%", icon: ThumbsUp },
              { label: "5-Star Reviews", value: "450+", icon: Star },
              { label: "Years in Business", value: "15+", icon: Award },
              {
                label: "Projects Completed",
                value: "2,500+",
                icon: CheckCircle,
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 rounded-xl bg-white dark:bg-mest-gray-2 border border-slate-200 dark:border-mest-gray-3 hover:border-mest-amber-6 dark:hover:border-mest-amber-7 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-mest-amber-6 dark:text-mest-amber-7 group-hover:scale-110 transition-transform" />
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-mest-gray-10 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-mest-gray-9">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-12 sm:mt-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-slate-600 dark:text-mest-gray-9 mb-4">
            Join hundreds of satisfied customers
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-mest-amber-6 to-mest-amber-7 hover:from-mest-amber-7 hover:to-mest-amber-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-amber-6/30 transition-all duration-300 hover:scale-105 group"
          >
            <Star className="w-5 h-5 group-hover:rotate-12 transition-transform fill-current" />
            Share Your Experience
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
