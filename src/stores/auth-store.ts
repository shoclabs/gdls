import { observable, action, computed } from 'mobx';
import { persist } from 'mobx-persist';
import { hydrate } from './hydrate';

export class AuthStore {
  @observable
  @persist
  token: string;

  @observable
  @persist
  userId: string;

  @action.bound
  setAuthData(token: string, userId: string) {
    this.token = token;
    this.userId = userId;
  }

  @computed
  get isLoggedIn() {
    return !!this.token;
  }
}

export const authStore = new AuthStore();

export async function hidrateAuthStore() {
  return hydrate('auth-store', authStore);
}
