import { Hyperlinks } from "src/utils/portfolioSegmentTypes";
import { GetLocalizedContentValue } from "../Util/util";

export const C_Hyperlinks: React.FC<Hyperlinks> = ({ links }: Hyperlinks) => {
  console.log(links);
  return (
    <div className="flex flex-col justify-center pt-4 md:flex-row md:divide-x">
      { links.map((link, key: number) => {
          return <a className="pb-1 px-3 text-theme1 underline" href={link.url} key={key}>{GetLocalizedContentValue(link.text)}</a>
        })
      }
    </div>
  )
}