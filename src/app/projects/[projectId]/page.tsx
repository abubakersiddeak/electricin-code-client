// src/app/services/electrician/projects/[projectId]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Calendar,
  DollarSign,
  Briefcase,
  Award,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { allProjects } from "../../../data/electrician-data";
import styles from "./ProjectDetails.module.css";

// Generate Static Params
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    projectId: project.id,
  }));
}

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - SparkFix Electricals`,
    description: project.description,
    keywords: `${project.category}, electrical project, ${project.location}, SparkFix`,
    openGraph: {
      title: `${project.title} - SparkFix Electricals`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-darkbg-1 pt-20 sm:pt-24">
      {/* Minimal Hero Section */}
      <section className="relative py-12 sm:py-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-mest-gray-1 dark:via-mest-gray-2 dark:to-mest-gray-1 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div
            className={`absolute inset-0 bg-[linear-gradient(to_right,#0c9784_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0c9784_0.5px,transparent_0.5px)] bg-size-[80px_80px] ${styles.gridFlow}`}
          />
        </div>

        {/* Subtle Glow */}
        <div
          className={`absolute top-0 right-1/4 w-96 h-96 bg-mest-teal-6/10 rounded-full blur-3xl ${styles.pulseGlow}`}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <article
            className={`max-w-4xl mx-auto ${styles.hiddenInitial} ${styles.fadeInUp}`}
          >
            {/* Status Badge */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  project.status === "completed"
                    ? "bg-mest-green-6/90 dark:bg-mest-green-7/90 text-white shadow-[0_0_20px_rgba(26,147,111,0.4)]"
                    : "bg-mest-amber-6/90 dark:bg-mest-amber-7/90 text-white shadow-[0_0_20px_rgba(231,157,19,0.4)]"
                }`}
              >
                {project.status === "completed" ? (
                  <>
                    <CheckCircle
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${styles.pulseGlow}`}
                    />
                    Completed
                  </>
                ) : (
                  <>
                    <Clock
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${styles.spinSlow}`}
                    />
                    {project.progress}% Complete
                  </>
                )}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-mest-gray-9 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Quick Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-mest-blue-6 dark:text-mest-blue-7" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7" />
                <span>{project.teamSize} Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-mest-green-6 dark:text-mest-green-7" />
                <span>{project.duration}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <div
                className={`relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl group ${styles.hiddenInitial} ${styles.fadeInUp} ${styles.delay200}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-mest-gray-2/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 dark:border-mest-gray-3/20 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-mest-teal-6 to-mest-teal-7 flex items-center justify-center shrink-0 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-mest-gray-10">
                        {project.client}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-mest-gray-9">
                        Project Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar (Ongoing) */}
              {project.status === "ongoing" && (
                <Card
                  className={`border-slate-200 dark:border-mest-gray-3 hover:border-mest-amber-6 dark:hover:border-mest-amber-7 transition-all duration-300 hover:shadow-xl ${styles.hiddenInitial} ${styles.fadeInUp} ${styles.delay300} group`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-mest-gray-10 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-mest-amber-6 dark:text-mest-amber-7 group-hover:scale-110 transition-transform" />
                        Project Progress
                      </h2>
                      <span className="text-2xl font-bold text-mest-amber-6 dark:text-mest-amber-7 tabular-nums">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-mest-gray-3 rounded-full h-4 overflow-hidden">
                      <div
                        className={`bg-linear-to-r from-mest-amber-6 to-mest-amber-7 h-4 rounded-full ${styles.progressFill} ${styles.progressPulse}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-mest-gray-9 mt-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Estimated completion:{" "}
                      <strong>{project.estimatedCompletion}</strong>
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Project Overview */}
              <Card
                className={`border-slate-200 dark:border-mest-gray-3 hover:border-mest-teal-6 dark:hover:border-mest-teal-7 transition-all duration-300 hover:shadow-xl ${styles.hiddenInitial} ${styles.fadeInUp} ${styles.delay400}`}
              >
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-mest-gray-10 mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-mest-teal-6 dark:text-mest-teal-7" />
                    Project Overview
                  </h2>

                  <div className="space-y-6">
                    {/* Client */}
                    <div className="group/item hover:bg-slate-50 dark:hover:bg-mest-gray-1 p-4 -mx-4 rounded-lg transition-colors duration-300">
                      <h3 className="text-sm font-semibold text-slate-600 dark:text-mest-gray-8 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 group-hover/item:text-mest-teal-6 transition-colors" />
                        Client
                      </h3>
                      <p className="text-base font-medium text-slate-900 dark:text-mest-gray-10">
                        {project.client}
                      </p>
                    </div>

                    {/* Project Value */}
                    <div className="group/item hover:bg-slate-50 dark:hover:bg-mest-gray-1 p-4 -mx-4 rounded-lg transition-colors duration-300">
                      <h3 className="text-sm font-semibold text-slate-600 dark:text-mest-gray-8 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 group-hover/item:text-mest-teal-6 transition-colors" />
                        Project Value
                      </h3>
                      <p className="text-2xl font-bold text-mest-teal-6 dark:text-mest-teal-7">
                        {project.projectValue}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="group/item hover:bg-slate-50 dark:hover:bg-mest-gray-1 p-4 -mx-4 rounded-lg transition-colors duration-300">
                      <h3 className="text-sm font-semibold text-slate-600 dark:text-mest-gray-8 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 group-hover/item:text-mest-teal-6 transition-colors" />
                        {project.status === "completed"
                          ? "Completion Date"
                          : "Estimated Completion"}
                      </h3>
                      <p className="text-base font-medium text-slate-900 dark:text-mest-gray-10">
                        {project.status === "completed"
                          ? project.completionDate
                          : project.estimatedCompletion}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="pt-4 border-t border-slate-200 dark:border-mest-gray-3">
                      <h3 className="text-sm font-semibold text-slate-600 dark:text-mest-gray-8 mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-mest-amber-6 dark:text-mest-amber-7" />
                        Key Features & Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="group/feature flex items-start gap-3 text-slate-700 dark:text-mest-gray-9 hover:text-slate-900 dark:hover:text-mest-gray-10 p-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-mest-gray-1 transition-all duration-300"
                          >
                            <CheckCircle className="w-5 h-5 text-mest-green-6 dark:text-mest-green-7 shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <aside className="space-y-6">
              {/* Contact CTA */}
              <Card
                className={`border-slate-200 dark:border-mest-gray-3 bg-linear-to-br from-mest-teal-6/5 to-mest-blue-6/5 dark:from-mest-teal-7/5 dark:to-mest-blue-7/5 hover:shadow-xl transition-all duration-300 ${styles.hiddenInitial} ${styles.fadeInUp} ${styles.delay500}`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 bg-mest-teal-6/10 border border-mest-teal-6/30 rounded-full px-3 py-1 mb-4">
                    <Zap className="w-3.5 h-3.5 text-mest-teal-6 dark:text-mest-teal-7" />
                    <span className="text-xs font-medium text-mest-teal-6 dark:text-mest-teal-7">
                      Get Started
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-mest-gray-10 mb-2">
                    Need Similar Work?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-mest-gray-9 mb-6">
                    Get a free consultation and quote for your electrical
                    project
                  </p>

                  <div className="space-y-3">
                    <Button
                      size="lg"
                      asChild
                      className="w-full group bg-linear-to-r from-mest-teal-6 to-mest-teal-7 hover:from-mest-teal-7 hover:to-mest-teal-8 text-white shadow-lg hover:shadow-xl hover:shadow-mest-teal-6/30 transition-all duration-300 hover:scale-105"
                    >
                      <Link
                        href="/services/electrician#contact"
                        className="flex items-center justify-center gap-2"
                      >
                        Get Free Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="w-full group border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-teal-6 dark:hover:border-mest-teal-7 hover:bg-mest-teal-6/5 transition-all duration-300"
                    >
                      <a
                        href="tel:+15551234567"
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Call Now
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="w-full group border-2 border-slate-200 dark:border-mest-gray-3 hover:border-mest-blue-6 dark:hover:border-mest-blue-7 hover:bg-mest-blue-6/5 transition-all duration-300"
                    >
                      <a
                        href="mailto:info@sparkfixelectricals.com"
                        className="flex items-center justify-center gap-2"
                      >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Stats */}
              <Card
                className={`border-slate-200 dark:border-mest-gray-3 hover:border-mest-blue-6 dark:hover:border-mest-blue-7 transition-all duration-300 hover:shadow-xl ${styles.hiddenInitial} ${styles.fadeInUp} ${styles.delay600}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-mest-gray-10 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-mest-blue-6 dark:text-mest-blue-7" />
                    Project Stats
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        icon: DollarSign,
                        label: "Project Value",
                        value: project.projectValue,
                        color: "teal",
                      },
                      {
                        icon: Calendar,
                        label: "Duration",
                        value: project.duration,
                        color: "amber",
                      },
                      {
                        icon: Users,
                        label: "Team Size",
                        value: `${project.teamSize} specialists`,
                        color: "blue",
                      },
                      {
                        icon: Briefcase,
                        label: "Category",
                        value: project.category,
                        color: "green",
                      },
                    ].map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className="group/stat flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-mest-gray-1 hover:bg-white dark:hover:bg-mest-gray-2 border border-transparent hover:border-mest-teal-6/20 dark:hover:border-mest-teal-7/20 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:rotate-12 ${
                              stat.color === "teal"
                                ? "bg-linear-to-br from-mest-teal-6 to-mest-teal-7"
                                : stat.color === "amber"
                                ? "bg-linear-to-br from-mest-amber-6 to-mest-amber-7"
                                : stat.color === "blue"
                                ? "bg-linear-to-br from-mest-blue-6 to-mest-blue-7"
                                : "bg-linear-to-br from-mest-green-6 to-mest-green-7"
                            }`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-600 dark:text-mest-gray-8 group-hover/stat:text-slate-500 dark:group-hover/stat:text-mest-gray-9 transition-colors">
                              {stat.label}
                            </div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-mest-gray-10">
                              {stat.value}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section
              className={`mt-16 max-w-7xl mx-auto ${styles.hiddenInitial} ${styles.fadeInUp} ${styles.delay700}`}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-mest-teal-6/10 border border-mest-teal-6/30 rounded-full px-4 py-1.5 mb-4">
                  <Briefcase className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7" />
                  <span className="text-sm font-medium text-mest-teal-6 dark:text-mest-teal-7">
                    More Like This
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-mest-gray-10 mb-4">
                  Related {project.category} Projects
                </h2>
                <p className="text-slate-600 dark:text-mest-gray-9">
                  Explore more projects from the same category
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <Link
                    key={relatedProject.id}
                    href={`/services/electrician/projects/${relatedProject.id}`}
                    className={`group relative block ${styles.hiddenInitial} ${styles.fadeInUp}`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-mest-teal-6/20 dark:bg-mest-teal-7/20" />

                    <Card className="relative h-full border-slate-200 dark:border-mest-gray-3 bg-white dark:bg-mest-gray-2 hover:border-mest-teal-6 dark:hover:border-mest-teal-7 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 bg-white/90 dark:bg-mest-gray-2/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900 dark:text-mest-gray-10 transition-transform duration-300 group-hover:scale-110">
                            {relatedProject.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-mest-gray-10 mb-2 line-clamp-2 group-hover:text-mest-teal-6 dark:group-hover:text-mest-teal-7 transition-colors">
                          {relatedProject.title}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-mest-gray-8 group-hover:text-slate-900 dark:group-hover:text-mest-gray-10 transition-colors">
                          <MapPin className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7 group-hover:scale-110 transition-transform" />
                          {relatedProject.location}
                        </div>

                        <div className="mt-4 flex items-center text-sm text-mest-teal-6 dark:text-mest-teal-7 font-semibold">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
