import React, { useState } from "react";
import { ProductCard } from "..";
import { Product } from "../../utilities";
import "./ProductsList.scss";

type ProductListProps = {
  applicableProducts: Product[];
};

export function ProductsList(props: ProductListProps) {
  const { applicableProducts } = props;
  const savedSelectedProducts = sessionStorage.getItem("selectedProducts");
  const parsedProducts = savedSelectedProducts
    ? JSON.parse(savedSelectedProducts)
    : [];

  const [selectedProducts, setSelectedProducts] =
    useState<number[]>(parsedProducts);

  if (!applicableProducts.length) {
    return null;
  }

  const onSelectUpdate = (productId: number, isSelected: boolean) => {
    const currentSelectedProducts = [...selectedProducts];
    const index = currentSelectedProducts.findIndex((id) => id === productId);
    if (index !== -1 && !isSelected) {
      currentSelectedProducts.splice(index, 1);
    }
    if (index === -1 && isSelected) {
      currentSelectedProducts.push(productId);
    }
    setSelectedProducts(currentSelectedProducts);
    updateSavedProducts(currentSelectedProducts);
  };

  const updateSavedProducts = (newSavedProducts: number[]) => {
    sessionStorage.removeItem("selectedProducts");
    sessionStorage.setItem(
      "selectedProducts",
      JSON.stringify(newSavedProducts)
    );
  };

  const createProductCards = () => {
    return applicableProducts.map((product) => {
      const isSelected = selectedProducts.includes(product.id);
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          isSelected={isSelected}
          onSelectUpdate={onSelectUpdate}
        />
      );
    });
  };
  return (
    <div className="products-list-container">
      <h3>Select Products: </h3>
      {createProductCards()}
    </div>
  );
}
