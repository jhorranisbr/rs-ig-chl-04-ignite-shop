import { styled } from "..";

export const Content = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(32, 32, 32, .9)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease',

    "> div": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem"
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },

    button: {
      height: '3.5rem',
      width: '3.5rem',
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",

      borderRadius: 8,
      border: "none",
      color: "$white",
      backgroundColor: "$green500",
      cursor: "pointer"
    }
  },

  variants: {
    mode: {
      active: {
        footer: {
          transform: 'translateY(0%)',
          opacity: 1,
        }
      },

      default: {}
    }
  },
})