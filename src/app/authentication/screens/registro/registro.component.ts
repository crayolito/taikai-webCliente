import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export default class RegistroComponent {
  public router = inject(Router);

  public estatus: string[] = [
    "Comerciante",
    "Supervisor",
  ]

}
