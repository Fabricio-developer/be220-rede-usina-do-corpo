import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {
  @Input() ariaLabel!: string;
  @Input() label!: string;
  @Input() value!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() labelPlacement!: string;
  @Input() clearInput!: string;
  constructor() { }

  ngOnInit() {}

}
