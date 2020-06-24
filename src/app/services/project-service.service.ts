import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllProjects(): Observable<any> {
    const token = this.authService.currentUserValue.token;
    const data = {token};
    return this.http.get<any>(environment.apiUrl + '/projects', {params: data});
  }
}
