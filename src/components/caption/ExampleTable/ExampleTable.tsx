import React from "react"
import * as s from "./ExampleTableStyle"

const ExampleTable: React.FC = () => {
  return (
    <div css={s.containerStyle}>
      <table css={s.tableStyle}>
        <thead css={s.defaultStyle}>
          <tr css={s.rowStyle}>
            <th css={s.cellStyle}>タイトル</th>
            <th css={s.cellStyle}>名前</th>
            <th css={s.cellStyle}>所属</th>
            <th css={s.cellStyle}>画材</th>
            <th css={s.cellStyle}>サイズ</th>
          </tr>
        </thead>
        <tbody css={s.defaultStyle}>
          <tr css={s.rowStyle}>
            <td css={s.cellStyle}>作品A</td>
            <td css={s.cellStyle}>たろう</td>
            <td css={s.cellStyle}>１年</td>
            <td css={s.cellStyle}>水彩</td>
            <td css={s.cellStyle}>F4</td>
          </tr>
          <tr css={s.rowStyle}>
            <td css={s.cellStyle}>無題</td>
            <td css={s.cellStyle}>はなこ</td>
            <td css={s.cellStyle}>２年</td>
            <td css={s.cellStyle}>油彩</td>
            <td css={s.cellStyle}>F8</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ExampleTable