"use client";

import { HelpCircle, Phone, Mail } from "lucide-react"; // ✅ ChevronDown removed
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/electrician-data";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-darkbg-1 overflow-hidden"
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
            <HelpCircle className="w-4 h-4 text-mest-blue-6 dark:text-mest-blue-7" />
            <span className="text-sm font-medium text-mest-blue-6 dark:text-mest-blue-7">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-blue-6 via-mest-amber-6 to-mest-teal-6 dark:from-mest-blue-7 dark:via-mest-amber-7 dark:to-mest-teal-7 drop-shadow-[0_0_30px_rgba(0,144,255,0.3)]">
                Questions
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-blue-6 via-mest-amber-6 to-mest-teal-6 dark:from-mest-blue-7 dark:via-mest-amber-7 dark:to-mest-teal-7 rounded-full shadow-[0_0_10px_rgba(0,144,255,0.5)]" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto">
            Everything you need to know about our{" "}
            <span className="text-mest-blue-6 dark:text-mest-blue-7 font-semibold">
              electrical services
            </span>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className="max-w-4xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group relative border-2 border-slate-200 dark:border-mest-gray-3 rounded-2xl px-6 sm:px-8 bg-white dark:bg-mest-gray-2 hover:border-mest-blue-6 dark:hover:border-mest-blue-7 transition-all duration-300 hover:shadow-lg hover:shadow-mest-blue-6/10 dark:hover:shadow-mest-blue-7/10 overflow-hidden"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${300 + index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-mest-blue-6/10 dark:bg-mest-blue-7/10 -z-10" />

                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-slate-900 dark:text-mest-gray-10 hover:text-mest-blue-6 dark:hover:text-mest-blue-7 py-6 sm:py-7 hover:no-underline group/trigger transition-colors duration-300">
                  <div className="flex items-start gap-3 sm:gap-4 w-full">
                    {/* Question Number Badge */}
                    <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-mest-blue-6 to-mest-blue-7 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg group-hover/trigger:scale-110 group-hover/trigger:rotate-6 transition-all duration-300">
                      {index + 1}
                    </div>

                    {/* Question Text */}
                    <span className="grow pr-4">{faq.question}</span>

                    {/* ✅ Removed custom ChevronDown - using default from AccordionTrigger */}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="text-sm sm:text-base text-slate-600 dark:text-mest-gray-9 leading-relaxed pb-6 sm:pb-7 pt-2">
                  <div className="pl-12 sm:pl-14 pr-4 border-l-2 border-mest-blue-6/20 dark:border-mest-blue-7/20">
                    {faq.answer}
                  </div>
                </AccordionContent>

                {/* Bottom Gradient Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-mest-blue-6 dark:via-mest-blue-7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions CTA */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-mest-blue-6/5 via-mest-amber-6/5 to-mest-teal-6/5 dark:from-mest-blue-7/5 dark:via-mest-amber-7/5 dark:to-mest-teal-7/5 border border-mest-blue-6/20 dark:border-mest-blue-7/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-mest-blue-6 to-mest-blue-7 mb-6 shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-mest-gray-10 mb-3">
              Still Have Questions?
            </h3>

            <p className="text-slate-600 dark:text-mest-gray-9 mb-6 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our friendly
              team is here to help. Contact us directly and we&apos;ll get back
              to you as soon as possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-linear-to-r from-mest-blue-6 to-mest-blue-7 hover:from-mest-blue-7 hover:to-mest-blue-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-blue-6/30 transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Call Us Now
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-blue-6 dark:hover:border-mest-blue-7 hover:bg-mest-blue-6/5 transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Send a Message
                </a>
              </Button>
            </div>
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
