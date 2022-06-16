import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from './project';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Teams } from '../teams/teams';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
public project: Project[]=[];
public editProject!:Project;
public deleteProject!:Project;
public teams!:Teams[];

title:any;
  constructor(private projectService: ProjectService, private _rotue:Router) { }

  ngOnInit(): void {
    this.getProject();
  }

  public getProject(): void {
    this.projectService.getProject().subscribe(
      (response) => {
        this.project = response;
        console.log(this.project);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.projectService.addProject(addForm.value).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProject();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    ); 

    } 
    

gotoemployee(){
  this._rotue.navigate(['/employee'])
}
}
