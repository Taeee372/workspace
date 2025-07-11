import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//id 속성값이 root인 태그를 찾아서, 그 태그에 App 컴포넌트를 그리겠습니다
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
