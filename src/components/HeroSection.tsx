
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock, Award, Building2 } from "lucide-react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

// ✅ Generate particles OUTSIDE component (runs only once at module load)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 7,
  color: i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#0090ff" : "#0c9784",
  shadow:
    i % 3 === 0
      ? "0 0 8px #f59e0b"
      : i % 3 === 1
      ? "0 0 8px #0090ff"
      : "0 0 8px #0c9784",
}));

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-mest-gray-1 dark:via-mest-gray-2 dark:to-mest-gray-1"
    >
      {/* Subtle Electric Grid - Thinner & Less Visible */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-8"
        aria-hidden="true"
      >
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,#f59e0b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#f59e0b_0.5px,transparent_0.5px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] ${styles.pulseSlow}`}
        />
      </div>

      {/* Electric Sparks - Animated Lightning Bolts */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Top Left Spark */}
        <div className={`absolute top-10 left-10 ${styles.sparkFlash}`}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="text-mest-amber-6 dark:text-mest-amber-7"
          >
            <path
              d="M30 5 L35 25 L45 20 L32 35 L40 50 L25 38 L20 55 L28 35 L15 30 L30 5Z"
              fill="currentColor"
              className="opacity-80 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
            />
          </svg>
        </div>

        {/* Top Right Spark */}
        <div
          className={styles.sparkFlash}
          style={{
            animationDelay: "1.5s",
            position: "absolute",
            top: "5rem",
            right: "5rem",
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 60 60"
            className="text-mest-blue-6 dark:text-mest-blue-7"
          >
            <path
              d="M30 5 L35 25 L45 20 L32 35 L40 50 L25 38 L20 55 L28 35 L15 30 L30 5Z"
              fill="currentColor"
              className="opacity-70 drop-shadow-[0_0_8px_rgba(0,144,255,0.7)]"
            />
          </svg>
        </div>

        {/* Bottom Left Spark */}
        <div
          className={styles.sparkFlash}
          style={{
            animationDelay: "3s",
            position: "absolute",
            bottom: "8rem",
            left: "4rem",
          }}
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 60 60"
            className="text-mest-teal-6 dark:text-mest-teal-7"
          >
            <path
              d="M30 5 L35 25 L45 20 L32 35 L40 50 L25 38 L20 55 L28 35 L15 30 L30 5Z"
              fill="currentColor"
              className="opacity-75 drop-shadow-[0_0_9px_rgba(12,151,132,0.8)]"
            />
          </svg>
        </div>

        {/* Bottom Right Spark */}
        <div
          className={styles.sparkFlash}
          style={{
            animationDelay: "2.2s",
            position: "absolute",
            bottom: "6rem",
            right: "6rem",
          }}
        >
          <svg
            width="55"
            height="55"
            viewBox="0 0 60 60"
            className="text-mest-amber-6 dark:text-mest-amber-7"
          >
            <path
              d="M30 5 L35 25 L45 20 L32 35 L40 50 L25 38 L20 55 L28 35 L15 30 L30 5Z"
              fill="currentColor"
              className="opacity-80 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]"
            />
          </svg>
        </div>

        {/* Floating Electric Particles - Using Static PARTICLES */}
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full ${styles.electricFloat}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              background: particle.color,
              boxShadow: particle.shadow,
            }}
          />
        ))}
      </div>

      {/* Electric Glow Orbs with Parallax */}
      <div
        className={styles.electricPulse}
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "24rem",
          height: "24rem",
          background: "rgba(0,144,255,0.3)",
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
          boxShadow: "0 0 100px rgba(0,144,255,0.4)",
        }}
        aria-hidden="true"
      />
      <div
        className={styles.electricPulse}
        style={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: "24rem",
          height: "24rem",
          background: "rgba(245,158,11,0.3)",
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "1.5s",
          boxShadow: "0 0 100px rgba(245,158,11,0.4)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Electric Effect */}
          <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-mest-gray-2/80 backdrop-blur-sm border border-mest-amber-6/40 dark:border-mest-amber-7/40 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fade-in-down shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Award
              className={`w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7 ${styles.electricPulse}`}
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm font-medium text-white dark:text-mest-gray-10">
              Trusted by 500+ Happy Customers
            </span>
            <Zap
              className={`w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7 ${styles.sparkRotate}`}
              aria-hidden="true"
            />
          </div>

          {/* Main Heading with Electric Glow */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-mest-amber-6 to-white dark:from-mest-gray-10 dark:via-mest-amber-6 dark:to-mest-gray-10 bg-size-[200%_auto] animate-gradient drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              Powering Your
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-mest-amber-6 dark:text-mest-amber-7 animate-text-shimmer drop-shadow-[0_0_40px_rgba(245,158,11,0.8)]">
                Home & Business
              </span>
              {/* Electric Underline */}
              <span
                className={`absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-mest-amber-6 dark:via-mest-amber-7 to-transparent shadow-[0_0_10px_rgba(245,158,11,0.8)] ${styles.electricFlow}`}
              />
              {/* Spark at the end */}
              <Zap
                className={`absolute -right-8 sm:-right-12 top-0 w-6 h-6 sm:w-8 sm:h-8 text-mest-amber-6 dark:text-mest-amber-7 drop-shadow-[0_0_10px_rgba(245,158,11,1)] ${styles.sparkFlash}`}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-slate-300 dark:text-mest-gray-9 max-w-3xl mx-auto animate-fade-in-up leading-relaxed px-4"
            style={{ animationDelay: "200ms" }}
          >
            Certified master electricians delivering{" "}
            <span className="text-mest-amber-6 dark:text-mest-amber-7 font-semibold drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
              reliable, safe,
            </span>{" "}
            and{" "}
            <span className="text-mest-blue-6 dark:text-mest-blue-7 font-semibold drop-shadow-[0_0_8px_rgba(0,144,255,0.6)]">
              efficient
            </span>{" "}
            electrical solutions for over{" "}
            <span className="text-mest-teal-6 dark:text-mest-teal-7 font-semibold drop-shadow-[0_0_8px_rgba(12,151,132,0.6)]">
              15 years
            </span>
          </p>

          {/* CTA Buttons with Electric Glow */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up px-4"
            style={{ animationDelay: "400ms" }}
          >
            {/* Get Free Quote Button */}
            <Button
              size="lg"
              asChild
              className="group w-full sm:w-auto relative bg-mest-blue-6 hover:bg-mest-blue-7 dark:bg-mest-blue-7 dark:hover:bg-mest-blue-8 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-xl shadow-[0_0_30px_rgba(0,144,255,0.5)] hover:shadow-[0_0_50px_rgba(0,144,255,0.8)] transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <Link href="#contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-mest-blue-7 via-mest-teal-6 to-mest-blue-7 dark:from-mest-blue-8 dark:via-mest-teal-7 dark:to-mest-blue-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-[200%_auto] animate-gradient" />
              </Link>
            </Button>

            {/* ✅ Updated: View Our Projects Button */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group w-full sm:w-auto border-2 border-mest-amber-6 dark:border-mest-amber-7 text-mest-amber-6 dark:text-mest-amber-7 hover:bg-mest-amber-6 dark:hover:bg-mest-amber-7 hover:text-white dark:hover:text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)]"
            >
              <Link href="/services/electrician/all-projects">
                <Building2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                View Our Projects
              </Link>
            </Button>
          </div>

          {/* Trust Indicators with Electric Effects */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto animate-fade-in-up px-4"
            style={{ animationDelay: "600ms" }}
          >
            {[
              {
                label: "Years Experience",
                value: "15+",
                icon: Award,
                color: "amber",
              },
              {
                label: "Projects Done",
                value: "2,500+",
                icon: Zap,
                color: "blue",
              },
              {
                label: "Happy Clients",
                value: "500+",
                icon: Shield,
                color: "teal",
              },
              {
                label: "Response Time",
                value: "< 2hrs",
                icon: Clock,
                color: "amber",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group p-4 sm:p-6 rounded-2xl bg-white/5 dark:bg-mest-gray-2/50 backdrop-blur-sm border border-white/10 dark:border-mest-gray-3 hover:border-mest-amber-6/50 dark:hover:border-mest-amber-7/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                >
                  <Icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300 ${
                      stat.color === "amber"
                        ? "text-mest-amber-6 dark:text-mest-amber-7 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                        : stat.color === "blue"
                        ? "text-mest-blue-6 dark:text-mest-blue-7 drop-shadow-[0_0_10px_rgba(0,144,255,0.8)]"
                        : "text-mest-teal-6 dark:text-mest-teal-7 drop-shadow-[0_0_10px_rgba(12,151,132,0.8)]"
                    }`}
                    aria-hidden="true"
                  />
                  <div
                    className={`text-2xl sm:text-3xl font-bold mb-1 ${
                      stat.color === "amber"
                        ? "text-mest-amber-6 dark:text-mest-amber-7"
                        : stat.color === "blue"
                        ? "text-mest-blue-6 dark:text-mest-blue-7"
                        : "text-mest-teal-6 dark:text-mest-teal-7"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 dark:text-mest-gray-9">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Electric Effect */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-mest-amber-6 dark:border-mest-amber-7 rounded-full p-1 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
          <div className="w-1.5 h-3 bg-mest-amber-6 dark:bg-mest-amber-7 rounded-full mx-auto animate-scroll-down shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-slate-50 dark:from-darkbg-1 to-transparent" />
    </section>
  );
}
