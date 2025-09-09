import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { buscar, deletar } from '../../../services/Service';
import type Categoria from '../../../model/Categoria';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome_categoria: '' });
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  function retornar() {
    navigate('/categorias');
  }

  async function deletarCategoria() {
    try {
      setIsLoading(true);
      await deletar(`/categorias/${id}`);
      alert('Categoria deletada com sucesso!');
      navigate('/categorias');
    } catch (error) {
      console.error(error);
      alert('Erro ao deletar a categoria!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-green-500 text-white font-bold text-2xl'>
          Categoria
        </header>

        <p className='p-8 text-3xl bg-slate-100 h-full'>
          {categoria.nome_categoria}
        </p>

        <div className='flex'>
          <button
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
            onClick={retornar}
          >
            Não
          </button>

          <button
            className='w-full text-slate-100 bg-emerald-500 hover:bg-emerald-700 flex items-center justify-center'
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
