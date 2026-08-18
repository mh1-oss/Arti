import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الشروط والأحكام | آرتي للخدمات البرمجية',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
