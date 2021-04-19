import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'employee' , component: EmployeeComponent },
  { path: 'person' , component: PersonComponent },
  { path: 'department', component: DepartmentComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
