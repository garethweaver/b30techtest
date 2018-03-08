import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'insight-list',
  templateUrl: './components/insight-list.component.html',
  styles: [require('./insight-list.component.sass')]
})

export class InsightListComponent {

  insights: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  ) {
    this.insights = db.collection('insights').valueChanges();
  }

}
