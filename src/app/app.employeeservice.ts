import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){}

    empAll:any[]=[{empId:1001,empName:"Ram",empSalary:1234,empDepartment:"JAVA"},
    {empId:1002,empName:"Sham",empSalary:1111,empDepartment:"DevOps"},
    {empId:1003,empName:"Tom",empSalary:1122,empDepartment:"Python"}]
    getAllEmployee(){
       // return this.http.get("assets/employee.json");

       return this.empAll;
    }
    addEmployee(data:any){
        this.empAll.push(data);
        return true;
    }
}