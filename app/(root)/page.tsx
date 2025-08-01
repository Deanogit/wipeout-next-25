import { getLatestProducts } from '../lib/actions/product.actions';
import ProductList from '@/components/shared/product/productList';

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}
