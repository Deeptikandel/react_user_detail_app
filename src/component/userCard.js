import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ users }) => {
  return (
    <> <div className="container">
      <h1>Users Lists</h1>
    <div className="user-container">
      {users &&
        users.map((user) => (
          <Card
            style={{
              width: "190px",
              height: "250px",
              margin: "16px",
              padding:"16px 2px",
              textAlign: "center",
              backgroundColor:"#cfe6d5",
              borderRadius:"15px"
              
            }}
            key={user.id}
          >
            <Card.Body className="flex-col">
              <Button className="btn btn-secondary btn-circle btn-xl">
                {user.name[0]}
              </Button>
              <Card.Title>{user.name}</Card.Title>
              <Badge>{user.name}</Badge>
              <Card.Link href="#">https://{user.website}</Card.Link>
              <Link to={`/users/${user.id}`}>
                <Button style={{ width: "80%", marginTop: "1rem" }}>More Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

export default UserCard;