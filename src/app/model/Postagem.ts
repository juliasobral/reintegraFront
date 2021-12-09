import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public area: string
    public data: Date
    public criador: Usuario
    public temaRelacionado: Tema
}