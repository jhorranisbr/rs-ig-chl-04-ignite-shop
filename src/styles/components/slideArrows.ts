import { styled } from "..";

export const Arrow = styled('div', {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",
  width: 136,

  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  cursor: "pointer",

  variants: {
    disabledState: {
      disabled: {
        display: "none"
      },
      dafault: {}
    },
    side: {
      left: {
        left: 0,
        background: "linear-gradient(90deg, rgba(18,18,20,0.75) 0%, rgba(18,18,20,0) 100%)",
      },

      right: {
        right: 0,
        background: "linear-gradient(90deg, rgba(18,18,20,0) 0%, rgba(18,18,20,0.75) 100%)",
      }
    }
  }
})