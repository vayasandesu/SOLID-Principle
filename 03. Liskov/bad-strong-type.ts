/*
Scenario : 
We need the NPC Shop who can estimate the values
Condition
- Check item amount
- Calculate the price
Return
- Item values in positive
*/

export class Item {
	stack: number;
	price: number;
}

export class Shopkeeper {
	buyFromPlayer(item: Item, amount: number): number {
		if (item.stack <= 0) {
			return 0;
		}

		const price = Math.abs(item.price);
		item.stack -= amount;
		return price * amount;
	}
}

// The code still work here without error
// But it break the Shopkeeper definition because is might return negative value
export class ExtraPriceShopkeeper {
	constructor(private bonus: number) {}
	buyFromPlayer(item: Item, amount: number): number {
		return item.price * amount * this.bonus;
	}
}
