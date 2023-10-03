const POSTER_BASE = import.meta.env.VITE_TMDB_POSTER_BASE;

import { FC } from "react";
import { ICollectionPart } from "../models/tmdb.models";
import { FavButton } from "./FavButton";

interface CardProps {
  data: ICollectionPart;
}

export const Card: FC<CardProps> = ({ data }) => {
  return (
    <article className="card bg-base-100 shadow-xl">
      <figure>
        <img src={`${POSTER_BASE}${data.poster_path}`} alt={data.title} />
      </figure>
      <div className="card-body px-6 pt-4 pb-2">
        <span className="text-sm text-slate-400">
          {new Date(data.release_date).getFullYear()}
        </span>
        <h2 className="card-title text-base">{data.title}</h2>
        <div className="card-actions justify-end mt-auto">
          <FavButton id={data.id} />
        </div>
      </div>
    </article>
  );
};