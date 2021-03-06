import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

export const hydrate = create({
  jsonify: true,
  storage: AsyncStorage,
});
