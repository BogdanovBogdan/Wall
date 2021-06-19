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
      searchText: '',
      activeCategory: 'all',
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.searchPosts = this.searchPosts.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
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

  onChangeSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  searchPosts() {
    const { searchText, data } = this.state;
    if (searchText === '') return data;
    return data.filter((item) => item.text.includes(searchText));
  }

  onChangeCategory(category) {
    this.setState({ activeCategory: category });
  }

  filterPosts(visiblePosts) {
    const { activeCategory } = this.state;
    if (activeCategory === 'all') return visiblePosts;
    return visiblePosts.filter((item) => item[activeCategory]);
  }

  render() {
    const visiblePosts = this.searchPosts();
    const filteredPosts = this.filterPosts(visiblePosts);

    return (
      <div className="app">
        <Header userName={this.state.userName} data={this.state.data}/>
        <div className="search-pandel d-flex">
          <SearchPanel onChange={this.onChangeSearch}/>
          <PostStatusFilter 
            activeCategory={this.state.activeCategory}
            changeCategory={this.onChangeCategory}
          />
        </div>
        <PostList 
          data={filteredPosts}
          onClickTrash={this.deleteItem}
          toggleStarItem={(id) => this.toggleItem(id, 'starred')}
          toggleLikeItem={(id) => this.toggleItem(id, 'liked')}/>
        <PostForm addItem={this.addItem}/>
      </div>
    )
  }
}