import { ServiciocorreoService } from './../servicios/serviciocorreo.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Interface/employee';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  esmpelados: any;

  constructor(public serviciocorreoService:ServiciocorreoService) { }

  ngOnInit(): void {
  }

  click(){
    this.serviciocorreoService.getEmployees().subscribe(data => {
      this.esmpelados = data;
      console.log(this.esmpelados);
    });
  }

}
