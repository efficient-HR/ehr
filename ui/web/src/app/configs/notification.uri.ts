import { environment } from '../../environments/environment';

const BASE_URL = environment.notificationUri;

export const notificationUri = {
  getAllEmail: BASE_URL + 'email',
};
