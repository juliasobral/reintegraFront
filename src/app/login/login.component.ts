import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin=  new UsuarioLogin()

  foto: string = environment.foto
  nome: string = environment.nome

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp
      
      environment.foto = this.usuarioLogin.foto
      environment.tipo = this.usuarioLogin.tipo
      environment.nome = this.usuarioLogin.nomeCompleto
      environment.email = this.usuarioLogin.email
      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id

      console.log(environment)

      this.router.navigate(['/sobrenos'])
    }, erro => {
      if (erro.status == 401) {
        alert("Usuário e/ou senha inválidos!")
      }
    })
  }
}
