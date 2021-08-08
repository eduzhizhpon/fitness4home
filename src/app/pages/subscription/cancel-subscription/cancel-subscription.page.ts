import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.page.html',
  styleUrls: ['./cancel-subscription.page.scss'],
})
export class CancelSubscriptionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRouterHome() {
    console.log('Regreso al inicio');
    this.router.navigate(['/home']);
  }

}
