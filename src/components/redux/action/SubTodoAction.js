export const AddSubProd = (subtodos, t) => (dispatch, getState) => {
  const {
    Subtodo: { subtodo },
  } = getState()
  const hasProdsub = subtodo.find((i) => i.subtodos === subtodos)
  if (!hasProdsub && !subtodos !== '') {
    dispatch({
      type: 'ADD_SUB_TASK',
      payload: [{ id: `${Date.now()}`, taskID: t.id, subtodos }, ...subtodo],
    })
  }
}

export const RemoveSubTodo = (subtodos) => (dispatch, getState) => {
  const {
    Subtodo: { subtodo },
  } = getState()
  dispatch({
    type: 'REMOVE_SUB_TASK',
    payload: subtodo.filter((s) => s.id !== subtodos.id),
  })
}
