import React from "react";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";
import SHOP_DATA from "./shop.data";

import './shop.styles.scss'

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    let { collections } = this.state;
    return (
      <div className="collections">
          <h1>Collections</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          >hey</CollectionPreview>
        
        ))}
      </div>
    );
  }
}

export default ShopPage;
