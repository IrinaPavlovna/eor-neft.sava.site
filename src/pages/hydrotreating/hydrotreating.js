import React from "react";
import "./hydrotreating.scss";
import HydrotreatingSwiper from "./hydrotreatingSwiper";

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
  const {
    isOpen: is1ModalOpen,
    onOpen: on1ModalOpen,
    onClose: on1ModalClose,
  } = useDisclosure();
  const {
    isOpen: is2ModalOpen,
    onOpen: on2ModalOpen,
    onClose: on2ModalClose,
  } = useDisclosure();
  const {
    isOpen: is3ModalOpen,
    onOpen: on3ModalOpen,
    onClose: on3ModalClose,
  } = useDisclosure();
  const {
    isOpen: is4ModalOpen,
    onOpen: on4ModalOpen,
    onClose: on4ModalClose,
  } = useDisclosure();
  const {
    isOpen: is5ModalOpen,
    onOpen: on5ModalOpen,
    onClose: on5ModalClose,
  } = useDisclosure();
  const {
    isOpen: is6ModalOpen,
    onOpen: on6ModalOpen,
    onClose: on6ModalClose,
  } = useDisclosure();
  const {
    isOpen: is7ModalOpen,
    onOpen: on7ModalOpen,
    onClose: on7ModalClose,
  } = useDisclosure();
  const {
    isOpen: is8ModalOpen,
    onOpen: on8ModalOpen,
    onClose: on8ModalClose,
  } = useDisclosure();
  const {
    isOpen: is9ModalOpen,
    onOpen: on9ModalOpen,
    onClose: on9ModalClose,
  } = useDisclosure();
  // интерактивные плакаты
  const {
    isOpen: is10ModalOpen,
    onOpen: on10ModalOpen,
    onClose: on10ModalClose,
  } = useDisclosure();
  const {
    isOpen: is11ModalOpen,
    onOpen: on11ModalOpen,
    onClose: on11ModalClose,
  } = useDisclosure();
  const {
    isOpen: is12ModalOpen,
    onOpen: on12ModalOpen,
    onClose: on12ModalClose,
  } = useDisclosure();
  const {
    isOpen: is13ModalOpen,
    onOpen: on13ModalOpen,
    onClose: on13ModalClose,
  } = useDisclosure();
