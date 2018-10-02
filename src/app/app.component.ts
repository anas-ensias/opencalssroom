import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  posts = [
    {
      "title": "Mon premier post",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "loveIts": 0,
      "created_at": "10-10-2018"

    },
    {
      "title": "Mon deuxième post",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "loveIts": 0,
      "created_at": "12-10-2018"

    },
    {
      "title": "Encore un post",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "loveIts": 0,
      "created_at": "05-05-2018"

    },

  ];

}
