'use client';

import { useEffect } from 'react';

const HANDS_IMAGES = [
  '/media/hands/hands1.jpg',
  '/media/hands/hands2.jpg',
  '/media/hands/hands3.jpg',
  '/media/hands/hands4.jpg',
  '/media/hands/hands5.jpeg',
];

const ABOUT_HEADSHOT = '/media/About Page/headshots/lucaslorenzo_headshotportrait.png';

export default function HandsImagePreloader() {
  useEffect(() => {
    HANDS_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const headshot = new Image();
    headshot.src = ABOUT_HEADSHOT;
  }, []);
  return null;
}
