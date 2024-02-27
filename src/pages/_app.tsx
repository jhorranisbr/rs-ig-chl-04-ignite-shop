import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'

import { CartAmount, CartIconContainer, Container, Header } from '../styles/pages/app';
import { Handbag } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
