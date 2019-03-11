import { Component, OnInit } from '@angular/core';
import { ContainerBase, TypesEnum } from 'src/app/model';

@Component({
  selector: 'app-buttle-container',
  templateUrl: './buttle-container.component.html',
  styleUrls: ['./buttle-container.component.scss']
})
export class ButtleContainerComponent implements OnInit {

  buttleContainer: ContainerBase;
  constructor() {
    this.buttleContainer.type = TypesEnum.BOTTLE;
   }

  ngOnInit() {
  }

}
