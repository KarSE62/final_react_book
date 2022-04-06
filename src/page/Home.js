import React, { useEffect } from 'react';
import Book from '../components/Book'

function Home(props) {
    const handledOnLoad = () => {
        props.handledOnLoad();
      };
      useEffect(() => {
        handledOnLoad();
      }, []);
      function showBooks() {
        return props.books.map(function (book) {
          return (
            <Book
            title={book.title}
            thumbnailUrl={book.thumbnailUrl}
            categories={book.categories}
            isbn={book.isbn}
            shortDescription={book.shortDescription}
            authors={book.authors}
            pageCount={book.pageCount}
            />
          );
        });
      }
      return <div className='row'>{showBooks()}</div>;
}

export default Home