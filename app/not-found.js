import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: '96px auto',
        textAlign: 'center',
        padding: '0 24px',
        fontFamily: 'var(--font-display)',
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 500, color: 'var(--color-ink)' }}>ไม่พบหน้านี้</h1>
      <p style={{ fontSize: 14, color: 'var(--color-steel)', marginTop: 8 }}>
        ไม่พบหน้าที่คุณกำลังค้นหา อาจถูกย้ายหรือไม่มีอยู่จริง
      </p>
      <Link
        href="/profile"
        style={{
          display: 'inline-block',
          marginTop: 24,
          background: 'var(--color-brand-green)',
          color: 'var(--color-on-primary)',
          padding: '10px 22px',
          borderRadius: 9999,
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        กลับไปหน้าโปรไฟล์
      </Link>
    </div>
  );
}
