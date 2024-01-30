import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Tatorey from "./tatorey";
import VT1 from "./VT-1";
import Hydrotreating from "./hydrotreating";
import Footer from "./footer";

function tabs() {
  return (
    <>
      <Tabs isFitted variant="enclosed" style={{ position: "relative" }}>
        <TabList
          mb="1em"
          style={{
            position: "absolute",
            zIndex: "100",
            width: "99.13vw",
            color: "#fff",
          }}
        >
          <Tab>Гидроочистка</Tab>
          <Tab>ВТ-1</Tab>
          <Tab>Таторей</Tab>
        </TabList>
        <TabPanels>
          <TabPanel style={{ padding: "0" }}>
            <Hydrotreating />
          </TabPanel>
          <TabPanel style={{ padding: "0" }}>
            <VT1 />
          </TabPanel>
          <TabPanel style={{ padding: "0" }}>
            <Tatorey />
          </TabPanel>
        </TabPanels>
        <Footer />
      </Tabs>
    </>
  );
}

export default tabs;
