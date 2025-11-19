// src/app/services/electrician/all-projects/AllProjectsGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  status: string;
  progress: number;
  category: string;
  duration: string;
  teamSize: number;
}

interface AllProjectsGridProps {
  projects: Project[];
}

export default function AllProjectsGrid({ projects }: AllProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group relative block"
        >
          {/* Glow Effect */}
          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
              project.status === "completed"
                ? "bg-mest-green-6/20 dark:bg-mest-green-7/20"
                : "bg-mest-amber-6/20 dark:bg-mest-amber-7/20"
            }`}
          />

          <Card className="relative h-full border-slate-200 dark:border-mest-gray-3 bg-white dark:bg-mest-gray-2 hover:border-transparent transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden p-0">
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
  );
}
