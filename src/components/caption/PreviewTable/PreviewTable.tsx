import React from "react"
import * as s from "./PreviewTableStyle"
import { CaptionTableData } from "@/features/caption/toCaptionTableData"
import Spacer from "@/components/ui/Spacer"

type Props = {
  children: React.ReactNode
  captionTableData: CaptionTableData | null
}

const PreviewTable: React.FC<Props> = ({ children, captionTableData }) => {
  return (
    <div css={s.containerStyle}>
      {captionTableData ? (
        <table css={s.tableStyle}>
          <thead css={s.defaultStyle}>
            <tr css={s.rowStyle}>
              <th css={s.cellStyle}>タイトル</th>
              <th css={s.cellStyle}>名前</th>
              <th css={s.cellStyle}>所属</th>
              <th css={s.cellStyle}>画材</th>
              <th css={s.cellStyle}>サイズ</th>
              <th css={s.cellStyle}>番号</th>
              <th css={s.cellStyle}>撮影</th>
            </tr>
          </thead>
          <tbody css={s.defaultStyle}>
            {captionTableData.map((row, index) => (
              <tr
                css={s.rowStyle}
                key={index}
              >
                <td css={s.cellStyle}>{row.title ?? "&nbsp;"}</td>
                <td css={s.cellStyle}>{row.name}</td>
                <td css={s.cellStyle}>{row.grade}</td>
                <td css={s.cellStyle}>{row.materials}</td>
                <td css={s.cellStyle}>{row.size}</td>
                <td css={s.cellStyle}>{row.id}</td>
                <td css={s.cellStyle}>{row.camera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <p>Excelなどで表データを作成し、コピー＆ペーストしてください。</p>
          <Spacer size={8} />
          <table css={s.tableStyle}>
            <thead css={s.defaultStyle}>
              <tr css={s.rowStyle}>
                <th css={s.cellStyle}>タイトル</th>
                <th css={s.cellStyle}>名前</th>
                <th css={s.cellStyle}>所属</th>
                <th css={s.cellStyle}>画材</th>
                <th css={s.cellStyle}>サイズ</th>
                <th css={s.cellStyle}>番号</th>
                <th css={s.cellStyle}>撮影</th>
              </tr>
            </thead>
            <tbody css={s.defaultStyle}>
              <tr css={s.rowStyle}>
                <td
                  colSpan={7}
                  css={s.cellAllPaddingStyle}
                >
                  {children}
                </td>
              </tr>
            </tbody>
          </table>
          <Spacer size={36} />

          <p>例）</p>
          <Spacer size={8} />
          <table css={s.tableStyle}>
            <thead css={s.defaultStyle}>
              <tr css={s.rowStyle}>
                <th css={s.cellStyle}>タイトル</th>
                <th css={s.cellStyle}>名前</th>
                <th css={s.cellStyle}>所属</th>
                <th css={s.cellStyle}>画材</th>
                <th css={s.cellStyle}>サイズ</th>
                <th css={s.cellStyle}>番号</th>
                <th css={s.cellStyle}>撮影</th>
              </tr>
            </thead>
            <tbody css={s.defaultStyle}>
              <tr css={s.rowStyle}>
                <td css={s.cellStyle}>作品A</td>
                <td css={s.cellStyle}>たろう</td>
                <td css={s.cellStyle}>１年</td>
                <td css={s.cellStyle}>水彩</td>
                <td css={s.cellStyle}>F4</td>
                <td css={s.cellStyle}>1</td>
                <th css={s.cellStyle}>OK</th>
              </tr>
              <tr css={s.rowStyle}>
                <td css={s.cellStyle}>無題</td>
                <td css={s.cellStyle}>はなこ</td>
                <td css={s.cellStyle}>２年</td>
                <td css={s.cellStyle}>油彩</td>
                <td css={s.cellStyle}>F8</td>
                <td css={s.cellStyle}>2</td>
                <th css={s.cellStyle}>NO</th>
              </tr>
              <tr css={s.rowStyle}>
                <td css={s.cellStyle}>...</td>
                <td css={s.cellStyle}>...</td>
                <td css={s.cellStyle}>...</td>
                <td css={s.cellStyle}>...</td>
                <td css={s.cellStyle}>...</td>
                <td css={s.cellStyle}>...</td>
                <td css={s.cellStyle}>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default PreviewTable
