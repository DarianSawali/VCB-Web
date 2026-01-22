import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Messages - City Blessing Church',
  description: 'Watch past services and sermons from City Blessing Church',
}

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
