declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			PORT?: string;
			DATABASE_HOST: string;
			DATABASE_USER: string;
			DATABASE_NAME: string;
			DATABASE_PASSWORD: string;
			ACCESS_TOKEN_SECRET: string;
			REFRESH_TOKEN_SECRET: string;
			PAGARME_SECRET_KEY: string;
			PAGARME_ENDPOINT: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
