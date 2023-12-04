import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public grade = signal<Grade>('A');

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update( value => !value );

  }
}
