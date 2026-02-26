import React from "react";
import JobDetailPage from "@/views/JobsSection/components/JobDetailPage";
import { notFound } from "next/navigation";
import jobsData from "@/data/jobsData";

type Params = Promise<{ id: string }>;

export default async function JobDetail({ params }: { params: Params }) {
  const { id } = await params;
  const jobId = parseInt(id);
  const job = jobsData.find((job) => job.id === jobId);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}

// Generate static params for all jobs at build time for better performance
export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(),
  }));
} 