import React, {useCallback, useState} from "react";
import { Button } from "./components/button";
import { Center } from "./components/center";
import { Modal } from "./components/modal";
import { ModalHeader } from "./components/modal/header";
import { RegisterForm } from "./components/register-form";

export const App = () => {

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggler = (prev) => !prev;

    const onErrorModalClose = useCallback(() => setShowError(false), []);
    const onSuccessModalClose = useCallback(() => setShowSuccess(false), []);
    const onModalClose = useCallback(() => setShowModal(false), []);

    return(<>
    <Modal isOpen={showModal} onClose={onModalClose}>
        <Modal.Header text='Register form' />
        <RegisterForm />
    </Modal>
    <Modal isOpen={showError} onClose={onErrorModalClose}>
        <Modal.Header text={'Failed to fetch'} iconName={'alarm'} />
        <div style={{textAlign: 'center'}}>Please check your Intenet connection!</div>
    </Modal>

    {showSuccess && 
    <Modal isOpen={showSuccess} onClose={onSuccessModalClose}>
        <Modal.Header text={'It works!'} iconName={'success'} />
        <div>Amazing, it was so easy to create another modal!</div>
    </Modal>}
    
    {showModal && <div>Modal</div>}

    <Center>
        <Button text='Error' onClick={() => setShowError(toggler)} />
        <Button text='Success' view="secondary" onClick={() => setShowSuccess(toggler)} />
        <Button text ='Modal' view="secondaryAlt" onClick={() => setShowModal(toggler)} />
    </Center>
    </>
    );
}