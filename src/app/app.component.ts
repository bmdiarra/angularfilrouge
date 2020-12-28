import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changemenuvar = false;

  usersmenu(): void{
    this.changemenuvar = true;
  }

  parametremenu(): void{
    this.changemenuvar = false;
  }
}
