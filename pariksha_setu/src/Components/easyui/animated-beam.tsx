"use client";

import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useId,
  SVGProps,
  RefObject,
} from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

// Utility function for class names
const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// Icons object with PNG images
const Icons = {
  image1: () => (
    <img
      src="/images/image1.png"
      alt="Image 1"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ),
  image2: () => (
    <img
      src="/images/image2.png"
      alt="Image 2"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ),
  image3: () => (
    <svg
      version="1.1"
      viewBox="0 0 1600 1596"
      width="400"
      height="399"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(387,820)"
        d="m0 0h830l7 3 7 8 1 8v148l-1 11-2 4h-2l-1 4-2 3-3 1-594 1-7 3-8 9-7 12-19 29-11 17-10 16-32 49-16 25-10 15-22 34-9 14-15 23-12 19-12 18-14 23-13 18-6 7-2 1h-18l-5-3-5-6-2-4v-495l4-8 9-6z"
        fill="#F07401"
      />
      <path
        transform="translate(387,334)"
        d="m0 0h10l11 5 31 16 22 12 31 16 22 12 46 24 22 12 52 27 21 12 16 8 25 13 22 12 29 15 24 13 21 11 7 2h7l15-6 27-14 19-10 26-14 28-15 23-12 22-12 15-8 16-8 28-15 40-21 18-10 16-8 26-14 20-10 18-10 19-10 16-9 12-4h7l8 4 5 6 2 7v148l-1 16-7 8-10 6-33 17-23 13-29 15-19 10-18 10-42 22-26 14-19 10-18 10-23 12-22 12-23 12-23 13-29 15-19 10-24 13-14 7-4 1h-9l-16-8-19-10-22-12-32-17-22-12-27-14-18-10-27-14-22-12-34-18-30-16-22-12-23-12-22-12-27-14-18-10-25-13-12-8-5-5-1-3-1-157 2-12 5-6z"
        fill="#588BDD"
      />
    </svg>
  ),
  image4: () => (
    <img
      src="/images/image4.png"
      alt="Image 4"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ),
  image5: () => (
    <img
      src="/images/image5.png"
      alt="Image 5"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ),
  image6: () => (
    <img
      src="/images/image6.png"
      alt="Image 6"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ),
  image7: () => (
    <img
      src="/images/image7.png"
      alt="Image 7"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ),
};

// AnimatedBeam component
interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  // duration = Math.random() * 3 + 4,
  duration = 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 5,
  pathOpacity = 0.2,
  gradientStartColor = "#4d40ff",
  gradientStopColor = "#4043ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : "none";
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      // width={150}
      // height={150}
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 1.5,
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2,
          delay: delay,
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

// Circle component with enhanced mobile responsiveness
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex flex-col items-center mt-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-[20%] border-0 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          isDark ? "bg-gray-800" : "bg-amber-50",
          "w-12 h-12 p-2 xs:w-16 xs:h-16 xs:p-3 sm:w-14 sm:h-14 sm:p-3.5 md:w-40 md:h-40 md:p-4", // Enhanced mobile sizing
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span
          className={cn(
            "mt-2 xs:mt-2 text-center text-xs xs:text-sm sm:text-base font-bold", // Improved text scaling
            isDark ? "text-gray-200" : "text-gray-700"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

// Main AnimatedBeamDemo component with responsive layout
interface AnimatedBeamDemoProps {
  className?: string;
  icons?: typeof Icons;
  beamColor?: string;
  beamSpeed?: number;
}

export const AnimatedBeamDemo: React.FC<AnimatedBeamDemoProps> = ({
  className,
  icons = Icons,
  beamColor = "red",
  beamSpeed = 2.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div>
      <div className="mt-6 mb-2 xs:mt-2 text-center text-3xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
        In students life ...
      </div>
      <div
        className={cn(
          "relative flex max-w-[clamp(430px,60%,1200px)] mx-auto mb-0 lg:mb-4 items-center justify-center overflow-hidden", // Full width on smallest screens
          isDark ? "bg-transparent" : "bg-white",
          "p-2 xs:p-4 sm:p-6 md:p-10", // Enhanced padding for mobile
          className
        )}
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-1 xs:gap-3 sm:gap-6 md:gap-10">
          <div className="flex flex-col justify-center gap-5 xs:gap-1 sm:gap-1.5 md:gap-5">
            <Circle
              ref={div1Ref}
              className="w-18 h-18 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              label="Pariksha Yogya"
            >
              {icons.image3()}
            </Circle>
            <Circle
              ref={div2Ref}
              className="w-18 h-18 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              label="Pariksha Marg"
            >
              {icons.image3()}
            </Circle>
            <Circle
              ref={div3Ref}
              className="w-18 h-18 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              label="Pariksha ChatBot"
            >
              {icons.image3()}
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle
              ref={div7Ref}
              className="w-18 h-18 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              label=""
            >
              {icons.image1()}
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle
              ref={div6Ref}
              className="w-18 h-18 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" // Enhanced responsive sizing
              label=""
            >
              {icons.image2()}
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div7Ref}
          duration={beamSpeed}
          gradientStartColor={beamColor}
          gradientStopColor={beamColor}
          pathWidth={window.innerWidth < 640 ? 3 : 5} // Thinner lines on mobile
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div7Ref}
          duration={beamSpeed}
          gradientStartColor={beamColor}
          gradientStopColor={beamColor}
          pathWidth={window.innerWidth < 640 ? 3 : 5} // Thinner lines on mobile
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div7Ref}
          duration={beamSpeed}
          gradientStartColor={beamColor}
          gradientStopColor={beamColor}
          pathWidth={window.innerWidth < 640 ? 3 : 5} // Thinner lines on mobile
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          duration={beamSpeed}
          gradientStartColor={beamColor}
          gradientStopColor={beamColor}
          pathWidth={window.innerWidth < 640 ? 3 : 5} // Thinner lines on mobile
        />
      </div>
    </div>
  );
};
