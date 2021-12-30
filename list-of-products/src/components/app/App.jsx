import React, { useState, useEffect } from "react"
import "../../styles/main.scss"
import { ErrorBoundary } from "../error-boundary/ErrorBoundary"
import { loadListProduct } from "../../list-app/ListApp"
import { ProductList } from "../../list-app/ProductList"
import { Form } from "../Form"
import { Confirm } from "../Confirm"

export const App = () => {

  const [listProduct, setListProduct] = useState(null)
  const [isArrTaskLoaded, setIsArrTaskLoaded] = useState(false);

  useEffect(() => {
    loadListProduct().then((data) => {
      setListProduct(data);
      setIsArrTaskLoaded(true);
    });
  }, []);

  if (!isArrTaskLoaded) {
    return <div>load...</div>;
  }

  const deleteTask = (id) => {
    const copyArrTask = [...listProduct];
    const deletElement = copyArrTask.filter((item) => item.id !== id);
    setListProduct(deletElement);
  };

  const addedTask = (data) => {
    const arrWithNewTask = [...listProduct];
    arrWithNewTask.push(
      {
        id: Date.now(),
        imageUrl: "https://icon-library.com/images/none-icon/none-icon-23.jpg",
        name: data,
        count: 4,
        size: {
          width: "-",
          height: "-"
        },
        weight: "- g",
        comments: [
          {
            id: 3,
            productId: 3,
            description: "-",
            date: "-"
          },
          "CommentModel"]
      });
    setListProduct(arrWithNewTask)
  };


  return (
    <>
      <ErrorBoundary>
        <div className="app">
          <ProductList
            listProduct={listProduct}
            deleteTask={deleteTask} />
        </div>
        <div className={"addTasks"}>
          <Form addedTask={addedTask} />
        </div>
        <Confirm/>
      </ErrorBoundary>
    </>
  )
}