export class Book {
	id: number;
	name: string;
	description: string;
	price: number;
	amount: number;

	addStock(amount: number): void {
		this.amount += amount;
	}

	sell(amount: number): number {
		if (this.amount < amount) {
			throw new Error("Stock not enough");
		}

		this.amount -= amount;
		return this.price * amount;
	}
}
