import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Filmes = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  getFilme(event: any) {
    const filme = event.target.value;
    this.homeService.buscarFilme(filme).then(res => {
      this.Filmes = res.Search
      console.log(this.Filmes)
    });
  }
}
