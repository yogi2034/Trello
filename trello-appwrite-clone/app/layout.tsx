import './globals.css'

export const metadata = {
  title: 'Trello 2.0 clone',
  description: 'Generated by the yogi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
