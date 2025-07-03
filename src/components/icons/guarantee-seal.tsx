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
      <defs>
        <path
          id="circlePath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
      </defs>
      <g>
        <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
        <circle cx="100" cy="100" r="85" fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" />
        <text
          fill="hsl(var(--accent-foreground))"
          style={{
            fontSize: "42px",
            fontFamily: "var(--font-headline)",
            fontWeight: "bold",
          }}
          textAnchor="middle"
          x="100"
          y="115"
        >
          30
        </text>
        <text
          fill="hsl(var(--accent-foreground))"
          style={{
            fontSize: "24px",
            fontFamily: "var(--font-headline)",
            fontWeight: "bold",
          }}
          textAnchor="middle"
          x="100"
          y="145"
        >
          DIAS
        </text>
        <text style={{ fontSize: "17px", fontFamily: "var(--font-headline)", fill: "hsl(var(--primary-foreground))" }}>
          <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle">
            GARANTIA INCONDICIONAL
          </textPath>
        </text>
      </g>
    </svg>
  );
}
