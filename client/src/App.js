import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import Jumbotron from "./components/Jumbotron/index";
import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Row, Col } from "./components/Grid";
import { BookList, BookListItem } from "./components/Books";

class App extends Component {
  state = {
    bookSearch: "",
    books: [],
  };

  handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <BookList>
                  {this.state.recipes.map((book) => {
                    return (
                      <BookListItem
                        key={book.title}
                        title={book.title}
                        href={book.href}
                        ingredients={book.ingredients}
                        thumbnail={book.thumbnail}
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
