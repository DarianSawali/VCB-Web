import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Vancouver City Blessing',
  description: 'Learn about Vancouver City Blessing',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

