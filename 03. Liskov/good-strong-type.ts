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
	estimateValue(item: Item, amount: number): number {
		if (item.stack <= 0) {
			return 0;
		}

		if (item.price < 0) return 0;

		return item.price * amount;
	}
}

export class ExtraPriceShopkeeper extends Shopkeeper {
	constructor(private bonus: number) {
		super();
	}

	override estimateValue(item: Item, amount: number): number {
		if (item.stack <= 0) {
			return 0;
		}

		if (item.price < 0) {
			return 0;
		}

		return item.price * amount * this.bonus;
	}
}
