

import { Provider } from 'react-redux';
import Body from './Compnents/Body';
import appStore from './Util/appStore';

function App() {
  return (
    <Provider store={appStore}><Body /></Provider>
  );
}

export default App;
