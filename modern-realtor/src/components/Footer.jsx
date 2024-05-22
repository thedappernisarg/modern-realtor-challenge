const Footer = () => (
  <>
    <footer>
      <div className="container">
        <footer className="footer">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Link1
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Link2
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Link3
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Link4
              </a>
            </li>
          </ul>
          <div className="text-center text-body-secondary">
            &copy; {new Date().getFullYear()}
            <a href="https://www.modernrealtor.co/"> Modern Realtor</a>
          </div>
        </footer>
      </div>
    </footer>
  </>
);
export default Footer;
