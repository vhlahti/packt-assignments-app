import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit{

  title = 'My Assignments Application';

  assignments = [{
    name: 'One',
    dueDate: '2023-02-01',
    submitted: true
  },
    {
    name: 'Two',
    dueDate: '2023-03-01',
    submitted: false
    }];
  
  constructor() {}

  ngOnInit(): void {
    
  }

}
