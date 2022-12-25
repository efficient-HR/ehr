import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'company',
        loadChildren: () => import('./modules/company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'email',
        loadChildren: () => import('./modules/email/email.module').then((m) => m.EmailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
