import { Component, Input, OnInit } from "@angular/core";
import { forceCenter, forceLink, forceManyBody, forceSimulation, forceX, forceY, SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

@Component({
  selector: "app-part-visual-dijkstra",
  styleUrls: ["./part-visual-dijkstra.component.scss"],
  templateUrl: "./part-visual-dijkstra.component.html",
})
export class PartVisualDijkstraComponent implements OnInit {

  @Input()
  public height: number;

  public linkList: LinkDatum[];

  public nodeList: NodeDatum[];

  @Input()
  public size: number;

  @Input()
  public width: number;

  private graph: Map<number, number>[];

  public constructor() {
    this.height = 2000;
    this.size = 30;
    this.width = 2000;
  }

  public ngOnInit(): void {
    this.loopInitializeGraph();
  }

  public r(): number {
    return Math.min(this.width, this.height) / 80;
  }

  private loopInitializeGraph(): void {
    this.graph = new Array(this.size).fill(null).map(() => {
      return new Map<number, number>();
    });

    for (let i = 0; i < this.size * (this.size - 1); i++) {
      const src: number = Math.floor(this.size * Math.random());
      const dst: number = Math.floor(this.size * Math.random());
      if (src !== dst) {
        this.graph[src].set(dst, Math.floor(this.size * Math.random()));
      }
    }

    this.nodeList = new Array(this.size).fill(null).map((_: any, i: number): NodeDatum => {
      return {
        distance: i === 0 ? 0 : Infinity,
        index: i,
      };
    });

    this.linkList = this.graph.map((value: Map<number, number>, index: number): LinkDatum[] => {
      return Array.from(value.entries()).map((v: [number, number], i: number): LinkDatum => {
        return {
          cost: v[1],
          index: i,
          source: this.nodeList[index],
          target: this.nodeList[v[0]],
        };
      });
    }).reduce((previousValue: LinkDatum[], currentValue: LinkDatum[]): LinkDatum[] => {
      return previousValue.concat(currentValue);
    }, []);

    forceSimulation<NodeDatum, LinkDatum>(this.nodeList)
      .force("center", forceCenter(this.width / 2, this.height / 2))
      .force("charge", forceManyBody().strength(-Math.min(this.width, this.height)))
      .force("link", forceLink(this.linkList).distance(Math.min(this.width, this.height) / this.size * 10))
      .force("x", forceX())
      .force("y", forceY());
  }

}

interface LinkDatum extends SimulationLinkDatum<NodeDatum>{

  cost?: number;

}

interface NodeDatum extends SimulationNodeDatum {

  distance?: number;

}
