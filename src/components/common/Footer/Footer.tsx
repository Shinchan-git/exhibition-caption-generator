import * as s from './FooterStyle'

const YEAR = 2023

const Footer: React.FC = () => {
  const now = new Date().getFullYear()
  const copyYear = now === YEAR ? `${YEAR}` : `${YEAR}-` + now

  return (
    <footer css={s.footerStyle}>
      &copy; {copyYear} Shintaro Aoi
    </footer>
  )
}

export default Footer