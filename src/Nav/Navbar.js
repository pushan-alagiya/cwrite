import "../Nav/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-header">
        <span id="c">C</span>
        <span id="write">write</span>
      </h1>
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">New Blog</a>
          </li>
          <li>
            <a href="/edit">Edit</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
