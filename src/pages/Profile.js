import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button';

//Pagina do perfil
const Profile = () => {
    const [fecharModal, setFecharModal] = useState(true);
    return (
        <>
            <button onClick={() => {
                setFecharModal(!fecharModal);
            }}>Abrir modal</button>
            <Button
                onClick={() => {
                    setFecharModal(!fecharModal);
                }}
                text={"Próximo"}
                disable={false}
            />
            <Modal
                fecharModal={fecharModal}
                setFecharModal={setFecharModal}
                message="Texto da modal - exemplo"
            />
        </>
    )
}

export default Profile
