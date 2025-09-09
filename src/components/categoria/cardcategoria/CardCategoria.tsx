import { Link } from "react-router-dom"
import type Categoria from "../../../model/Categoria"
import { PencilSimple, Trash } from "phosphor-react"

interface CardCategoriaProps {
    categoria: Categoria
}
function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-green-500 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-100 h-full'>{categoria.nome_categoria}</p>

            <div className="flex">
                <Link
                    to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-white bg-emerald-500 hover:bg-emerald-700 
    flex items-center justify-center gap-2 py-2'
                >
                    <PencilSimple size={20} weight="bold" />
                    <span>Editar</span>
                </Link>

                <Link
                    to={`/deletarcategoria/${categoria.id}`}
                    className='w-full text-white bg-red-400 hover:bg-red-700 
    flex items-center justify-center gap-2 py-2'
                >
                    <Trash size={20} weight="bold" />
                    <span>Deletar</span>
                </Link>
            </div>

        </div>
    )

}
export default CardCategoria