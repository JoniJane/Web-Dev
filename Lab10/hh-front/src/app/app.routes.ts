import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { VacancyService } from './vacancy.service';
import { VacanciesListComponent } from './vacancies-list/vacancies-list.component';
import { ErrorComponent } from './error/error.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { HomeComponent } from './home/home.component';
import { VacanciesByCompanyComponent } from './vacancies-by-company/vacancies-by-company.component';

export const routes: Routes = [
  { path: 'companies', component: CompaniesListComponent },
  { path: 'vacancies', component: VacanciesListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'vacancies/:id', component: VacancyDetailComponent },
  { path: 'companies/:id/vacancies', component: VacanciesByCompanyComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, CommonModule],
  exports: [RouterModule],
  providers: [CompanyService, VacancyService],
})
export class AppRoutingModule {}