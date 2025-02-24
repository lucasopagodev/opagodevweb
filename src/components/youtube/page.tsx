"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export default function YouTubeVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const channelId = "UCgN5M0UCnTheIvS3lLB-LfA"; // Substitua pelo ID do seu canal
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const maxResults = 6; // Número de vídeos a serem exibidos

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
      );
      const data = await response.json();

      const fetchedVideos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      setVideos(fetchedVideos);
    }

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="my-6 text-2xl font-bold text-gray-900">
        🎥 Últimos Vídeos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <div className="relative">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  width={320}
                  height={180}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Clique para assistir
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
