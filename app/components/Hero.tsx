import Image from 'next/image';
import salvaHero from '@/public/salva-bg-sm.jpg';

export default function Hero() {
  return (
    <Image
      src={salvaHero}
      alt="Technical Zavial"
      width={9792}
      height={7344}
      className="h-64 md:h-96 lg:h-120 w-full object-cover max-w-7xl mx-auto"
      priority
    />
  );
}
