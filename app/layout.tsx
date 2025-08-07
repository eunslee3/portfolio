import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Script from 'next/script'
import RecaptchaWrapper from '@/components/ReCaptchaWrapper'

export const metadata: Metadata = {
  title: 'Sam Lee',
  description: "Sam Lee's Portfolio",
  generator: 'v0.dev',
  icons: {
    icon: '/sl_logo_rounded.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}
        </style>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body>
        <RecaptchaWrapper>
          {children}
        </RecaptchaWrapper>
      </body>
    </html>
  )
}
