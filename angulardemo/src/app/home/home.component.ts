import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { User } from '../models/user';
const HEROES = [
  { id: 1, name: "Superman" },
  { id: 2, name: "Batman" },
  { id: 3, name: "BatGirl" },
  { id: 4, name: "Robin" },
  { id: 4, name: "Flash" }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `<H1> Home</H1> <p> Sunt componenta Home</p>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Componenta Home !';
  salut: string = "Bine ati venit la cursul 2"
  la: string = "LinkAcademy"

  heroes = HEROES;

  user: User = {
    id: 1,
    prenume: 'Cosmin',
    name: 'Petrachescu',
    email: 'b00190588t@gmail.com'
  };
  image: string = 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png';
  showImage: boolean = true;
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.showAlert("Salut Mihai");
  }

  apiseazaImagine() {
    this.showImage = !this.showImage;
  }

}
