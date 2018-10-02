import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  pl = 0;

  @Input() post: any[];

  functionPlus(pl){
    this.pl = pl + 1;
    console.log(this.pl);
  };

  functionMoins(pl){
    this.pl = pl - 1;
    console.log(this.pl);

  };

  constructor() { }

  ngOnInit() {

    }
  }


