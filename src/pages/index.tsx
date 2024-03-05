import { GetStaticProps } from 'next'
import Head from 'next/head'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer } from '../styles/pages/home'
import Product from '../components/Product'

interface HomeProps {
  products: {
    id: string;
    name: string;
    url: string;
    imageUrl: string;
    price: string,
    priceNumber: number
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(product => <Product key={product.id} product={product} />)}
      </HomeContainer >
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      url: product.url,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
      priceNumber: price.unit_amount! / 100,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}