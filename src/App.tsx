import React, { useState } from "react";
import { ClientForm, ProductsList } from "./components";
import { Client, filterApplicableProducts, Product } from "./utilities";
import { productsServiceMock } from "./mocks/ProductsServiceMock";
import "./App.scss";

function ClientApp() {
  const savedProducts = sessionStorage.getItem("clientProducts");
  const parsedProducts = savedProducts ? JSON.parse(savedProducts) : [];
  const [applicableProducts, setApplicableProducts] =
    useState<Product[]>(parsedProducts);

  const getApplicableProducts = async (client: Client) => {
    const products = productsServiceMock.getProducts();
    const applicableProducts = products.filter((product) =>
      filterApplicableProducts(product, client)
    );
    setApplicableProducts(applicableProducts);
    sessionStorage.removeItem("clientProducts");
    sessionStorage.setItem(
      "clientProducts",
      JSON.stringify(applicableProducts)
    );
  };

  return (
    <div className="App">
      <ClientForm onSubmit={getApplicableProducts} />
      <ProductsList applicableProducts={applicableProducts} />
    </div>
  );
}

export default ClientApp;
