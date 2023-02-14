import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';

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
    private router: Router,
    private authService: AuthService) {}

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
    .subscribe(success => console.log(success));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.passedAssignment)
    .subscribe(res => this.router.navigate(['/home']));

    // this.passedAssignment = null;


  }

  onClickEdit() {
    this.router.navigate(['/assignment', this.passedAssignment.id, 'edit'],
    {queryParams: {name: this.passedAssignment.name}, fragment: 'editing'});
    
  }

  isAdmin() {
    return this.authService.loggedIn;
  }

}
