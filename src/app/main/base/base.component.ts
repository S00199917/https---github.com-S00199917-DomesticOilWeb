import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  testDevices = [
    {name: 'Midfield', battery : 59, level: 49},
    {name: 'Meelick', battery : 100, level: 78},
    {name: 'Clooninsin', battery : 22, level: 33}
  ]

  constructor(private fbService: FirebaseService, private datePipe: DatePipe) { }

}
