import { Component, OnInit } from '@angular/core';
import { ContainerBase } from 'src/app/model';

@Component({
  selector: 'app-paper-container',
  templateUrl: './paper-container.component.html',
  styleUrls: ['./paper-container.component.scss']
})
export class PaperContainerComponent implements OnInit {
public paperContainer: ContainerBase;
  constructor() { }

  ngOnInit() {
  }

}
