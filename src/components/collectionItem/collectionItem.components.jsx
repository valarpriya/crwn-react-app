import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ imageUrl, name, price }) => (
  <div className="collection-item">
    <div
      className="img"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>
  </div>
);

export default CollectionItem;
