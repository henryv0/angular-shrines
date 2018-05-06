import { Component, OnInit } from "@angular/core";
import { Shrine } from "../shrine";
import { SHRINES } from "../data/shrines";

@Component({
  selector: "app-shrines",
  templateUrl: "./shrines.component.html",
  styleUrls: ["./shrines.component.css"]
})
export class ShrinesComponent implements OnInit {
  shrines = SHRINES;

  selectedShrine: Shrine;

  onSelect(shrine: Shrine): void {
    this.selectedShrine = shrine;
  }

  constructor() {}

  ngOnInit() {}
}
