import Link from "next/link";
import Image from "next/image";

import { Content } from "../styles/components/product";
import { useShoppingCart } from "use-shopping-cart";
import { Handbag } from "@phosphor-icons/react";

interface Product {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
  priceNumber: number
  defaultPriceId: string
}

interface ProductProps {
  product: Product,
  active: boolean
}

export default function Product({ product, active }: ProductProps) {
  const { addItem, setItemQuantity } = useShoppingCart()

  function handleAddProductToCart() {
    // application do not allow more than 1 of same product
    // check if product already exists in cart

    addItem({
      id: product.id,
      name: product.name,
      price: product.priceNumber,
      image: product.imageUrl,
      currency: 'BRL',
      price_id: product.defaultPriceId
    }, { count: 1 });

    // set quantity to 1 to avoid check if product already in cart
    // disable if application allow more than 1 of same product
    setItemQuantity(product.id, 1)
  }

  return (
    <Content className='keen-slider__slide' mode={active ? "active" : "default"}>
      <Link key={product.id} href={`product/${product.id}`} prefetch={false}>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </Link>
      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <button onClick={handleAddProductToCart}>
          <Handbag weight='bold' size={32} />
        </button>
      </footer>
    </Content>
  )
}