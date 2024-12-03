"use client";

export default function HStack({ children, className = "" }) {
  return <div className={`flex flex-row ${className}`.trim()}>{children}</div>;
}