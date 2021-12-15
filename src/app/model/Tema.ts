import { Postagem } from "./Postagem"

export class Tema{
    public descricao: string
    public idTema: number
    public areas: string
    public tipoVagas: string
    public localizacao: string
    public postagens: Postagem[]
}