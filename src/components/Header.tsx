import Image from 'next/image';

import { useShoppingCart } from "use-shopping-cart"

import logoImg from '../assets/logo.svg'
import { Handbag } from '@phosphor-icons/react/dist/ssr';

import { CartAmount, CartIconContainer, HeaderContainer } from '../styles/components/header';

export default function Header() {
  const { handleCartHover, cartCount } = useShoppingCart()

  function handleOpenCart() {
    handleCartHover()
  }

  return (
    <HeaderContainer>
      <Image src={logoImg.src} alt="" width={130} height={52} />

      <CartIconContainer variant={cartCount! > 0 ? "full" : "default"} onClick={handleOpenCart}>
        <Handbag weight='bold' size={24} />
        {cartCount! > 0 && (
          <CartAmount><span>{cartCount}</span></CartAmount>
        )}
      </CartIconContainer>
    </HeaderContainer>
  )
}