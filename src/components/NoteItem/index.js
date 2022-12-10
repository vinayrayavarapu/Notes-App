import styled from 'styled-components'

const NoteItem = props => {
  const {itemDetails} = props
  const {title, text} = itemDetails

  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </ListItem>
  )
}

export default NoteItem

const ListItem = styled.li`
  margin: 10px;
  border: 1px solid #cbd5e1;
  padding: 5px;
`
const Heading = styled.h1``
const Text = styled.p``
