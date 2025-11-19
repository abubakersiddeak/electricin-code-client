"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/electrician-data";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-mest-gray-1 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e79d13_0.5px,transparent_0.5px),linear-gradient(to_bottom,#e79d13_0.5px,transparent_0.5px)] bg-size-[100px_100px]" />
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
          <div className="inline-flex items-center gap-2 bg-mest-amber-6/10 dark:bg-mest-amber-7/10 border border-mest-amber-6/30 dark:border-mest-amber-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(231,157,19,0.2)]">
            <Send className="w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7" />
            <span className="text-sm font-medium text-mest-amber-6 dark:text-mest-amber-7">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            Contact{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-amber-6 via-mest-blue-6 to-mest-teal-6 dark:from-mest-amber-7 dark:via-mest-blue-7 dark:to-mest-teal-7 drop-shadow-[0_0_30px_rgba(231,157,19,0.3)]">
                Us Today
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-amber-6 via-mest-blue-6 to-mest-teal-6 dark:from-mest-amber-7 dark:via-mest-blue-7 dark:to-mest-teal-7 rounded-full shadow-[0_0_10px_rgba(231,157,19,0.5)]" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto">
            Ready to start your electrical project?{" "}
            <span className="text-mest-amber-6 dark:text-mest-amber-7 font-semibold">
              We&apos;re here to help
            </span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Card className="group relative border-2 border-slate-200 dark:border-mest-gray-3 bg-white dark:bg-mest-gray-2 hover:border-mest-amber-6 dark:hover:border-mest-amber-7 transition-all duration-300 hover:shadow-2xl hover:shadow-mest-amber-6/10 dark:hover:shadow-mest-amber-7/10">
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-mest-amber-6/10 dark:bg-mest-amber-7/10 -z-10 rounded-2xl" />

              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900 dark:text-mest-gray-10 flex items-center gap-2">
                  <Send className="w-6 h-6 text-mest-amber-6 dark:text-mest-amber-7" />
                  Send us a message
                </h3>
                <p className="text-sm text-slate-600 dark:text-mest-gray-9 mb-6">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="group/input">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2 text-slate-700 dark:text-mest-gray-9"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="border-2 border-slate-200 dark:border-mest-gray-3 focus:border-mest-amber-6 dark:focus:border-mest-amber-7 transition-colors"
                      />
                    </div>

                    <div className="group/input">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2 text-slate-700 dark:text-mest-gray-9"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        className="border-2 border-slate-200 dark:border-mest-gray-3 focus:border-mest-amber-6 dark:focus:border-mest-amber-7 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-slate-700 dark:text-mest-gray-9"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-2 border-slate-200 dark:border-mest-gray-3 focus:border-mest-amber-6 dark:focus:border-mest-amber-7 transition-colors"
                    />
                  </div>

                  <div className="group/input">
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold mb-2 text-slate-700 dark:text-mest-gray-9"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-mest-gray-3 rounded-lg bg-white dark:bg-mest-gray-1 text-slate-900 dark:text-mest-gray-10 focus:border-mest-amber-6 dark:focus:border-mest-amber-7 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="residential">Residential Wiring</option>
                      <option value="commercial">
                        Commercial Installation
                      </option>
                      <option value="emergency">Emergency Repairs</option>
                      <option value="solar">Solar Panel Setup</option>
                      <option value="generator">Generator Backup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group/input">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 text-slate-700 dark:text-mest-gray-9"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your electrical needs in detail..."
                      rows={5}
                      required
                      className="border-2 border-slate-200 dark:border-mest-gray-3 focus:border-mest-amber-6 dark:focus:border-mest-amber-7 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group/btn bg-linear-to-r from-mest-amber-6 to-mest-amber-7 hover:from-mest-amber-7 hover:to-mest-amber-8 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-mest-amber-6/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-mest-green-6/10 dark:bg-mest-green-7/10 border border-mest-green-6/30 dark:border-mest-green-7/30 rounded-lg text-mest-green-6 dark:text-mest-green-7 text-sm animate-fade-in">
                      <CheckCircle className="w-5 h-5" />
                      <p>
                        Thank you! We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-mest-red-6/10 dark:bg-mest-red-7/10 border border-mest-red-6/30 dark:border-mest-red-7/30 rounded-lg text-mest-red-6 dark:text-mest-red-7 text-sm animate-fade-in">
                      <AlertCircle className="w-5 h-5" />
                      <p>
                        Something went wrong. Please try again or call us
                        directly.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-6 sm:space-y-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            {/* Info Cards */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-900 dark:text-mest-gray-10">
                Contact Information
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: contactInfo.phone,
                    href: `tel:${contactInfo.phone}`,
                    color: "amber",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: contactInfo.email,
                    href: `mailto:${contactInfo.email}`,
                    color: "blue",
                  },
                  {
                    icon: MapPin,
                    label: "Service Area",
                    value: contactInfo.serviceArea,
                    color: "teal",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href || undefined}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-mest-gray-2 border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-${
                        item.color
                      }-6 dark:hover:border-mest-${
                        item.color
                      }-7 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        !item.href && "cursor-default"
                      }`}
                    >
                      <div
                        className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                          item.color === "amber"
                            ? "bg-linear-to-br from-mest-amber-6 to-mest-amber-7"
                            : item.color === "blue"
                            ? "bg-linear-to-br from-mest-blue-6 to-mest-blue-7"
                            : "bg-linear-to-br from-mest-teal-6 to-mest-teal-7"
                        }`}
                      >
                        <Icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="grow min-w-0">
                        <p className="text-sm font-semibold text-slate-600 dark:text-mest-gray-8">
                          {item.label}
                        </p>
                        <p className="text-base font-bold text-slate-900 dark:text-mest-gray-10 truncate group-hover:text-mest-${item.color}-6 dark:group-hover:text-mest-${item.color}-7 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}

                {/* Working Hours */}
                <div className="group flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-mest-gray-2 border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-green-6 dark:hover:border-mest-green-7 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-mest-green-6 to-mest-green-7 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Clock className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-mest-gray-8 mb-2">
                      Working Hours
                    </p>
                    <p className="text-sm text-slate-700 dark:text-mest-gray-9">
                      {contactInfo.workingHours.regular}
                    </p>
                    <p className="text-sm font-semibold text-mest-green-6 dark:text-mest-green-7">
                      {contactInfo.workingHours.emergency}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <Card className="group relative bg-linear-to-br from-mest-red-6 to-mest-red-7 border-0 hover:shadow-2xl hover:shadow-mest-red-6/30 transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-size-[250%_250%] animate-shimmer" />

              <CardContent className="relative p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">24/7 Emergency Service</h4>
                </div>

                <p className="text-white/90 mb-6 leading-relaxed">
                  Electrical emergencies don&apos;t wait for business hours.
                  Call us anytime for urgent electrical issues and we&apos;ll be
                  there fast!
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-mest-red-6 hover:bg-white/90 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Emergency Hotline
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
