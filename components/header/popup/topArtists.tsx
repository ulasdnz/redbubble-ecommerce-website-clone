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
  return (
    <div className="relative ">
      <div className="flex ">
        {topArtists.map((artist) => (
          <ArtistCard name={artist.name} url={artist.url} />
        ))}
      </div>
    </div>
  );
};

export default topArtists;
