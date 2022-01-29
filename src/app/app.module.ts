import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		DashboardModule, // Must come before app routing module, otherwise dashboard routes won't work
		AppRoutingModule,
		LayoutModule, // Must come after app routing module, otherwise 404 routing won't work
		CoreModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
