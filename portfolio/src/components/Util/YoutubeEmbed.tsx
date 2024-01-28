import React from "react";

type YoutubeEmbedProps = {
  embedId: string;
}

export const YoutubeEmbed = ({ embedId }: YoutubeEmbedProps) => (
  <div className="relative overflow-hidden w-full">
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);