import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity, Season } from 'src/app/Interfaces/activities';
@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  URL = 'http://localhost:3001/activities';
  constructor(private http: HttpClient) {}

  getActivities(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(this.URL);
  }

  create(): Observable<IActivity> {
    const body = {
      name: String,
      difficulty: Number,
      duration: Number,
      season: Array<Season>
    };
    return this.http.post<IActivity>(this.URL, body);
  }

  delete(_id: string): Observable<IActivity> {
    return this.http.delete<IActivity>(`${this.URL}/${_id}`);
  }
}
