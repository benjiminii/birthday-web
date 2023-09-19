import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Spotify } from "react-spotify-embed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <h1 className="text-5xl font-bold text-yellow-400">
        It's your day Baby!
      </h1>

      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/42eROl1SbF5rmBJHJxe6Gs?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </main>
  );
}
