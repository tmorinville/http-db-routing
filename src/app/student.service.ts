import { Injectable } from '@angular/core';
import { Student } from './student';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  STUDENTS: Student[] = [];
  studentURL = 'https://studentinfo-715aa-default-rtdb.firebaseio.com/';

  constructor(private router:Router, private http: HttpClient) {}

  addStudent(newStd: Student) {
    return this.http.post(this.studentURL + "students.json", newStd);
    // this.router.navigate(['/student-list'])//redirects to student-list component
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentURL + "students.json")
    .pipe(map(
      responseData =>{
        const studentArray: Student[] = [];
        for(let key in responseData)
          studentArray.push(responseData[key])
        return studentArray;
      }
    ));
  }

  deleteAll() {
    this.http.delete(this.studentURL + "students.json").subscribe();
  }
}
