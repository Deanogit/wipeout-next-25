import products from '@/app/data/products.json';
import type { Products, Product } from '@/app/types/index';

export async function getAllProducts(): Promise<Products> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in links.json for now.
  return products;
}

export async function getProductById(id: string | number): Promise<Product> {
  // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
  const foundProduct = products.find(
    (product: Product) => product.id.toString() === id.toString()
  );
  if (!foundProduct) {
    throw new Error(`Product with id ${id} not found`);
  }
  return foundProduct;
}
