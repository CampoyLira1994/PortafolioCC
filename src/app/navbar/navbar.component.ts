import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  propagar = new EventEmitter<''>();
  message: string = "contacto!"
  constructor() {
  }

  ngOnInit(): void {
  }

}
