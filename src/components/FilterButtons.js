import React, { useState } from "react";
import filtro from '../assets/Filter_button.png';
import closeFilter from '../assets/eliminar.svg';

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
        setAccordion({
            ...accordion,
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
                                <div className="accordionSeparador">
                                    <button class="accordion" onClick={() => toggleAccordion('size')}>
                                        Tamanho
                                    </button>
                                    <img src={closeFilter} alt="fechar"></img>
                                </div>
                                {accordion.size && (
                                    <div class="panel">
                                        {/* adicionar opções de tamanho */}
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
                                        {/* ... */}
                                    </div>
                                )}
                            </div>

                            {/* Filtro de cor */}
                            <hr></hr>
                            <div>
                                <div className="accordionSeparador">
                                    <button class="accordion" onClick={() => toggleAccordion('color')}>
                                        Cor
                                    </button>
                                    <img src={closeFilter} alt="fechar"></img>
                                </div>
                                {accordion.color && (
                                    <div class="panel">
                                        {/* adicionar opções de tamanho */}
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="Opção 1" />
                                            Opção 1
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="Opção 2" />
                                            Opção 2
                                        </label>
                                        {/* ... */}
                                    </div>
                                )}
                            </div>

                            {/* Filtro de marca */}
                            <hr></hr>
                            <div>
                                <div className="accordionSeparador">
                                    <button class="accordion" onClick={() => toggleAccordion('category')}>
                                        Categoria
                                    </button>
                                    <img src={closeFilter} alt="fechar"></img>
                                </div>
                                {accordion.category && (
                                    <div class="panel">
                                        {/* adicionar opções de tamanho */}
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="Opção 1" />
                                            Opção 1
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="Opção 2" />
                                            Opção 2
                                        </label>
                                        {/* ... */}
                                    </div>
                                )}
                            </div>
                            <hr></hr>
                            <div>
                                <div className="accordionSeparador">
                                    <button class="accordion" onClick={() => toggleAccordion('brand')}>
                                        marca
                                    </button>
                                    <img src={closeFilter} alt="fechar"></img>
                                </div>
                                {accordion.brand && (
                                    <div class="panel">
                                        {/* adicionar opções de tamanho */}
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="Opção 1" />
                                            Opção 1
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="Opção 2" />
                                            Opção 2
                                        </label>
                                        {/* ... */}
                                    </div>
                                )}
                            </div>
                            <hr></hr>
                            <div>
                                <div className="accordionSeparador">
                                    <button class="accordion" onClick={() => toggleAccordion('Order')}>
                                        Ordenar por
                                    </button>
                                    <img src={closeFilter} alt="fechar"></img>
                                </div>
                                {accordion.Order && (
                                    <div class="panel">
                                        {/* adicionar opções de tamanho */}
                                        <label>

                                            <input type="radio" className="radioInput" name="size" value="preçoBpA" />
                                            Preço: baixo para alto
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="preçoApB" />
                                            Preço: alto para baixo
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="recente" />
                                            Mais Recente
                                        </label>
                                        <label>
                                            <input type="radio" className="radioInput" name="size" value="antigo" />
                                            Mais antigo
                                        </label>
                                        {/* ... */}

                                    </div>

                                )}
                            </div>
                            <hr></hr>
                        </div>
                    </div>

                    <div>
                        <button>Aplicar</button>
                    </div>
                </div>
            )}

            {/* Lista de produtos */}
            {/* ... */}
        </div>
    );
};

export default FilterButtons;