import React, { useState } from "react";
import filtro from '../assets/icons/Filter_button.png';
import closeFilter from '../assets/icons/eliminar.svg';
import maisFilter from '../assets/icons/mostrar_mais_icon.svg';
import menosFilter from '../assets/icons/Filter_menos.svg';
import Button from "./Button";

const FilterButtons = ({ applyFilters, handleActiveFilters }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [accordion, setAccordion] = useState({
        size: false,
        color: false,
        category: false,
        brand: false,
    });

    const [selectedFilters, setSelectedFilters] = useState({
        size: null,
        color: null,
        category: null,
        brand: null,
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

    const handleApplyFilters = () => {
        // Apply selected filters
        console.log(selectedFilters)
        handleActiveFilters(selectedFilters)
        applyFilters(selectedFilters);
        toggleFilters(); // Close the filter overlay
    };

    const handleSelectFilter = (filterType, value) => {
        const newValue = selectedFilters[filterType] === value ? null : value;

        setSelectedFilters({
            ...selectedFilters,
            [filterType]: newValue,
        });
        console.log(selectedFilters[filterType])
    };

    return (
        <div>
            <button className="filterButton" onClick={toggleFilters}><img src={filtro} alt="filtro"></img></button>

            {showFilters && (
                <div className="overlay">
                    <div className="filterHeader">
                        <div className="filterTitle">
                            <h2>Filtros</h2>
                        </div>
                        <div className="filterClose">
                            <button onClick={toggleFilters}><img src={closeFilter} alt="fechar"></img></button>
                        </div>
                    </div>
                    <div className="filterMenu">
                        <div className="accordionFilter">
                            <hr></hr>
                            <div className="accordionSeparador">
                                <button className="accordion" onClick={() => toggleAccordion('size')}>
                                    Tamanho
                                </button>
                                <img src={accordion.size ? menosFilter : maisFilter} alt="toggle"></img>
                            </div>
                            {accordion.size && (
                                <div className="panel">
                                    <label>
                                        <input type="radio" className="radioInput" name="size" value="XS" onChange={() => handleSelectFilter('size', 'XS')} checked={selectedFilters['size'] === 'XS'} />
                                        XS
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="size" value="S" onChange={() => handleSelectFilter('size', 'S')} checked={selectedFilters['size'] === 'S'} />
                                        S
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="size" value="M" onChange={() => handleSelectFilter('size', 'M')} checked={selectedFilters['size'] === 'M'} />
                                        M
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="size" value="L" onChange={() => handleSelectFilter('size', 'L')} checked={selectedFilters['size'] === 'L'} />
                                        L
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="size" value="XL" onChange={() => handleSelectFilter('size', 'XL')} checked={selectedFilters['size'] === 'XL'} />
                                        XL
                                    </label>
                                </div>
                            )}

                            <hr></hr>
                            <div className="accordionSeparador">
                                <button className="accordion" onClick={() => toggleAccordion('color')}>
                                    Cor
                                </button>
                                <img src={accordion.color ? menosFilter : maisFilter} alt="toggle"></img>
                            </div>
                            {accordion.color && (
                                <div className="panel">
                                    <label>
                                        <input type="radio" className="radioInput" name="color" value="multicor" onChange={() => handleSelectFilter('color', 'multicor')} checked={selectedFilters['color'] === 'multicor'} />
                                        Multicor
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="color" value="preto" onChange={() => handleSelectFilter('color', 'preto')} checked={selectedFilters['color'] === 'preto'} />
                                        Preto
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="color" value="branco" onChange={() => handleSelectFilter('color', 'branco')} checked={selectedFilters['color'] === 'branco'} />
                                        Branco
                                    </label>
                                </div>
                            )}

                            <hr></hr>
                            <div className="accordionSeparador">
                                <button className="accordion" onClick={() => toggleAccordion('category')}>
                                    Categoria
                                </button>
                                <img src={accordion.category ? menosFilter : maisFilter} alt="toggle"></img>
                            </div>
                            {accordion.category && (
                                <div className="panel">
                                    <label>
                                        <input type="radio" className="radioInput" name="category" value="mulher" onChange={() => handleSelectFilter('category', 'mulher')} checked={selectedFilters['category'] === 'mulher'} />
                                        Mulher
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="category" value="homem" onChange={() => handleSelectFilter('category', 'homem')} checked={selectedFilters['category'] === 'homem'} />
                                        Homem
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="category" value="crianca" onChange={() => handleSelectFilter('category', 'crianca')} checked={selectedFilters['category'] === 'crianca'} />
                                        Criança
                                    </label>
                                </div>
                            )}

                            <hr></hr>
                            <div className="accordionSeparador">
                                <button className="accordion" onClick={() => toggleAccordion('brand')}>
                                    Marca
                                </button>
                                <img src={accordion.brand ? menosFilter : maisFilter} alt="toggle"></img>
                            </div>
                            {accordion.brand && (
                                <div className="panel">
                                    <label>
                                        <input type="radio" className="radioInput" name="brand" value="marca1" onChange={() => handleSelectFilter('brand', 'marca1')} checked={selectedFilters['brand'] === 'marca1'} />
                                        Marca 1
                                    </label>
                                    <label>
                                        <input type="radio" className="radioInput" name="brand" value="marca2" onChange={() => handleSelectFilter('brand', 'marca2')} checked={selectedFilters['brand'] === 'marca2'} />
                                        Marca 2
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="filtroAplicar">
                        <Button text='Aplicar' onClick={handleApplyFilters} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterButtons;
