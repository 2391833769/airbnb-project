export const theme = {
  color: {
    primaryColor: '#ff385C',
    secondColor: '#00848A'
  },
  textColor: {
    primaryColor: "$484848",
    secondColor: "#222"
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 0.25s ease;
    &:hover {
      box-shadow: 0px 2px 4px 1px #e6e6e6;
    }
    `
  }
}