# Rule of Thumb

The easiest way to follow this rule is
**Don't describe too much**

# When to Seperate

1. Interface is too large
   Bad

```
	export interface ItemService {
		getInfo(id: number): Item;
		getInventory(userId: number): Item[];
		enhance(item: Item, material: Item): Item;
		sell(item: Item, amount: number) : Item;
		drop(item: Item, amount: number): Item;
	}
```

2. When dont need to implement all interface function
   Example
   `
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
	`

3. When we can pass any value and it return the same result
   Example
    ```
    function estimateGachaRate(box: GachaBox) : number {
    	return 0;
    }
    ```
