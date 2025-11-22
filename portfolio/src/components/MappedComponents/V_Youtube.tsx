import { Vis_Youtube } from "src/utils/portfolioSegmentTypes";
import { YoutubeEmbed } from "../Util/YoutubeEmbed";

export const V_Youtube: React.FC<Vis_Youtube> = ({ id }: Vis_Youtube) => {
  return (
    <YoutubeEmbed embedId={id} />
  )
}