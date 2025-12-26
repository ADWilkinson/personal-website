import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Andrew Wilkinson - Software Engineer & DeFi Builder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f4eee8',
          backgroundImage: 'linear-gradient(to bottom right, #f4eee8, #e8dfd6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#27272a',
              marginBottom: '20px',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Andrew Wilkinson
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#27272a',
              opacity: 0.7,
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Software engineer building zkTLS-powered fiat-to-crypto onramps at ZKP2P
            with AI-augmented workflows
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '40px',
              fontSize: '24px',
              color: '#0072b5',
              fontWeight: 500,
            }}
          >
            <span>DeFi</span>
            <span>•</span>
            <span>AI Systems</span>
            <span>•</span>
            <span>Trading</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
