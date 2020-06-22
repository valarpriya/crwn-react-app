import React from "react";

import "./CollectionPreview.styles.scss";
import CollectionItem from "../collectionItem/collectionItem.components";

const CollectionPreview = ({ items, title }) => (
  <div className="previewList">
    <div className="title">{title}</div>
    <div className="itemList">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => {
          return <CollectionItem key={id} {...otherItemProps}></CollectionItem>;
        })}
    </div>
  </div>
);

export default CollectionPreview;
