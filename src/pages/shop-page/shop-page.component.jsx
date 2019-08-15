import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop-page.style.scss";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
