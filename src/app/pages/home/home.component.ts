import { afterNextRender, Component, OnInit } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  //   try {
  //     // Tentando acessar a geolocalização, que não estará disponível no servidor
  //     navigator.geolocation.getCurrentPosition(position => {
  //       console.log('Latitude:', position.coords.latitude);
  //     });
  //   } catch (error) {
  //     console.error('Erro ao acessar a geolocalização no servidor:', error);
  //   }
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
  //https://v17.angular.io/guide/lifecycle-hooks

  constructor() {
    afterNextRender(() => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            console.log('Latitude:', position.coords.latitude);
            console.log('Precisão:', position.coords.accuracy);
            console.log('Timestamp:', position.timestamp);
          });
        } else {
          console.error('Geolocalização não suportada no navegador.');
        }
      } catch (error) {
        console.error('Erro ao acessar a geolocalização no servidor:', error);
      }
    });
  }

  

  
}
