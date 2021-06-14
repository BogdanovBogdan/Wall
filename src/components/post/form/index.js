import './form.css';

const Form = ({addItem}) => {
  return (
    <form className="bottom-panel d-flex" onSubmit={(event) => { event.preventDefault(); addItem('Privet'); }}>
      <input type="text" placeholder="Type something" className="form-control new-post-label"/>
      <button type="submit" className="btn btn-outline-secondary">Add</button>
    </form>
  )
}

export default Form;