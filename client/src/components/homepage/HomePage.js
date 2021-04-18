import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function HomePage() {
  // const auth = useSelector(state => state.auth)
  // const user = useSelector(state => state.user)
  // const username = auth.user.username
  // const repositories = auth.user.repositories;

  const [repos, setRepos] = useState([])

  const handleNewRepo = e => {
    console.log("request made");
    // console.log(e);
    const response = axios
      .get("http://localhost:7005/repos")
      .then(res => {
        console.log(typeof res.data);
        console.log(res.data.files);
        setRepos(res.data.files)
        console.log(repos);
      })
      .catch(err => console.log(err));
    
  };

  return (
    <React.Fragment>
      <div className="text-center m-4">
        <h2>Repositories</h2>
      </div>
      <div className="text-center p-2 m-2">
        <Button
          className="button"
          variant="primary"
          type="button"
          onClick={handleNewRepo}
        >
          View Repositories
        </Button>
      </div>
      <div className="m-4 p-4 text-center">
        {repos
          ? repos.map((repo, index) => {
              return (
                <React.Fragment>
                  <Link to={`/repository/${repo.slice(0, -4)}`}>{repo.slice(0, -4)}</Link>
                  <br />
                </React.Fragment>
              );
            })
          : null}
      </div>
    </React.Fragment>
  );
}
