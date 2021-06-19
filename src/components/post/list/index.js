import './list.css'

import PostListItem from './listItem';

const PostList = ({data, onClickTrash, toggleStarItem, toggleLikeItem}) => {
  const items = data.map((item) => {
    const { id, ...itemProps } = item;
    return <PostListItem 
      {...itemProps}
      key={id}
      onClickTrash={() => { onClickTrash(id) }}
      onClickStar={(event) => { event.stopPropagation(); toggleStarItem(id) }}
      onClickLike={() => { toggleLikeItem(id) }}
    />
  })

  return (
    <ul className="app-list list-group">
      {items}
    </ul>
  )
}

export default PostList;