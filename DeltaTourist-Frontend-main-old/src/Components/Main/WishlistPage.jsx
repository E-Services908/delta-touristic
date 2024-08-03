import React, { useEffect, useState } from 'react';
import './styles/wishlistPage.scss';
import { Link } from 'react-router-dom';
import { BsClipboard2Check, BsTrash } from 'react-icons/bs';

const WishlistPage = () => {
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("CardData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(localStorage.getItem("CardData")) || [];

        if (Array.isArray(parsedData)) {
          setWishlistData([parsedData]);
        } else if (typeof parsedData === 'object' && parsedData !== null) {
          // Treat single object as an array with one item
          setWishlistData([parsedData]);
        } else {
          console.error("Invalid data format.");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.warn("No data found in localStorage.");
    }
  }, []);

  const handleDelete = (fsq_id) => {
    // Remove the item from the wishlistData state
    const updatedData = wishlistData.filter(item => item.fsq_id !== fsq_id);
    setWishlistData(updatedData);

    // Remove the item from localStorage
    const updatedLocalStorageData = JSON.stringify(updatedData);
    localStorage.setItem("CardData", updatedLocalStorageData);
  };

  console.log("wishlistData", wishlistData);

  return (
    <div className='WishlistPage'>
      <h1>Wishlist Page</h1>

      <table>
        <thead>
          <tr>
            <th>Destitle</th>
            <th>Location</th>
            <th>Details</th>
            <th>Delete</th> {/* Add Delete column header */}
          </tr>
        </thead>
        <tbody>
          {wishlistData.map(({ id, desTitle, location, description, fsq_id }, index) => (
            <tr key={index}>
              <td>{desTitle}</td>
              <td>{location}</td>
              <td>
                {wishlistData.length ?(<button className='btn flex'>
                  <Link to={`/Details/${fsq_id}`}>
                    <span>DETAILS</span> <BsClipboard2Check className="icon" />
                  </Link>
                </button>
                ):null}
                
              </td>
              <td>
              {wishlistData.length?  (
  <button className='btn flex' onClick={() => handleDelete(fsq_id)}>
    <span>DELETE</span><BsTrash className="icon" />
  </button>
):null}

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistPage;
