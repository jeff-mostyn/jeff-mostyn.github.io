import { Vis_Summary } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue, LocalizedContent } from "../Util/util"

export const V_Summary: React.FC<Vis_Summary> = ({ paragraphs }: Vis_Summary) => {
  return (
    <div>
      {paragraphs.map((paragraph: LocalizedContent, i: number) => {
        return (
          <div className="pb-4 whitespace-pre-line indent-6" key={i}>
            {GetLocalizedContentValue(paragraph)}
          </div>
        )}
      )}
    </div>            
  )
}