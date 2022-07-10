import React from 'react';
import '../css/anuncio.css';
import { Link } from 'react-router-dom';

export default class Anuncio extends React.Component {
  render() {
    const { texto, link } = this.props;
    return (
      <div className="each-content">
        <h5 className="title-description">
          {texto}
        </h5>
        <Link to={link}>
          <button class="button" type="button">Clique aqui e Saiba mais</button>
        </Link>
      </div>
    );
  }
}