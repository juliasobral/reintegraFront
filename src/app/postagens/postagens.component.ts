import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  constructor(
    private temaService: TemaService
  ) { }

  ngOnInit() {
    this.findAllTema()
  }

  findAllTema(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
      this.listaTemas =  resp
    })
  }

}
