import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Detail from '../components/Detail';

function DetailBook(props) {
    const params = useParams();
    useEffect(() => {
        props.getdetailbook(params.isbn);
      }, []);
      function showDetail() {
        if (props.books)
          return (
            <div>
              <Detail 
              thumbnailUrl={props.books.thumbnailUrl}
              title={props.books.title}
              isbn={props.books.isbn}
              pageCount={props.books.pageCount}
              longDescription={props.books.longDescription}
              categories={props.books.categories}
              status={props.books.status}
              authors={props.books.authors}
              />
            </div>
          );
      
      }
  return (
    <center>{showDetail()}</center>
  )
}

export default DetailBook