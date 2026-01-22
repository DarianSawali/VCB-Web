import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - City Blessing Church',
  description: 'Learn about City Blessing Church',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

