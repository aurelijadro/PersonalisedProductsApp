import React from "react";
import "./ProductCard.scss";

type ProductCardProps = {
  title: string;
  id: number;
  isSelected: boolean;
  onSelectUpdate: (id: number, isSelected: boolean) => void;
};

export function ProductCard(props: ProductCardProps) {
  const { id, title, isSelected, onSelectUpdate } = props;
  return (
    <div className="product-card">
      <label>
        <input
          type="checkbox"
          onChange={(e) => onSelectUpdate(id, !isSelected)}
          checked={isSelected}
        />
        {title}
      </label>
    </div>
  );
}
