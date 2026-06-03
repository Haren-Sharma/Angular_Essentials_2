import { AfterViewInit, Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy,AfterViewInit {
  currentStatus = signal<'offline' | 'online' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;

  constructor(){
    effect((onCleanUp)=>{
      // console.log(this.currentStatus())
      onCleanUp(()=>{
        // console.log("Clean Up Functionality")
      })
    })
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    // console.log("Ng After View Init");
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
}
