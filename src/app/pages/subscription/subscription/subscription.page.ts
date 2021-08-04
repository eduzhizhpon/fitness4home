import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  subscriptionTier: string;

  constructor() { }

  ngOnInit() {
    this.subscriptionTier = '1';
  }

  changeTier(tier: string): void {
    this.subscriptionTier = tier;
  }

}
