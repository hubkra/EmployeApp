import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project/project';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/findAllProject`);
  }
  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}/addProject`, project);
  }

}
