import React from "react";
import "./hydrotreating.scss";
import HydrotreatingSwiper from "./hydrotreatingSwiper";
import HydrotreatingSwiperSchema from "./hydrotreatingSwiperSchema";

import ModalComponent from "../ModalComponent/ModalComponent";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";

function Hydrotreating() {
  return (
    <div className="hydrotreating">
      <div className="content">
        <h1>Гидроочистка №2</h1>

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
                title="1"
                style={{ width: "100%", height: "324px" }}
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
              <div className="hydrotreating__modal">
                <ModalComponent
                  name="Общая характеристика производства и производимой продукции"
                  href="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_387a3348b1b54e5ca4a618be358e677a.pdf"
                />
                <ModalComponent
                  name="Описание технологических схем"
                  href="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_a4a09a6997624b6c8b4a63f6e1d77223.pdf"
                />
                <ModalComponent
                  name="Возможные отклонения"
                  href="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_3ae5d6d4c295471d993e17a9cb57f3f5.pdf"
                />
                <ModalComponent
                  name="Нормы технологического режима"
                  href="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_a4576a0dacfa482b8b89277fb4147102.pdf"
                />
                <ModalComponent
                  name=" Спецификация оборудования"
                  href="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_3cb6c46551b248169cbd356ab0d92f5b.pdf"
                />
                <ModalComponent
                  name="Инструкция по охране труда"
                  href="https://b5d563f9-6a46-407d-a9d0-fa6b1884ba9d.filesusr.com/ugd/c699d4_852f6790f9814894a7e8c26d452fe861.pdf"
                />
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Практический раздел
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>text</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#52527a;", color: "white" }}>
                Вспомогательный раздел
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="hydrotreating__modal">
                Исходный материал
                <a
                  href="https://www.youtube.com/channel/UCa_ybOhOWMpVmDVohW_9LGg"
                  target="_blank"
                  rel="noreferrer"
                >
                  ПроНПЗ
                </a>
                <ModalComponent
                  name="Ректификационная колонна"
                  href="https://www.youtube.com/embed/ODaN3yi1wl8"
                />
                <ModalComponent
                  name="Реактор"
                  href="https://www.youtube.com/embed/yo2kP_UwCZA"
                />
                <ModalComponent
                  name="Центробежный насос"
                  href="https://www.youtube.com/embed/zS2Vqel_Ymg"
                />
                <ModalComponent
                  name="Поршневой компрессор"
                  href="https://www.youtube.com/embed/odb-E5AY3A8"
                />
                <ModalComponent
                  name="Печь цилиндрическая"
                  href="https://www.youtube.com/embed/FUL-EUW2Hl4"
                />
                <ModalComponent
                  name="Аппарат воздушного охлаждения (АВО)"
                  href="https://www.youtube.com/embed/2LcHb6tfkuo"
                />
                <ModalComponent
                  name="Сепаратор"
                  href="https://www.youtube.com/embed/ICNAcv7sSrU"
                />
                <ModalComponent
                  name="Теплообменные аппараты"
                  href="https://www.youtube.com/embed/lfz20_-J-Vo&t=1s"
                />
                <ModalComponent
                  name="Кожухотрубчатый холодильник"
                  href="https://www.youtube.com/embed/oBAFbACjr1o"
                />
                <ModalComponent
                  name="Адсорбер"
                  href="https://www.youtube.com/embed/zip4jjgptCs"
                />
              </div>
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
              <div className="hydrotreating__modal">
                <ModalComponent
                  name="Правда или ложь"
                  href="https://wordwall.net/ru/embed/ae746e14bc5b495297779fb7e866e157?themeId=48&templateId=35%22%20width=%22500%22%20height=%22380%22%20frameborder=%220%22%20allowfullscreen"
                />
                <ModalComponent
                  name="Найди слова"
                  href="https://wordwall.net/ru/embed/ff041e58354c4dff975a284f728e88bc?themeId=44&templateId=10%22%20width=%22500%22%20height=%22380%22%20frameborder=%220%22%20allowfullscreen"
                />
                <ModalComponent
                  name="Назначение блоков"
                  href="https://learningapps.org/watch?v=p2ts0hr4t21"
                />
                <a
                  href="https://onlinetestpad.com/2wyebagof4os6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Кроссворд</Button>
                </a>
                <a
                  href="https://onlinetestpad.com/fbptycgep2bby"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Тест "Реакторный блок"</Button>
                </a>
                <a
                  href="https://onlinetestpad.com/5yuhaqbv6pkpq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Тест "Блок стабилизации"</Button>
                </a>
                <a
                  href="https://onlinetestpad.com/icdxqfu6b34fw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Тест "Блок регенерации МЭА"</Button>
                </a>
                <a
                  href="https://onlinetestpad.com/5yuhaqbv6pkpq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Тест "Блок очистки ВСГ"</Button>
                </a>
              </div>
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
              <HydrotreatingSwiperSchema />
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
              <div className="hydrotreating__modal">
                <ModalComponent
                  name="Схема реакторного блока"
                  href="https://view.genial.ly/62432a8d9bdb220018f33271"
                  full
                />
                <ModalComponent
                  name="Схема блока регенерации МЭА"
                  href="https://view.genial.ly/625ea251d05c83001818866b/interactive-image-blok-regeneracii-mea"
                  full
                />
                <ModalComponent
                  name="Схема блока стабилизации"
                  href="https://view.genial.ly/625ea2a0bf830200180763c0"
                  full
                />
                <ModalComponent
                  name="Схема блока очистки ВСГ"
                  href="https://view.genial.ly/625ea29d271fd60011653002/interactive-image-blok-ochistki-vsg"
                  full
                />
              </div>
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
                <ModalComponent
                  name="Печь цилидрическая"
                  href="https://drive.google.com/file/d/1hgeZxgEQshk63jjxY72AAzEdTRBMsE_t/preview"
                />
                <ModalComponent
                  name="Ремонт трубчатых печей"
                  href="https://drive.google.com/file/d/1O8AKH89CzlQR_Kp1QNzCF-vVe9jkMm-t/preview"
                />
                <ModalComponent
                  name="Реактификационная колонна"
                  href="https://drive.google.com/file/d/13hdWAO_-JNbzYKKLehV5I2GkkOGjjjGp/preview"
                />
                <ModalComponent
                  name="Поршневой компрессор"
                  href="https://drive.google.com/file/d/1nqSF90x3EpSUGMnsys0OBthDvC3H2gvc/preview"
                />
                <ModalComponent
                  name="Ремонт поршневого компроессора"
                  href="https://drive.google.com/file/d/19loS-NXvSxXrHJ6GT3JrCmwe1MIm8qRZ/preview"
                />
                <ModalComponent
                  name="Угловой крейцкопфный компрессор"
                  href="https://www.youtube.com/embed/WubbPWbEOd8"
                />
                <ModalComponent
                  name="Обвязка центробежного насоса"
                  href="https://www.youtube.com/embed/i3MfDptAhhs"
                />
                <ModalComponent
                  name="Центробежный насос"
                  href="https://www.youtube.com/embed/Kzu0LU10YQw"
                />
                <ModalComponent
                  name=" Подготовка и пуск центробежного насоса"
                  href="https://www.youtube.com/embed/4qDRSilSNEM"
                />
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <HydrotreatingSwiper />
    </div>
  );
}

export default Hydrotreating;
