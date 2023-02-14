import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private assignmentService: AssignmentsService,
              private router: Router) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    const assignment = new Assignment();
    assignment.id = Math.floor(Math.random() * 1000);
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;

    // this.newAssignment.emit(assignment);

    this.assignmentService.addAssignments(assignment)
    .subscribe(res => this.router.navigate(['/home']));

  }

}
