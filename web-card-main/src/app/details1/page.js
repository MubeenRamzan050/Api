"use client";

import React from "react";
import { useParams } from "next/navigation";
import Card from "../components/Card";
import { events } from "../../Data";

export default function Page() {
  const { id } = useParams(); // dynamic id from URL
  const event = events.find((e) => e.id === parseInt(id));

  return (
    <div>
      {event ? (
        <Card
          image={event.image}
          title={event.title}
          subTitle={event.subTitle}
          date={event.date}
          description={event.description}
        />
      ) : (
        <p className="text-center text-red-500 mt-10">Event not found.</p>
      )}
    </div>
  );
}
