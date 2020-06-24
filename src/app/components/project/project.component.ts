import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  data = [];
  loading = true;
  isVisible = false;
  isCancelButton = true;
  moreDetailsData;

  constructor(private projectServiceService: ProjectServiceService) { }

  ngOnInit(): void {

    this.projectServiceService.getAllProjects().subscribe(projects => {
      // console.log('projects | ', projects);
      this.loading = false;
      this.data = projects.map(data => {
          return {
            name: data.name,
            summary: data.summary,
            phone: data.company.phone,
            email: data.company.email
          };
      });
    });
  }

  showDetails(item): void {
    this.isVisible = true;
    this.moreDetailsData = item;
  }

  handleOk(): void {
    this.isVisible = false;
  }
  handleCancel(): void{
    this.isVisible = false;
  }
}
