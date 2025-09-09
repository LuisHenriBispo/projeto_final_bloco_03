import { InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  const data = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-green-700 text-white">
      <div className="container flex flex-col items-center py-4 px-4 text-center">
        <p className="text-xl font-bold">
          Farmácia Saúde+ | © {data}
        </p>
        <p className="text-lg mt-1">Acesse nossas redes sociais</p>
        <div className="flex gap-4 mt-2">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <LinkedinLogo size={32} weight="fill" className="hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramLogo size={32} weight="fill" className="hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookLogo size={32} weight="fill" className="hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}
