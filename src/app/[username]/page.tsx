"use client";

import { useParams } from "next/navigation";
import DiscordCard from "@/components/DiscordCard";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function UserProfilePage() {
  const params = useParams();
  const username = params?.username as string;

  // Example data - in a real app, you would fetch this from an API
  const profileData = {
    username: username,
    discriminator: "0001",
    avatarUrl: "https://cdn.discordapp.com/avatars/123456789/example.png",
    bannerUrl: "https://cdn.discordapp.com/banners/123456789/example.png",
    badges: [
      {
        id: "nitro",
        name: "Nitro Subscriber",
        icon: "/badges/nitro.svg"
      },
      {
        id: "active_developer",
        name: "Active Developer",
        icon: "/badges/active-developer.svg"
      },
      {
        id: "hypesquad_brilliance",
        name: "HypeSquad Brilliance",
        icon: "/badges/hypesquad-brilliance.svg"
      }
    ],
    nitroType: "boost" as const,
    isPlaying: {
      name: "TELL ME WHY - Ufo361",
      artist: "Ufo361",
      duration: 189, // 3:09 in seconds
      currentTime: 9 // 0:09 in seconds
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="min-h-screen flex items-center justify-center bg-[#0a192f] p-4">
          <DiscordCard />
        </div>
      </main>
      <Footer />
    </div>
  );
} 
