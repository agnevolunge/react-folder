
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import CarsPage from "./pages/CarsPage/CarsPage";
import CitiesPage from "./pages/CitiesPage/CitiesPage";
import CounterPage from "./pages/CounterPage/CounterPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PageHeader from "./Components/PageHeader/PageHeader";
import APIChuckNorrisPage from "./pages/APIChuckNorrisPage/APIChuckNorrisPage";
import APIDogsPage from "./pages/APIDogsPage/APIDogsPage";
import AIPage from "./pages/AIPage/AIPage";

function App() {
  return (
  
      <div>
        <PageHeader />

        <Routes>
          <Route path='/counter' element={<CounterPage /> } />
          <Route path='/news' element={<NewsPage /> } />
          <Route path='/cities' element={<CitiesPage /> } />
          <Route path='/cars' element={<CarsPage /> } />
          <Route path='/todo' element={<TodoPage /> } />
          <Route path='/contact-us' element={<ContactUsPage /> } />
          <Route path='/api/chuck-norris' element={<APIChuckNorrisPage /> } />
          <Route path='/api/dogs' element={<APIDogsPage /> } />
          <Route path='/api/AIPage' element={<AIPage /> } />

          <Route path='*' element={<h1>404: Page not found</h1>} />
        </Routes>

      </div>
  )
}

export default App;
