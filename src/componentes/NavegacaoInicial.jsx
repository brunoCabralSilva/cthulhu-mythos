import React from 'react';
import '../css/navegacao-inicial.css';

export default class NavegacaoInicial extends React.Component {
    render() {
        return (
            <section className="navegacao-inicial">
                <div className="link-navegacao-container">
                    <div className="link-navegacao-inside">
                        <div className="escurecedor"></div>
                    </div>
                    <div className="link-navegacao-inside">
                        <div className="escurecedor"></div>
                    </div>
                </div>
                <div className="link-navegacao">
                    <div className="escurecedor"></div>
                </div>
                <div className="link-navegacao-vertical">
                    <div className="link-navegacao-vertical-inside">
                        <div className="escurecedor"></div>
                    </div>
                    <div className="link-navegacao-horizontal">
                        <div className="link-navegacao-horizontal-inside">
                            <div className="escurecedor"></div>
                        </div>
                        <div className="link-navegacao-horizontal-inside">
                            <div className="escurecedor"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}