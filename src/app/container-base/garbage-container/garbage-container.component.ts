import { Component, OnInit, Input } from '@angular/core';
import { ContainerBase, TypesEnum, GeoLocation } from 'src/app/model';

@Component({
  selector: 'app-garbage-container',
  templateUrl: './garbage-container.component.html',
  styleUrls: ['./garbage-container.component.scss']
})
export class GarbageContainerComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() capacity: number;

  public garbageContainer: ContainerBase;

  constructor() {
    this.garbageContainer =
      new ContainerBase(TypesEnum.PAPER, new GeoLocation(this.latitude, this.longitude), this.capacity, '../assets/images/garbage.jpg');
  }

  ngOnInit() {
  }

}
