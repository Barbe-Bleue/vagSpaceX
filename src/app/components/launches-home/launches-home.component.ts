import { Component, OnInit } from "@angular/core";
import { Launch } from "src/app/models/Launch";
import { LaunchService } from "../../providers/backend/launch/launch.service";
import { ApiError } from "src/app/typings/ServiceError";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-launches-home",
  templateUrl: "./launches-home.component.html",
  styleUrls: ["./launches-home.component.css"]
})
export class LaunchesHomeComponent implements OnInit {
  public upcomingLaunches: Launch[];
  public isLoading: boolean;
  public nextLaunches: any;

  constructor(private launchService: LaunchService, private router: Router) {
  }

  ngOnInit(): void {
    const today = new Date();
    this.launchService.fetchLatestLaunch().subscribe((data: Launch) => {
      this.launchService.fetchUpcomingLaunches().subscribe((dataUpcoming: Launch[]) => {
        this.upcomingLaunches = dataUpcoming;
        this.nextLaunches = this.upcomingLaunches[0].launch_date_utc.replace("T", " ").replace("Z", "").replace(".000", "");
      }
    });
  });
}
