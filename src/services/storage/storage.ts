import Dexie, { Table } from 'dexie';

import { RatedTitle, Title } from '../interfaces/storage';

export const db = new Dexie('netnet');
db.version(1).stores({
	titles: 'id, name, poster',
	rated: 'id',
});

export class NetnetDB extends Dexie {
	titles!: Table<Title>;
	rated!: Table<RatedTitle>;

	constructor() {
		super('netnet');
		this.version(1).stores({
			titles: 'id, name, poster',
			rated: 'id',
		});
	}
}

export const netnetDB = new NetnetDB();
