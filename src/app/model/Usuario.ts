import { Postagem } from "./Postagem"

export class Usuario{
    public idUsuario: number
    public nomeCompleto: string
    public email: string
    public foto: string
    public senha: string
    public tipo: string
    public minhasPostagens: Postagem[]
}