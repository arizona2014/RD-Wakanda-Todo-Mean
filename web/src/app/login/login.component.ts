import { Component, OnInit } from '@angular/core';
import { Wakanda } from '../wakanda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [Wakanda],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  ngOnInit() {}
  constructor(public wakanda: Wakanda, public router: Router) { }

  login() {
    this.wakanda.directory.login(this.name, this.password)
    .then(() => {
        this.router.navigate(['/todos']);
    })
    .catch((e) => {
        alert('Incorrect Login or Password !')
    });
  }
}
