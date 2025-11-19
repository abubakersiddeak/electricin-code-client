"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { allProjects } from "@/data/electrician-data";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  const displayedProjects = filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-darkbg-1 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c9784_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0c9784_0.5px,transparent_0.5px)] bg-size-[100px_100px]" />
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-mest-teal-6/20 dark:bg-mest-teal-7/20 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-mest-teal-6/10 dark:bg-mest-teal-7/10 border border-mest-teal-6/30 dark:border-mest-teal-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(12,151,132,0.2)]">
            <Briefcase className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7" />
            <span className="text-sm font-medium text-mest-teal-6 dark:text-mest-teal-7">
              Our Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-teal-6 via-mest-amber-6 to-mest-blue-6 dark:from-mest-teal-7 dark:via-mest-amber-7 dark:to-mest-blue-7 drop-shadow-[0_0_30px_rgba(12,151,132,0.3)]">
                Projects
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-teal-6 via-mest-amber-6 to-mest-blue-6 dark:from-mest-teal-7 dark:via-mest-amber-7 dark:to-mest-blue-7 rounded-full shadow-[0_0_10px_rgba(12,151,132,0.5)]" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto">
            Showcasing our{" "}
            <span className="text-mest-teal-6 dark:text-mest-teal-7 font-semibold">
              expertise
            </span>{" "}
            and{" "}
            <span className="text-mest-amber-6 dark:text-mest-amber-7 font-semibold">
              quality
            </span>{" "}
            in electrical services
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(["all", "completed", "ongoing"] as const).map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "default" : "outline"}
              onClick={() => setFilter(filterOption)}
              className={`capitalize transition-all duration-300 ${
                filter === filterOption
                  ? "bg-linear-to-r from-mest-teal-6 to-mest-teal-7 text-white shadow-lg hover:shadow-xl hover:shadow-mest-teal-6/30"
                  : "border-slate-200 dark:border-mest-gray-3 hover:border-mest-teal-6 dark:hover:border-mest-teal-7"
              }`}
            >
              {filterOption === "all" && <Briefcase className="w-4 h-4 mr-2" />}
              {filterOption === "completed" && (
                <CheckCircle className="w-4 h-4 mr-2" />
              )}
              {filterOption === "ongoing" && <Clock className="w-4 h-4 mr-2" />}
              {filterOption}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative block"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: `${index * 100}ms`,
                opacity: 0,
              }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                  project.status === "completed"
                    ? "bg-mest-green-6/20 dark:bg-mest-green-7/20"
                    : "bg-mest-amber-6/20 dark:bg-mest-amber-7/20"
                }`}
              />

              <Card className="relative h-full border-slate-200 dark:border-mest-gray-3 bg-white dark:bg-mest-gray-2 hover:border-transparent transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden  p-0">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === "completed"
                        ? "bg-mest-green-6/90 dark:bg-mest-green-7/90 text-white shadow-[0_0_15px_rgba(26,147,111,0.5)]"
                        : "bg-mest-amber-6/90 dark:bg-mest-amber-7/90 text-white shadow-[0_0_15px_rgba(231,157,19,0.5)]"
                    }`}
                  >
                    {project.status === "completed" ? (
                      <CheckCircle className="w-3.5 h-3.5" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                    {project.status === "completed"
                      ? "Completed"
                      : `${project.progress}%`}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 dark:bg-mest-gray-2/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900 dark:text-mest-gray-10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-mest-gray-10 mb-3 group-hover:text-mest-teal-6 dark:group-hover:text-mest-teal-7 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-mest-gray-8 mb-4">
                    <MapPin className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7" />
                    {project.location}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-mest-gray-9 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Progress Bar (for ongoing) */}
                  {project.status === "ongoing" && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-600 dark:text-mest-gray-9">
                          Progress
                        </span>
                        <span className="text-xs font-bold text-mest-amber-6 dark:text-mest-amber-7">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-mest-gray-3 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-mest-amber-6 to-mest-amber-7 h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(231,157,19,0.5)]"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-mest-gray-3">
                    <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-mest-gray-8">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {project.teamSize}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.duration}
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-mest-teal-6 dark:text-mest-teal-7 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="group bg-linear-to-r from-mest-teal-6 to-mest-teal-7 hover:from-mest-teal-7 hover:to-mest-teal-8 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-mest-teal-6/30 transition-all duration-300 hover:scale-105"
          >
            <Link href="/all-projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
