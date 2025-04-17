"use client";

import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_400px,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_100%_800px,rgba(96,165,250,0.15),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_900px_at_50%_200px,rgba(37,99,235,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(30,58,138,0.05))]"></div>
    </div>
  );
}
