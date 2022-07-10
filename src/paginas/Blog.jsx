import React from 'react';
import '../css/blog.css';

export default class Blog extends React.Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return (
      <div className="blog">
        <h1>Blog</h1>
        {id}
      </div>
    );
  }
}