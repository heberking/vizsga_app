import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor() {
    this.employees = [
      {id: 1, name: 'Lucinda Wise', job: 'Társalapító / Design',img_url:"assets/img/person_1.jpg"},
      {id: 2, name: 'Clayton Romero', job: 'Társalapító / Design',img_url:"assets/img/person_4.jpg"},
      {id: 3, name: 'Winnie Rice', job: 'Kreatív vezető',img_url:"assets/img/person_2.jpg"},
      {id: 4, name: 'Norman Carter', job: 'Kreatív stúdió vezető',img_url:"assets/img/person_3.jpg"},
    ];
  }

  ngOnInit(): void {
  }

}
