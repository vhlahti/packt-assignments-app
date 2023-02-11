import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit{

  title = 'My Assignments Application';
  enabled = false;
  formVisible = false;

  selectedAssignment: Assignment;

  assignments: Assignment[] = [{
    name: 'One',
    dueDate: new Date('2023-02-01'),
    submitted: true
  },
    {
    name: 'Two',
    dueDate: new Date('2023-03-01'),
    submitted: false
    }];
  
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.enabled = true;
    }, 2000)
    
  }

  setSelected(assignment: Assignment) {
     this.selectedAssignment = assignment;
  }

  onAddBtnClick() {
      this.formVisible = true;
      this.selectedAssignment = null;
  }

  onNewAssignment(event: Assignment) {
    this.assignments.push(event);
    this.formVisible = false;
  }

}
