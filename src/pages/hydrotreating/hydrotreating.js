import React from "react";
import "./hydrotreating.scss";
import IMG1 from "../../img/hydrotreating/1.webp";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  AccordionIcon,
} from "@chakra-ui/react";

function Hydrotreating() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      Гидроочистка №2
      <div className="hydrotreating__content">
        <img src={IMG1} alt="" />
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Видео сюжет
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Теоретический раздел
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Практический раздел
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Вспомогательный раздел
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Раздел контроля
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Схемы установки
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Интерактивные плакаты
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Справочный материал
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Button onClick={onOpen}>Печь цилидрическая</Button>

              <Modal size='xl' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent >
                  <ModalHeader>Печь цилидрическая</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody><iframe style={{width:'600px', height:'600px'}} src='https://drive.google.com/file/d/1hgeZxgEQshk63jjxY72AAzEdTRBMsE_t/preview'/> </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <div></div>
      </div>
    </>
  );
}

export default Hydrotreating;
