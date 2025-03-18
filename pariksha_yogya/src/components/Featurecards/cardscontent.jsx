"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <div className="border-2 border-gray-400 rounded-lg p-4 bg-opacity-50">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-4 md:gap-4 xl:max-h-[48rem] xl:grid-rows-3">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
          className="min-h-[12rem]" />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
          className="min-h-[12rem]" />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/9]" // Changed from spanning 2 rows
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend"
          className="min-h-[12rem]" />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]" // Adjusted positioning
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
          className="min-h-[12rem]" />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/5/3/13]" // Adjusted width
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
          className="min-h-[12rem]" />
        <GridItem
          area="md:[grid-area:4/1/5/13] xl:[grid-area:3/1/4/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Prepare for Success"
          description="Access comprehensive study materials and practice tests to excel in your exams."
          className="min-h-[12rem]" />
      </ul>
    </div>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  className = ""
}) => {
  return (
    <li className={`list-none ${area} ${className}`}>
      <div
        className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-0.75 p-4 md:p-5 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3
                className="pt-0.5 text-lg/[1.3rem] font-semibold font-sans -tracking-4 md:text-xl/[1.75rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};