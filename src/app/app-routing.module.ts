import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityModule } from './modules/security/security.module';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/master-page/home/home.component';
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "security",
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path: "parameters",
    loadChildren: () => import('./modules/parameters/parameters.module').then(m => m.ParametersModule)
  },
  {
    path: "purchase",
    loadChildren: () => import('./modules/purchase/purchase.module').then(m => m.PurchaseModule)
  },
  {
    path: "report",
    loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule)
  },
  {
    path: "views",
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule)
  },
  {
    path:"**",
    component: NotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
