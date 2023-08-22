import React, { useState } from 'react';
import BookCard from './BookCard';
import '../styles/CollectionsPage.css';
      
 const CollectionsPage = () => {
    const collections = [
        {
            name: 'Kids Stories',
            books: [
                {
                title: 'The Adventure Begins',
                author: 'Jane Smith',
                price: 10.99,
                image: 'https://books.google.co.in/books/publisher/content?id=zdHgDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1smmjcFua37TZ1WsK-z9aDkR9MyQ&w=1280',
                },
                    
                {
                title: 'The Magical Forest',
                author: 'John Doe',
                price: 9.99,
                image: 'https://m.media-amazon.com/images/I/51mg87gN49L.jpg',
                },
                  {
                    title: 'Great Stories for children',
                    author: 'Ruskin Bond',
                    price: 6.76,
                    image: 'https://rukminim2.flixcart.com/image/850/1000/kzfvzww0/book/1/2/h/ruskinbond-great-stories-for-children-original-imagbg6ggeeuvn65.jpeg?q=90',
                  }
              ],
            },
            {
              name: 'Fiction Books',
              books: [
                {
                  title: 'The Mystery of Laughing Shadows',
                  author: 'Alice Johnson',
                  price: 12.99,
                  image: 'https://m.media-amazon.com/images/I/91mr6jFbW+L._AC_UF1000,1000_QL80_.jpg',
                },
                {
                  title: 'The Secret of Shadow Ranch',
                  author: 'Emily White',
                  price: 11.99,
                  image: 'https://m.media-amazon.com/images/I/A12Jjz-2BgL._AC_UF1000,1000_QL80_.jpg',
                },
                {
                    title: 'Shadow of the Raven',
                    author: 'Tessa Harris',
                    price: 4.99,
                    image: 'https://hachette.imgix.net/books/9781472118240.jpg?auto=compress&w=440',
                  },
                  {
                    title: 'Magic Tree House',
                    author: 'Mary pope',
                    price: 9.99,
                    image: 'https://imaginationsoup.net/wp-content/uploads/2021/10/Magic-Tree-House-The-Graphic-NOvel-Dinosaurs-Before-Dark-669x1024.jpeg',
                  }

              ],
            },
            {
                name: 'Autobiography',
                books: [
                  {
                    title: 'The Journey of my life',
                    author: 'O.P.Gupta',
                    price: 14.99,
                    image: 'https://m.media-amazon.com/images/I/51oZRUDsgyL.jpg',
                  },
                  {
                    title: 'Through My Eyes',
                    author: 'Jane Smith',
                    price: 12.99,
                    image: 'https://m.media-amazon.com/images/I/41ZB85hD2fL._AC_UF1000,1000_QL80_.jpg',
                  },
                  {
                    title: 'Wings of Fire',
                    author: 'Dr.A.P.J. Abdul kalam',
                    price: 12.99,
                    image: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg',
                  },
                  {
                    title: 'My Experiments with Truth',
                    author: 'Mahatma Gandhi',
                    price: 12.99,
                    image: 'https://m.media-amazon.com/images/I/51GtJOp1OtL.jpg',
                  },

                ],
              },
              {
                name: 'General Knowledge',
                books: [
                  {
                    title: 'Learning Edge',
                    author: 'Eduvile',
                    price: 14.99,
                    image: 'https://shop4books.co.in/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/s/4/s4b-edu-02254.jpg',
                  },
                  {
                    title: 'Quantitative Aptitude',
                    author: 'Mary Johnson',
                    price: 13.99,
                    image: 'https://kbazar.s3.amazonaws.com/__sized__/products/quantitative_aptitude_dinesh_khattar-thumbnail-510x510-70.jpg',
                  },

                ],
              },
    

          ];
      
        const initialSelectedBooksMap = collections.reduce((acc, collection) => {
          acc[collection.name] = collection.books;
          return acc;
        }, {});
      
        const [selectedCollection, setSelectedCollection] = useState('Kids Stories');
        // eslint-disable-next-line
        const [selectedBooksMap] = useState(initialSelectedBooksMap);
      
        const handleCollectionClick = collectionName => {
          setSelectedCollection(collectionName);
        };
      
        const selectedBooks = selectedBooksMap[selectedCollection];
      
        return (
            <div className='collections-background'>

          <div className="collections-page">
            <div className="collections-buttons">
              {collections.map(collection => (
                <button
                  key={collection.name}
                  className={`collection-button ${selectedCollection === collection.name ? 'selected' : ''}`}
                  onClick={() => handleCollectionClick(collection.name)}
                >
                  {collection.name}
                </button>
              ))}
            </div>
            <div className="book-category">
              {selectedBooks.map(book => (
                <BookCard key={book.title} book={book} />
              ))}
            </div>
          </div>
          </div>
        );
      };
      
      export default CollectionsPage;
      


