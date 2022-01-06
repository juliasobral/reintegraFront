import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  idUsuario = environment.id
  usuario: Usuario = new Usuario()

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == ''){
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    
    this.buscarTemas()
    this.buscarPostagens()
  }

  buscarTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  getTemaById(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema=resp
    })
  }

  buscarPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=> {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  publicar(){
    this.tema.idTema = this.idTema
    // this.postagem.tema = this.tema

    this.usuario.idUsuario = this.idUsuario
    this.postagem.criador = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Publicado!')
      this.postagem = new Postagem()
      this.buscarPostagens()
    })
  }
}