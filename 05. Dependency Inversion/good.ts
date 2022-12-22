export class Player {}

export interface ItemEffectProvider {
	use(user: Player): void;
}

export class ProvideHealEffect implements ItemEffectProvider {
	use(user: Player): void {
		// recovery
	}
}

export class ProvideDamageEffect implements ItemEffectProvider {
	use(user: Player): void {
		// deal damage
	}
}

// Can add infinite effect type without change the item code
export class Item {
	constructor(readonly effects: ItemEffectProvider[]) {}

	applyEffect(user: Player): void {
		this.effects?.forEach((effect) => effect.use(user));
	}
}
