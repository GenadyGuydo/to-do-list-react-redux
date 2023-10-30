export const AddTodoProd = (prods) => (dispatch, getState) => {
  const {
    Prod: { prod },
  } = getState()
  const hasProd = prod.find((i) => i.prods === prods)
  if (!hasProd && !prods !== '') {
    dispatch({
      type: 'ADD_PROD',
      payload: [{ id: `${Date.now()}`, prods }, ...prod],
    })
  }
}
