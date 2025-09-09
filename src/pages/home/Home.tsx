import { Link } from 'react-router-dom'
import '../../index.css'

function Home() {
  return (
    <>
      <div className="bg-green-700 flex justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white items-center py-10 px-4 gap-8">

          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              Bem-vindo à Farmácia Saúde+
            </h2>
            <p className="text-lg md:text-xl">
              Aqui você encontra os melhores produtos para o seu bem-estar e saúde.
            </p>

            <div className="flex gap-4">
              <Link to="/produtos" className="bg-white text-green-700 px-6 py-2 rounded hover:bg-gray-100 transition">
                Ver Produtos
              </Link>
              <Link to="/categorias" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-green-700 transition">
                Ver Categoria
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia28671/atendente-de-farmacia-cpt.jpg"
              alt="Imagem de farmácia"
              className="w-2/3 md:w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* <ListaProdutos /> */}
    </>
  )
}

export default Home
