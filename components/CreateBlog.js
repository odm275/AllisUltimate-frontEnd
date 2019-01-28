import React, { Component } from 'react';
import gql from 'graphql-tag';
import Form from './styles/Form';

class CreateBlog extends Component {
  state = {
    title: '',
    body: '',
    image: '',
  };

  render() {
    const { title, body, image } = this.state;
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={title}
            />
          </label>
          <label htmlFor="title">
            body
            <input
              type="text"
              id="body"
              name="body"
              placeholder="body"
              required
              value={body}
            />
          </label>
          <label htmlFor="title">
            image
            <input
              type="text"
              id="image"
              name="image"
              placeholder="image"
              required
              value={image}
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}
export default CreateBlog;
