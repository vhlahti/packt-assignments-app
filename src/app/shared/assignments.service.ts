import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [{
    name: 'Maths',
    dueDate: new Date('2023-02-01'),
    submitted: true
  },
    {
    name: 'Science',
    dueDate: new Date('2023-03-01'),
    submitted: false
    }];

  constructor() { }

  getAssignments(): Assignment[] {
    return this.assignments;
  }

}
