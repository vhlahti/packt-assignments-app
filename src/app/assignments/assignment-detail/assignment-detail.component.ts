import { Component, Input, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;

  constructor (private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    
  }

  onAssignmentSubmitted() {
    this.passedAssignment.submitted = true;

    this.assignmentsService.updateAssignments(this.passedAssignment)
    .subscribe(result => console.log(result));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.passedAssignment)
    .subscribe(result => console.log(result));

    this.passedAssignment = null;
  }

}
