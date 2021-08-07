import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subscription-options',
  templateUrl: './subscription-options.component.html',
  styleUrls: ['./subscription-options.component.scss'],
})
export class SubscriptionOptionsComponent implements OnInit {

  @Output() subscriptionTierOut = new EventEmitter<string>();

  subscriptionTier: string;

  constructor() { }

  ngOnInit() {
  }

  changeTier(tier: string): void {
    this.subscriptionTier = tier;
    this.subscriptionTierOut.emit(this.subscriptionTier);
  }

}
