import { IProduct, productMocks } from "../../products";

export class ProductsRepository {
  products = productMocks;

  public findProduct(productId: string): IProduct | null {
    return this.products.find((p) => p.id === productId) || null;
  }
}

// If u wan't make it better, smth like DI.
export const ProductsRepositoryInstance = new ProductsRepository();
