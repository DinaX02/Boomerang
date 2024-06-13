import React, { useState } from "react";
import filtro from '../assets/icons/Filter_button.png';
import closeFilter from '../assets/icons/eliminar.svg';
import maisFilter from '../assets/icons/mostrar_mais_icon.svg';
import menosFilter from '../assets/icons/Filter_menos.svg';
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { useFetchProductFormQuery } from '../redux/productAPI';

const FilterButtons = ({ applyFilters, handleActiveFilters }) => {
    const { data, isLoading } = useFetchProductFormQuery();

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [showFilters, setShowFilters] = useState(false);
    const [accordion, setAccordion] = useState({
        size: false,
        color: false,
        category: false,
        brand: false,
    });

    const [selectedFilters, setSelectedFilters] = useState({
        size: '',
        color: '',
        category: '',
        brand: '',
    });

    const toggleFiltersOn = () => {
        const size = queryParams.get('size') || '';
        const category = queryParams.get('category') || '';
        const color = queryParams.get('color') || '';
        const brand = queryParams.get('brand') || '';
        setSelectedFilters({
            size: size,
            color: color,
            category: category,
            brand: brand,
        });
        //toggle every accordion
        setShowFilters(true);
    };

    const toggleFiltersOff = () => {
        setAccordion({});
        setShowFilters(false);
    };

    const toggleAccordion = (filter) => {
        setAccordion({
            [filter]: !accordion[filter],
        });
    };

    const handleApplyFilters = () => {
        // Apply selected filters
        // console.log(selectedFilters)
        applyFilters(selectedFilters);
        toggleFiltersOff(); // Close the filter overlay
    };

    const handleSelectFilter = (filterType, value) => {
        const newValue = selectedFilters[filterType] === value ? '' : value;

        setSelectedFilters({
            ...selectedFilters,
            [filterType]: newValue,
        });
    };

    const getUniqueCategories = (categories) => {
        const seen = new Set();
        return categories.filter(item => {
            const isDuplicate = seen.has(item.category);
            seen.add(item.category);
            return !isDuplicate;
        });
    };
    return (
        <div>
            <button className="filterButton" onClick={toggleFiltersOn}><img src={filtro} alt="filtro"></img></button>

            {showFilters && (
                <div className="overlay">
                    <div className="filterHeader">
                        <div className="filterTitle">
                            <h2>Filtros</h2>
                        </div>
                        <div className="filterClose">
                            <button onClick={toggleFiltersOff}><img src={closeFilter} alt="fechar"></img></button>
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
                                    {data.sizes.map((elem) => {
                                        return <label key={elem.id}>
                                            <input type="radio" className="radioInput" name="size" value={elem.name} onChange={() => handleSelectFilter('size', elem.name)} checked={selectedFilters['size'] === elem.name} />
                                            {elem.name}
                                        </label>
                                    })}
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
                                    {data.colors.map((elem) => {
                                        return <label key={elem.id}>
                                            <input type="radio" className="radioInput" name="color" value={elem.name} onChange={() => handleSelectFilter('color', elem.name)} checked={selectedFilters['color'] === elem.name} />
                                            {elem.name}
                                        </label>
                                    })}
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
                                    {getUniqueCategories(data.productTypes).map((elem) => {
                                        return <label key={elem.id}>
                                            <input type="radio" className="radioInput" name="category" value={elem.name} onChange={() => handleSelectFilter('category', elem.category)} checked={selectedFilters['category'] === elem.category} />
                                            {elem.category}
                                        </label>
                                    })}
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
