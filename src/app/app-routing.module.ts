import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PostagensComponent } from './postagens/postagens.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'cadastro', component: CadastrarComponent},
{path: 'postagens', component: PostagensComponent},
{path: 'sobrenos', component: SobreNosComponent},
{path: 'tema', component: TemaComponent},

// {path: 'tema-edit/:id', _component: TemaEditComponent,
// get component() {
//     return this._component;
//   },
// set component(value) {
//     this._component = value;
//   },
// },
// {path: 'tema-delete/id', _component_1: TemaDeleteComponent,
// get component() {
//     return this._component_1;
//   },
// set component(value) {
//     this._component_1 = value;
//   },
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
