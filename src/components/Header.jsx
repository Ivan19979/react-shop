function Header() {
  return (
    <nav className="indigo">
      <div className="nav-wrapper">
        <a href="https://github.com/michey85" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Ivan19979">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
