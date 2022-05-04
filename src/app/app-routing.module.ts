import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import{ FileUploadComponent } from './components/file-upload/file-upload.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'',redirectTo:'components/create',pathMatch:'full'},
  {path:'components/create',component:CreateComponent},
  {path:'components/file-upload',component:FileUploadComponent},
  {path:'components/list',component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
