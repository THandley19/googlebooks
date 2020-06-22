import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import AddBookButton from "../AddBookButton";
import RemoveButton from "../RemoveButton";
import axios from "axios";
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export default class BookListItem extends Component {
  state = {
    data: this.props,
  };

  deleteFromDB = (id) => {
    axios
      .delete("/api/books/" + id)
      .then(() => {
        this.getBooks();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const books = this.props;
    console.log(this.props.id);

    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={books.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{books.title}</h3>
              <p>Authors: {books.authors} </p>
              {!books.description ? (
                <p>No Description available. </p>
              ) : (
                <p>Description:{books.description} </p>
              )}
              <a rel="noreferrer noopener" target="_blank" href={books.href}>
                Go to Book!
              </a>
              {!books.saved ? (
                <AddBookButton
                  key={books._id}
                  title={books.title}
                  authors={books.authors}
                  link={books.link}
                  description={books.description}
                  thumbnail={books.thumbnail}
                  saved={books.saved}
                />
              ) : (
                <RemoveButton onClick={() => this.deleteFromDB(books.title)} />
              )}
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}
