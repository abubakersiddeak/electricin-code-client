

import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { completedProjects } from "@/data/electrician-data";


export default function CompletedProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-lightbg-1 dark:bg-darkbg-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
            What We&apos;ve Done
          </h3>
          <p className="text-xl text-mest-gray-6 dark:text-mest-gray-9">
            Recent completed projects showcasing our expertise and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {completedProjects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-mest-gray-1 dark:text-mest-gray-10 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-mest-amber-6 font-medium mb-2">
                      {project.location}
                    </p>
                  </div>
                  <CheckCircle
                    className="w-6 h-6 text-mest-green-6 shrink-0 ml-4"
                    aria-label="Completed"
                  />
                </div>
                <p className="text-mest-gray-6 dark:text-mest-gray-9 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-mest-gray-5 dark:text-mest-gray-8">
                  Client: {project.client}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
