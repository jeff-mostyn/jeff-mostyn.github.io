import { Vis_Summary } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue, LocalizedContent } from "../Util/util"

export const V_Summary: React.FC<Vis_Summary> = ({ paragraphs }: Vis_Summary) => {
  return (
    <div>
      {paragraphs.map((paragraph: LocalizedContent, i: number) => {
        return (
          <div className={`text-left indent-6 ${i > 0 ? "pt-2" : "pt-0"}`} key={i}>
            {GetLocalizedContentValue(paragraph)}
          </div>
        )}
      )}
    </div>            
  )
}