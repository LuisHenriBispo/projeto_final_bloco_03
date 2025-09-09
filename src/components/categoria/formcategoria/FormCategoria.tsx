import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";

function FormCategoria() {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      alert("Erro ao carregar categoria para edição.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function salvarCategoria(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsLoading(true);

  try {
    if (id) {
      // Atualizar categoria enviando id na URL
      await atualizar(`/categorias/${id}`, categoria, setCategoria);
      alert("Categoria atualizada com sucesso!");
    } else {
      // Cadastrar nova categoria
      await cadastrar("/categorias", categoria, setCategoria);
      alert("Categoria cadastrada com sucesso!");
    }
    retornar();
  } catch (error) {
    console.error("Erro ao salvar categoria:", error);
    alert("Erro ao salvar categoria.");
  } finally {
    setIsLoading(false);
  }
}


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={salvarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome_categoria">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome_categoria"
            value={categoria.nome_categoria || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <button
          className="rounded text-slate-100 bg-emerald-500 hover:bg-emerald-700 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
