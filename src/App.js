import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { About, Collections, Contact, Men, Women } from './pages'
import { ThemeProvider } from 'styled-components';
import theme from './theme.style'

function App() {
  return (<>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/about' element={<About />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </>

  )
}

export default App;