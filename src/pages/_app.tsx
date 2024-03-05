import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart';

import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app';

import Cart from '../components/Cart';
import Header from '../components/Header';

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
          <Header />
          <Component {...pageProps} />
        </Container>

        <Cart />
      </>
    </CartProvider>

  )
}
