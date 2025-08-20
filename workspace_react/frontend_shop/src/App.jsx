import './App.css'
import UserLayout from './layout/UserLayout'
import { Route, Routes } from 'react-router-dom'
import BookList from './pages/BookList'
import AdminLayout from './layout/AdminLayout'
import RegBook from './pages/RegBook'
import CategoryManage from './pages/CategoryManage'
import BookDetail from './pages/BookDetail'

function App() {

  //state변경함수, axios => 비동기 함수
  /*
    const [num, setNum] = useState(5);

    useEffect(() => {
      setNum(num + 5);
      setNum(num + 5);
    }, []);

    console.log(`num = ${num}`); 
  */

  return (
    <>
      <Routes>
        {/* 일반 사용자가 접근하는 페이지들 */}
        {/* 일반 사용자가 접근하는 페이지는 모두 UserLayout과 함께 열린다 */}
        {/* UserLayout의 Outlet 위치에 우리가 원하는 컴포넌트가 뜬다 */}
        <Route path='/' element={ <UserLayout /> }>
          {/* 도서 목록 페이지, url : /list */}
          <Route path='list' element={ <BookList /> }/>
          {/* 도서 상세 정보 페이지, url : /book-detail */}
          <Route path='book-detail/:bookNum' element={ <BookDetail /> } />
        </Route>

        {/* 관리자 페이지는 AdminLayout이랑 함께 열린다 */}
        <Route path='/admin' element={ <AdminLayout /> }> 
          {/* 도서 등록 페이지, /admin/reg-book */}
          <Route path='reg-book' element={ <RegBook /> }/>

          {/* 카테고리 관리 페이지, /admin/cate-manage */}
          <Route path='cate-manage' element={ <CategoryManage /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
