'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SCROLL_THRESHOLD = 20;

const HANDS_IMAGES = [
  '/media/hands/hands1.jpg',
  '/media/hands/hands2.jpg',
  '/media/hands/hands3.jpg',
  '/media/hands/hands4.jpg',
  '/media/hands/hands5.jpeg',
];

const ABOUT_HEADSHOT = '/media/About Page/headshots/lucaslorenzo_headshotportrait.png';

function preloadHandsImages() {
  HANDS_IMAGES.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function preloadAboutHeadshot() {
  const img = new Image();
  img.src = ABOUT_HEADSHOT;
}

const MENU_CLOSE_DURATION = 380;

const linkStyle = {
  fontSize: 'clamp(14px, 1.5vw, 18px)',
  textDecoration: 'none' as const,
  fontFamily: "'Manrope Light', sans-serif",
  fontWeight: 300,
  letterSpacing: '0.05em',
  opacity: 0.9,
  transition: 'opacity 0.3s ease',
  display: 'block',
  padding: '10px 0',
};

type MenuDropdownProps = {
  textColor?: string;
  hideOnScroll?: boolean; /* true = hide when scrolled (default); false = stay visible on home/gallery */
};

export default function MenuDropdown({ textColor = '#000000', hideOnScroll = true }: MenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const navTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    return () => {
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsOpen(false);
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    navTimeoutRef.current = setTimeout(() => {
      navTimeoutRef.current = null;
      isNavigatingRef.current = false;
      router.push(href);
    }, MENU_CLOSE_DURATION);
  };

  useEffect(() => {
    if (!hideOnScroll) return;
    function handleScroll() {
      const atTop = window.scrollY <= SCROLL_THRESHOLD;
      setIsAtTop(atTop);
      if (!atTop) setIsOpen(false);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideOnScroll]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'fixed',
        top: 'clamp(24px, 4vw, 40px)',
        right: 'clamp(24px, 4vw, 40px)',
        zIndex: 9999,
        pointerEvents: hideOnScroll && !isAtTop ? 'none' : 'auto',
        opacity: hideOnScroll && !isAtTop ? 0 : 1,
        transition: 'opacity 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
          width: 32,
          height: 32,
          padding: 0,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
          }}
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 1.5,
              backgroundColor: textColor,
              borderRadius: 1,
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              /* First in column → left after -90deg; move down (negative X in rotated frame = down) so left is lowest */
              transform: isOpen ? 'translateX(-16px)' : 'translateX(0)',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 1.5,
              backgroundColor: textColor,
              borderRadius: 1,
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              /* Middle; move down slightly so cascade upward left→right */
              transform: isOpen ? 'translateX(-8px)' : 'translateX(0)',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 1.5,
              backgroundColor: textColor,
              borderRadius: 1,
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              /* Third in column → right after -90deg (originally bottom); stays on axis */
              transform: 'translateX(0)',
            }}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className="menu-dropdown-links"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 16,
            textAlign: 'right',
          }}
        >
          <Link
            href="/work"
            style={{ ...linkStyle, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onClick={(e) => handleLinkClick(e, '/work')}
          >
            Work
          </Link>
          <Link
            href="/hands"
            style={{ ...linkStyle, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              preloadHandsImages();
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onClick={(e) => handleLinkClick(e, '/hands')}
          >
            Hands
          </Link>
          <Link
            href="/about"
            style={{ ...linkStyle, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              preloadAboutHeadshot();
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onClick={(e) => handleLinkClick(e, '/about')}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}
