import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from "axios";
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNFTS = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xf9C89773524E8b6c5b5D8ad04BbDC6Cd46A50efA&order_direction=asc'
      )
      setPunkListData(openseaData.data.assets)
    }
    getMyNFTS()
  }, [])

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
      
    </div>
  )
}

export default App;
