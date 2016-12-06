import { NgModule } from "@angular/core";
import { DropdownDirective } from "./recipes/dropdown.directive";
import { HomeComponent } from "./home.component";

@NgModule ({
  declarations: [DropdownDirective, HomeComponent],
  exports: [DropdownDirective]
})
export class CoreModule {}
