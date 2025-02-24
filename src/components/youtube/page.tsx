"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              width={320}
              height={180}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">
                {video.title}
              </h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
