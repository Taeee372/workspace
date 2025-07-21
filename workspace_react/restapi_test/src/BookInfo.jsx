import React, { useEffect } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import axios from 'axios';

const BookInfo = () => {

  useEffect(() => {
    axios.get('/api/books')
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
  }, []);


  return (
    <>
      <div></div>
      <BookList />
      <BookDetail />
    </>
   
  )
}

export default BookInfo