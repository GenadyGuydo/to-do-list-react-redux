export const AddTitleProd = (titles, p) => (dispatch, getState) => {
  const {
    Title: { title },
  } = getState()
  const hasProd = title.find((i) => i.titles === titles)
  if (!hasProd && !titles !== '') {
    dispatch({
      type: 'ADD_TASK',

      payload: [
        { id: `${Date.now()}`, prodID: p.id, titles, date: `${new Date().toLocaleString()}` },
        ...title,
      ],
    })
  }
}

export const UpdateTodo = (items) => (dispatch, getState) => {
  const {
    Title: { title },
  } = getState()

  dispatch({
    type: 'UPDATE__TASK',
    payload: [...items.title],
  })
}

export const RemoveTodo = (titles) => (dispatch, getState) => {
  console.log('getState', getState(), titles)
  const {
    Title: { title },
  } = getState()
  dispatch({
    type: 'REMOVE_TASK',
    payload: title.filter((t) => t.id !== titles.id),
  })
}

export const EditTodo = (todo, t) => (dispatch, getState) => {
  const {
    Title: { title },
  } = getState()

  dispatch({
    type: 'EDIT',
    payload: title.map(({ id, titles }) =>
      id === todo.id ? { id, titles: { ...titles, titles: t } } : { id, titles },
    ),
  })
}
