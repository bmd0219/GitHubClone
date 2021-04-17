import React from 'react'
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'

export default function Repository() {
  const {id} = useParams();
  const history = useHistory();

  // const auth = useSelector(state => state.auth)
  // const user = useSelector(state => state.user)
  // const username = auth.user.username
  // const repositories = auth.user.repositories;

  const repositories = [
    {
      name: 'repoa',
      type: 'folder',
      contents: {},
    },
    {
      name: 'repob',
      type: 'folder',
      contents: {},
    },
    {
      name: 'repoc',
      type: 'folder',
      contents: {},
    },
    {
      name: 'repod',
      type: 'folder',
      contents: {},
    },
    {
      name: 'repoe',
      type: 'folder',
      contents: {},
    },
    {
      name: 'repof',
      type: 'folder',
      contents: {},
    },
  ]

  return (
    <React.Fragment>
      <Container fluid>
        <div className="m-4 p-4">
          <h2>{repositories[id].name}</h2>
        </div>
      </Container>
    </React.Fragment>
  )
}