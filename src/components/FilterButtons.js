import React, { useState } from "react";
import filtro from '../assets/icons/Filter_button.png';
import closeFilter from '../assets/icons/eliminar.svg';
import maisFilter from '../assets/icons/Filter_mais.png';
import menosFilter from '../assets/icons/Filter_menos.png';
import Button from "./Button";

const FilterButtons = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [accordion, setAccordion] = useState({
        size: false,
        color: false,
        category: false,
        brand: false,
        order: false,
    });

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const toggleAccordion = (filter) => {
        const updatedAccordion = {
            size: false,
            color: false,
            category: false,
            brand: false,
        };

        setAccordion({
            ...updatedAccordion,
            [filter]: !accordion[filter],
        });
    };





    return (
        <div>
            <button className="filterButton" onClick={toggleFilters}><img src={filtro} alt="filtro"></img></button>

            {showFilters && (
                <div className="overlay">
                    <div className="filterHeader">
                        <div className="filterTitle">
                            <h2>Filtragem e Ordenação</h2>
                        </div>
                        <div className="filterClose">
                            <button onClick={toggleFilters}><img src={closeFilter} alt="fechar"></img></button>
                        </div>
                    </div>
                    <div className="filterMenu">
                        {/* Filtro de tamanho */}
                        <div className="accordionFilter">
                            <hr></hr>
                            <div>
                                {accordion.size ? (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('size')}>
                                            Tamanho
                                        </button>
                                        <img src={menosFilter} alt="fechar"></img>
                                    </div>
                                ) : (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('size')}>
                                            Tamanho
                                        </button>
                                        <img src={maisFilter} alt="fechar"></img>
                                    </div>

                                )}
                                {accordion.size && (
                                    <div class="panel">
                                        {/* adicionar opções de tamanho */}
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="XS" />
                                            XS
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="S" />
                                            S
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="M" />
                                            M
                                        </label>
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="L" />
                                            L
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="XL" />
                                            XL
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="XLL" />
                                            XLL
                                        </label>
                                        {/* ... */}
                                    </div>
                                )}
                            </div>

                            <hr></hr>
                            <div>

                                {accordion.color ? (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('color')}>
                                            Cor
                                        </button>
                                        <img src={menosFilter} alt="fechar"></img>
                                    </div>
                                ) : (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('color')}>
                                            Cor
                                        </button>
                                        <img src={maisFilter} alt="fechar"></img>
                                    </div>
                                )}

                                {accordion.color && (
                                    <div class="panel">
                                        <label>

                                            <input type="radio" className="radioInput" name="cor" value="multicor" />
                                            Multicor
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="preto" />
                                            Preto
                                        </label>
                                        <label>

                                            <input type="radio" className="radioInput" name="cor" value="branco" />
                                            Branco
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="vermelho" />
                                            Vermelho
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="verde" />
                                            Verde
                                        </label>
                                        <label>

                                            <input type="radio" className="radioInput" name="cor" value="azul" />
                                            Azul
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="amarelo" />
                                            Amarelo
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="rosa" />
                                            Rosa
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="roxo" />
                                            Roxo
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="cor" value="laranja" />
                                            Laranja
                                        </label>
                                        {/* ... */}
                                    </div>
                                )}
                            </div>

                            <hr></hr>
                            <div>
                                {accordion.category ? (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('category')}>
                                            Categoria
                                        </button>
                                        <img src={menosFilter} alt="fechar"></img>
                                    </div>
                                ) : (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('category')}>
                                            Categoria
                                        </button>
                                        <img src={maisFilter} alt="fechar"></img>
                                    </div>
                                )}

                                {accordion.category && (
                                    <div class="panel">
                                        <label>

                                            <input type="radio" className="radioInput" name="categoria" value="mulher" />
                                            Mulher
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="categoria" value="homem" />
                                            Homem
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="categoria" value="crianca" />
                                            Criança
                                        </label>
                                        {/* ... */}
                                    </div>
                                )}
                            </div>
                            <hr></hr>
                            <div>
                                {accordion.brand ? (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('brand')}>
                                            marca
                                        </button>
                                        <img src={menosFilter} alt="fechar"></img>
                                    </div>
                                ) : (
                                    <div className="accordionSeparador">
                                        <button class="accordion" onClick={() => toggleAccordion('brand')}>
                                            marca
                                        </button>
                                        <img src={maisFilter} alt="fechar"></img>
                                    </div>
                                )}

                                {accordion.brand && (
                                    <div class="panel">
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="Opção 1" />
                                            Marca 1
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="Opção 2" />
                                            Marca 2
                                        </label>
                                    </div>
                                )}
                            </div>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="filtroAplicar">
                        <Button text='Aplicar'/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterButtons;