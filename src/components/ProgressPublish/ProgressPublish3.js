import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import InputMeasuresNotMandatory from "../InputsMesuresNotMandatory";
import ButtonForOpenBottomSheet from "../ButtonForOpenBottomSheet";
import HeaderPublish from "../Header/HeaderPublicar";
import BottomSheet from "../BottomSheets/BottomSheet";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { updateProgressPublish1 } from "../../redux/publicarSlice";
import ModalAlertaForPublish from "./ModalAlertaForPublish";
import CustomizedSteppers from "../ProgressBar";
import { useFetchProductFormQuery } from '../../redux/productAPI';
import { CircularProgress } from "@mui/material";

const SpaceTopComponent = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDoisBtn = styled.div`
position: fixed;
bottom: 3.5em;
width: 100%;
display: flex;
justify-content: space-evenly;
z-index: -1;
`;

const Loader = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40px;
  height: 40px;
`;

const ProgressPublish3 = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const [fecharModal, setFecharModal] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchProductFormQuery();

  const selectedOptionID = useSelector(
    (state) => state.Publicar1.progressPublish1.GradeId
  );
  const selectedOption = data?.grades?.find((size) => size.id === selectedOptionID)?.name;


  // console.log("opçao seleciona foi2....", selectedOption);

  const [nextButtonDisabled, setNextButtonDisabled] = useState(!selectedOption);

  const handleToggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

  const handleGoBackStepPublish = () => {
    navigate("/progressPublish-2");
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-4");
  };

  const handleOptionSelect = (option, id) => {
    dispatch(updateProgressPublish1({ GradeId: id }));
    setBottomSheetOpen(false);
    setNextButtonDisabled(false);
  };

  useEffect(() => {
    setNextButtonDisabled(!selectedOption);
  }, [selectedOption]);

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  }

  const handleChangeStepInProgressBar = (newStep) => { // passar para o proximo step
  };

  return (
    <>
      {isLoading && <Loader className={'loader'} color="success" />}

      {!isLoading && <div>
        <HeaderPublish name="Publicar" alertHandler={alertHandler} />
        <CustomizedSteppers
          activeStep={2}
          onStepChange={handleChangeStepInProgressBar}
          onNext={handleNextStepPublish}
          onBack={handleGoBackStepPublish}
        />
        <ModalAlertaForPublish
          fecharModal={fecharModal}
          setFecharModal={setFecharModal}
          alert={alert}
          message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
        />
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
              props={data.grades}
              data={data}
            />
          </Draggable>
        )}
        <SpaceTopComponent>
          <ButtonForOpenBottomSheet
            btnName="Estado"
            onClick={handleToggleBottomSheet}
            selectedOption={selectedOption}
          />
        </SpaceTopComponent>
        <InputMeasuresNotMandatory />
        <ContainerDoisBtn>
          <Button text="Anterior" onClick={handleGoBackStepPublish} />
          <Button text="Próximo" onClick={handleNextStepPublish} disable={nextButtonDisabled} />
        </ContainerDoisBtn>
      </div>}
    </>
  );
};

export default ProgressPublish3;