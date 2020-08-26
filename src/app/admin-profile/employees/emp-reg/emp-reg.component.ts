import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, AbstractControl, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employees } from '../../../../../models/employees.model';
import { EmployeeService } from 'service/employees.service';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent implements OnInit {
  @ViewChild('empreg', {static: false}) addEmployee: NgForm;
  defaultValue = "choose";

  employees: Employees = {
    id: '',
    fullName: '',
    dob: '',
    nic: '',
    gender: '',
    address: '',
    cnumber: '',
    email: '',
    empDes: '',
    doj: '',
    comment: ''
  };
  submitted=false;

  constructor(private router: Router,
              private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.addEmployee);
    this.submitted = true;
    this.employees.id = null;
    this.employees.fullName = this.addEmployee.value.fullName;
    this.employees.dob = this.addEmployee.value.dob;
    this.employees.nic = this.addEmployee.value.nic;
    this.employees.gender = this.addEmployee.value.gender;
    this.employees.address = this.addEmployee.value.address;
    this.employees.cnumber = this.addEmployee.value.cnumber;
    this.employees.email = this.addEmployee.value.email;
    this.employees.empDes = this.addEmployee.value.empDes;
    this.employees.doj = this.addEmployee.value.doj;
    this.employees.comment = this.addEmployee.value.comment;

    this.addEmployee.reset();

    this.employeeService.addEmployee(this.employees);

    this.router.navigate(['../view'], {relativeTo: this.route});

  }

}