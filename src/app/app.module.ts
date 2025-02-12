import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importando o HttpClientModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Adicionando ao array de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
