import { Component, OnInit, SimpleChanges, Input, NgModule } from '@angular/core';
import { Image, Option } from './image'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public image: Image;
  public options: Option[];
  @Input() param1: Option;
  @Input() param2: Option;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      {"name": "year", "display": "Year"}, 
      {"name": "SPM5", "display": "First time homeless"}, 
      {"name": "spm0_coc_award_amount", "display": "HUD Award Amount"}, 
      {"name": "state", "display": "State"}, 
      {"name": "HMIS_count", "display": "Homelessness"}
    ];
    this.param1 = this.options[1];
    this.param2 = this.options[0];
    this.newGraph(this.param1, this.param2);
  }

  newGraph(param1: Option, param2: Option): void {
    console.log(`changing! ${this.param1.name} vs ${this.param2.name}`)
    const image = {
      param1: param1,
      param2: param2,
      source: `../../assets/${param1.name}_x_${param2.name}.png`
    }
    this.image = image;
  }

}
