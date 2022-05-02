import React from 'react';
// import Button from 'react-bootstrap/esm/Button';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PRODUTOS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">MEUS PEDIDOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">USUÁRIO AQUI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SAIR</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>    
  );
}
 export default Navbar;