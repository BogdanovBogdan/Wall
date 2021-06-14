import { Button } from 'reactstrap';
import './filter.css';


const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="primary">All</Button>
      <Button outline color="secondary">Liked</Button>
    </div>
  )
}

export default PostStatusFilter;