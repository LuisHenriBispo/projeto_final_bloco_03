import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const buscar = async (url: string, setDados: Function, config: Object = {} ) => {
  const resposta = await api.get(url, config);
  setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, config: Object = {} ) => {
  const resposta = await api.post(url, dados, config);
  setDados(resposta.data);
};

export const atualizar = async (url: string, dados: Object, setDados: Function, config: Object = {} ) => {
  const resposta = await api.put(url, dados, config);
  setDados(resposta.data);
};

export const deletar = async ( url: string, config: Object = {} ) => {
  await api.delete(url, config);
};
