import { useState } from "react";

import { ShoppingCart, X } from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import Image from "next/image";

import { useShoppingCart } from "use-shopping-cart";

import { numberFormatter } from "../utils/formatter";

import {
  CartContainer,
  CloseButton,
  ProductContainer,
  ProductList,
  Total,
  BetweenContainer,
  Amount,
  BuyButton,
  EmptyCartContainer,
} from "../styles/components/cart";
import axios from "axios";

export default function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { cartDetails, cartCount, totalPrice, shouldDisplayCart, handleCloseCart, removeItem } = useShoppingCart()

  function handleRemoveProductFromCart(id: string) {
    removeItem(id)
  }

  function isEmptyCart() {
    return cartCount === 0 ?? undefined
  }

  async function handleBuyProduct() {
    let products: string[] = []

    Object.values(cartDetails ?? {}).map((entry) => {
      products.push(entry.price_id)
    })

    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CartContainer state={shouldDisplayCart! ? "opened" : "closed"}>
      <CloseButton onClick={handleCloseCart} >
        <X size={24} weight="bold" />
      </CloseButton>

      <h2>Sacola de compras</h2>

      {cartCount! > 0 ? (
        <ProductList>
          {Object.values(cartDetails ?? {}).map((entry) => (
            <ProductContainer key={entry.id}>
              <Link href="/">
                <Image src={entry.image!} alt="" width={102} height={94} />
              </Link>

              <div>
                <span>{entry.name}</span>
                <strong>{numberFormatter.format(entry.price)}</strong>
                <button onClick={() => { handleRemoveProductFromCart(entry.id) }}>Remover</button>
              </div>
            </ProductContainer>
          ))}
        </ProductList>
      ) : (
        <EmptyCartContainer>
          <ShoppingCart size={96} />
          <span>Seu carrinho de compras está vazio. <br /> Tente adicionar itens.</span>
        </EmptyCartContainer>
      )}

      < footer >
        <BetweenContainer>
          <Amount>Quantidade</Amount>
          <Amount size="md">{cartCount} itens</Amount>
        </BetweenContainer>

        <BetweenContainer>
          <Total>Valor total</Total>
          <Total size="xl">{numberFormatter.format(totalPrice!)}</Total>
        </BetweenContainer>

        <BuyButton disabled={cartCount === 0} onClick={handleBuyProduct}>Finalizar Compra</BuyButton>
      </footer>
    </CartContainer >
  )
}