"use client";

import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const themes = [
  {
    name: "Dark",
    bgColor: "#000000",
    textColor: "#ffffff",
    buttonColor: "#4f46e5",
  },
  {
    name: "Light",
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonColor: "#4f46e5",
  },
  {
    name: "Neon",
    bgColor: "#0f172a",
    textColor: "#e2e8f0",
    buttonColor: "#00f5a0",
  },
  {
    name: "Cyberpunk",
    bgColor: "#1a1a2e",
    textColor: "#e94560",
    buttonColor: "#0f3460",
  },
];

export default function ThemePage() {
  const [bgColor, setBgColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#ffffff");
  const [buttonColor, setButtonColor] = useState("#4f46e5");
  const [showBgPicker, setShowBgPicker] = useState(false);
  const [showTextPicker, setShowTextPicker] = useState(false);
  const [showButtonPicker, setShowButtonPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTheme();
  }, []);

  const fetchUserTheme = async () => {
    try {
      const response = await fetch("/api/user/me");
      if (!response.ok) throw new Error("Failed to fetch user theme");
      const data = await response.json();
      setBgColor(data.bgColor);
      setTextColor(data.textColor);
      setButtonColor(data.buttonColor);
    } catch (error) {
      toast.error("Failed to load theme settings");
    } finally {
      setIsLoading(false);
    }
  };

  const applyTheme = async (theme: typeof themes[0]) => {
    setBgColor(theme.bgColor);
    setTextColor(theme.textColor);
    setButtonColor(theme.buttonColor);
    await updateTheme(theme);
  };

  const updateTheme = async (theme: {
    bgColor: string;
    textColor: string;
    buttonColor: string;
  }) => {
    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(theme),
      });

      if (!response.ok) throw new Error("Failed to update theme");
      toast.success("Theme updated successfully");
    } catch (error) {
      toast.error("Failed to update theme");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Theme</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">Preset Themes</h2>
            <div className="grid grid-cols-2 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(theme)}
                  className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-colors hover:bg-gray-800"
                >
                  <div
                    className="mb-2 h-24 w-full rounded-lg"
                    style={{ backgroundColor: theme.bgColor }}
                  />
                  <span className="text-white">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-white">Custom Colors</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-400">
                  Background Color
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowBgPicker(!showBgPicker)}
                    className="h-10 w-full rounded-md border border-gray-700"
                    style={{ backgroundColor: bgColor }}
                  />
                  {showBgPicker && (
                    <div className="absolute left-0 top-12 z-10 rounded-lg border border-gray-800 bg-gray-900 p-4">
                      <HexColorPicker
                        color={bgColor}
                        onChange={(color) => {
                          setBgColor(color);
                          updateTheme({
                            bgColor: color,
                            textColor,
                            buttonColor,
                          });
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-400">
                  Text Color
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowTextPicker(!showTextPicker)}
                    className="h-10 w-full rounded-md border border-gray-700"
                    style={{ backgroundColor: textColor }}
                  />
                  {showTextPicker && (
                    <div className="absolute left-0 top-12 z-10 rounded-lg border border-gray-800 bg-gray-900 p-4">
                      <HexColorPicker
                        color={textColor}
                        onChange={(color) => {
                          setTextColor(color);
                          updateTheme({
                            bgColor,
                            textColor: color,
                            buttonColor,
                          });
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-400">
                  Button Color
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowButtonPicker(!showButtonPicker)}
                    className="h-10 w-full rounded-md border border-gray-700"
                    style={{ backgroundColor: buttonColor }}
                  />
                  {showButtonPicker && (
                    <div className="absolute left-0 top-12 z-10 rounded-lg border border-gray-800 bg-gray-900 p-4">
                      <HexColorPicker
                        color={buttonColor}
                        onChange={(color) => {
                          setButtonColor(color);
                          updateTheme({
                            bgColor,
                            textColor,
                            buttonColor: color,
                          });
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <h2 className="mb-4 text-xl font-bold text-white">Preview</h2>
          <div
            className="relative min-h-[400px] overflow-hidden rounded-lg"
            style={{
              backgroundColor: bgColor,
              color: textColor,
            }}
          >
            <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
              <div className="mb-6 h-24 w-24 rounded-full border-4 border-white/10 bg-white/10" />
              <h1 className="mb-2 text-2xl font-bold">Username</h1>
              <p className="mb-8 text-center text-gray-300">
                This is a preview of how your profile will look
              </p>
              <div className="flex w-full max-w-md flex-col space-y-4">
                <button
                  className="rounded-lg border border-white/10 px-6 py-3 text-center transition-colors hover:bg-white/10"
                  style={{
                    backgroundColor: buttonColor,
                  }}
                >
                  Example Link
                </button>
                <button
                  className="rounded-lg border border-white/10 px-6 py-3 text-center transition-colors hover:bg-white/10"
                  style={{
                    backgroundColor: buttonColor,
                  }}
                >
                  Another Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 