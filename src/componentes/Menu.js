export default function Menu() {
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <i class="bi bi-journal-bookmark-fill me-2"></i>
          <span class="brand-text">Biblioteca</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/listarcategorias">
                <i class="bi bi-list-ul"></i> Listagem
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/categoria">
                <i class="bi bi-pencil-square"></i> Cadastro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}