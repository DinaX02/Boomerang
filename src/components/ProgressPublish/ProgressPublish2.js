import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ButtonForOpenBottomSheet from "../ButtonForOpenBottomSheet";
import Header from "../Header/Header";
import Draggable from "react-draggable";
import BottomSheetSizes from "../BottomSheetSize";
import { useDispatch, useSelector } from "react-redux";
import { updateProgressPublish1 } from "../../redux/publicarSlice";
import BottomSheetColours from "../BottomSheetColours";
import BottomSheetCategories from "../BottomSheetCategories";

const SpaceTopComponent = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDoisBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 600px;
  margin-top: 17.4em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressPublish2 = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheetColoursOpen, setBottomSheetColoursOpen] = useState(false);
  const [bottomSheetCategoriesOpen, setBottomSheetCategoriesOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedOption = useSelector(
    (state) => state.Publicar1.progressPublish1.size
  );

  const selectedOptionColours = useSelector(
    (state) => state.Publicar1.progressPublish1.colour
  );

  const selectedOptionCategories = useSelector(
    (state) => state.Publicar1.progressPublish1.categories
  );

  const [nextButtonDisabled, setNextButtonDisabled] = useState(!selectedOption || !selectedOptionColours || !selectedOptionCategories);

   // Abre e fecha o bottom sheet dos tamanhos

  const handleToggleBottomSheet = () => {
    setBottomSheetColoursOpen(false);
    setBottomSheetCategoriesOpen(false);
    setBottomSheetOpen(!bottomSheetOpen);
  };

  // Abre e fecha o bottom sheet das cores

  const handleToggleBottomSheetColours = () => {
    setBottomSheetOpen(false);
    setBottomSheetCategoriesOpen(false);
    setBottomSheetColoursOpen(!bottomSheetColoursOpen);
  };

  // Abre e fecha o bottom sheet das categorias

  const handleToggleBottomSheetCategories = () => {
    setBottomSheetOpen(false);
    setBottomSheetColoursOpen(false);
    setBottomSheetCategoriesOpen(!bottomSheetCategoriesOpen);
  };

  // Fecha o bottom sheet se clicar fora -> evitar sobreposição

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setBottomSheetOpen(false);
      setBottomSheetColoursOpen(false);
      setBottomSheetCategoriesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleModalClick);

    return () => {
      document.removeEventListener("click", handleModalClick);
    };
  }, []);

  useEffect(() => {
    setNextButtonDisabled(
      !selectedOption || !selectedOptionColours || !selectedOptionCategories
    );
  }, [selectedOption, selectedOptionColours, selectedOptionCategories]);

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-3");
  };

  const handleOptionSelect = (option) => {
    dispatch(updateProgressPublish1({ size: option }));
    setBottomSheetOpen(false);
    setNextButtonDisabled(false);
  };

  const handleOptionSelectColours = (option) => {
    dispatch(updateProgressPublish1({ colour: option }));
    setBottomSheetColoursOpen(false);
  };

  const handleOptionSelectCategories = (option) => {
    dispatch(updateProgressPublish1({ categories: option }));
    setBottomSheetCategoriesOpen(false);
  };

  return (
    <div>
      <Header name="Publicar / Etapa 2 de 5" />

      {/*  bottom sheet dos tamanhos */}
      {bottomSheetOpen && (
        <ModalOverlay className="modal-overlay">
          <Draggable
            cancel=".no-drag"
            bounds="parent"
            positionOffset={{ x: "0", y: "0" }}
            onStop={() => setBottomSheetOpen(false)}
            nodeRef={bottomSheetRef}
          >
            <BottomSheetSizes
              ref={bottomSheetRef}
              onClose={() => setBottomSheetOpen(false)}
              onSelectOptionSizes={handleOptionSelect}
            />
          </Draggable>
        </ModalOverlay>
      )}

      {/*  bottom sheet dos cores */}
      {bottomSheetColoursOpen && (
        <ModalOverlay className="modal-overlay">
          <Draggable
            cancel=".no-drag"
            bounds="parent"
            positionOffset={{ x: "0", y: "0" }}
            onStop={() => setBottomSheetColoursOpen(false)}
            nodeRef={bottomSheetRef}
          >
            <BottomSheetColours
              ref={bottomSheetRef}
              onClose={() => setBottomSheetColoursOpen(false)}
              onSelectOptionColours={handleOptionSelectColours}
            />
          </Draggable>
        </ModalOverlay>
      )}

      {/*  bottom sheet das categorias */}
      {bottomSheetCategoriesOpen && (
        <ModalOverlay className="modal-overlay">
          <Draggable
            cancel=".no-drag"
            bounds="parent"
            positionOffset={{ x: "0", y: "0" }}
            onStop={() => setBottomSheetCategoriesOpen(false)}
            nodeRef={bottomSheetRef}
          >
            <BottomSheetCategories
              ref={bottomSheetRef}
              onClose={() => setBottomSheetCategoriesOpen(false)}
              onSelectOptionCategories={handleOptionSelectCategories}
            />
          </Draggable>
        </ModalOverlay>
      )}

      <SpaceTopComponent>
        <ButtonForOpenBottomSheet
          btnName="Tamanho"
          onClick={handleToggleBottomSheet}
          selectedOption={selectedOption}
        />
        <ButtonForOpenBottomSheet
          btnName="Cor"
          onClick={handleToggleBottomSheetColours}
          selectedOption={selectedOptionColours}
        />
        <ButtonForOpenBottomSheet btnName="Categorias" onClick={handleToggleBottomSheetCategories}
          selectedOption={selectedOptionCategories} />
      </SpaceTopComponent>
      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button
          text="Próximo"
          onClick={handleNextStepPublish}
          disable={nextButtonDisabled}
        />
      </ContainerDoisBtn>
    </div>
  );
};

export default ProgressPublish2;