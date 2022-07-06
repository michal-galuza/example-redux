import { IBasket } from "../entity/basket.interface";

export class LSRepository {
  private createInitialBasket(basketId: string): IBasket {
    const newBasket: IBasket = { products: [], id: basketId };
    localStorage.setItem(basketId, JSON.stringify(newBasket));

    return newBasket;
  }

  public getBasket(basketId: string): IBasket {
    const basket = localStorage.getItem(basketId);

    if (!basket) {
      return this.createInitialBasket(basketId);
    }

    return JSON.parse(basket);
  }

  public updateBasket(basket: IBasket): void {
    localStorage.setItem(basket.id, JSON.stringify(basket));
  }
}
// If u wan't make it better, smth like DI.
export const LSRepositoryInstance = new LSRepository();
