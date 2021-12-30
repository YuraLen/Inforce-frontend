import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const ProductItem = (p) => {
  const { id, imageUrl, name, size, comments, weight, deleteTask } = p;

  const [modalActive, setModalActive] = useState(false)

  const imageListSize = {
    weight: "90px",
    height: "90px"
  }

  const imagePopupSize = {
    weight: "130px",
    height: "130px"
  }
  
  const del = () => {
    deleteTask(id);
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="main-info-container">
          <div className="main-info">
            <div className="product-image">
              <img style={imagePopupSize} src={imageUrl} />
            </div>
            <div className="other-info">
              <p id="productName">{name}</p>
              <p>Size: {size.width} x {size.height}</p>
              <p id="productWeight">Weight: {weight}</p>
            </div>
          </div>
          <div className="discAndTakeTo">
            <p>Description: {comments[0].description}</p>
            <p>Take to: {comments[0].date}</p>
          </div>
        </div>
      </Modal>
      <div onClick={() => setModalActive(true)} className={"box"}>
        <img style={imageListSize} src={imageUrl} />
        <p>{name}</p>
        <p>Weight: {weight}</p>
        <p>Take to: {comments[0].date}</p>
        <button className="btnDelete" onClick={del}>X</button>
      </div>
    </>
  );
};