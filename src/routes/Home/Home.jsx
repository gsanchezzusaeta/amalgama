import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAndUsers } from '../../redux/reducers/mainReducer';

const Home = () => {

  const books = useSelector((state) => state.books);
  const users = useSelector((state) => state.users);
  
  console.log(books);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAndUsers());
  }, [dispatch]);

  const userId = 1; // Supongamos que queremos acceder al usuario con ID 1
  const user = users[userId]; // Accedemos al usuario por su ID
  let favoriteBooks = [];
  
  if (user) {
    // Accedemos a los libros favoritos del usuario
    favoriteBooks = user.favoriteBookIds.map((id) => books[id]);
  } 

  console.log(favoriteBooks);

  return (
    <div>
        Home
    </div>
  )
}

export default Home