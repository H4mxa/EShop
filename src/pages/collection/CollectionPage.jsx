import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "redux/shop/shop.selector";

// import CollectionItem from "components/collection-item/CollectionItem";

import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>collection page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
