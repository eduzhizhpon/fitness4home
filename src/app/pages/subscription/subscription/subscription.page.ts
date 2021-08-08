import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  subscriptionTier: string;
  enableFeedback: boolean;

  constructor() {
    this.enableFeedback = false;
  }

  ngOnInit() {
  }

  setSubscriptionTier(event: string): void {
    this.subscriptionTier = event;
  }

  onSubscribe(): void {
    this.enableFeedback = true;
    console.log(this.subscriptionTier);
  }

  onRouterHome(): void {
    console.log('Ir al Home');
  }

}
