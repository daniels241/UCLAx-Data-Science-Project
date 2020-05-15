import { Component, OnInit, SimpleChanges, Input, NgModule } from '@angular/core';
import { Item, Option, graphs, tables } from './image'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public graph: Item;
  public graphList: Item[];
  public tables: Item[];
  @Input() param1: Option;
  @Input() param2: Option;

  constructor() { }

  ngOnInit(): void {
    this.graph = graphs[0];
    this.graphList = graphs;
    this.tables = tables;
  }

  newGraph(graph: Item): void {
  }

}
