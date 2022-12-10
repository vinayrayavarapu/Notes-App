import {useState} from 'react'
import styled from 'styled-components'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [notesList, setNotesList] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const addItem = e => {
    e.preventDefault()
    if (title && text !== '') {
      const newItem = {
        id: v4(),
        title,
        text,
      }
      const NewList = [...notesList, newItem]
      setNotesList(NewList)
      console.log(NewList)
      setTitle('')
      setText('')
    }
  }

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <Container>
        <Form>
          <Input
            onChange={e => setTitle(e.target.value)}
            type="text"
            value={title}
            placeholder="Title"
          />
          <br />
          <TextBox
            value={text}
            onChange={e => setText(e.target.value)}
            rows="6"
            cols="25"
            placeholder="Take a Note..."
          />
          <br />
          <Button onClick={addItem}>Add</Button>
        </Form>
        {notesList.length < 1 && (
          <>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <Heading>No Notes Yet</Heading>
            <Text>Notes you add will appear here</Text>
          </>
        )}
        <List>
          {notesList.map(each => (
            <NoteItem key={each.id} itemDetails={each} />
          ))}
        </List>
      </Container>
    </MainContainer>
  )
}

export default Notes
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const MainContainer = styled.div`
  padding: 20px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MainHeading = styled.h1`
  text-align: center;
  color: #4c63b6;
  font-family: Bree Serif;
`
const Image = styled.img`
  margin: 10px;
  width: 150px;
`
const Heading = styled.h1``
const Text = styled.p``
const Form = styled.form`
  width: 80%;
  border: 1px solid #cbd5e1;
  padding: 10px;
`
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  border: 0;
  outline: none;
`
const TextBox = styled.textarea`
  width: 100%;
  outline: none;
  border: 0;
`
const Button = styled.button`
  background-color: #4c63b6;
  color: #fff;
  border: 0;
  padding: 10px 15px;
  border-radius: 10px;
  float: right;
`
