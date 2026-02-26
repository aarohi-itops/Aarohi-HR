import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-5xl px-4 md:px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#0F172A]">Job Not Found</h1>
      <p className="text-lg text-[#475569] mb-8">
        The job you are looking for does not exist or has been removed.
      </p>
      <Link 
        href="/ads" 
        className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        Back to Job Listings
      </Link>
    </div>
  );
} 