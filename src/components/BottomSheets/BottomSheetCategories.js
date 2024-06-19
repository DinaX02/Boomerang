import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Draggable from "react-draggable";
import styled from "styled-components";
import DropdownIcon from "../../assets/icons/SwipeIcon.svg"
import { FocusOn } from 'react-focus-on';
import colors from '../../assets/colors';

const ModalContainer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #eee;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: grab;
  max-height: 370px;

  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    min-height: 250px;
  }
`;

const DragContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  background-color: ${colors.cinzaEscuro};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 30px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const DragHandle = styled.div`
  margin-top: 15px;
  width: 25%;
  height: 4px;
  background-color: #f8f8f8;
  cursor: grab;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 1.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const SubCategoryContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CategoryButton = styled(animated.button)`
/* display: flex; */
/* justify-content: space-between; */
align-items: center;
width: 100%;
min-height: 40px;
padding: 15px;
background-color: #F8F8F8;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #CACACA !important;
text-align: center;
cursor: pointer !important;

&:hover {
  background-color: #dcdcdc;
}

span {
  /* display: flex; */
  /* align-items: center; */
}
`;

const StyledDropdownIcon = styled.img`
  position: absolute;
  right: 24px;
  /* top: 0; */
  width: 10px;
  height: auto;
`;

const BottomSheetCategories = React.forwardRef(({ onSelectOptionCategories, props }, ref) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const [touchStart, setTouchStart] = useState(0); // posição inicial
  // const [categoryID, setCategoryID] = useState(0);

  const categorySpringProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
  });

  const handleCategorySelect = (category, id) => {
    setSelectedCategory(category, id);
    // setCategoryID(id);
  };

  const handleSubcategorySelect = (subcategory, id) => {
    // console.log(subcategory);
    onSelectOptionCategories(`${subcategory.category} | ${subcategory.name}`, id);
    setIsOpen(false);
  };

  const renderSubcategories = () => {

    // const subcategories = {
    //   Mulher: ["Vestidos", "Camisolas e Casacos", "Calças", "Calçado"],
    //   Homem: ["Cerimónia", "Camisolas e Casacos", "Calças", "Sapatos"],
    //   Criança: ["0-6 meses", "0-18 meses", "1-6 anos", "6-14 anos"],
    //   Trajes: ["Rancho", "Natal", "Carnaval"],
    // };
    // console.log("category", selectedCategory)
    const subcategories = Array.from(
      new Set(
        props
          .filter((product) => product.category === selectedCategory)
          .map((product) => product)
      )
    );
    // console.log(subcategories);

    return subcategories.map((subcategory, index) => (
      <CategoryButton key={index} onTouchStart={() => handleSubcategorySelect(subcategory, subcategory.id)}>
        {subcategory.name}
      </CategoryButton>
    ));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const swipeLateral = e.touches[0].clientY - touchStart;

    if (swipeLateral < 0 && isOpen) {
      setIsOpen(false);
    }
  };

  const uniqueCategories = Array.from(new Set(props.map((product) => product.category)));

  return (
    <Draggable
      axis="y"
      bounds={{ top: 0, bottom: window.innerHeight - 250 }}
      position={{ x: 0, y: isOpen ? 0 : window.innerHeight - 250 }}
      onStop={() => setIsOpen(false)}
      nodeRef={ref}
    >
      <ModalContainer
        ref={ref}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setTouchStart(0)}
      >
        <FocusOn enabled autoFocusLock={false}>
          <DragContainer>
            <DragHandle />
          </DragContainer>
          <animated.div style={categorySpringProps}>
            {!selectedCategory ? (
              <ButtonContainer>
                {uniqueCategories.map((category, index) => (
                  <CategoryButton onTouchStart={() => handleCategorySelect(category, index)} key={index}>
                    <span>{category}</span>
                    <StyledDropdownIcon src={DropdownIcon} alt="Dropdown Icon" />
                  </CategoryButton>
                ))}
              </ButtonContainer>
            ) : (
              <SubCategoryContainer>
                {renderSubcategories()}
              </SubCategoryContainer>
            )}
          </animated.div>
        </FocusOn>
      </ModalContainer>
    </Draggable>
  );
});

export default BottomSheetCategories;