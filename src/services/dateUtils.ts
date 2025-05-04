export function isValidDeliveryTime(deliveryTime: string): boolean {
    const deliveryDate = new Date(deliveryTime);
    const now = new Date();
    return deliveryDate.getTime() - now.getTime() >= 5 * 60 * 60 * 1000;
  }