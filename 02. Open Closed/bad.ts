// Respresent as Model class
// Handle only book information
export class Book {
	id: number;
	name: string;
	description: string;
	price: number;
}

// Respresent as Model class
// Handle only stock amount
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

// Respresent as Logical class
export class BookStore {
	storageManagement: CacheBookStorageManagement | MockBookStorageManagement;

	private getStock(bookId: number): BookStorage | undefined {
		// Bad here
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
