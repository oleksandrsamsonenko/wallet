import { Link } from 'react-router-dom';

function Links() {
  return (
    <ul>
      <Link to="/auth">Auth</Link>
      <Link to="/">Home</Link>
    </ul>
  );
}

export default Links;
