import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function GuaranteeSealIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={cn("w-32 h-32", props.className)}
      {...props}
    >
      <g>
        {/* Shield */}
        <path
          d="M25 10 L175 10 L175 100 C175 160 100 190 100 190 C100 190 25 160 25 100 Z"
          fill="hsl(var(--card))"
          stroke="black"
          strokeWidth="6"
        />
        
        {/* Ribbon */}
        <path
          d="M10,80 C40,70 160,70 190,80 L180,110 C160,120 40,120 20,110 Z"
          fill="#a0c4ff" /* Light Blue */
          stroke="black"
          strokeWidth="2"
        />
        
        <text
          x="100"
          y="103"
          textAnchor="middle"
          fill="black"
          style={{
            fontSize: "24px",
            fontFamily: "var(--font-headline)",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
        >
          GARANTIA
        </text>
        
        {/* Text Below Ribbon */}
        <text
          x="100"
          y="155"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          style={{
            fontSize: "26px",
            fontFamily: "var(--font-headline)",
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          SEM RISCO
        </text>
      </g>
    </svg>
  );
}
