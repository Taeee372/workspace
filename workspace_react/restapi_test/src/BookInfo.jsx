import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import axios from 'axios';

const BookInfo = () => {
const [bookList, setBookList] = useState([]);

const [selectBook, setSelectBook] = useState({});
console.log(selectBook);

const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios.get('/api/books')
    .then(res => {
      console.log(res.data);
      setBookList(res.data);
    })
    .catch(error => console.log(error));
  }, []);


  return (
    <>
      <BookList 
      bookList={bookList}
      setSelectBook={setSelectBook}
      setIsShow={setIsShow}
      />
      {
        isShow
        ?
        <BookDetail selectBook={selectBook}/>
        :
        null
      }

      
    </>
   
  )
}

export default BookInfo