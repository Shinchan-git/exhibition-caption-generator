import OpenInNewIcon from '@/components/icons/OpenInNewIcon'
import * as s from './FooterStyle'

const Footer: React.FC = () => {
  return (
    <footer css={s.footerStyle}>
      <span>
        &copy; 2023 Shintaro Aoi
      </span>
      <a href="https://www.moyotsukai.dev/" target="_blank" rel="noopener noreferrer" css={s.linkStyle}>
        Portfolio
        <OpenInNewIcon size={14} />
      </a>
    </footer>
  )
}

export default Footer