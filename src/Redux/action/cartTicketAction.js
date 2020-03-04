export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const BOOKED_TITLE = 'BOOKED_TITLE'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const bookedTitle = payload => {
  return {
    type: BOOKED_TITLE,
    payload: payload // next will assign by API
  }
}