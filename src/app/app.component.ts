import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dogImageUrl: string = '';
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getNewDog();
  }

  // Função para pegar nova imagem de cachorro
  getNewDog(): void {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(response => {
      this.dogImageUrl = response.message;
    });
  }
}
