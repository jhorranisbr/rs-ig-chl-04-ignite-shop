import Image from 'next/image';

import { useShoppingCart } from "use-shopping-cart"

import logoImg from '../assets/logo.svg'
import { CartAmount, CartIconContainer, HeaderContainer } from '../styles/components/header';
import { Handbag } from '@phosphor-icons/react/dist/ssr';


export default function Header() {
  const { handleCartHover, cartCount } = useShoppingCart()

  function handleOpenCart() {
    handleCartHover()
  }

  return (
    <HeaderContainer>
      <Image src={logoImg.src} alt="" width={130} height={52} />

      <CartIconContainer variant="full" onClick={handleOpenCart}>
        <Handbag weight='bold' size={24} />
        {cartCount! > 0 && (
          <CartAmount>{cartCount}</CartAmount>
        )}
      </CartIconContainer>
    </HeaderContainer>
  )
}