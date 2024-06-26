import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Draggable from "react-draggable";
import styled from "styled-components";
import { FocusOn } from "react-focus-on";
import PretoSvg from "../../assets/cores/preto.svg";
import BrancoSvg from "../../assets/cores/branco.svg";
import VermelhoSvg from "../../assets/cores/vermelho.svg";
import VerdeSvg from "../../assets/cores/verde.svg";
import RosaSvg from "../../assets/cores/rosa.svg";
import AzulSvg from "../../assets/cores/azul.svg";
import AmareloSvg from "../../assets/cores/amarelo.svg";
import MulticorSvg from "../../assets/cores/multicor.svg";
import RoxoSvg from "../../assets/cores/roxo.svg";
import LaranjaSvg from "../../assets/cores/laranja.svg";
import colors from "../../assets/colors";

const ModalContainer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: grab;
  max-height: 370px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    min-height: 230px;
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
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 15px;
  background-color: #f8f8f8;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #cacaca !important;
  text-align: center;
  cursor: pointer !important;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const BottomSheetSizes = React.forwardRef(
  ({ onSelectOption, props, data }, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOptionSelect = (option, id) => {
      // console.log(`Opção selecionada: ${option}`);
      onSelectOption(option, id);
    };

    const modalProps = useSpring({
      opacity: isOpen ? 1 : 0,
    });

    const colorImages = {
      preto: PretoSvg,
      branco: BrancoSvg,
      vermelho: VermelhoSvg,
      verde: VerdeSvg,
      azul: AzulSvg,
      amarelo: AmareloSvg,
      rosa: RosaSvg,
      multicor: MulticorSvg,
      roxo: RoxoSvg,
      laranja: LaranjaSvg,
    };

    return (
      <Draggable
        axis="y"
        bounds={{ top: 0, bottom: window.innerHeight - 250 }}
        position={{ x: 0, y: isOpen ? 0 : window.innerHeight - 250 }}
        onStop={() => setIsOpen(false)}
        nodeRef={ref}
      >
        <ModalContainer
          style={{
            ...modalProps,
            transform: `translateY(${isOpen ? 0 : 100}%)`,
          }}
          ref={ref}
        >
          <FocusOn enabled autoFocusLock={false}>
            <DragContainer>
              <DragHandle />
            </DragContainer>
            <ButtonContainer>
              {props?.map((product) => {
                return (
                  <Button
                    style={
                      props === data.colors
                        ? { textAlign: "left", paddingLeft: "24px" }
                        : { textAlign: "center" }
                    }
                    onTouchStart={() =>
                      handleOptionSelect(product.name, product.id)
                    }
                    key={product.id}
                  >
                    {props === data.colors && (
                      <img
                        src={colorImages[product.name.toLowerCase()]}
                        alt={product.name}
                        style={{ marginRight: "10px" }}
                      />
                    )}
                    {product.name}
                  </Button>
                );
              })}
            </ButtonContainer>
          </FocusOn>
        </ModalContainer>
      </Draggable>
    );
  }
);

export default BottomSheetSizes;
