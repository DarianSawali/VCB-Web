import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Messages - Vancouver City Blessing',
  description: 'Watch past services and sermons from Vancouver City Blessing',
}

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
