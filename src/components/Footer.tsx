"use client";

import Link from "next/link";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Heart,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/socialCustomSVGIcon/SocialCustomSVGIcon";

import { navLinks, contactInfo } from "@/data/electrician-data";
export default function Footer() {
  const socialIcons = [
    {
      IconComponent: FacebookIcon,
      href: contactInfo.social?.facebook,
      label: "Facebook",
    },
    {
      IconComponent: XIcon,
      href: contactInfo.social?.twitter,
      label: "Twitter/X",
    },
    {
      IconComponent: InstagramIcon,
      href: contactInfo.social?.instagram,
      label: "Instagram",
    },
    {
      IconComponent: LinkedInIcon,
      href: contactInfo.social?.linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-slate-900 dark:bg-mest-gray-1 text-slate-300 dark:text-mest-gray-9 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e79d13_0.5px,transparent_0.5px),linear-gradient(to_bottom,#e79d13_0.5px,transparent_0.5px)] bg-size-[80px_80px]" />
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-mest-amber-6/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-mest-blue-6/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Logo & Description */}
            <div>
              <Link
                href="/services/electrician"
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <div className="bg-linear-to-br from-mest-amber-6 to-mest-amber-7 p-2 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                  <Zap className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-mest-amber-6 transition-colors">
                    SparkFix
                  </h4>
                  <p className="text-sm text-slate-400">Electricals</p>
                </div>
              </Link>

              <p className="text-sm sm:text-base text-slate-400 dark:text-mest-gray-8 mb-6 leading-relaxed">
                Professional electrical services you can trust. Licensed,
                bonded, and insured for your peace of mind since 2008.
              </p>

              {/* Trust Badges */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: Shield, text: "Licensed & Bonded" },
                  { icon: Award, text: "Certified Electricians" },
                  { icon: Clock, text: "24/7 Emergency Service" },
                ].map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Icon className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7" />
                      <span className="text-slate-400 dark:text-mest-gray-8">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">
                  Follow Us:
                </p>
                <div className="flex items-center gap-3">
                  {socialIcons.map((social, index) => {
                    // ✅ Looping over custom icons
                    const { IconComponent, href, label } = social;
                    return (
                      <a
                        key={index}
                        href={href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-mest-gray-2 flex items-center justify-center text-slate-400 hover:text-white hover:bg-linear-to-br hover:from-mest-amber-6 hover:to-mest-amber-7 transition-all duration-300 hover:scale-110 hover:rotate-12"
                        aria-label={label}
                      >
                        <IconComponent />{" "}
                        {/* ✅ Rendering custom SVG component */}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h5 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-linear-to-b from-mest-amber-6 to-mest-amber-7 rounded-full" />
                Quick Links
              </h5>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-400 dark:text-mest-gray-8 hover:text-mest-amber-6 dark:hover:text-mest-amber-7 transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="w-0 h-0.5 bg-mest-amber-6 group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

          
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h5 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-linear-to-b from-mest-teal-6 to-mest-teal-7 rounded-full" />
                Get In Touch
              </h5>
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="group flex items-start gap-3 text-slate-400 dark:text-mest-gray-8 hover:text-mest-teal-6 dark:hover:text-mest-teal-7 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-mest-gray-2 flex items-center justify-center shrink-0 group-hover:bg-linear-to-br group-hover:from-mest-teal-6 group-hover:to-mest-teal-7 transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-mest-gray-7 mb-1">
                      Call Us
                    </p>
                    <p className="font-semibold">{contactInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-start gap-3 text-slate-400 dark:text-mest-gray-8 hover:text-mest-teal-6 dark:hover:text-mest-teal-7 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-mest-gray-2 flex items-center justify-center shrink-0 group-hover:bg-linear-to-br group-hover:from-mest-teal-6 group-hover:to-mest-teal-7 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-mest-gray-7 mb-1">
                      Email Us
                    </p>
                    <p className="font-semibold break-all">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <div className="group flex items-start gap-3 text-slate-400 dark:text-mest-gray-8">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-mest-gray-2 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-mest-gray-7 mb-1">
                      Service Area
                    </p>
                    <p className="font-semibold">{contactInfo.serviceArea}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Badge */}
              <div className="mt-6 p-4 rounded-xl bg-linear-to-br from-mest-red-6/10 to-mest-red-7/10 border border-mest-red-6/30 dark:border-mest-red-7/30">
                <p className="text-xs text-mest-red-6 dark:text-mest-red-7 font-semibold mb-1 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  24/7 Emergency Service
                </p>
                <p className="text-sm text-slate-400 dark:text-mest-gray-8">
                  We&apos;re always here when you need us most
                </p>
              </div>

              {/* Working Hours */}
              <div className="mt-6 p-4 rounded-xl bg-slate-800 dark:bg-mest-gray-2">
                <p className="text-xs text-slate-500 dark:text-mest-gray-7 mb-2">
                  Working Hours
                </p>
                <p className="text-sm font-semibold text-white mb-1">
                  {contactInfo.workingHours.regular}
                </p>
                <p className="text-sm text-mest-green-6 dark:text-mest-green-7">
                  {contactInfo.workingHours.emergency}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-mest-gray-3 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-500 dark:text-mest-gray-7 text-center sm:text-left">
              &copy; {new Date().getFullYear()} SparkFix Electricals. All rights
              reserved. <span className="hidden sm:inline">| </span>
              <br className="sm:hidden" />
              <span className="text-mest-amber-6 dark:text-mest-amber-7">
                Licensed, Bonded & Insured
              </span>
            </p>
          </div>

          {/* Made with Love */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-600 dark:text-mest-gray-7 flex items-center justify-center gap-2">
              Made with{" "}
              <Heart className="w-3 h-3 text-mest-red-6 fill-current animate-pulse" />{" "}
              by SparkFix Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
