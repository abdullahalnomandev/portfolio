"use client";

import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: "sm" | "md" | "lg" | "full";
  shimmer?: boolean;
  color?: "default" | "muted" | "dark";
}

const Skeleton = ({
  className = "",
  rounded = "md",
  shimmer = true,
  color = "default",
  ...props
}: SkeletonProps) => {
  const baseColor =
    color === "dark"
      ? "bg-gray-700"
      : color === "muted"
      ? "bg-gray-200"
      : "bg-gray-300";

  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={`relative overflow-hidden ${baseColor} ${roundedClass} ${
        shimmer ? "animate-pulse" : ""
      } ${className}`}
      {...props}>
      {shimmer && (
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer' />
      )}
    </div>
  );
};

export default Skeleton;
