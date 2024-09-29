"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  IconClipboardCopy,   // Icon for Resume Building Workshop
  IconCalendarEvent,   // Icon for Main Event Date
  IconFileBroken,      // Icon for Digital Revolution
  IconSignature,       // Icon for Art of Design
} from "@tabler/icons-react";

const EventDetails: React.FC = () => {
  return (
    <div className="m-5 py-10" id="details">
      <h1 className="heading">
        Event {" "}
        <span className="text-purple"> Details</span>
      </h1>

      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <HoverEffect items={events} />
      </div>
    </div>
  );
};

export const events = [
  {
    title: "Resume Building Workshop",
    description: "Date: April 10, 2024 \n\nTime: 2:00 PM - 4:00 PM\nPlatform: Zoom",
    icon: <IconClipboardCopy className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Main Event Date",
    description: "Date: May 15, 2024\nTime: 10:00 AM - 4:00 PM\nLocation: FRCRCE ",
    icon: <IconCalendarEvent className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Date: June 20, 2024\nTime: 1:00 PM - 3:00 PM\nPlatform: Microsoft Teams",
    icon: <IconFileBroken className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Date: July 5, 2024\nTime: 11:00 AM - 1:00 PM\nLocation: Design Center, CRCE",
    icon: <IconSignature className="h-6 w-6 text-neutral-500" />,
  },
];

export default EventDetails;
