"use client";

import React from "react";

interface NewsletterProps {
  newsletter: {
    display: boolean;
    title: React.ReactNode;
    description: React.ReactNode;
  };
}

export const Mailchimp = ({ newsletter }: NewsletterProps) => {
  if (!newsletter.display) return null;

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{newsletter.title}</h2>
      <p className="text-gray-700">{newsletter.description}</p>
    </div>
  );
};
