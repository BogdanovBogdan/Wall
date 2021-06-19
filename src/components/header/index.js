import React from 'react';
import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getLikeCount = this.getLikeCount.bind(this);
  }

  getLikeCount(data) {
    return data.filter(item => item.liked).length;
  }
  
  render() {
    const { userName, data } = this.props;
    return (
      <div className="app-header d-flex">
        <h1>{userName}</h1>
        <h2>{data.length} posts, {this.getLikeCount(data)} liked</h2>
      </div>
    )
  }
}
