import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [{
    id: 1,
    name: 'Maths',
    dueDate: new Date('2023-02-01'),
    submitted: true
  },
    {
    id: 2,
    name: 'Science',
    dueDate: new Date('2023-03-01'),
    submitted: false
    }];

    url = 'http://localhost:8010/api/assignments';
    urlOne = 'http://localhost:8010/api/assignment';

  constructor(private loggingService: LoggingService,
              private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]> {
  //  return of(this.assignments);

    return this.http.get<Assignment[]>(this.url);

  }

  getAssignment(id: number): Observable<Assignment> {
  //  return of(this.assignments.find(x => x.id === id));

    return this.http.get<Assignment>(this.urlOne + '/' + id);

  }

  addAssignments(assignment: Assignment): Observable<any> {
    // assignment.id = this.assignments.length +1;
    // this.assignments.push(assignment);

    // this.loggingService.log(assignment.name, 'added');

    // return of('assignment added!');

    return this.http.post<Assignment>(this.urlOne, assignment);
  }

  updateAssignments(assignment: Assignment): Observable<any> {
    // this.assignments.forEach((assignment, i) => {
    //   if(assignment === assignment){
    //     this.assignments[i] = assignment;
    //   }
    // });

    // this.loggingService.log(assignment.name, 'updated');

    // return of('assignment updated!');

    return this.http.put<Assignment>(this.urlOne, assignment);

  }
  deleteAssignment(deletedAssignment: Assignment): Observable<any> {
    // this.assignments.forEach((assignment, i) => {
    //   if(assignment === deletedAssignment) {
    //     this.assignments.splice(i, 1);
    //   }
    // });

    // this.loggingService.log(deletedAssignment.name, 'deleted');

    // return of('assignment deleted');

    const newUrl = this.urlOne + '/' + deletedAssignment._id;

    return this.http.delete(newUrl);

  }

}
