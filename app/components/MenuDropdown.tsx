'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const linkStyle = {
  fontSize: 'clamp(14px, 1.5vw, 18px)',
  textDecoration: 'none' as const,
  fontFamily: "'Melodrama Light', sans-serif",
  fontWeight: 300,
  letterSpacing: '0.05em',
  opacity: 0.9,
  transition: 'opacity 0.3s ease',
  display: 'block',
  padding: '10px 0',
};

type MenuDropdownProps = {
  textColor?: string;
};

export default function MenuDropdown({ textColor = '#000000' }: MenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        pointerEvents: 'auto',
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
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/hands"
            style={{ ...linkStyle, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onClick={() => setIsOpen(false)}
          >
            Hands
          </Link>
          <Link
            href="/about"
            style={{ ...linkStyle, color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}
