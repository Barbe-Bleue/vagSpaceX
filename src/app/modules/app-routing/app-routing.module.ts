import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "../../app.component";
import {CompanyInfoComponent} from "../../components/company-info/company-info.component";
import {RocketListComponent} from "../../components/rocket-list/rocket-list.component";
import { LaunchpadListComponent } from "../../components/launchpad-list/launchpad-list.component";
import { LaunchpadComponent } from "../../components/launchpad/launchpad.component";
import { LaunchComponent } from "../../components/launch/launch.component";
import { LaunchesHomeComponent } from "../../components/launches-home/launches-home.component";
import { LaunchesListComponent } from "../../components/launches-list/launches-list.component";
import { CapsulesListComponent } from "../../components/capsules-list/capsules-list.component";
import { CapsuleComponent } from "../../components/capsule/capsule.component";

const appRoutes: Routes = [
    {
        path: "company-info",
        component: CompanyInfoComponent
    },
    {
        path: "rockets",
        component: RocketListComponent
    },
	{
		path: "launchpads",
		component: LaunchpadListComponent
	},
	{
		path: "launchpads/:id",
		component: LaunchpadComponent
	},
	{
		path: "launches",
		component: LaunchesListComponent
	},
	{
		path: "launches/:id",
		component: LaunchComponent
	},
	{
		path: "capsules",
		component: CapsulesListComponent
	},
	{
		path: "capsules/:id",
		component: CapsuleComponent
	}
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
