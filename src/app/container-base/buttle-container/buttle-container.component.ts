import { Component, OnInit, Input } from '@angular/core';
import { ContainerBase, TypesEnum, GeoLocation } from 'src/app/model';

@Component({
  selector: 'app-buttle-container',
  templateUrl: './buttle-container.component.html',
  styleUrls: ['./buttle-container.component.scss']
})
export class ButtleContainerComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() capacity: number;

  public buttleContainer: ContainerBase;
  constructor() {
    this.buttleContainer =
    new ContainerBase(TypesEnum.PAPER, new GeoLocation(this.latitude, this.longitude), this.capacity, '../assets/images/plastic2.jpeg');
   }

  ngOnInit() {
  }

}
