import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import InputMeasuresNotMandatory from "../InputsMesuresNotMandatory";
import ButtonWithInfoIcon from "../ButtonWithInfoIcon";
import Header from "../Header/Header";
import BottomSheet from "../BottomSheetCondition";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { updateProgressPublish1 } from "../../redux/publicarSlice";

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
  margin-top: 9em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const ProgressPublish3 = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedOption = useSelector(
    (state) => state.Publicar1.progressPublish1.conditionOfClothing
  );

  // console.log("opçao seleciona foi2....", selectedOption);

  const [nextButtonDisabled, setNextButtonDisabled] = useState(!selectedOption);

  const handleToggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-4");
  };

  const handleOptionSelect = (option) => {
    dispatch(updateProgressPublish1({ conditionOfClothing: option }));
    setBottomSheetOpen(false);
    setNextButtonDisabled(false);
  };

  useEffect(() => {
    // Atualize nextButtonDisabled quando selectedOption mudar
    setNextButtonDisabled(!selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <Header name="Publicar / Etapa 3 de 5" />
      {bottomSheetOpen && (
        <Draggable
          cancel=".no-drag"
          bounds="parent"
          positionOffset={{ x: "0", y: "0" }}
          onStop={() => setBottomSheetOpen(false)}
          nodeRef={bottomSheetRef}
        >
          <BottomSheet
            ref={bottomSheetRef}
            onClose={() => setBottomSheetOpen(false)}
            onSelectOption={handleOptionSelect}
          />
        </Draggable>
      )}
      <SpaceTopComponent>
        <ButtonWithInfoIcon
          infoName="Estado"
          onClick={handleToggleBottomSheet}
          selectedOption={selectedOption}
        />
      </SpaceTopComponent>
      <InputMeasuresNotMandatory />
      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button text="Próximo" onClick={handleNextStepPublish} disable={nextButtonDisabled} />
      </ContainerDoisBtn>
    </div>
  );
};

export default ProgressPublish3;