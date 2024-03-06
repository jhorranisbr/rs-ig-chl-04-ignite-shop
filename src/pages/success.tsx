import { useCallback, useEffect } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useShoppingCart } from "use-shopping-cart";

import { stripe } from "../lib/stripe";

import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string
    name: string
    imageUrl: string,
    price: {
      product: {
        images: string[]
      }
    }
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()



  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {products.map(product => {
            return (
              <span key={product.id}>
                <Image src={product.price.product.images[0]} alt="" width={120} height={110} />
              </span>
            )
          })}
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuu <strong>{customerName}</strong>, sua compra de {products.length} camisa{products.length > 1 ? 's' : ''} já está a caminho da sua casa.
        </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const products = session.line_items!.data

  console.log(products)

  return {
    props: {
      customerName,
      products
    }
  }
}