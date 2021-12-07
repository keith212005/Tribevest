// import './wdyr';
import * as React from 'react';
import { LogBox } from 'react-native';

// THIRD PARTY IMPORTS
import { Provider } from 'react-redux';
import { AppContainer } from './navigator';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { store, persistor } from './reducers';

const App = () => {
  LogBox.ignoreLogs(['If you want to use Reanimated 2']);
  LogBox.ignoreLogs(['Failed prop type:']);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
