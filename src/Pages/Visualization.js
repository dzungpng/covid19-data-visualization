import React, {useState} from 'react'
import { Viewer, CzmlDataSource, ImageryLayer, CameraFlyTo } from "resium"
import { Ion, BingMapsImageryProvider, BingMapsStyle, Cartesian3 } from 'cesium'
import totalCases from '../Data/example.czml'
import totalDeaths from '../Data/example_deaths.czml'

import Box from 'react-bulma-components/lib/components/box'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import { Field, Control, Label, Input, Checkbox} from 'react-bulma-components/lib/components/form';

const imageryProvider = new BingMapsImageryProvider({
  url: 'https://dev.virtualearth.net',
  key: process.env.REACT_APP_BING_MAP_API_KEY,
  mapStyle: BingMapsStyle.AERIAL_WITH_LABELS
})

export default function Visualization() {
  Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_API_KEY
  
  const [showTotalCases, setShowTotalCases] = useState(true)
  const [showTotalDeaths, setShowTotalDeaths] = useState(false)
  const [customLatitude, setCustomLatitude] = useState(35)
  const [customLongitude, setCustomLongitude] = useState(104)

  const toolBoxStyle = {
    maxWidth: '20%',
    color: 'white',
    margin: '2% 2%'
  }

  function onChangeLatitude(value) {
    console.log(value)
    if (isNaN(value)) {
      setCustomLatitude(0)
    } else {
      setCustomLatitude(value)
    }
  }

  function onChangeLongitude(value) {
    console.log(value)
    if (isNaN(value)) {
      setCustomLongitude(0)
    } else {
      setCustomLongitude(value)
    }
  }

  return (
    <div>
      <Box className='is-transparent' style={toolBoxStyle}>
        <Field>
          <Label style={{color: 'white'}}>Show/Hide Data</Label>
            <Control>
              <Checkbox 
                name="totalCases" 
                onChange={(e) => setShowTotalCases(e.target.checked)} 
                checked={showTotalCases}
              >
                Total Cases
              </Checkbox>
              <Checkbox 
                name="totalDeaths" 
                onChange={(e) => setShowTotalDeaths(e.target.checked)} 
                checked={showTotalDeaths}
              >
                Total Deaths
              </Checkbox>
            </Control>
        </Field>
        <Field>
          <Label style={{color: 'white'}}>Custom Location</Label>
          <Columns>
            <Columns.Column>
              <Control>
                <Input 
                  placeholder="Latitude (ex. 70)" 
                  style={{maxWidth: '90%'}} 
                  value={customLatitude}
                  onChange={(e) => onChangeLatitude(parseFloat(e.target.value))}
                />
              </Control>
            </Columns.Column>
            <Columns.Column>
              <Control>
                <Input 
                  placeholder="Longitude (ex. 20)" 
                  style={{maxWidth: '90%'}} 
                  value={customLongitude}
                  onChange={(e) => onChangeLongitude(parseFloat(e.target.value))}
                />
              </Control>
            </Columns.Column>
          </Columns>
        </Field>
        
        <Label style={{color: 'white', marginTop: '3%'}}>Legend</Label>
      </Box>
      <Viewer style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}>
        <ImageryLayer imageryProvider={imageryProvider} />
        <CzmlDataSource data={totalCases} show={showTotalCases}/>
        <CzmlDataSource data={totalDeaths} show={showTotalDeaths}/>
        <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(customLongitude, customLatitude, 6000000)} />
      </Viewer>
    </div>
  )
}