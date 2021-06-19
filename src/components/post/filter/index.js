import { Component } from 'react';
import { Button } from 'reactstrap';
import './filter.css';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { category: 'all', text: 'all' },
      { category: 'liked', text: 'liked' },
    ];
  }

  render() {
    const { activeCategory, changeCategory } = this.props;

    const buttons = this.buttons.map(({ category, text }) => {
      const isActive = activeCategory === category;
      const className = isActive ? 'primary' : 'secondary';
      console.log({ category, activeCategory, isActive, className });
      return (
        <Button
          key={category}
          type='button'
          outline={!isActive}
          color={className}
          onClick={() => changeCategory(category)}
        >
          {text}
        </Button>
      );
    });

    return <div className='btn-group'>{buttons}</div>;
  }
}
