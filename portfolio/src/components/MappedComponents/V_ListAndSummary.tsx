import { Vis_ListAndSum } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue, LocalizedContent } from "../Util/util"

export const V_ListAndSummary: React.FC<Vis_ListAndSum> = ({ list, summary, reverse }: Vis_ListAndSum) => {
  return (
    <div>   
      <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col"} text-left self-center gap-4`}>
        <ul className="text-left list-disc list-outside pl-4 pb-6">
          {list.map((line: LocalizedContent, key: number) => {
            return <li className="list-item" key={key}>{GetLocalizedContentValue(line)}</li>
          })}
        </ul>
        <div>
        {summary.map((paragraph: LocalizedContent, i: number) => {
          return (
            <div className={`text-left indent-6 ${i > 0 ? "pt-2" : "pt-0"}`} key={i}>
              {GetLocalizedContentValue(paragraph)}
            </div>
          )}
        )}
      </div>
      </div>
    </div>       
  )
}