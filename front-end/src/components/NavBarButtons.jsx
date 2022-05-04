import React from 'react';

export default function NavBarButtons() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href="myOrders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="myUser"
            data-testid=" customer_products__element-navbar-user-full-name"
          >
            USUÁRIO AQUI
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="exit"
            data-testid="customer_products__element-navbar-link-logout"
          >
            SAIR
          </a>
        </li>
      </ul>
    </div>
  );
}
