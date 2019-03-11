import { Component, OnInit, Input } from '@angular/core';
import { ContainerBase, TypesEnum, GeoLocation } from 'src/app/model';

@Component({
  selector: 'app-glass-container',
  templateUrl: './glass-container.component.html',
  styleUrls: ['./glass-container.component.scss']
})
export class GlassContainerComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() capacity: number;

  public glassContainer: ContainerBase;

  constructor() {
    this.glassContainer =
    new ContainerBase(TypesEnum.PAPER, new GeoLocation(this.latitude, this.longitude), this.capacity, '../assets/images/glass.png');
  }

  ngOnInit() {
  }

}
