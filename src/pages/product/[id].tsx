import { stripe } from "@/src/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    url: string
    imageUrl: string
    price: string
    priceNumber: number,
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
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
    }, { count: 1 });

    // set quantity to 1 to avoid check if product already in cart
    // disable if application allow more than 1 of same product
    setItemQuantity(product.id, 1)
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>loading...</p>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button onClick={handleAddProductToCart} disabled={isCreatingCheckoutSession}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { id: 'prod_PWIWALdwPZE9QO' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        url: product.url,
        imageUrl: product.images[0],
        priceNumber: price.unit_amount! / 100,
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1hour
  }
}