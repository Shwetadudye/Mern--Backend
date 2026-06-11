import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      style={{
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;