import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function GuaranteeSealIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={cn("w-48 h-48", props.className)}
      {...props}
    >
      <g>
        {/* Shield with black outline */}
        <path
          d="M100 12 L175 42 V 110 C175 160, 100 195, 100 195 C100 195, 25 160, 25 110 V 42 Z"
          fill="hsl(var(--card))"
          stroke="black"
          strokeWidth="4"
        />

        {/* Ribbon with tails */}
        <g stroke="black" strokeWidth="2.5">
            <path
            d="M10 95 L25 80 L175 80 L190 95 L175 110 L25 110 Z"
            fill="#3b82f6"
            />
            <path
            d="M25 110 L10 125 L10 100 L25 80"
            fill="#2563eb"
            />
            <path
            d="M175 110 L190 125 L190 100 L175 80"
            fill="#2563eb"
            />
        </g>
        
        {/* Text inside shield - 30 DIAS */}
        <text
          x="100"
          y="70"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          style={{
            fontSize: "36px",
            fontFamily: "var(--font-headline)",
            fontWeight: "bold",
          }}
        >
          30 DIAS
        </text>

        {/* Text on Ribbon */}
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
          paintOrder="stroke"
          style={{
            fontSize: "28px",
            fontFamily: "var(--font-headline)",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          GARANTIA
        </text>
        
        {/* Text inside shield - Satisfaction Guarantee */}
        <text
          x="100"
          y="140"
          textAnchor="middle"
          fill="black"
          style={{
            fontSize: "10px",
            fontFamily: "var(--font-body)",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          <tspan x="100" dy="0">Satisfação ou seu</tspan>
          <tspan x="100" dy="1.2em">dinheiro de volta</tspan>
        </text>
      </g>
    </svg>
  );
}
