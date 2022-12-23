export class Book {
	id: number;
	name: string;
	description: string;
	price: number;
}

export interface BookStorageManagement {
	findStock(bookId: number): BookStorage | undefined;
}

export class BookStorage {
	book: Book;
	amount: number;
}

export class CacheBookStorageManagement implements BookStorageManagement {
	storages: BookStorage[];

	findStock(bookId: number): BookStorage | undefined {
		return this.storages.find((x) => x.book.id == bookId);
	}
}

export class MockBookStorageManagement implements BookStorageManagement {
	findStock(bookId: number): BookStorage | undefined {
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
	// Use interface BookStorageManagement to handle the object instead of concrete type
	// When we need to modify or add new management type like db connection
	// We dont need to add another if condition
	storageManagement: BookStorageManagement;

	private getStock(bookId: number): BookStorage | undefined {
		return this.storageManagement.findStock(bookId);
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
