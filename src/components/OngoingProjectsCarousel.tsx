
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ongoingProjects } from "@/data/electrician-data";

export default function OngoingProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % ongoingProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + ongoingProjects.length) % ongoingProjects.length
    );
  };

  return (
    <section className="py-20 bg-mest-gray-10 dark:bg-mest-gray-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
            Ongoing Projects
          </h3>
          <p className="text-xl text-mest-gray-6 dark:text-mest-gray-9">
            Current projects in progress
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {ongoingProjects.map((project, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-bold text-mest-gray-1 dark:text-mest-gray-10">
                          {project.title}
                        </h4>
                        <span className="bg-mest-amber-6 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-mest-amber-6 font-medium mb-4">
                        {project.location}
                      </p>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-mest-gray-6 dark:text-mest-gray-9">
                            Progress
                          </span>
                          <span className="text-mest-gray-1 dark:text-mest-gray-10 font-bold">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-mest-gray-10 dark:bg-mest-gray-3 rounded-full h-3">
                          <div
                            className="bg-mest-amber-6 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-mest-gray-2 shadow-lg hover:shadow-xl"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-mest-gray-2 shadow-lg hover:shadow-xl"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
