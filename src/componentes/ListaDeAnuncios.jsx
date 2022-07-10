import React from 'react';
import Anuncio from './Anuncio';

export default class ListaDeAnuncio extends React.Component {
  render() {
    const { wallpaper, screen } = this.props;
    if (screen === wallpaper[0]) {
      return (
        <Anuncio
          texto="Onde o mundo dos vivos e dos mortos se conecta? Descruba a verdade por trás dos contos Lovecraftianos"
          link="/blog/1"
        />
      );
    }
    if (screen === wallpaper[1]) {
      return (
        <Anuncio
          texto="E se a cor que caiu do espaço caísse na minha casa? O que iria acontecer comigo?"
          link="/blog/2"
        />
      );
    }
    if (screen === wallpaper[2]) {
      return (
        <Anuncio
          texto="A cidade do grande Cthulhu foi encontrada?"
          link="/blog/3"
        />
      );
    }
  }
}