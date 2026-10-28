import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  
  // Usamos JSONPlaceholder como API de práctica gratuita
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Método para obtener datos
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(err => {
        console.error('Error al obtener usuarios', err);
        return throwError(() => err);
      })
    );
  }
    getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}

