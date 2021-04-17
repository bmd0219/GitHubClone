import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function HomePage() {
  // const auth = useSelector(state => state.auth)
  // const user = useSelector(state => state.user)
  // const username = auth.user.username
  // const repositories = auth.user.repositories;

  const repositories = [
    {
      name: 'repoa'
    },
    {
      name: 'repob'
    },
    {
      name: 'repoc'
    },
    {
      name: 'repod'
    },
    {
      name: 'repoe'
    },
    {
      name: 'repof'
    },
  ]

  const handleNewRepo = e => {
    
  }

  return (
    <React.Fragment>
      <div className="text-center m-4">
        <h2>Repositories</h2>
      </div>
      <div className="text-center p-2 m-2">
        <Button 
          className='button'
          variant='primary'
          type='button'
          onCLick={handleNewRepo}
          >
            New Repository
          </Button>
      </div>
      <div className="m-4 p-4 text-center">
        {repositories ? (
          
          repositories.map((repo, index) => {
            return (
              <React.Fragment>
              <Link to={`/repository/${index}`}>{repo.name}</Link>
              <br/>
              </React.Fragment>
              
            )
          })
          
        ):null}
      </div>
    </React.Fragment>
  )
}