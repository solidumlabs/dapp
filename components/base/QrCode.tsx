import qrcode from '@paulmillr/qr'

interface QrCodeProps {
  data: string
  className?: string
}

export const QrCode = ({ data, className }: QrCodeProps) => {
  const svg = qrcode(data, 'svg')
  return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />
}
