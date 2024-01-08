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
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
            />
        </>
    )
}

export default Profile
