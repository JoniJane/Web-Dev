import { Component, OnInit } from '@angular/core';
import { Company } from '../services/company';
import { CompanyService } from '../company.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
})
export class CompaniesListComponent implements OnInit{
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data as Company[];
    });
  }

  showVacancies() {}
  viewCompanyDetails(companyId: number): void {
    this.router.navigate(['/companies', companyId]);
  }
}
