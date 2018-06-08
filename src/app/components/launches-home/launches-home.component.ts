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
  public laDate: any;
  constructor(private launchService: LaunchService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    const today = new Date();
    this.launchService.fetchLatestLaunch().subscribe((data: Launch) => {
      this.launchService.fetchUpcomingLaunches().subscribe((dataUpcoming: Launch[]) => {
      
        this.upcomingLaunches = dataUpcoming;

        this.laDate = this.upcomingLaunches[0].launch_date_utc;
        this.nextLaunches = this.laDate.replace("T", " ").replace("Z", "").replace(".000", "");
        this.isLoading = false;
      });
    });
  }
}
