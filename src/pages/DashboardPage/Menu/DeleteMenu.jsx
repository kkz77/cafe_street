import axios from 'axios';

// Function to delete an item by ID
const deleteItem = async (itemId) => {
  try {
    // Send a DELETE request to the API endpoint with the item ID
    const response = await axios.delete(`https://bubble-tea-cafe-api-production.up.railway.app/api/category/${itemId}`);
    console.log('Item deleted successfully:', response.data);
    // Optionally, you can handle success cases or update your UI
  } catch (error) {
    console.error('Error deleting item:', error);
    // Optionally, you can handle error cases or show error messages
  }
};

// Usage example: Call the deleteItem function with the ID of the item you want to delete
deleteItem('');