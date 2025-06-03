// pages/index.tsx
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
  }, []);

  return (
    <>
      <Head>
        <title>Soyella | Grace in Bloom</title>
        <meta
          name="description"
          content="A new era of elegance. Discover Soyella: a personal brand celebrating beauty, style, and authenticity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Soyella" />
        <link rel="icon" href="/soyella-favicon.png" />
      </Head>

      <main style={styles.main}>
        <header style={styles.header}>
          <img src="/soyella-logo.png" alt="Soyella Logo" style={styles.logo} />
          <button style={styles.linkBtn} onClick={() => setShowForm(true)}>
            Get Early Access
          </button>
        </header>

        <section style={styles.heroSection}>
          <h1 style={styles.heroText}>
            Grace <span style={styles.highlight}>Reimagined</span>
          </h1>
          <p style={styles.heroSub}>
            Introducing Soyella: a personal brand rooted in elegance, creativity, and confidence. Stay tuned for the drop.
          </p>
          <button style={styles.ctaBtn} onClick={() => setShowForm(true)}>
            Join the Waitlist
          </button>
        </section>

        <section
          style={{
            ...styles.visionSection,
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={styles.visionContent}>
            <img
              src="/grace-bloom.png"
              alt="Grace in Bloom"
              style={styles.visionImage}
            />
            <div>
              <h2 style={styles.sectionTitle}>Grace in Bloom</h2>
              <p style={styles.visionText}>
                Soyella was born from a desire to express beauty through simplicity. This space is a celebration of style,
                elegance, and quiet confidence. We believe that grace is more than how you look — it&apos;s how you live.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.instaSection}>
          <h2 style={styles.sectionTitle}>From the Feed</h2>
          <div style={styles.instaGrid}>
            <img src="/insta-1.png" alt="Insta Preview 1" style={styles.instaImage} />
            <img src="/insta-2.png" alt="Insta Preview 2" style={styles.instaImage} />
            <img src="/insta-3.png" alt="Insta Preview 3" style={styles.instaImage} />
          </div>
        </section>

        <section style={styles.quoteSection}>
          <blockquote style={styles.quoteText}>
            “Elegance is when the inside is as beautiful as the outside.”
          </blockquote>
        </section>

        {showForm && (
          <section style={styles.formSection} id="waitlist">
            <h2 style={styles.sectionTitle}>Be the First to Know</h2>
            <iframe
              title="Soyella Waitlist Form"
              src="https://form.jotform.com/251482303686156"
              width="100%"
              height="700"
              style={styles.iframe}
              allowFullScreen
            ></iframe>
          </section>
        )}

        <footer style={styles.footer}>
          <div>&copy; {new Date().getFullYear()} Soyella. All rights reserved.</div>
          <div style={{ marginTop: '0.5rem' }}>
            Website by <a href="https://built.simple" style={styles.link}>Built Simple</a>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            Follow us on <a href="https://instagram.com/soyella.bloom" style={styles.link}>Instagram</a>
          </div>
        </footer>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    padding: '4rem 1rem',
    background: 'linear-gradient(to bottom right, #fdfaf6, #ffffff)',
    color: '#1a1a1a',
    fontFamily: `'Inter', sans-serif`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
  },
  logo: {
    height: 80,
    width: 'auto',
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: '#1a1a1a',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.9rem',
    textDecoration: 'underline',
  },
  heroSection: {
    maxWidth: '800px',
    textAlign: 'center',
    marginBottom: '6rem',
  },
  heroText: {
    fontSize: '3rem',
    fontWeight: 700,
    fontFamily: `'Playfair Display', serif`,
    marginBottom: '1.5rem',
  },
  highlight: {
    color: '#1a1a1a',
  },
  heroSub: {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '2rem',
  },
  ctaBtn: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: '1rem',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  formSection: {
    width: '100%',
    maxWidth: '900px',
    marginBottom: '5rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  iframe: {
    border: '1px solid #ddd',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  },
  visionSection: {
    width: '100%',
    maxWidth: '1000px',
    padding: '4rem 1rem',
    marginBottom: '5rem',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
  },
  visionContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  visionImage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '1rem',
  },
  visionText: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: 1.6,
    maxWidth: '500px',
  },
  instaSection: {
    width: '100%',
    maxWidth: '1000px',
    padding: '4rem 1rem',
    marginBottom: '4rem',
    textAlign: 'center',
  },
  instaGrid: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  instaImage: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    objectFit: 'cover',
  },
  quoteSection: {
    margin: '4rem 1rem',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
  },
  quoteText: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#333',
    fontFamily: `'Playfair Display', serif`,
  },
  footer: {
    fontSize: '0.9rem',
    color: '#888',
    borderTop: '1px solid #eee',
    paddingTop: '2rem',
    textAlign: 'center',
    maxWidth: '1200px',
    width: '100%',
  },
  link: {
    color: '#1a1a1a',
    textDecoration: 'none',
    fontWeight: 500,
  },
};