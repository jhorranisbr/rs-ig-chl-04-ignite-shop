import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '2xl',
    color: "$gray100",
    margin: "3rem 0 1.5rem"
  },

  p: {
    fontSize: '$xl',
    color: "$gray200",
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: "$green500",
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: "$green300"
    }
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  "span + span": {
    marginLeft: "-3.25rem",
  },

  span: {
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: "50%",
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "0 0 60px 0 rgba(0,0,0, .8)",

    img: {
      objectFit: 'cover'
    }
  }
})