import { challenge } from '../code-thing';

export const URL = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${process.env.VUE_APP_X_MAL_CLIENT_ID}&code_challenge=${challenge}&state=RquestID42&redirect_uri=http://localhost:8080/`;
