export interface Edible {
	eat(): void;
}

export interface Equipable {
	equipe(): void;
}

export interface Weapon {
	fire(): void;
}

export class Potion implements Edible {
	eat(): void {
		// Add health
	}
}

export class Sword implements Weapon, Equipable {
	equipe(): void {
		// Increase stats
	}
	fire(): void {
		// Deal damage to enemy
	}
}
