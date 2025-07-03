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
        {/* Shield with top decoration and black outline */}
        <path
          d="M100 12 L175 42 V 110 C175 160, 100 195, 100 195 C100 195, 25 160, 25 110 V 42 Z"
          fill="hsl(var(--card))"
          stroke="black"
          strokeWidth="4"
        />
        <path
          d="M50 42 L50 22 L150 22 L150 42"
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

        {/* Text on Ribbon */}
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
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

        {/* Text inside shield */}
        <text
          x="100"
          y="135"
          textAnchor="middle"
          fill="black"
          style={{
            fontSize: "18px",
            fontFamily: "var(--font-body)",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Sem Risco
        </text>

        {/* Top decorations: small shield and stars */}
        <g transform="translate(88, 50) scale(0.25)">
          <path d="M12 2L2 6v10l10 4 10-4V6l-10-4z" fill="black"/>
          <path d="M10.18,13.03L7.14,10l-3.04,3.03l-0.9-1.55l3.04-3.03L3.2,5.42l0.9-1.55l3.04,3.03L10.18,3.87l0.9,1.55l-3.04,3.03l3.04,3.03L10.18,13.03z" fill="white"/>
        </g>
        <text x="75" y="62" fontSize="12" fill="#3b82f6">★</text>
        <text x="118" y="62" fontSize="12" fill="#3b82f6">★</text>
      </g>
    </svg>
  );
}
