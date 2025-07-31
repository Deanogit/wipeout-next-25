import Image from 'next/image';
import localsBox from '@/public/locals-box.webp';

export default function CategoryBox() {
  return (
    <div className="p-4 flex relative">
      <Image
        src={localsBox}
        alt="Wipeout bodyboarder deep in the barrel"
        width={685}
        height={685}
        priority
      />
      <div className="absolute w-full h-full flex items-center justify-center">
        <h3 className="-translate-4 ">Hello</h3>
      </div>
    </div>
  );
}
