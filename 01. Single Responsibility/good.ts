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

export class BookStorageManagement {
	storages: BookStorage[];

	findStock(bookId: number): BookStorage | undefined {
		return this.storages.find((x) => x.book.id == bookId);
	}
}

// Respresent as Logical class
export class BookStore {
	storageManagement: BookStorageManagement;

	sell(id: number, amount: number): number {
		const storage = this.storageManagement.findStock(id);
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
