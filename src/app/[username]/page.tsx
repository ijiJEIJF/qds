"use client";

import { useParams } from "next/navigation";
import DiscordCard from "@/components/DiscordCard";

export default function UserProfilePage() {
  const params = useParams();
  const username = params.username as string;

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
      duration: 189, 
      currentTime: 9 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] p-4">
      <DiscordCard {...profileData} />
    </div>
  );
} 