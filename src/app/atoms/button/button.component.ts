import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() class!: string;
  @Input() size: string = 'small';
  @Input() shape: string = '';
  @Input() fill: string = '';
  @Input() color!: string;
  @Input() icon!: string;
  @Input() text!: string;
  @Input() iconIos!: string;
  @Input() iconMd!: string;
  @Input() slotIcon!: string;
  constructor() { }

  ngOnInit() { }

}
