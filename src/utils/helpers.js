export const URL = process.env.REACT_APP_PRYMARY_URL

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})