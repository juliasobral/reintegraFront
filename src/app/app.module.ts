import { HttpClientModule }from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastro/cadastro.component';
import { PostagensComponent } from './postagens/postagens.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    PostagensComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
