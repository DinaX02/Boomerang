import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ButtonForOpenBottomSheet from "../ButtonForOpenBottomSheet";
import ButtonWithMandatoryField from "../ButtonWithMandatoryField";
import Header from "../Header/Header";
import Draggable from "react-draggable";
import BottomSheetSizes from "../BottomSheetSize";
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
  margin-top: 17.4em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const ProgressPublish2 = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedOption = useSelector(
    (state) => state.Publicar1.progressPublish1.size
  );

  const [nextButtonDisabled, setNextButtonDisabled] = useState(!selectedOption);

  const handleToggleBottomSheet = (selectedOption) => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

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

  useEffect(() => {
    setNextButtonDisabled(!selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <Header name="Publicar / Etapa 2 de 5" />
      {bottomSheetOpen && (
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
      )}
      <SpaceTopComponent>
        <ButtonForOpenBottomSheet btnName="Tamanho" onClick={handleToggleBottomSheet} selectedOption={selectedOption}/>
        <ButtonForOpenBottomSheet btnName="Cor" />
        <ButtonForOpenBottomSheet btnName="Categorias" />
        <ButtonWithMandatoryField btnName="Marca" />
      </SpaceTopComponent>

      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button text="Próximo" onClick={handleNextStepPublish} disable={nextButtonDisabled} />
      </ContainerDoisBtn>
    </div>
  );
};

export default ProgressPublish2;