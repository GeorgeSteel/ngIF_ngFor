import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar = true;

  frase:any = {
    mensaje: 'Yo solo se, que no se nada',
    autor: 'Socrates'
  };

  personajes:string[] = ['Spider-Man', 'Venom', 'Green Goblin', 'Sandman', 'Hammerhead'];
}
