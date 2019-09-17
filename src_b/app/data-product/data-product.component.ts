import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';

interface Project {
  productName: string;
  updated_date: string;
  assetType: string;
  views: number
}

@Component({
  selector: 'app-data-product',
  templateUrl: './data-product.component.html',
  styleUrls: ['./data-product.component.scss']
})
export class DataProductComponent {
  search: string;
  projectsList: Project[];
  projectsData: any;
  projectsDataClone: any;
  isHidden: boolean;
  noResults: boolean;
  noProjects: boolean;
  length: number;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [10, 20, 25, 100];
  pageEvent: PageEvent;

  filters = ['All', 'Data Product Name', 'Product Type', 'Asset Type', 'Tags'];
  sortingOrder = ['Alphabetical', 'Recently Added', 'Recently Updated', 'Most Accessed', 'Certified'];

  selectedBrand: 'All';
  selectedDate: string = 'all';
  selectedOrderBy: string = 'Alphabetical';

  tmp: boolean = false;

  constructor(private router: Router) { }


  OnPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex, pageSize) {
    const startIndex = pageIndex * pageSize;
    let endIndex = startIndex + pageSize;
    this.length = this.projectsData.length;
    this.hasResults();
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.projectsList = this.projectsData.slice(startIndex, endIndex);
  }

  getJobsList(project) {
    //  localStorage.setItem('projectJobList', JSON.stringify(project.projectId));
    this.router.navigate(['home/jobs']);
  }

  getUserProjectsList() {
    this.projectsData = [
      { productName: "LC3", updated_date: "Jan 01, 2018", assetType: "Dataset", views: "100" },
      { productName: "PCP", updated_date: "Jan 02, 2018", assetType: "API", views: "10" },
      { productName: "Reltio", updated_date: "Jan 02, 2019", assetType: "Tableau Report", views: "60" },
      { productName: "LC3", updated_date: "Jan 01, 2019", assetType: "Dataset", views: "70" },
      { productName: "LC3", updated_date: "Mar 06, 2019", assetType: "API", views: "80" },
      { productName: "Reltio", updated_date: "Jan 01, 1980", assetType: "API", views: "100" },
      { productName: "PCP", updated_date: "May 01, 2019", assetType: "Dataset", views: "120" },
      { productName: "PCP", updated_date: "Jan 01, 1980", assetType: "Dataset", views: "100" },
      { productName: "PCP", updated_date: "Jan 01, 1980", assetType: "Tableau Report", views: "100" },
      { productName: "LC3", updated_date: "Jan 01, 1980", assetType: "Dataset", views: "100" },
      { productName: "Reltio", updated_date: "Jan 01, 1980", assetType: "API", views: "100" }];


    this.projectsData.sort((a, b) =>
      a.projectId > b.projectId ? -1 : 1
    );
    this.projectsDataClone = this.projectsData;
    this.length = this.projectsData.length;
    if (this.length > 0) {
      this.noProjects = false;
    }
    this.loadData(this.pageIndex, this.pageSize);
    //}
    //else if(res['response']['message'] === 'No projects found') {
    //this.isHidden = false;
    ////this.noResults = true;
    // this.noProjects = true;
    //}

  }

  filteredList() {
    this.projectsData = this.projectsDataClone.filter(
      project =>
        project.productName.toLowerCase().includes(this.search.toLowerCase())
    );
    if (this.projectsData == null || this.projectsData == '') {
      this.projectsData = this.projectsDataClone.filter(
        project =>
          project.assetType.toLowerCase().includes(this.search.toLowerCase())
      );
    }
    this.loadData(this.pageIndex, this.pageSize);
  }

  hasResults() {
    if (this.projectsData.length === 0) {
      this.noResults = true;
    } else {
      this.noResults = false;
      this.isHidden = false;
    }
  }

  ngOnInit() {
    this.projectsData = [];
    this.isHidden = true;
    this.noResults = true;
    this.noProjects = true;
    this.getUserProjectsList();
  }

  getProductDetails(product) {
    this.router.navigate(['home/productDetails']);

  }

}