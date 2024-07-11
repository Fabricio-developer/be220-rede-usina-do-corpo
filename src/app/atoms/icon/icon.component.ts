import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent  implements OnInit {

  @Input() iconIos!: string;
  @Input() iconMd!: string;
  @Input() slotIcon!: string;

  constructor() { }

  ngOnInit() {}

}
