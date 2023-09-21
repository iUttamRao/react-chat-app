import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/config';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
