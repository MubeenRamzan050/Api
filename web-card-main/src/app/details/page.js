"use client";

import React from "react";
import Box from "../components/Box";
import { events } from "../Data";

function page() {
  return (
    <div className="min-h-screen bg-gray-300  flex flex-col gap-0">

      {events.map((i) => {
        return (
          <Box
            key={i.id}
            id={i.id}
            image={i.image}
            title={i.title}
            subTitle={i.subTitle}
            date={i.date}
          />
        );
      })}

    </div>
  );
}

export default page;
