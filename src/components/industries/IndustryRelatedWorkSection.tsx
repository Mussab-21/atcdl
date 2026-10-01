"use client";

import React from "react";
import Link from "next/link";
import { IndustryExplorerItem } from "@/content/industries-explorer-data";
import { PROJECTS, Project } from "@/content/data";
import { ArrowRight, ExternalLink } from "lucide-react";

export function IndustryRelatedWorkSection({ industry }: { industry: IndustryExplorerItem }) {
  // Find projects mapped to this industry in data.ts
  const relatedProjects: Project[] = PROJECTS.filter((p) =>
    industry.relatedProjectSlugs.includes(p.slug)
  );

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E6F4F5] border border-[#BCE3E6] text-[#007F86] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D477]" />
              <span>Engineering Evidence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#071326]">
              Verified Systems Related to {industry.shortName}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#53657D]">
              Real prototypes, benchmarks, and production platforms addressing similar concurrency, data structure, and automation demands.
            </p>
          </div>

          <Link
            href="/work"
            className="text-xs font-mono text-[#2563EB] hover:underline flex items-center gap-1 font-bold shrink-0"
          >
            <span>View All Engineering Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedProjects.map((project) => (
            <div
              key={project.slug}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DCE5EF] hover:border-[#3B82F6]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    STATUS: <strong className="text-[#071326]">{project.status}</strong>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#071326] group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#53657D] leading-relaxed mb-6 font-sans">
                  {project.summary}
                </p>

                {/* Challenge & Solution Summary */}
                <div className="space-y-2 p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE5EF] text-xs mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold font-mono">PROBLEM:</span>
                    <span className="text-[#53657D]">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1 border-t border-[#DCE5EF]">
                    <span className="text-[#00D477] font-bold font-mono">SOLUTION:</span>
                    <span className="text-[#071326] font-medium">{project.solution}</span>
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px] border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE5EF] flex items-center justify-between">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs font-mono text-[#071326] group-hover:text-blue-600 font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-slate-700 flex items-center gap-1"
                  >
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
