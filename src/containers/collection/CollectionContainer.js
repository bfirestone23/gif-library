import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import CollectionPreview from "../../components/collection/CollectionPreview";
import Collection from "../../components/collection/Collection";
import LikesContainer from "../likes/LikesContainer";
import { likeCollection } from "../../actions/collections";

class CollectionContainer extends Component {
  renderPreview = () => {
    if (this.props.collection.gifs.length === 0) {
      return <div>No gifs have been added to this collection.</div>;
    } else {
      return (
        <CollectionPreview
          collection={this.props.collection}
          removeGif={this.props.removeGif}
        />
      );
    }
  };

  renderButton = () => {
    if (this.props.collection.user.username === this.props.currentUser) {
      return (
        <Button
          variant="danger"
          size="sm"
          style={{ top: ".5rem", left: ".5rem" }}
          className="position-absolute py-0 m-1 w-auto align-text-center"
          onClick={() => this.props.removeCollection(this.props.collection.id)}
        >
          X
        </Button>
      );
    }
  };

  renderLikesContainer = () => {
    return (
      <LikesContainer
        likeCollection={this.props.likeCollection}
        likes={this.props.collection.likes}
        collectionId={this.props.collection.id}
      />
    );
  };

  render() {
    return (
      <div>
        <Collection
          renderPreview={this.renderPreview}
          renderButton={this.renderButton}
          removeCollection={this.props.removeCollection}
          collection={this.props.collection}
          renderLikes={this.renderLikesContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.username,
  };
};

export default connect(mapStateToProps, { likeCollection })(
  CollectionContainer
);
