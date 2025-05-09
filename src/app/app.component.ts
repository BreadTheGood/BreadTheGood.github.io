import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  puzzleText: string = ''; // Variable para almacenar los datos como texto
  row: number[][] = []; // Almacena las filas del Sudoku

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://sudoku-api.vercel.app/api/dosuku').subscribe({
      next: (data) => {
        console.log('Respuesta completa de la API:', data); // Inspecciona la respuesta
        if (data.newboard?.grids?.[0]?.value) {
          this.row = data.newboard.grids[0].value; // Asigna las filas directamente
        } else {
          console.error('La estructura de la respuesta no es la esperada.');
        }
      },
      error: (err) => {
        console.error('Error al obtener el Sudoku', err);
      }
    });
  }

  // Método para actualizar el valor de una celda editable
  updateCell(event: Event, rowIndex: number, colIndex: number): void {
    const input = (event.target as HTMLInputElement).value;
    const value = parseInt(input, 10);

    // Validar que el valor sea un número entre 1 y 9
    if (!isNaN(value) && value >= 1 && value <= 9) {
      this.row[rowIndex][colIndex] = value;
    } else {
      // Si el valor no es válido, restablecer la celda a 0
      this.row[rowIndex][colIndex] = 0;
    }
  }
}

