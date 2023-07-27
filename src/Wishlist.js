import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Button } from '@mui/material';
import './Wishlist.css'
const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8181/api/view/wishlist');
      console.log(response.data)
      setWishlistItems(response.data);
    } catch (error) {
      console.error('Error occurred while fetching wishlist items:', error);
    }
  };

  
  const WishData=wishlistItems.map(
    (wish)=>{
      const handleDelete = async () => {
        try{
          const response = await axios.delete(`http://127.0.0.1:8181/api/wishdelete/${wish.id}`);
          console.log(response)
        }catch(error){
          console.error('Error occurred while deleting wishlist items:', error);
        }
      };
      return(
<MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={wish.image}
                alt={wish.title}
                style={{ width: '50px', height: '70px' }}
                
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{wish.title}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{wish.author}</p>
          </td>

          <td>
            <Button variant='contained' onClick={handleDelete} >
              Delete
            </Button>
          </td>
        </tr>
        </MDBTableBody>
      )
      
    }
  )
  return (
    <div>
     
      <h2 className="head-view1">Wishlist</h2>
      <MDBTable align='middle' style={{'width':'170vh', 'margin-left':'120px'}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Author</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      {WishData}
      </MDBTable>
    </div>
  );
};

export default Wishlist;