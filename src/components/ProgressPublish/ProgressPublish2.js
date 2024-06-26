import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ButtonForOpenBottomSheet from "../ButtonForOpenBottomSheet";
import HeaderPublish from "../Header/HeaderPublicar";
import Draggable from "react-draggable";
import BottomSheet from "../BottomSheets/BottomSheet";
import { useDispatch, useSelector } from "react-redux";
import { updateProgressPublish1 } from "../../redux/publicarSlice";
// import BottomSheetColours from "../BottomSheets/BottomSheetColours";
import BottomSheetCategories from "../BottomSheets/BottomSheetCategories";
import ModalAlertaForPublish from "./ModalAlertaForPublish";
import InputBrands from "../InputBrands";
import CustomizedSteppers from "../ProgressBar";
import { useFetchProductFormQuery } from "../../redux/productAPI";
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

const InfoIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  margin-bottom: 1rem;
  margin-left: 24px;
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

const ProgressPublish2 = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheetColoursOpen, setBottomSheetColoursOpen] = useState(false);
  const [bottomSheetCategoriesOpen, setBottomSheetCategoriesOpen] =
    useState(false);
  const bottomSheetRef = useRef(null);
  const [fecharModal, setFecharModal] = useState(true); // fechar modal de alerta de voltar para a homepage (perder dados inseridos)
  const { data, isLoading } = useFetchProductFormQuery();
  const [selectedOptionCategories, setSelectedOptionCategories] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedOptionID = useSelector(
    (state) => state.Publicar1.progressPublish1.SizeId
  );

  const selectedOption = data?.sizes?.find(
    (size) => size.id === selectedOptionID
  )?.name;

  const selectedOptionColoursID = useSelector(
    (state) => state.Publicar1.progressPublish1.ColorId
  );

  const selectedOptionColours = data?.colors?.find(
    (color) => color.id === selectedOptionColoursID
  )?.name;

  // !isLoading&&console.log("type", data.productTypes);

  const selectedOptionCategoriesID = useSelector(
    (state) => state.Publicar1.progressPublish1.ProductTypeId
  );
  // console.log("id", selectedOptionCategoriesID);

  // const selectedOptionCategories = data?.productTypes?.find((categories) => categories.id === selectedOptionCategoriesID)?.name;
  // console.log("name", selectedOptionCategories);

  const selectedOptionMarcaValue = useSelector(
    (state) => state.Publicar1.progressPublish1.brand
  );

  const [nextButtonDisabled, setNextButtonDisabled] = useState(
    !selectedOption || !selectedOptionColours || !selectedOptionCategories
  );

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

  useEffect(() => {}, [selectedOptionMarcaValue]);

  const handleGoBackStepPublish = () => {
    navigate("/publicar-page");
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-3");
  };

  const handleOptionSelect = (option, id) => {
    dispatch(updateProgressPublish1({ SizeId: id }));
    setBottomSheetOpen(false);
    setNextButtonDisabled(false);
  };

  const handleOptionSelectColours = (option, id) => {
    dispatch(updateProgressPublish1({ ColorId: id }));
    setBottomSheetColoursOpen(false);
  };

  const handleOptionSelectCategories = (option, id) => {
    dispatch(updateProgressPublish1({ ProductTypeId: id }));
    setBottomSheetCategoriesOpen(false);
    setSelectedOptionCategories(option);
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  };

  const handleChangeStepInProgressBar = (newStep) => {
    // passar para o proximo step
  };

  return (
    <>
      {isLoading && <Loader className={"loader"} color="success" />}
      {!isLoading && (
        <div>
          <HeaderPublish name="Publicar" alertHandler={alertHandler} />
          <CustomizedSteppers
            activeStep={1}
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
                {!isLoading && (
                  <BottomSheet
                    ref={bottomSheetRef}
                    onClose={() => setBottomSheetOpen(false)}
                    onSelectOption={handleOptionSelect}
                    props={data?.sizes}
                    data={data}
                  />
                )}
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
                {!isLoading && (
                  <BottomSheet
                    ref={bottomSheetRef}
                    onClose={() => setBottomSheetColoursOpen(false)}
                    onSelectOption={handleOptionSelectColours}
                    props={data.colors}
                    data={data}
                  />
                )}
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
                  props={data.productTypes}
                  data={data}
                />
              </Draggable>
            </ModalOverlay>
          )}

          <SpaceTopComponent>
            <InfoIconContainer>Tamanho</InfoIconContainer>
            <ButtonForOpenBottomSheet
              btnName="Tamanho"
              onClick={handleToggleBottomSheet}
              selectedOption={selectedOption}
            />
            <InfoIconContainer>Cor</InfoIconContainer>
            <ButtonForOpenBottomSheet
              btnName="Cor"
              onClick={handleToggleBottomSheetColours}
              selectedOption={selectedOptionColours}
            />
            <InfoIconContainer>Categoria</InfoIconContainer>
            <ButtonForOpenBottomSheet
              btnName="Categorias"
              onClick={handleToggleBottomSheetCategories}
              selectedOption={selectedOptionCategories}
            />

            <InputBrands selectedOptionMarcaValue={selectedOptionMarcaValue} />
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
      )}
    </>
  );
};

export default ProgressPublish2;
