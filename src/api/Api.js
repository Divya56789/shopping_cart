import axios from 'axios';
export default  async function Api(){
    const fetchProduct = await axios.get('https://fakestoreapi.com/products');
    return fetchProduct
}
