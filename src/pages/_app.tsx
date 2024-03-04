import type { AppProps } from 'next/app'
import Image from 'next/image';

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'

import { Handbag } from '@phosphor-icons/react/dist/ssr';

import { CartAmount, CartIconContainer, Container, Header } from '../styles/pages/app';
import Cart from '../components/Cart';
import { CartProvider } from 'use-shopping-cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode='payment'
      cartMode="client-only"
      stripe={'test'}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}`}
      currency="BRL"
      allowedCountries={['BR']}
      shouldPersist={true}>
      <>
        <Container>
          <Header>
            <Image src={logoImg.src} alt="" width={130} height={52} />

            <CartIconContainer variant="full">
              <Handbag weight='bold' size={24} />
              <CartAmount>3</CartAmount>
            </CartIconContainer>
          </Header>
          <Component {...pageProps} />
        </Container>
        <Cart></Cart>
      </>
    </CartProvider>

  )
}
