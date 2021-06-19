import { Button } from 'reactstrap';
import './filter.css';


const PostStatusFilter = ({changeCategory}) => {
  return (
    <div className="btn-group">
      <Button onClick={() => { changeCategory('all') }} color="primary">All</Button>
      <Button onClick={() => { changeCategory('liked') }} outline color="secondary">Liked</Button>
    </div>
  )
}

export default PostStatusFilter;