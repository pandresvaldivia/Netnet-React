export interface MovieTitle {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: Collection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Company[];
	production_countries: Country[];
	release_date: Date;
	revenue: number;
	runtime: number;
	spoken_languages: Language[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Collection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface Company {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface Country {
	iso_3166_1: string;
	name: string;
}

export interface Language {
	english_name: string;
	iso_639_1: string;
	name: string;
}
