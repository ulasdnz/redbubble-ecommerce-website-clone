import React from "react";
import ArtistCard from "@/components/cards/artistCard";

type Artist = {
  name: string;
  url: string;
}

type Props = {
  topArtists: Artist[]
}

const topArtists: React.FC<Props> = ({topArtists}) => {
  const images = Array.from({ length: 6 }, (_, number) => {
    const ext = `img${number + 1}.jpg`;
    return `/home/header/popup/top%20artists/${ext}`; // Update the path as needed
  })
  return (
    <div className="relative ">
      <div className="flex ">
        {topArtists.map((artist,i) => (
          <ArtistCard key={i} name={artist.name} url={images[i]} />
        ))}
      </div>
    </div>
  );
};

export default topArtists;
