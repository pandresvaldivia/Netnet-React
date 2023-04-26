export interface TitleResponse {
	page: number;
	results: Title[];
	total_pages: number;
	total_results: number;
}

export interface Title {
	id: number;
	backdrop_path: string;
	name?: string;
	title?: string;
	genre_ids: number[];
}
