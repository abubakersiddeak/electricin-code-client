
"use client";

import {
  Award,
  Users,
  MapPin,
  CheckCircle,
  Zap,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    color: "amber",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    color: "blue",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "",
    label: "Mile Service Radius",
    color: "teal",
  },
];

const highlights = [
  { icon: CheckCircle, text: "Licensed & Bonded" },
  { icon: CheckCircle, text: "Fully Insured" },
  { icon: CheckCircle, text: "24/7 Available" },
  { icon: CheckCircle, text: "Free Estimates" },
];

// Counter Animation Hook
function useCountAnimation(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const Icon = stat.icon;
  const { count, ref } = useCountAnimation(stat.value);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden"
      style={{
        animation: "fadeInUp 0.6s ease-out forwards",
        animationDelay: `${index * 150}ms`,
        opacity: 0,
      }}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
          stat.color === "amber"
            ? "bg-mest-amber-6/20 dark:bg-mest-amber-7/20"
            : stat.color === "blue"
            ? "bg-mest-blue-6/20 dark:bg-mest-blue-7/20"
            : "bg-mest-teal-6/20 dark:bg-mest-teal-7/20"
        }`}
      />

      {/* Card */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-mest-gray-2 border border-slate-200 dark:border-mest-gray-3 group-hover:border-mest-amber-6/50 dark:group-hover:border-mest-amber-7/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-mest-amber-6/20 dark:hover:shadow-mest-amber-7/20">
        {/* Icon Container */}
        <div
          className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
            stat.color === "amber"
              ? "bg-linear-to-br from-mest-amber-6 to-mest-amber-7"
              : stat.color === "blue"
              ? "bg-linear-to-br from-mest-blue-6 to-mest-blue-7"
              : "bg-linear-to-br from-mest-teal-6 to-mest-teal-7"
          }`}
          style={{
            boxShadow:
              stat.color === "amber"
                ? "0 8px 24px rgba(231,157,19,0.3)"
                : stat.color === "blue"
                ? "0 8px 24px rgba(0,144,255,0.3)"
                : "0 8px 24px rgba(12,151,132,0.3)",
          }}
        >
          <Icon
            className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg"
            aria-hidden="true"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse opacity-80" />
        </div>

        {/* Count */}
        <h4
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
            stat.color === "amber"
              ? "text-mest-amber-6 dark:text-mest-amber-7"
              : stat.color === "blue"
              ? "text-mest-blue-6 dark:text-mest-blue-7"
              : "text-mest-teal-6 dark:text-mest-teal-7"
          }`}
          style={{
            textShadow:
              stat.color === "amber"
                ? "0 0 20px rgba(231,157,19,0.3)"
                : stat.color === "blue"
                ? "0 0 20px rgba(0,144,255,0.3)"
                : "0 0 20px rgba(12,151,132,0.3)",
          }}
        >
          {count}
          {stat.suffix}
        </h4>

        {/* Label */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-mest-gray-9 font-medium">
          {stat.label}
        </p>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-mest-amber-6 dark:via-mest-amber-7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-darkbg-1 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e79d13_0.5px,transparent_0.5px),linear-gradient(to_bottom,#e79d13_0.5px,transparent_0.5px)] bg-size-[100px_100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-mest-amber-6/10 dark:bg-mest-amber-7/10 border border-mest-amber-6/30 dark:border-mest-amber-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(231,157,19,0.2)]">
              <Award className="w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7" />
              <span className="text-sm font-medium text-mest-amber-6 dark:text-mest-amber-7">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-mest-gray-10">
              About{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-amber-6 via-mest-blue-6 to-mest-teal-6 dark:from-mest-amber-7 dark:via-mest-blue-7 dark:to-mest-teal-7 drop-shadow-[0_0_30px_rgba(231,157,19,0.3)]">
                  SparkFix Electricals
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-amber-6 via-mest-blue-6 to-mest-teal-6 dark:from-mest-amber-7 dark:via-mest-blue-7 dark:to-mest-teal-7 rounded-full shadow-[0_0_10px_rgba(231,157,19,0.5)]" />
              </span>
            </h2>
          </div>

          {/* Main Content with Image */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
            {/* Left: Image */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Main Image */}
                <div className="relative aspect-4/3 lg:aspect-square">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1661645634440-2e747c979980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
                    alt="Professional electrician working on electrical panel"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-tr from-slate-900/60 via-transparent to-mest-amber-6/20" />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-mest-gray-2/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 dark:border-mest-gray-3/20 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-mest-amber-6 to-mest-amber-7 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(231,157,19,0.4)]">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-mest-gray-10">
                        Certified Experts
                      </p>
                      <p className="text-sm text-slate-600 dark:text-mest-gray-9">
                        Licensed & Insured Team
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-mest-amber-6 dark:bg-mest-amber-7 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mest-blue-6 dark:bg-mest-blue-7 rounded-full blur-3xl opacity-30" />
              </div>
            </div>

            {/* Right: Content */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-slate-700 dark:text-mest-gray-9 leading-relaxed mb-6">
                  Since 2008,{" "}
                  <strong className="text-mest-amber-6 dark:text-mest-amber-7">
                    SparkFix Electricals
                  </strong>{" "}
                  has been the trusted name in electrical services across the
                  region. What started as a small family-owned business has
                  grown into a team of certified professionals dedicated to
                  keeping your home and business powered safely.
                </p>

                <p className="text-base text-slate-600 dark:text-mest-gray-8 leading-relaxed mb-8">
                  We pride ourselves on delivering exceptional craftsmanship,
                  transparent pricing, and unmatched customer service. Our
                  electricians stay current with the latest codes and
                  technologies to ensure every job meets the highest safety
                  standards.
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {highlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-3 rounded-xl bg-white dark:bg-mest-gray-2 border border-slate-200 dark:border-mest-gray-3 hover:border-mest-amber-6 dark:hover:border-mest-amber-7 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-mest-amber-6/20 dark:hover:shadow-mest-amber-7/20 group"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-mest-teal-6 dark:text-mest-teal-7 shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(12,151,132,0.5)]" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-mest-gray-9">
                          {highlight.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="group bg-linear-to-r from-mest-amber-6 to-mest-amber-7 hover:from-mest-amber-7 hover:to-mest-amber-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-amber-6/30 transition-all duration-300 hover:scale-105"
                  >
                    <a href="#contact" className="flex items-center gap-2">
                      <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Get Free Estimate
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="group border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-amber-6 dark:hover:border-mest-amber-7 text-slate-700 dark:text-mest-gray-9 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Mission Statement */}
          <div
            className="text-center animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-linear-to-br from-mest-amber-6/5 via-mest-blue-6/5 to-mest-teal-6/5 dark:from-mest-amber-7/5 dark:via-mest-blue-7/5 dark:to-mest-teal-7/5 border border-mest-amber-6/20 dark:border-mest-amber-7/20 shadow-[0_0_30px_rgba(231,157,19,0.1)]">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-mest-amber-6 to-mest-amber-7 mb-4 sm:mb-6 shadow-lg shadow-mest-amber-6/30">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-mest-gray-10 mb-3 sm:mb-4">
                Our Mission
              </h3>

              <p className="text-base sm:text-lg text-slate-600 dark:text-mest-gray-8 leading-relaxed italic">
                To provide safe, reliable, and innovative electrical solutions
                that exceed expectations—one project at a time. We&apos;re not
                just fixing circuits; we&apos;re building lasting relationships
                with our community.
              </p>
            </div>
          </div>
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
