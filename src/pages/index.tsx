import { GetStaticProps } from 'next'
import Head from 'next/head'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer } from '../styles/pages/home'
import Product from '../components/Product'
import { useState } from 'react'
import SlideArrows from '../components/SlideArrows'

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 2,
      spacing: 48,
      origin: "center"
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(product => <Product key={product.id} product={product} />)}

        {loaded && instanceRef.current && (
          <>
            <SlideArrows
              disabledLeftArrow={currentSlide === 0}
              disabledRightArrow={currentSlide === instanceRef.current.track.details.slides.length - 1}
              onPrevClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              onNextClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
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