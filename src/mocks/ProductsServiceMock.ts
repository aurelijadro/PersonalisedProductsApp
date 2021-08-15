import { Product } from "../utilities";
import productsResponse from "./productListMock.json";

class ProductsServiceMock {
  getProducts = (): Product[] => productsResponse.products;
}
export const productsServiceMock = new ProductsServiceMock();
