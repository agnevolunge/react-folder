
import ContactUsPage from "./ContactUsPage";
import CarsPage from "./CarsPage";
import CitiesPage from "./CitiesPage";
import CounterPage from "./CounterPage";
import NewsPage from "./NewsPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PageHeader from "./Components/PageHeader/PageHeader";

function App() {
  return (
  
      <div>
        <PageHeader />

        <Routes>
          <Route path='/counter' element={<CounterPage /> } />
          <Route path='/news' element={<NewsPage /> } />
          <Route path='/cities' element={<CitiesPage /> } />
          <Route path='/cars' element={<CarsPage /> } />
          <Route path='/contact-us' element={<ContactUsPage /> } />

          <Route path='*' element={<h1>404: Page not found</h1>} />
        </Routes>

      </div>
  )
}

export default App;
