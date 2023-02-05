import * as s from './HeaderStyle'
import ProfileImg from '../../../../public/profile.jpeg'
import { SITE_URL } from '@/constants/constants'

const Header: React.FC = () => {
  return (
    <header css={s.headerStyle}>
      <a href={SITE_URL} css={s.linkStyle}>
        <div css={s.imageStyle}>
          <img src={ProfileImg.src} width={36} height={36} />
        </div>
        <span css={s.spanStyle}>
          キャプション生成ツール
        </span>
      </a>
    </header>
  )
}

export default Header