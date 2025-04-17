"use client";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} facked.lol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 