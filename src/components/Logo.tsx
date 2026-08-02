import { useId } from "react";
import "./Logo.css";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  const gradientId = useId();

  return (
    <div className={`logo ${className}`.trim()}>
      <div className="logo-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4EA8FF" />
              <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
          </defs>

          {/* outer shape */}
          <path
            d="M22 15
               H65
               C82 15 92 25 92 42
               V58
               C92 75 82 85 65 85
               H22"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* arrow */}
          <path
            d="M28 50 H58"
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M48 39 L60 50 L48 61"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className="logo-text">
        <span className="white">work</span>
        <span className="gradient">track</span>
      </span>
    </div>
  );
}
