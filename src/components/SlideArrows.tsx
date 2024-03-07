import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"
import { Arrow } from "../styles/components/slideArrows"

interface SlideArrowsProps {
  disabledLeftArrow: boolean
  disabledRightArrow: boolean
  onPrevClick: (e: any) => void
  onNextClick: (e: any) => void
}

export default function SlideArrows({
  disabledLeftArrow,
  disabledRightArrow,
  onPrevClick,
  onNextClick,
}: SlideArrowsProps) {
  return (
    <>
      <Arrow side="left" disabledState={disabledLeftArrow ? "disabled" : "dafault"} onClick={onPrevClick}>
        <CaretLeft size={48} />
      </Arrow>

      <Arrow side="right" disabledState={disabledRightArrow ? "disabled" : "dafault"} onClick={onNextClick}>
        <CaretRight size={48} />
      </Arrow>

    </>
  )
}
