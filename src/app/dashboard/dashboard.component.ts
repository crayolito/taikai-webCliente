import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardService, DashboardStatus } from './dashboard.service';

interface MenuItem {
  name: string;
  route: string;
  imagen: string;
  status: DashboardStatus;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  public dashboardService = inject(DashboardService);
  public router = inject(Router);
  public titulo1: string = "";
  public titulo2: string = "";
  public titulo3: string = "";
  public emailAux: string = "josalejandro@gmail.com";


  public dashboardItemsCliente: MenuItem[] = [
    {
      name: 'Perfil',
      route: '/dashboard/perfil-cliente',
      imagen: 'assets/perfilDashboard.svg',
      status: DashboardStatus.perfilCliente,
    },
    {
      name: 'Licencias',
      route: '/dashboard/licencias',
      imagen: 'assets/comercianteDashboard.svg',
      status: DashboardStatus.licencias,
    },
    {
      name: 'Inspecciones',
      route: '/dashboard/inspeccciones',
      imagen: 'assets/productoDashboard.svg',
      status: DashboardStatus.inspeccciones,
    },
  ];


  ngOnInit(): void {
    this.inicializarDashboard();
  }

  inicializarDashboard(): void {
    switch (this.router.url) {
      case "/dashboard/perfil-cliente":
        this.actualizacionTitulos(DashboardStatus.perfilCliente);
        break;
      case "/dashboard/licencias":
        this.actualizacionTitulos(DashboardStatus.licencias);
        break;
      case "/dashboard/inpecciones":
        this.actualizacionTitulos(DashboardStatus.inspeccciones);
        break;
    }
  }

  actualizacionTitulos(status: DashboardStatus): void {
    switch (status) {
      case DashboardStatus.perfilCliente:
        this.titulo1 = "Perfil del Cliente";
        this.titulo2 = "Configuración y Detalles del Cliente";
        this.titulo3 = "Disfruta de una Gestión Eficiente y Personalizada";
        break;
      case DashboardStatus.licencias:
        this.titulo1 = "Licencias con Seguridad Smart Contract";
        this.titulo2 = "Supervisión y Optimización de Licencias con Blockchain";
        this.titulo3 = "Navega y Encuentra Rápidamente lo que Necesitas";
        break;
      case DashboardStatus.inspeccciones:
        this.titulo1 = "Historial de Inspecciones";
        this.titulo2 = "Administración y Actualización de Información de Inspecciones";
        this.titulo3 = "Conecta con los Mejores Comerciantes del Centro Comercial";
        break;
    }
    this.dashboardService.dashboardStatus.set(status);
  }


}
