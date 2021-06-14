import React from "react";

export default class PostListItem extends React.Component {
  render() {
    const { 
      text, 
      starred, 
      liked, 
      onClickTrash, 
      onClickStar, 
      onClickLike } = this.props;
    const className = `list-group-item app-list-item d-flex justify-content-between ${starred ? 'important': ''} ${liked ? 'like': ''}`;
    return (
      <li className={className} onClick={onClickLike}>
        <span className="app-list-item-label">{ text }</span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={onClickStar}>
            <i className="fas fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onClickTrash}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </li>
    );
  }
}
