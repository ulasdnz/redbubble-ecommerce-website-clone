import React from "react";
import ArtistCard from "@/components/cards/artistCard";
import topArtistsImages from "./getTopArtistsImages";

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
        {topArtists.map((artist,i) => (
          <ArtistCard name={artist.name} url={topArtistsImages()[i]} />
        ))}
      </div>
    </div>
  );
};

export default topArtists;
