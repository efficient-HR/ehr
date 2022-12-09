import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/email/email.module').then((m) => m.EmailModule),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./modules/email/email.module').then((m) => m.EmailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
