import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // déclaration sans préfix
  title = 'Gestion des contacts';

  // déclaration d'un objet 
  unContact = [
    { 
        id: 1,
        name: 'yanus'
    },
    {   
        id:2,
        name: 'bouliste'
    },
    { 
      id: 3,
      name: 'timmy'
    },
    {   
        id:4,
        name: 'aie'
    }
];
}
