import { X } from "@phosphor-icons/react/dist/ssr";
import { CartContainer, CloseButton, ProductContainer, ProductList, Total, BetweenContainer, Amount, BuyButton } from "../styles/components/cart";
import Image from "next/image";

import image from '../assets/1.png'
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { numberFormatter } from "../utils/formatter";


export default function Cart() {
  const { cartDetails, cartCount, totalPrice, removeItem } = useShoppingCart()

  function handleRemoveProductFromCart(id: string) {
    removeItem(id)
  }

  return (
    <CartContainer>
      <CloseButton>
        <X size={24} weight="bold" />
      </CloseButton>

      <h2>Sacola de compras</h2>

      <ProductList>
        {Object.values(cartDetails ?? {}).map((entry) => (
          <ProductContainer key={entry.id}>
            <Link href="/">
              <Image src={image} alt="" width={102} height={94} />
            </Link>

            <div>
              <span>{entry.name}</span>
              <strong>{numberFormatter.format(entry.price)}</strong>
              <button onClick={() => { handleRemoveProductFromCart(entry.id) }}>Remover</button>
            </div>
          </ProductContainer>
        ))}
      </ProductList>

      <footer>
        <BetweenContainer>
          <Amount>Quantidade</Amount>
          <Amount size="md">{cartCount} itens</Amount>
        </BetweenContainer>

        <BetweenContainer>
          <Total>Valor total</Total>
          <Total size="xl">{numberFormatter.format(totalPrice!)}</Total>
        </BetweenContainer>

        <BuyButton>Finalizar Compra</BuyButton>
      </footer>
    </CartContainer>
  )
}