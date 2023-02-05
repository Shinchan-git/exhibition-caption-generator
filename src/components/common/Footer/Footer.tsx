import OpenInNewIcon from '@/components/icons/OpenInNewIcon'
import * as s from './FooterStyle'

const YEAR = 2023

const Footer: React.FC = () => {
  const now = new Date().getFullYear()
  const copyYear = now === YEAR ? `${YEAR}` : `${YEAR}-` + now

  return (
    <footer css={s.footerStyle}>
      <span>
        &copy; {copyYear} Shintaro Aoi
      </span>
      <a href="https://twitter.com/moyotsukai" target="_blank" rel="noopener noreferrer" css={s.linkStyle}>
        Twitter
        <OpenInNewIcon size={14} />
      </a>
    </footer>
  )
}

export default Footer