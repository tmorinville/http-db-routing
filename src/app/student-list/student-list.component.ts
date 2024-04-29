import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
 studentList: Student[] = [];

  constructor(private stdService: StudentService) {}

  ngOnInit() {
    this.studentList = this.stdService.STUDENTS;
  }

  onClearData() {
    this.studentList = [];
    this.stdService.deleteAll();
  }
}
