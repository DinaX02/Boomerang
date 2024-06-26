import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import { useAddLocationMutation } from '../redux/locationAPI';
import Button from '../components/Button';

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

const AddAdressComponent = () => {
    const [morada, setMorada] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [cidade, setCidade] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true);

    // Obtendo a função de mutação do hook useAddLocationMutation
    const [addLocation] = useAddLocationMutation();

    const handleFormSubmit = async () => {
        // event.preventDefault();
        setIsSubmitting(true);
        if (!morada || !localidade || !cidade || !codigoPostal) {
            return;
        }

        try {
            // Chamar a função de mutação para adicionar a localização
            await addLocation({ address: morada, locationName: localidade, postalCode: codigoPostal });
            // Navegar para a próxima página após adicionar com sucesso
            navigate(-1);
        } catch (error) {
            console.error('Erro ao adicionar localização:', error);
            // Tratar o erro conforme necessário (ex: exibir mensagem para o usuário)
        } finally {
            setIsSubmitting(false);
          }
    };

    return (
        <div>
            <Header name="Adicionar Morada" />
            <MainContainer>
                <form style={{ marginTop: "100px" }}>
                    <AddMorada>
                        <input type="text" name="Morada" value={morada} onChange={(e) => setMorada(e.target.value)}
                            placeholder="Adicionar Morada"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="localidade" value={localidade} onChange={(e) => setLocalidade(e.target.value)}
                            placeholder="Localidade"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}
                            placeholder="Cidade"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMorada>
                    <AddMorada>
                        <input type="text" name="codigoPost" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)}
                            placeholder="Código Postal"
                            style={{
                                border: "none",
                                width: "90%",
                                textAlign: "left",
                                fontSize: "15px",
                                outline: "none",
                            }}
                            required />
                        <span>*</span>
                    </AddMorada>
                    <h6 style={{ fontSize: "14px", fontWeight: "500" }}><span style={{ color: "#65d9b0" }}>*</span> Campo Obrigatório</h6>
                    <ConfButton>
                        {/* <input type="submit" value="Guardar" style={{
                            backgroundColor: `${colors.cinzaEscuro}`,
                            width: "144px",
                            height: "36px",
                            border: "none",
                            borderRadius: "5px",
                            color: "white",
                            fontSize: "15px",
                            fontWeight: "bold",
                            outline: "none",
                        }} /> */}
                        <Button text="Guardar" type="submit" onClick={handleFormSubmit} isLoading={isSubmitting} disable={false || isSubmitting}/>

                    </ConfButton>
                </form>
            </MainContainer>
        </div>
    );
};

export default AddAdressComponent;
