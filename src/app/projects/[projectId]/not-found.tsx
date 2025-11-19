// src/app/services/electrician/projects/[projectId]/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-darkbg-1 px-4">
      <div className="text-center max-w-md">
        <Search className="w-20 h-20 mx-auto mb-6 text-slate-300 dark:text-mest-gray-6" />

        <h1 className="text-4xl font-bold text-slate-900 dark:text-mest-gray-10 mb-4">
          Project Not Found
        </h1>

        <p className="text-lg text-slate-600 dark:text-mest-gray-9 mb-8">
          Sorry, we couldn&apos;t find the project you&apos;re looking for. It
          may have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="bg-linear-to-r from-mest-teal-6 to-mest-teal-7 hover:from-mest-teal-7 hover:to-mest-teal-8"
          >
            <Link href="/services/electrician/all-projects">
              <ArrowLeft className="w-5 h-5 mr-2" />
              View All Projects
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/services/electrician">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
