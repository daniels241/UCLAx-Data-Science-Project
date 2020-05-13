import { Component, OnInit, SimpleChanges, Input, NgModule } from '@angular/core';
import { Item, Option, graphs } from './image'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public graph: Item;
  public graphList: Item[];
  @Input() param1: Option;
  @Input() param2: Option;

  constructor() { }

  ngOnInit(): void {
    this.graph = graphs[0];
    this.graphList = graphs;
  }

  newGraph(graph: Item): void {
  }

}
