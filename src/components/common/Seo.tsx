import Head from 'next/head'
import React from 'react'

const Seo: React.FC = () => {
  return (
    <Head>
      <title>展覧会キャプション生成ツール - Moyotsukai</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Excelデータから展覧会のキャプションをPDF形式で自動生成します。" />
      <meta property="og:url" content="https://caption.moyotsukai.dev" />
      <meta property="og:title" content="展覧会キャプション生成ツール" />
      <meta property="og:description" content="Excelデータから展覧会のキャプションをPDF形式で自動生成します。" />
      <meta property="og:image" content="https://caption.moyotsukai.dev/ogimage.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="展覧会キャプション生成ツール" />
      <meta name="twitter:image" content="https://caption.moyotsukai.dev/ogimage.png" />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Seo