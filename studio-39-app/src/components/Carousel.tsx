import { useEffect, useState } from 'react';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [
    '/images/studio1.png',
    '/images/studio2.png',
    '/images/studio3.png',
    // '/images/logo1.png',
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIndex((index + 1) % images.length), 3000);
    return () => clearTimeout(timer);
  }, [index, images.length]);
  return (
    <div className="flex justify-center">
      <img src={images[index]} alt="dj" className="w-auto" />
    </div>
  );
}