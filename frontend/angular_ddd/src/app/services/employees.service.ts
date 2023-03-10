import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseApiUrl: string = 'http://localhost:7137';

  constructor(private http: HttpClient) { }

  
  getAllEmployes(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');  
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest);
  }
  
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }
}
