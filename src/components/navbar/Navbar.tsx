import { Link } from 'react-router-dom'
import { FirstAid } from 'phosphor-react'

function Navbar() {
  function logout() {
    alert("Usuário deslogado com sucesso!")
  }

  return (
    <div className="w-full flex justify-center py-4 bg-green-700 text-white">
      <div className="container flex justify-between items-center text-lg px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FirstAid size={28} className="text-white" />
          Farmácia
        </Link>

        {/* navegação */}
        <div className="flex gap-4">
          {/* <Link to="/produtos" className="hover:underline">Produtos</Link> */}
          <Link to="/categorias" className="hover:underline">Categoria</Link>
          <Link to="/cadastrarcategoria" className="hover:underline">Cadastrar Categoria</Link>
          <span
            onClick={logout}
            className="hover:underline cursor-pointer"
          >
            Sair
          </span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
