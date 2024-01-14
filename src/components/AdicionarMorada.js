import React from 'react';
import Header from '../components/Header/Header';
import NavbarWeb from '../components/NavbarWeb';
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 25px 30px;
`;

const AddMorada = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  width: 100%;
  height: 45px;
  padding: 10px 0px 10px 30px;
  margin-bottom: 25px;
  display: flex;
  color: #65d9b0;
`;
const ConfButton = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

const AdicionarMorada = () => {
    return (
        <div>
            <NavbarWeb />
            <Header name="Adicionar Morada" />
            <MainContainer>

                <form style={{marginTop: "100px"}}>
                    <AddMorada>
                        <input type="text" name="Morada" placeholder="Adicionar Morada"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "16px",
                            }}
                            required />
                        <h3>*</h3>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="localidade" placeholder="Localidade"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "16px",
                            }}
                            required />
                        <h3>*</h3>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="cidade" placeholder="Cidade"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "16px",
                            }}
                            required />
                        <h3>*</h3>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="codigoPost" placeholder="Código Postal"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "16px",
                            }}
                            required />
                        <h3>*</h3>
                    </AddMorada>
                    <h6><span style={{color:"#65d9b0"}}>*</span> Campo Obrigatório</h6>
                    <ConfButton>
                        <input type="submit" value="Guardar" style={{
                            backgroundColor: "#343541",
                            width: "180px",
                            height: "40px",
                            border: "none",
                            borderRadius: "5px",
                            color: "white",
                            fontSize: "17px",
                            fontWeight: "700",
                        }} />
                    </ConfButton>


                </form>



            </MainContainer>
        </div>
    );
};

export default AdicionarMorada;