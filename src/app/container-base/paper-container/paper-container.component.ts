import { Component, OnInit, Input } from '@angular/core';
import { TypesEnum, GeoLocation, ContainerBase } from 'src/app/model';

@Component({
  selector: 'app-paper-container',
  templateUrl: './paper-container.component.html',
  styleUrls: ['./paper-container.component.scss']
})
export class PaperContainerComponent implements OnInit {

  @Input() latitude: number;
  @Input() longitude: number;
  @Input() capacity: number;

  public paperContainer: ContainerBase;
  constructor() {
    this.paperContainer =
      new ContainerBase(TypesEnum.PAPER, new GeoLocation(this.latitude, this.longitude), this.capacity, '../assets/images/paper.jpeg');
  }

  ngOnInit() {
  }

}
