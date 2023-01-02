import Main from './components/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

function App() {
  library.add(fab);
  return <Main />;
}

export default App;
