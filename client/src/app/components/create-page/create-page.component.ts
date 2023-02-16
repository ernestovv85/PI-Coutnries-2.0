import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/Interfaces/activities';
import { ActivitiesService } from 'src/app/services/activities/activities.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit{
  activity?: IActivity
  
  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    
  }

  
}
