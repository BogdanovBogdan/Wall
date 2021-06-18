import './panel.css';

const SearchPanel = ({onChange}) => {
  return (
    <input 
      className="form-control search-input"
      type="text"
      placeholder="Search by posts"
      onChange={onChange}
    />
  )
}

export default SearchPanel;