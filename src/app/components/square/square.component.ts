import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  public rando:number = Math.random();

  @Input() squareValue: 'X' | 'O' | undefined;
  constructor() {
    setInterval(()=>this.rando=Math.random(),2000);
  }

  ngOnInit(): void {
  }


}
