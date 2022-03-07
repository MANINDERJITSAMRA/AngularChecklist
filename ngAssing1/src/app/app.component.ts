import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  documents =[
    {
      docId: 1,
      docName: 'Angular Documentation',
    }, {
      docId: 2,
      docName: 'Node Documentation',
    },
    {
      docId: 3,
      docName: 'React Documentation',
    }
  ];

  callMe(event: { target: { checked: any; }; }, id: any) {
    if (event.target.checked) {
      console.log(id);
    }

  }
}
