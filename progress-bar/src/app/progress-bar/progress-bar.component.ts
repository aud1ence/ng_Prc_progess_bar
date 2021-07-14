import { Component, OnInit, Input } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() backgroundColor = '#8C8B79';
  @Input() progressColor = '#04668C';
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 50;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
