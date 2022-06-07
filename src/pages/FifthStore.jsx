import Card from "../component/Card/Card"
import {products} from '../STORE_DATA';

function FifthStore() {
  return (
    <div>
        <Card products = {products} />
    </div>
  )
}

export default FifthStore