import React, { useState } from "react"
import * as s from "./CaptionConfigStyle"
import { FontConfig } from "@/libs/jspdf"
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons'
import Spacer from "@/components/ui/Spacer";

const GENSHIN_GOTHIC: FontConfig = "GenShinGothic"
const SHIPPORI_MINCHO: FontConfig = "ShipporiMincho"

type Props = {
  setFontConfig: React.Dispatch<React.SetStateAction<FontConfig>>,
  setShowId: React.Dispatch<React.SetStateAction<boolean>>
}

const CaptionConfig: React.FC<Props> = ({ setFontConfig, setShowId }) => {

  const [fontConfigString, setFontConfigString] = useState<string>(GENSHIN_GOTHIC)
  const [showIdChecked, setShowIdChecked] = useState<boolean | "indeterminate">("indeterminate")

  const onChangeFontConfig = (value: string) => {
    if (!value) { return }
    setFontConfigString(value)

    if (value === GENSHIN_GOTHIC) {
      setFontConfig(GENSHIN_GOTHIC)
    }
    if (value === SHIPPORI_MINCHO) {
      setFontConfig(SHIPPORI_MINCHO)
    }
  }

  const onToggleShowId = () => {
    setShowIdChecked((prevValue) => prevValue === "indeterminate" ? false : "indeterminate")
    setShowId((prevValue) => !prevValue)
  }

  return (
    <div>
      <p>
        詳細設定
      </p>
      <Spacer size={8} />
      <div css={s.supportingTextStyle}>
        <div>
          <label>
            フォント
          </label>
          <Spacer size={6} isVertical={false} />
          <ToggleGroup.Root
            type="single"
            value={fontConfigString}
            onValueChange={(fontConfigString) => onChangeFontConfig(fontConfigString)}
            css={s.toggleGroupStyle}
          >
            <ToggleGroup.Item value={GENSHIN_GOTHIC} css={s.toggleItemStyle}>
              ゴシック体
            </ToggleGroup.Item>
            <ToggleGroup.Item value={SHIPPORI_MINCHO} css={s.toggleItemStyle}>
              明朝体
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <Spacer size={8} />
        <div css={s.checBoxContainerStyle}>
          <button onClick={onToggleShowId} css={s.checkBoxLabelStyle}>
            番号を表示
          </button>
          <Spacer size={6} isVertical={false} />
          <Checkbox.Root
            checked={showIdChecked}
            onCheckedChange={onToggleShowId}
            css={s.checkBoxRootStyle}
          >
            <Checkbox.Indicator css={s.checkBoxIndicatorStyle}>
              {showIdChecked === "indeterminate" && <CheckIcon width={18} height={18} />}
              {showIdChecked === true && <CheckIcon width={18} height={18} />}
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
      </div>
    </div>
  )
}

export default CaptionConfig