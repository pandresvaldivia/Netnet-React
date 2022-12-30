import { RequestOptions } from './interfaces/http-request.interface';

const domain = import.meta.env.VITE_API_DOMAIN;
const key = import.meta.env.VITE_API_KEY;

export default class HttpsRequest {
	constructor(
		private https: string = 'https://',
		protected endpoint: string = '',
		protected version: number = 3
	) {}

	protected urlBuilder() {
		return `${this.https}${domain}/${this.version}/${this.endpoint}?api_key=${key}`;
	}

	protected configRequest({ endpoint, version = this.version }: RequestOptions) {
		this.endpoint = endpoint;
		this.version = version;
	}
}
