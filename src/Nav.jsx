import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#000" }}>
      <div className="container-fluid">
        <div className="navbar-nav">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Link to="/Scp_Foundation" className="nav-link">
              <h1 className="TitleNav">SCP Foundation</h1>
            </Link>

            <Link to="/scp_Home">
              <button
                className="nav-link active"
                aria-current="page"
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.2rem",
                }}
              >
                Files
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
