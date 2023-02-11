import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
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

  assignments: Assignment[];

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    // this.assignments = this.assignmentsService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
  }

  setSelected(assignment: Assignment) {
     this.selectedAssignment = assignment;
  }

  onAddBtnClick() {
      this.formVisible = true;
      this.selectedAssignment = null;
  }

  onNewAssignment(event: Assignment) {
    this.assignmentsService.addAssignments(event)
    .subscribe(success => console.log(success));

    this.formVisible = false;
  }

}
