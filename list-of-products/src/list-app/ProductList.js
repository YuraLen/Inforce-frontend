import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductList = ({listProduct, deleteTask, modalActive, setModalActive}) => (
  <div className={"productListBorder"}>
    {listProduct.map((product) => (
      <ProductItem
        key={product.id}
        {...product}
        deleteTask={deleteTask}
        active={modalActive}
        setActive={setModalActive}
      />
    ))}
  </div>
);