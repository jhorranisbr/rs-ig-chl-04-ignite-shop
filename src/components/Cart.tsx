import { X } from "@phosphor-icons/react/dist/ssr";
import { CartContainer, CloseButton, ProductContainer, ProductList, Total, BetweenContainer, Amount, BuyButton } from "../styles/components/cart";
import Image from "next/image";

import image from '../assets/1.png'
import Link from "next/link";

export default function Cart() {
  return (
    <CartContainer>
      <CloseButton>
        <X size={24} weight="bold" />
      </CloseButton>


      <h2>Sacola de compras</h2>

      <ProductList>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Ignite</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>

        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
        <ProductContainer>
          <Link href="/">
            <Image src={image} alt="" width={102} height={94} />
          </Link>

          <div>
            <span>Camiseta Explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductContainer>
      </ProductList>

      <footer>
        <BetweenContainer>
          <Amount>Quantidade</Amount>
          <Amount size="md">3 itens</Amount>
        </BetweenContainer>

        <BetweenContainer>
          <Total>Valor total</Total>
          <Total size="xl">R$ 270,00</Total>
        </BetweenContainer>

        <BuyButton>Finalizar Compra</BuyButton>
      </footer>
    </CartContainer>
  )
}