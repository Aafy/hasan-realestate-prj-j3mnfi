import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AuthGuard } from "./user/auth.guard";
import { SelectiveStrategy } from "./selective-strategy.service";
import { SignupComponent } from "./signup/signup.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "welcome",
          component: WelcomeComponent
        },
        {
          path: "signup",
          component: SignupComponent
        },
        {
          path: "contact",
          component: ContactInfoComponent
        },
        {
          path: "products",
          canActivate: [AuthGuard],
          data: { preload: true },
          loadChildren: () =>
            import("./products/product.module").then(m => m.ProductModule)
        },
        {
          path: "",
          redirectTo: "welcome",
          pathMatch: "full"
        },
        {
          path: "**",
          component: PageNotFoundComponent
        }
      ],

      { preloadingStrategy: SelectiveStrategy }
    )
  ] /* {preloadingStrategy: PreloadAllModules} */,
  /* {enableTracing: true} */ exports: [RouterModule]
})
export class AppRoutingModule {}
