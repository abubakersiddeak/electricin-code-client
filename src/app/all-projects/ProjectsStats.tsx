// src/app/services/electrician/all-projects/ProjectsStats.tsx
"use client";

import { Briefcase, CheckCircle, Clock, Users } from "lucide-react";

interface ProjectsStatsProps {
  projects: Array<{ status: string }>;
}

export default function ProjectsStats({ projects }: ProjectsStatsProps) {
  const stats = [
    {
      label: "Total Projects",
      value: projects.length,
      icon: Briefcase,
      color: "teal",
    },
    {
      label: "Completed",
      value: projects.filter((p) => p.status === "completed").length,
      icon: CheckCircle,
      color: "green",
    },
    {
      label: "Ongoing",
      value: projects.filter((p) => p.status === "ongoing").length,
      icon: Clock,
      color: "amber",
    },
    { label: "Total Value", value: "$3.2M+", icon: Users, color: "blue" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="p-4 sm:p-6 rounded-xl bg-white dark:bg-mest-gray-2 border border-slate-200 dark:border-mest-gray-3 text-center hover:scale-105 transition-transform duration-300"
          >
            <Icon
              className={`w-8 h-8 mx-auto mb-2 ${
                stat.color === "teal"
                  ? "text-mest-teal-6 dark:text-mest-teal-7"
                  : stat.color === "green"
                  ? "text-mest-green-6 dark:text-mest-green-7"
                  : stat.color === "amber"
                  ? "text-mest-amber-6 dark:text-mest-amber-7"
                  : "text-mest-blue-6 dark:text-mest-blue-7"
              }`}
            />
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-mest-gray-10">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-mest-gray-9">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
