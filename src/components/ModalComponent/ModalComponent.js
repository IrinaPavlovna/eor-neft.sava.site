import React from 'react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from "@chakra-ui/react";

  

function ModalComponent(props) {
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclosure();

  return (
    <>
    <Button color='#000' onClick={onOpen}>{props.name}</Button>
    <Modal
      size={ props.full ? 'full' : '4xl'}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <iframe
            style={{ width: "100%", height: "70vh" }}
            src={props.href}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Закрыть</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default ModalComponent