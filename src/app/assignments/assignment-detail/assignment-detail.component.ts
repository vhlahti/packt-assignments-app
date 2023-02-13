import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  passedAssignment: Assignment;

  constructor (
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id)
    .subscribe(assignment => this.passedAssignment = assignment);
  }
    

  onAssignmentSubmitted() {
    this.passedAssignment.submitted = true;

    this.assignmentsService.updateAssignments(this.passedAssignment)
    .subscribe(result => console.log(result));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.passedAssignment)
    .subscribe(result => console.log(result));

    // this.passedAssignment = null;

    this.router.navigate(['/home']);
  }

  onClickEdit() {
    this.router.navigate(['/assignment', this.passedAssignment.id, 'edit'],
    {queryParams: {name: this.passedAssignment.name}, fragment: 'editing'});
    
  }

}
