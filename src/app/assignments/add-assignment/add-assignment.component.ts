import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  name: string;
  dueDate: Date;

  // @Output() newAssignment = new EventEmitter<Assignment>();

  newAssignment: Assignment;

  constructor(private assignmentService: AssignmentsService) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;

    // this.newAssignment.emit(assignment);

    this.assignmentService.addAssignments(assignment);

  }

}
