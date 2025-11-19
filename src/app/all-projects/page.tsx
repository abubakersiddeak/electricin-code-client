// src/app/services/electrician/all-projects/page.tsx
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { allProjects } from "../../data/electrician-data";
import ProjectsStats from "./ProjectsStats";
import AllProjectsGrid from "./AllProjectsGrid";

export const metadata: Metadata = {
  title: "All Projects - SparkFix Electricals",
  description:
    "Browse our complete portfolio of electrical projects including residential, commercial, and industrial installations.",
  keywords:
    "electrical projects, completed work, ongoing projects, portfolio, SparkFix",
};

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-darkbg-1">
      {/* Header Section */}
      <section className="relative py-16 sm:py-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-mest-gray-1 dark:via-mest-gray-2 dark:to-mest-gray-1 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c9784_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0c9784_0.5px,transparent_0.5px)] bg-size-[80px_80px]" />
        </div>

        {/* Decorative Glow */}
        <div
          className="absolute top-10 right-10 w-96 h-96 bg-mest-teal-6/20 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mt-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-teal-6 via-mest-amber-6 to-mest-blue-6 drop-shadow-[0_0_30px_rgba(12,151,132,0.5)]">
                Complete Projects
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-teal-6 via-mest-amber-6 to-mest-blue-6 rounded-full shadow-[0_0_10px_rgba(12,151,132,0.5)]" />
            </span>
          </h1>

          <p className="text-lg text-slate-300 dark:text-mest-gray-9">
            Explore our portfolio of {allProjects.length} electrical projects
            showcasing expertise across residential, commercial, and industrial
            sectors
          </p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Summary */}
          <ProjectsStats projects={allProjects} />

          {/* Projects Grid */}
          <AllProjectsGrid projects={allProjects} />

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-linear-to-br from-mest-teal-6/10 via-mest-amber-6/10 to-mest-blue-6/10 dark:from-mest-teal-7/10 dark:via-mest-amber-7/10 dark:to-mest-blue-7/10 border border-mest-teal-6/20 dark:border-mest-teal-7/20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-mest-gray-10 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 dark:text-mest-gray-9 mb-6 max-w-2xl mx-auto">
              Let our experienced team bring your electrical project to life
              with the same quality and professionalism shown in our portfolio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-linear-to-r from-mest-teal-6 to-mest-teal-7 hover:from-mest-teal-7 hover:to-mest-teal-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-teal-6/30 transition-all duration-300 hover:scale-105"
              >
                <Link href="/services/electrician#contact">Get Free Quote</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-teal-6 dark:hover:border-mest-teal-7"
              >
                <Link href="/services/electrician#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
