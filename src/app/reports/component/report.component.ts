import { Component, OnInit, Input } from '@angular/core';
import { SeverityEnum } from '../model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() severity: SeverityEnum;
   constructor() { }

  ngOnInit() {
  }

}
