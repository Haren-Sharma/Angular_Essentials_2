import { Component, Input } from '@angular/core';
import { dummyData } from '../models/dummy-traffic-data.model';
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input({required:true}) currentStatus!:string;
  @Input({required:true}) maxTraffic!:number;
  @Input({required:true}) dummyTrafficData!:dummyData[];
}
