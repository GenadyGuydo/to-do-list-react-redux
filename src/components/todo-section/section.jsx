import React, { useState } from 'react'
import './section.css'
import MyModal from '../modal/Mymodal'
import MyInput from './../input/MyInput'
import MyButton from './../button/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../Todo/Todo'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { AddTitleProd, UpdateTodo } from './../redux/action/taskaction'

const SectonToDo = ({ p }) => {
  const [modal, setModal] = useState(false)
  const [titles, setTitles] = useState()
  const [diskripts, setDiscripts] = useState()
  const titleDispatch = useDispatch()
  const Title = useSelector((state) => state.Title)
  const { title } = Title

  const handleSubmit = (e) => {
    e.preventDefault()
    titleDispatch(AddTitleProd({ titles, diskripts }, p))
  }

  const handleDragEnd = (res) => {
    const items = Array.from(title)
    console.log(items)
    const src = res.source.index
    const dest = res?.destination?.index ?? src
    console.log(dest)
    const [reorderItem] = items.splice(src, 1)

    items.splice(dest, 0, reorderItem)

    titleDispatch(UpdateTodo({ title: items }))
  }

  return (
    <div>
      <div className="section">
        <div className="section__wrapper">
          <div className="section__header">
            <h1 className="section__title">{p.prods}</h1>
          </div>

          <div className="add__task">
            <button className="add" onClick={() => setModal(true)}>
              {' '}
              add task
            </button>
          </div>

          <MyModal visible={modal} setVisible={setModal}>
            <form onSubmit={handleSubmit}>
              <MyInput
                onChange={(e) => setTitles(e.target.value)}
                type="text"
                placeholder="change title of task"
              />
              <MyInput
                onChange={(e) => setDiscripts(e.target.value)}
                type="text"
                placeholder="change discript of task"
              />
              <MyButton type="submit"> Save </MyButton>
            </form>
          </MyModal>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={`droppable-1`}>
              {(provided) => (
                <div className="todowrapper" {...provided.droppableProps} ref={provided.innerRef}>
                  {title &&
                    title.map((t, index) => (
                      <Draggable key={t.id} draggableId={`draggable-${t.id}`} index={index}>
                        {(provided) => (
                          <div
                            className="todo_drag"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Todo t={t} number={index + 1} key={t.id} p={p} />
                          </div>
                        )}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default SectonToDo
