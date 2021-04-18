import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'
import axios from "axios";

export default function Repository() {
  const {name} = useParams();
  const history = useHistory();
  const [directory, setDirectory] = useState([])

  // const auth = useSelector(state => state.auth)
  // const user = useSelector(state => state.user)
  // const username = auth.user.username
  // const repositories = auth.user.repositories;

  const getRepoDetails = () => {
    const response = axios
      .get(`http://localhost:5050/repository/${name}`)
      .then(res => {
        console.log(res.data);
        setDirectory(res.data.files)
        // console.log(res.data.files);
        // setRepos(res.data.files)
        // console.log(repos);
      })
      .catch(err => console.log(err));
  }

  return (
    <React.Fragment>
      <Container fluid>
      {getRepoDetails()}
        <div className="m-4 p-4">
          <h2>{name}</h2>
        </div>
        <div className="m-4 p-4 text-center">
        {directory
          ? directory.map((repo, index) => {
              return (
                <React.Fragment>
                  {repo}
                  <br />
                </React.Fragment>
              );
            })
          : null}
      </div>
      </Container>
    </React.Fragment>
  )
}