import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Element
import Main from '../Pages/Main';

function App() {
  return (
    <>
        {/* GitHub Pages(/ahnlab_homepage/)에서도 같은 경로로 동작하도록 빌드 base를 basename으로 사용 */}
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Routes>
                <Route path={'/'} element={<Main />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
