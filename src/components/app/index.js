import './app.css';

import Header from "../header";
import SearchPanel from "../search";
import PostStatusFilter from "../post/filter";
import PostList from "../post/list";
import PostForm from "../post/form";
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Bogdanov Bogdan',
      data: [
        {text: 'Lorem ipsum dolor sit.', starred: true, liked: false, id: 21},
        {text: 'Lorem ipsum dolor sit amet.', starred: false, liked: true, id: 32},
        {text: 'Lorem ipsum dolor sit amet consectetur.', starred: false, liked: false, id: 12},
      ],
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleLikeItem = this.toggleLikeItem.bind(this);
    this.toggleStarItem = this.toggleStarItem.bind(this);
  }

  toggleItem(id, itemName) {
    this.setState(({ data }) => {
      const updatedData = data.map(item => {
        if (item.id !== id) return item;
        return { ...item, [itemName]: !item[itemName] };
      })
      return { data: updatedData };
    })
  }
  
  toggleLikeItem(id) {
    this.toggleItem(id, 'liked');
  }

  toggleStarItem(id) {
    this.toggleItem(id, 'starred');
  }
  
  deleteItem(id) {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addItem(text) {
    this.setState(({ data }) => {
      const newItem = {text, starred: false, id: Math.floor(Math.random() * 100)};
      return { data: [...data, newItem] };
    });
  }
  
  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <Header userName={this.state.userName} data={this.state.data}/>
        <div className="search-pandel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList 
          data={data} 
          onClickTrash={this.deleteItem}
          toggleStarItem={this.toggleStarItem}
          toggleLikeItem={this.toggleLikeItem}/>
        <PostForm addItem={this.addItem}/>
      </div>
    )
  }
}