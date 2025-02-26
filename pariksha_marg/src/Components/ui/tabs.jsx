"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import { cn } from "../../lib/utils"; 

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex flex-col w-full text-left bg-gray-800 border border-gray-700 rounded-xl shadow-md", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "px-4 py-2 text-sm font-medium text-gray-300 rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:text-white shadow-sm",
      "data-[state=active]:text-white data-[state=active]:bg-indigo-600",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 outline-none focus:ring-2 focus:ring-blue-500", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
