export interface Item {
	eat(): void;
	equipe(): void;
	fire(): void;
}

export class Potion implements Item {
	eat(): void {
		// Add health
	}
	equipe(): void {
		throw new Error("Cannot Equipe");
	}
	fire(): void {
		throw new Error("Cannot fired");
	}
}

export class Sword implements Item {
	eat(): void {
		throw new Error("Cannot Eat. or may be ?");
	}
	equipe(): void {
		// Increase stats
	}
	fire(): void {
		// Deal damage to enemy
	}
}
