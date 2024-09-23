import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import ScrollToTop from './components/ScrollToTop.jsx' 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop/>
      <App />
    </Provider>
  </BrowserRouter>,
)
