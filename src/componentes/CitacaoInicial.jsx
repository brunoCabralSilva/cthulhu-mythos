import React from 'react';
import '../css/citacao-inicial.css';

export default class CitacaoInicial extends React.Component {
  render() {
    return (
      <section className="citacao-inicial">
        <div className="fundo-escuro"></div>
        <div className="citacao">
          <h3 className="texto-citacao">
            A emoção mais antiga e mais forte da humanidade é o medo, e o mais antigo e mais forte de todos os medos é o medo do desconhecido.
          </h3>
          <h4 className="autor-citacao">- H.P. Lovecraft</h4>
        </div>
      </section>
    );
  }
}