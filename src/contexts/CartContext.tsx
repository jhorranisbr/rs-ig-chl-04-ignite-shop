import { ReactNode, createContext } from "react";

interface CartContextProps {

}

interface CartContextProvider {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProvider) {
  return (
    <CartContext.Provider value={{}} >
      {children}
    </CartContext.Provider>
  )
}