import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'auth',
    loadComponent: () =>
      import('./authentication/authentication.component'),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./authentication/screens/login/login.component'),
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./authentication/screens/registro/registro.component'),
      },
      {
        path: '', redirectTo: 'registro', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'registro', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'perfil-cliente',
        title: 'Perfil Cliente',
        loadComponent: () =>
          import('./dashboard/cliente/cliente.component'),
      },
      {
        path: 'licencias',
        title: 'Licencias',
        loadComponent: () =>
          import('./dashboard/licencia/licencia.component'),
      },
      {
        path: 'inspeccciones',
        title: 'Inspecciones',
        loadComponent: () =>
          import('./dashboard/inspeccion/inspeccion.component'),
      },
      {
        path: '', redirectTo: 'perfil-cliente', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'perfil-cliente', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'oferta-servicios',
    loadComponent: () =>
      import('./package/package.component'),
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'auth', pathMatch: 'full'
  }

];
