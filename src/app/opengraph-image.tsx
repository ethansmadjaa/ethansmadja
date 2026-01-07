import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ethan Smadja - Full Stack Software Engineer & CTO';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

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
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              ES
            </div>
          </div>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '10px',
              lineHeight: 1.1,
            }}
          >
            Ethan Smadja
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            Full Stack Software Engineer & CTO
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Python', 'AI/ML'].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '8px 20px',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  borderRadius: '20px',
                  color: '#60a5fa',
                  fontSize: '20px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: '24px',
              color: '#64748b',
              marginTop: '40px',
            }}
          >
            ethansmadja.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
