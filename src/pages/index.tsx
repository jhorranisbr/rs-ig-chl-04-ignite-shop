import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { Handbag } from '@phosphor-icons/react'

import { HomeContainer, Product } from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string;
    name: string;
    url: string;
    imageUrl: string;
    price: string
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
        {products.map(product => {
          return (
            <Link key={product.id} href={`product/${product.id}`} prefetch={false}>
              <Product className='keen-slider__slide'>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button><Handbag weight='bold' size={32} /> </button>
                </footer>
              </Product>
            </Link>
          )
        })}

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
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}