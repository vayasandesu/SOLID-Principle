export class Player {}

export class ProvideHealEffect {
	use(user: Player): void {
		// recovery
	}
}

export class ProvideDamageEffect {
	use(user: Player): void {
		// deal damage
	}
}

// Bad when we want to change item effect to damage effect
// or add more type :<
export class Item {
	constructor(readonly heal: ProvideHealEffect) {}

	applyEffect(user: Player): void {
		this.heal?.use(user);
	}
}
