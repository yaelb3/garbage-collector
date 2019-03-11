import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-container',
  templateUrl: './paper-container.component.html',
  styleUrls: ['./paper-container.component.scss']
})
export class PaperContainerComponent implements OnInit {
public paperContainer: Container
  constructor() { }

  ngOnInit() {
  }

}
