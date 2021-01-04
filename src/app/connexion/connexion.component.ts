import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    console.log(f);
    this.authService.login(f.value).subscribe(
      rep => {
          const helper = new JwtHelperService();
          console.log(rep);
          const decodedToken = helper.decodeToken(Object.values(rep)[0]);
          console.log(decodedToken.roles[0]);
          if (decodedToken.roles[0] === 'ROLE_ADMIN'){
            this.route.navigate(['/users']);
          }else{
            this.route.navigate(['/auth']);
          }
      }
    ) ;
  }

}
