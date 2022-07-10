import React from 'react';
import '../css/inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaDeAnuncios from '../componentes/ListaDeAnuncios';
import CitacaoInicial from '../componentes/CitacaoInicial';
import NavegacaoInicial from '../componentes/NavegacaoInicial';
import Footer from '../componentes/Footer';
import Menu from '../componentes/Menu';

export default class Inicio extends React.Component {
  state = {
    wallpaper: ['wallpaper01', 'wallpaper02', 'wallpaper03'],
    screen: 'wallpaper01',
    atividade: false,
    button1: false,
    button2: true,
    button3: false,
  }

  componentDidMount() {
    const { wallpaper, screen } = this.state;
    let number = 0;
    setInterval(() => {
      const { atividade } = this.state;
      if (atividade === false) {
        if (number > 2) {
          number = 0;
        }
        this.setState({ screen: wallpaper[number] })
        console.log(`Screen: ${screen}`);
        number += 1;
      }
    }, 5000);
  }

  setaWallpaper = (number) => {
    this.setState({ [`button${number}`]: true });
    const { wallpaper } = this.state;
    this.setState({
      screen: wallpaper[number],
      atividade: true,
    });
    setTimeout(() => {
      const { button1, button2, button3 } = this.state;
      if (button1 | button2 | button3) {
        this.setState({ [`button${number}`]: false });
      } else {
        this.setState({
          atividade: false,
          [`button${number}`]: false,
        });
      }
    }, 10000);
  }

  render() {
    const { screen, wallpaper } = this.state;
    return (
      <body>
        <div className="inicio">
          <Menu />
          <div className={` ${screen} title`}>
            <div className='fundoescuro'></div>
            <div className="content">
              <h1 className="title-page">Universo dos Mythos</h1>
              <ListaDeAnuncios
                wallpaper={wallpaper}
                screen={screen} />
            </div>
            <div className="alternate">
              <div
                className={
                  screen === wallpaper[0]
                    ? "div-alternate div-alternate-selected"
                    : "div-alternate"
                }
                onClick={() => this.setaWallpaper(0)}
              >
              </div>
              <div
                className={
                  screen === wallpaper[1]
                    ? "div-alternate div-alternate-selected"
                    : "div-alternate"
                }
                onClick={() => this.setaWallpaper(1)}
              >
              </div>
              <div
                className={
                  screen === wallpaper[2]
                    ? "div-alternate div-alternate-selected"
                    : "div-alternate"
                }
                onClick={() => this.setaWallpaper(2)}
              >
              </div>
            </div>
          </div>
          <CitacaoInicial />
          <NavegacaoInicial />
          <Footer />
        </div>
      </body>
    );
  }
}