// теоретический раздел
const {
  isOpen: is14ModalOpen,
  onOpen: on14ModalOpen,
  onClose: on14ModalClose,
} = useDisclosure();
const {
  isOpen: is15ModalOpen,
  onOpen: on15ModalOpen,
  onClose: on15ModalClose,
} = useDisclosure();
const {
  isOpen: is16ModalOpen,
  onOpen: on16ModalOpen,
  onClose: on16ModalClose,
} = useDisclosure();
const {
  isOpen: is17ModalOpen,
  onOpen: on17ModalOpen,
  onClose: on17ModalClose,
} = useDisclosure();
const {
  isOpen: is18ModalOpen,
  onOpen: on18ModalOpen,
  onClose: on18ModalClose,
} = useDisclosure();
const {
  isOpen: is19ModalOpen,
  onOpen: on19ModalOpen,
  onClose: on19ModalClose,
} = useDisclosure();
  return (
    <div className="hydrotreating">
      <h1>Гидроочистка №2</h1>

    <div className="hydrotreating__content">
      <HydrotreatingSwiper/>
      <Accordion allowToggle width="100%">
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
              Видео сюжет
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://drive.google.com/file/d/1ZKewRhnRg2wSZ6Si7t_iljP48jL37f7X/preview"
                    />
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
          <Button onClick={on14ModalOpen}>
          Общая характеристика производства и производимой продукции
              </Button>
              <Modal
                size="3xl"
                onClose={on14ModalClose}
                isOpen={is14ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Общая характеристика производства и производимой продукции</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_387a3348b1b54e5ca4a618be358e677a.pdf"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on14ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on15ModalOpen}>
                Описание технологических схем
              </Button>
              <Modal
                size="3xl"
                onClose={on15ModalClose}
                isOpen={is15ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Описание технологических схем</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_a4a09a6997624b6c8b4a63f6e1d77223.pdf"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on15ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on16ModalOpen}>
                Возможные отклонения
              </Button>
              <Modal
                size="3xl"
                onClose={on16ModalClose}
                isOpen={is16ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Возможные отклонения</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_3ae5d6d4c295471d993e17a9cb57f3f5.pdf"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on16ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on17ModalOpen}>
                Нормы технологического режима
              </Button>
              <Modal
                size="3xl"
                onClose={on17ModalClose}
                isOpen={is17ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Нормы технологического режима</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_a4576a0dacfa482b8b89277fb4147102.pdf"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on17ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on18ModalOpen}>
                Спецификация оборудования
              </Button>
              <Modal
                size="3xl"
                onClose={on18ModalClose}
                isOpen={is18ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Спецификация оборудования</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_3cb6c46551b248169cbd356ab0d92f5b.pdf"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on18ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on19ModalOpen}>
                Инструкция по охране труда
              </Button>
              <Modal
                size="3xl"
                onClose={on19ModalClose}
                isOpen={is19ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Инструкция по охране труда</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_852f6790f9814894a7e8c26d452fe861.pdf"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on19ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <Button onClick={on10ModalOpen}>
                Схема реакторного блока
              </Button>
              <Modal
                size="full"
                onClose={on10ModalClose}
                isOpen={is10ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Схема реакторного блока</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://view.genial.ly/62432a8d9bdb220018f33271"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on10ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on13ModalOpen}>
                Схема блока регенерации МЭА
              </Button>
              <Modal
                size="full"
                onClose={on13ModalClose}
                isOpen={is13ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Схема блока регенерации МЭА</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://view.genial.ly/625ea251d05c83001818866b/interactive-image-blok-regeneracii-mea"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on13ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on11ModalOpen}>
                Схема блока стабилизации
              </Button>
              <Modal
                size="full"
                onClose={on11ModalClose}
                isOpen={is11ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Схема блока стабилизации</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://view.genial.ly/625ea2a0bf830200180763c0"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on11ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on12ModalOpen}>
                Схема блока очистки ВСГ
              </Button>
              <Modal
                size="full"
                onClose={on12ModalClose}
                isOpen={is12ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Схема блока очистки ВСГ</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "84vh" }}
                      src="https://view.genial.ly/625ea29d271fd60011653002/interactive-image-blok-ochistki-vsg"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on12ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
            <div className="hydrotreating__modal">
              <Button onClick={on1ModalOpen}>Печь цилидрическая</Button>
              <Modal
                size="4xl"
                onClose={on1ModalClose}
                isOpen={is1ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Печь цилидрическая</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://drive.google.com/file/d/1hgeZxgEQshk63jjxY72AAzEdTRBMsE_t/preview"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on1ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on2ModalOpen}>Ремонт трубчатых печей</Button>
              <Modal
                size="4xl"
                onClose={on2ModalClose}
                isOpen={is2ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Ремонт трубчатых печей</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://drive.google.com/file/d/1O8AKH89CzlQR_Kp1QNzCF-vVe9jkMm-t/preview"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on2ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on3ModalOpen}>Реактификационная колонна</Button>
              <Modal
                size="4xl"
                onClose={on3ModalClose}
                isOpen={is3ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Реактификационная колонна</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://drive.google.com/file/d/13hdWAO_-JNbzYKKLehV5I2GkkOGjjjGp/preview"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on3ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on4ModalOpen}>Поршневой компрессор</Button>
              <Modal
                size="4xl"
                onClose={on4ModalClose}
                isOpen={is4ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Поршневой компрессор</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://drive.google.com/file/d/1nqSF90x3EpSUGMnsys0OBthDvC3H2gvc/preview"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on4ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on5ModalOpen}>
                Ремонт поршневого компроессора
              </Button>
              <Modal
                size="4xl"
                onClose={on5ModalClose}
                isOpen={is5ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Ремонт поршневого компроессора</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://drive.google.com/file/d/19loS-NXvSxXrHJ6GT3JrCmwe1MIm8qRZ/preview"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on5ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on6ModalOpen}>Ремонт трубчатых печей</Button>
              <Modal
                size="4xl"
                onClose={on6ModalClose}
                isOpen={is6ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Ремонт трубчатых печей</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://www.youtube.com/embed/WubbPWbEOd8"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on6ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on7ModalOpen}>
                Обвязка центробежного насоса
              </Button>
              <Modal
                size="4xl"
                onClose={on7ModalClose}
                isOpen={is7ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Обвязка центробежного насоса</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://www.youtube.com/embed/i3MfDptAhhs"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on7ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on8ModalOpen}>Центробежный насос</Button>
              <Modal
                size="4xl"
                onClose={on8ModalClose}
                isOpen={is8ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Центробежный насос</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://www.youtube.com/embed/Kzu0LU10YQw"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on8ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={on9ModalOpen}>
                Подготовка и пуск центробежного насоса
              </Button>
              <Modal
                size="4xl"
                onClose={on9ModalClose}
                isOpen={is9ModalOpen}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    Подготовка и пуск центробежного насоса
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{ width: "100%", height: "70vh" }}
                      src="https://www.youtube.com/embed/4qDRSilSNEM"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={on9ModalClose}>Закрыть</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}

export default Hydrotreating;
