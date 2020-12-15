import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-lst',
  templateUrl: './orbit-lst.component.html',
  styleUrls: ['./orbit-lst.component.css']
})

export class OrbitLstComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  sort(column : string): void {
     //alert("Test >>");
     //console.log("Test");
     // array.sort modifies the array, sorting the items based on the given compare function
     this.satellites.sort(function(a: Satellite, b: Satellite): number {
        if(a[column] < b[column]) {
           return -1;
        } else if (a[column] > b[column]) {
           return 1;
        }
        return 0;
     });
  }

}

