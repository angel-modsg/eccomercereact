import { CartWidget } from "./CartWidget";
export const Navbar = () => {
    return (<div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" >La Nueva Carnicería</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Eventos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Tienda</a>
        </li>
      </ul>
      <CartWidget />
      <form className="d-flex" role="search">
      </form>
    </div>
  </div>

</nav>

        
</div>
        );
};
export default Navbar;