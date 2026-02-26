import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              )}
              
              {isLast || !item.href ? (
                <span className={`text-sm font-medium ${isLast ? 'text-gray-700' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-sm font-medium text-green-600 hover:text-blue-800"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 