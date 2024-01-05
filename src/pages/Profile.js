import React, { useState } from 'react'
import Modal from '../components/Modal'

const Profile = () => {
    const [fecharModal, setFecharModal] = useState(true);
    return (
        <div>
            <button onClick={() => {
                setFecharModal(!fecharModal);
            }}>Abrir modal</button>
            <Modal
                fecharModal={fecharModal}
                setFecharModal={setFecharModal}
                message="Texto da modal - exemplo"
            />
        </div>
    )
}

export default Profile
