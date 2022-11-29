import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Tatorey from '../components/Tatorey'
import VT1 from '../components/VT-1'
import Hydrotreating from '../components/Hydrotreating'

function tabs() {
  return (

<Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Гидроочистка</Tab>
    <Tab>ВТ-1</Tab>
    <Tab>Таторей</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Tatorey />

    </TabPanel>
    <TabPanel>
    <VT1/>

    </TabPanel>
    <TabPanel>
      <Hydrotreating/>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default tabs