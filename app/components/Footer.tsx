'use client';

import { useState } from 'react';

const copyIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const checkIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const externalLinkIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const linkBase = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 0',
  margin: 0,
  border: 'none',
  background: 'none',
  fontFamily: "'Melodrama Light', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: '0.02em',
  color: '#000000',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
} as const;

const dividerStyle = {
  width: 1,
  height: 14,
  backgroundColor: 'rgba(0,0,0,0.35)',
  margin: '0 24px',
  flexShrink: 0,
} as const;

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('lucaswlorenzo@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (_) {}
  };

  const copyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('310.525.8734');
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (_) {}
  };

  return (
    <footer
      style={{
        marginTop: 100,
        paddingBottom: 48,
        textAlign: 'center',
        fontSize: 14,
        color: '#000000',
        fontFamily: "'Melodrama Light', sans-serif",
        fontWeight: 300,
      }}
    >
      <div
        style={{
          marginBottom: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px 0',
        }}
      >
        <a
          href="https://www.instagram.com/lucaswlorenzo/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkBase, position: 'relative' }}
          onMouseEnter={(e) => { setInstagramHover(true); e.currentTarget.style.opacity = '0.6'; }}
          onMouseLeave={(e) => { setInstagramHover(false); e.currentTarget.style.opacity = '1'; }}
        >
          Instagram
          <span
            style={{
              position: 'absolute',
              left: '100%',
              marginLeft: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: instagramHover ? 0.8 : 0,
              transition: 'opacity 0.2s ease',
            }}
          >
            {externalLinkIcon}
          </span>
        </a>
        <div style={dividerStyle} aria-hidden />
        <button
          type="button"
          onClick={copyEmail}
          style={{ ...linkBase, position: 'relative' }}
          onMouseEnter={(e) => { setEmailHover(true); e.currentTarget.style.opacity = '0.6'; }}
          onMouseLeave={(e) => { setEmailHover(false); e.currentTarget.style.opacity = '1'; }}
          aria-label="Copy email"
        >
          Lucaswlorenzo@gmail.com
          <span
            style={{
              position: 'absolute',
              left: '100%',
              marginLeft: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                opacity: emailHover || emailCopied ? (emailCopied ? 1 : 0.8) : 0,
                transition: 'opacity 0.2s ease',
              }}
            >
              {emailCopied ? checkIcon : copyIcon}
            </span>
          </span>
        </button>
        <div style={dividerStyle} aria-hidden />
        <button
          type="button"
          onClick={copyPhone}
          style={{ ...linkBase, position: 'relative' }}
          onMouseEnter={(e) => { setPhoneHover(true); e.currentTarget.style.opacity = '0.6'; }}
          onMouseLeave={(e) => { setPhoneHover(false); e.currentTarget.style.opacity = '1'; }}
          aria-label="Copy phone number"
        >
          310.525.8734
          <span
            style={{
              position: 'absolute',
              left: '100%',
              marginLeft: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                opacity: phoneHover || phoneCopied ? (phoneCopied ? 1 : 0.8) : 0,
                transition: 'opacity 0.2s ease',
              }}
            >
              {phoneCopied ? checkIcon : copyIcon}
            </span>
          </span>
        </button>
      </div>
      <div style={{ opacity: 0.8 }}>© All rights reserved</div>
    </footer>
  );
}
