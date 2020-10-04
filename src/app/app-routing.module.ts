import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {AuthGuard} from './user/auth.guard';
import {SelectiveStratergy} from './selective-strategy.service';
@NgModule({
  imports: [ RouterModule.forRoot([ {
      path: 'welcome',component: WelcomeComponent
    },{
      path: 'products',
      canActivate:[AuthGuard],
      data:{ preload: true},
      loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
    },{
      path: '', redirectTo:'welcome', pathMatch:'full'
    },{
      path: '**', component: PageNotFoundComponent
    }],
    
    {preloadingStrategy: SelectiveStratergy})],
    /* {enableTracing: true} */ /* {preloadingStrategy: PreloadAllModules} */
    exports:[RouterModule]
})

    export class AppRoutingModule {}