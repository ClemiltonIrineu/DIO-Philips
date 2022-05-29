import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Compoennt } from "./error-404/error-404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Compoennt
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Compoennt
            },
            {
                path: 'Sobre', component: Error404Compoennt
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {


}