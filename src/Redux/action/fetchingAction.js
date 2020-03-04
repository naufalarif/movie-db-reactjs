export const IS_EMPTY = 'IS_EMPTY'
export const IS_VALIDATED = 'IS_VALIDATED'
export const UNSUBSCRIBE_FETCH = 'UNSUBSCRIBE_FETCH'

/* --------- LOGIN & REGISTER --------- */

export const isEmptyField = () => {
  return {
    type: IS_EMPTY
  }
}

export const isValidated = () => {
  return {
    type: IS_VALIDATED
  }
}

export const unsubscribeFetch = () => {
  return {
    type: UNSUBSCRIBE_FETCH
  }
}