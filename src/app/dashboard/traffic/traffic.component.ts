import { Component, Input } from '@angular/core';
import { dummyData } from '../../models/dummy-traffic-data.model';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-traffic',
  standalone: true,
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  @Input({required:true}) dummyTrafficData!:dummyData[];
  @Input({required:true}) maxTraffic!:number;
}
