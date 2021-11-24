import * as React from 'react';

// THIRD PARTY IMPORTS
import { Provider } from 'react-redux';
import { AppContainer } from './navigator';
import { LogBox } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';

// LOCAL IMPORTS
import { store, persistor } from './reducers';

const App = () => {
  LogBox.ignoreLogs(['If you want to use Reanimated 2']);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
