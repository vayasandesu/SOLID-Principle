/*
Scenario : 
We need the NPC Shop who can estimate the values
Condition
- Check item amount
- Calculate the price
Return
- Item values in positive number
*/

export class Item {
	stack: number;
	price: number;
}

export class Shopkeeper {
	estimateValue(item: Item, amount: number): any {
		if (item.stack <= 0) {
			return 0;
		}

		const price = Math.abs(item.price);
		item.stack -= amount;
		return price * amount;
	}
}

// It seem weired result but not break LSP becuase we expected the positive number
export class ExtraPriceShopkeeper extends Shopkeeper {
	constructor(private bonus: number) {
		super();
	}

	override estimateValue(item: Item, amount: number): any {
		return Math.abs(item.price * amount * this.bonus);
	}
}
