import Link from 'next/link';
import CategoryBox from './CategoryBox';

export default function CategoriesList() {
  return (
    <div className="flex p-4">
      <ul className="flex justify-around w-1/2 m-auto">
        <li>
          <Link href="/t-shirts">
            <CategoryBox />
          </Link>
        </li>
        <li>
          <Link href="/hoodies">
            <CategoryBox />
          </Link>
        </li>
      </ul>
    </div>
  );
}
