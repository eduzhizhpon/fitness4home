import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@auth-app/services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  routesPath: any = [
    {
      title: 'Editar mi Perfil',
      path: 'settings/edit-profile',
      icon: 'person-circle',
      color: 'primary'
    }
  ]

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }


  routerTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout().then((value: any) => {
      this.router.navigate(['/auth/login']);
    });
  }
}
