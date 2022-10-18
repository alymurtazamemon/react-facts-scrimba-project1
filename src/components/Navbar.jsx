import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <nav className="nav">
      <img src={reactLogo} className="nav-logo"></img>
      <h3 className="nav-title">ReactFacts</h3>
      <h4 className="nav-item">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
