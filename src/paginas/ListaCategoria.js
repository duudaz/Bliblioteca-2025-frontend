import TituloLista from "../componentes/TituloLista"

export default function ListaCategoria() {
    return (
        <>
        <TituloLista titulo = "categorias" 
        descricao= "Gerencie aqui as categorias dos livros da biblioteca"
        rota= "/ListaCategoria" />

        <div className="table-responsive">
  <table className="table table-dark table-hover text-center align-middle">
    <thead>
      <tr>
        <th>#</th>
        <th>Primeiro Nome</th>
        <th>Sobrenome</th>
        <th>Usuário</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button className="btn btn-sm btn-secondary me-1">Editar</button>
          <button className="btn btn-sm btn-danger">Excluir</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>
          <button className="btn btn-sm btn-secondary me-1">Editar</button>
          <button className="btn btn-sm btn-danger">Excluir</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>Bird</td>
        <td>@twitter</td>
        <td>
          <button className="btn btn-sm btn-secondary me-1">Editar</button>
          <button className="btn btn-sm btn-danger">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    );
};