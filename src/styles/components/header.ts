import { transform } from "next/dist/build/swc"
import { styled } from ".."

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export const CartIconContainer = styled('div', {
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray800",
  position: "relative",
  cursor: "pointer",



  variants: {
    variant: {
      default: {
        svg: {
          color: "$gray300",
        },
      },

      full: {
        color: "white",
        svg: {
          color: "$gray200"
        }
      },
    }
  }
})

export const CartAmount = styled('div', {
  height: '1.5rem',
  width: '1.5rem',
  boxSizing: "content-box",

  borderRadius: '50%',
  backgroundColor: "$green500",

  display: 'flex',
  alignItems: "center",
  justifyContent: "center",

  borderWidth: 3,
  borderColor: "$gray900",
  borderStyle: "solid",

  position: "absolute",
  top: "-50%",
  right: "-50%",
  transform: "translate(-50%, 50%)",

  span: {
    fontWeight: "bold",
    fontSize: "0.875rem",
  }
})