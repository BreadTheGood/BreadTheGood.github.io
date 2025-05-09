import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  private apiUrl = 'https://sudoku-api.vercel.app/api/dosuku';

  constructor(private http: HttpClient) { }

  obtenerSudoku(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
