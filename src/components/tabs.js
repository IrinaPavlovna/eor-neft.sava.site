import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Tatorey from "./Tatorey";
import VT1 from "../components/VT-1";
import Hydrotreating from "./Hydrotreating";
import Footer from '../components/Footer'

function tabs() {
  return (
    <>
      <Tabs isFitted variant="enclosed" style={{ position: 'relative' }}>
        <TabList mb="1em" style={{ position: 'absolute', zIndex: '100' }}>
          <Tab>Гидроочистка</Tab>
          <Tab>ВТ-1</Tab>
          <Tab>Таторей</Tab>
        </TabList>
        <TabPanels >
          <TabPanel style={{ padding: '0' }}>
            <Hydrotreating />

          </TabPanel>
          <TabPanel style={{ padding: '0' }}>
            <VT1 />
          </TabPanel>
          <TabPanel style={{ padding: '0' }}>
            <Tatorey />
          </TabPanel>

        </TabPanels>
        <Footer />

      </Tabs>

    </>
  );
}

export default tabs;
