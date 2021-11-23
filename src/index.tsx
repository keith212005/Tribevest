import * as React from 'react';
import { LogBox } from 'react-native';

// THIRD PARTY IMPORTS
import { Provider } from 'react-redux';
import { AppContainer } from '@navigator';

import { PersistGate } from 'redux-persist/integration/react';

// LOCAL IMPORTS
import { store, persistor } from './reducers';

const App = () => {
  LogBox.ignoreLogs(['Reanimated 2']);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
