import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TierManageService {

  constructor() { }

  validBill(nextBill: Date): boolean {
    let currentDate: Date = new Date();
    if (nextBill.valueOf() >= currentDate.valueOf()) {
      return true;
    }
    return false;
  }

  getNextBill(currentBill: Date, tier: number): Date {
    switch (tier) {
      case 1:
        return this.getNextBillWeek(currentBill);

      case 2:
        return this.getNextBillMonth(currentBill);

      case 3:
        return this.getNextBillYear(currentBill);
    }

    return null;
  }

  getNextBillWeek(currentBill: Date): Date {
    let year = currentBill.getFullYear();
    let month = currentBill.getMonth();
    let day = currentBill.getDate();
    let nextBill: Date = new Date(year, month, day + 7);
    return nextBill;
  }
  getNextBillMonth(currentBill: Date): Date {
    let year = currentBill.getFullYear();
    let month = currentBill.getMonth();
    let day = currentBill.getDate();
    let nextBill: Date = new Date(year, month + 1, day);
    return nextBill;
  }
  getNextBillYear(currentBill: Date): Date {
    let year = currentBill.getFullYear();
    let month = currentBill.getMonth();
    let day = currentBill.getDate();
    let nextBill: Date = new Date(year + 1, month, day);
    return nextBill;
  }
}
