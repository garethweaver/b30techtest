import { Component, Input } from '@angular/core';

@Component({
  selector: 'insight-card',
  templateUrl: './components/insight-card.component.html',
  styles: [require('./insight-card.component.sass')]
})

export class InsightCardComponent {

  @Input() insight: any;

}
