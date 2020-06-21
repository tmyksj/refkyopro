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

  @Input()
  public interval: number;

  public linkList: LinkDatum[];

  public nodeList: NodeDatum[];

  @Input()
  public size: number;

  @Input()
  public width: number;

  public constructor() {
    this.height = 2000;
    this.interval = 250;
    this.size = 30;
    this.width = 2000;
  }

  public circleFill(node: NodeDatum): string {
    return node.fixed ? "#e1f5fe" : "#fafafa";
  }

  public circleR(): number {
    return Math.min(this.width, this.height) / 100;
  }

  public lineStroke(link: LinkDatum): string {
    return link.used ? "#3e2723" : "#d7ccc8";
  }

  public lineStrokeWidth(link: LinkDatum): number {
    return link.used ? 1.1 : 1;
  }

  public ngOnInit(): void {
    this.initializeGraph();
    this.startDijkstra();
    this.startForceSimulation();
  }

  private initializeGraph(): void {
    const graph: Map<number, number>[] = new Array(this.size).fill(null).map(() => {
      return new Map<number, number>();
    });

    for (let i = 0; i < this.size * (this.size - 1); i++) {
      const src: number = Math.floor(this.size * Math.random());
      const dst: number = Math.floor(this.size * Math.random());
      if (src !== dst) {
        graph[src].set(dst, Math.floor(this.size * Math.random()));
      }
    }

    this.nodeList = new Array(this.size).fill(null).map((_: any, i: number): NodeDatum => {
      return {
        distance: i === 0 ? 0 : Infinity,
        fixed: false,
        index: i,
      };
    });

    this.linkList = graph.map((value: Map<number, number>, index: number): LinkDatum[] => {
      return Array.from(value.entries()).map((v: [number, number], i: number): LinkDatum => {
        return {
          cost: v[1],
          index: i,
          source: this.nodeList[index],
          target: this.nodeList[v[0]],
          used: false,
        };
      });
    }).reduce((previousValue: LinkDatum[], currentValue: LinkDatum[]): LinkDatum[] => {
      return previousValue.concat(currentValue);
    }, []);
  }

  private startDijkstra(): void {
    const graph: Map<number, LinkDatum>[] = new Array(this.size).fill(null).map(() => {
      return new Map<number, LinkDatum>();
    });

    this.linkList.forEach((value: LinkDatum): void => {
      graph[(value.source as NodeDatum).index].set((value.target as NodeDatum).index, value);
      graph[(value.target as NodeDatum).index].set((value.source as NodeDatum).index, value);
    });

    const set: Set<[number, number, LinkDatum]> = new Set<[number, number, LinkDatum]>();
    set.add([0, 0, null]);

    const loop: () => void = (): void => {
      if (set.size === 0) {
        return;
      }

      let s: [number, number, LinkDatum] = [Infinity, -1, null];
      set.forEach((value: [number, number, LinkDatum]): void => {
        if (s[0] > value[0]) {
          s = value;
        }
      });

      if (set.has(s)) {
        set.delete(s);
      }

      if (s[0] !== this.nodeList[s[1]].distance) {
        setTimeout(loop, 0);
        return;
      }

      this.nodeList[s[1]].fixed = true;
      if (s[2] !== null) {
        s[2].used = true;
      }

      graph[s[1]].forEach((value: LinkDatum, key: number): void => {
        if (this.nodeList[key].distance > this.nodeList[s[1]].distance + value.cost) {
          this.nodeList[key].distance = this.nodeList[s[1]].distance + value.cost;
          set.add([this.nodeList[key].distance, key, value]);
        }
      });

      setTimeout(loop, this.interval);
    };

    loop()
  }

  private startForceSimulation(): void {
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

  used?: boolean;

}

interface NodeDatum extends SimulationNodeDatum {

  distance?: number;

  fixed?: boolean;

}
