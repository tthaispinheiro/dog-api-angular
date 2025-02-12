import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dogImageUrl: string | undefined;

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.getDogImage().subscribe((data) => {
      this.dogImageUrl = data[0].url;
    });
  }
}
