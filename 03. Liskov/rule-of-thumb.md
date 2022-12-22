# Rule of Thumb

The easiest way to follow the Liskov is
**All subclass should follow the superclass definition**

1. All parameter type of subclass should be super set the superclass
   If superclass allow int the subclass must be allow int or more

2. Subclass must return result as the same type of the superclass
   _Warning_ to be careful the definition that make client confuse to
   Example
   Item is the superclass of Potion

BAD
Because the client who call this function not garuntee go get the Potion

```
buyPotion(): Item
```

GOOD

```
buyPotion(): Potion
```

OR

```
buyItem(): Item
```

3. Subclass should throw exception in sub set of the superclass
   Becuase if the subclass throw error more than the superclass
   The client might hard to handle the error

4. Subclass shouldn't strong pre-condition
   Because the superclass not expect to throw an error,
   then client who use the class definition not expected an error either.

    Example
    The shop keeper can estimate item value and return positive number

BAD

```
class ExtraShopKeeper extends ShopKeeper {
	estimateValue(price:number, amount: number) : number {
		if(price < 0) {
			throw new Error("Price should not be zero")
		}
		return price * number;
	}
}
```

GOOD

```
class ExtraShopKeeper extends ShopKeeper {
	estimateValue(price:number, amount: number) : number{
		if(price < 0) {
			return 0;
		}
		return price * number;
	}
}
```

5. Shouldn't weak post-condition
   If the superclass definition must do Task A, sub type must do Task A either.

6. Shouldn't **Break** invariant of superclass
   If some property of superclass have definition to be absolute value
   the subclass must not break the rule of the parent property.
