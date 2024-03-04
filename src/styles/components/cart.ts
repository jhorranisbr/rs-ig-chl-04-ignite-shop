import { styled } from "..";

export const CloseButton = styled("button", {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  color: "$gray300",
  fontSize: 0,
  border: "none",
  background: "none",
  cursor: "pointer"
})

export const CartContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",
  width: 488,
  height: "100vh",
  backgroundColor: "$gray800",
  position: "fixed",
  top: "0",
  padding: "4.5rem 3rem 3rem",
  overflowY: "auto",
  transition: "all ease 0.3s",


  h2: {
    fontSize: "1.25rem",
    color: "$gray100",
  },

  footer: {
    margin: "3.5rem 0",
  },

  variants: {
    state: {
      opened: {
        right: 0,
      },

      closed: {
        right: "-488px",
      }
    }
  }
})

export const ProductList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  flex: 1,

  marginTop: "2rem",
})

export const ProductContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    objectFit: "cover",
    borderRadius: 8,
    display: "block"
  },

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "0.125rem",
    lineHeight: 1.6,

    span: {
      fontSize: "$md",
      color: "$gray200"
    },

    strong: {
      fontSize: "$md",
      color: "$white"
    },
  },


  button: {
    width: "fit-content",
    border: "none",
    background: "none",

    fontWeight: "bold",
    fontSize: "1rem",
    color: "$green500",

    marginTop: "0.5rem",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    }
  }
})

export const BetweenContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export const Amount = styled("div", {
  color: "$gray100",
  lineHeight: 1.6,

  variants: {
    size: {
      md: {
        fontSize: "$md"
      }
    }
  }
})

export const Total = styled("div", {
  color: "$gray100",
  fontSize: "$md",
  fontWeight: "bold",

  variants: {
    size: {
      xl: {
        fontSize: "$xl",
        lineHeight: 1.4
      }
    }
  }
})

export const BuyButton = styled("button", {
  width: "100%",
  marginTop: "3.5rem",
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: "1.5rem",
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: "$md",

  "&:disabled": {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$green300"
  }
})


