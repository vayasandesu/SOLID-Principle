export class Book {
	id: number;
	name: string;
	description: string;
	price: number;
}

export class BookStorage {
	book: Book;
	amount: number;
}

export class CacheBookStorageManagement {
	storages: BookStorage[];

	findStock(bookId: number): BookStorage | undefined {
		return this.storages.find((x) => x.book.id == bookId);
	}
}

export class MockBookStorageManagement {
	getMockStock(bookId: number): BookStorage | undefined {
		const book = new Book();
		book.id = bookId;
		book.name = "mock";
		book.description = "";
		book.price = 100;

		const storage = new BookStorage();
		storage.book = book;
		storage.amount = 1;
		return storage;
	}
}

/**
 * Storage management will violent the Open-closed principle
 * When we want to add new DatabaseBookStorage
 * We need to change this class to add new type of Storage Management
 */
export class BookStore {
	// Bad here
	storageManagement: CacheBookStorageManagement | MockBookStorageManagement;

	// Bad here
	private getStock(bookId: number): BookStorage | undefined {
		if (this.storageManagement instanceof CacheBookStorageManagement) {
			return this.storageManagement.findStock(bookId);
		} else if (
			this.storageManagement instanceof MockBookStorageManagement
		) {
			return this.storageManagement.getMockStock(bookId);
		}
	}

	sell(id: number, amount: number): number {
		const storage = this.getStock(id);
		if (!storage) {
			throw new Error("Not found a book");
		}

		if (storage.amount < amount) {
			throw new Error("Stock not enough");
		}

		storage.amount -= amount;
		return storage.book.price * amount;
	}
}
