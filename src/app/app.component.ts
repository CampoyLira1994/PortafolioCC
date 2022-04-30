import { Component, OnInit, Output, EventEmitter , ViewChild, AfterViewInit} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  @ViewChild(NavbarComponent) child;
  message:string;

  constructor(){
  }
  @Output()
  propagar = new EventEmitter<string>();

  ngOnInit(): void {
    }

  ngAfterViewInit(){
    this.message = this.child.message
    console.log('padre mensaje '+ this.message);

  }

  scrollToElement =($element)=>{
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }





}


