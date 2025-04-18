import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "l3n | facked.lol",
  description: "l3n | facked.lol owner",
  openGraph: {
    title: "l3n | facked.lol",
    description: "Check out l3n's profile card",
    url: "https://facked.lol/sparizione",
    siteName: "facked.lol",
    images: [
      {
        url: "/images/gifs/profile.gif",
        width: 500,
        height: 500,
        alt: "l3n Profile"
      }
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "l3n | facked.lol",
    description: "Check out l3n's profile card",
    images: ["/images/gifs/profile.gif"],
  },
};

export default function SparizoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
