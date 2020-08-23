import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Viewer, CzmlDataSource, ImageryLayer, CameraFlyTo } from "resium"
import { Ion, BingMapsImageryProvider, BingMapsStyle, Cartesian3 } from 'cesium'
// import totalCases from '../Data/small_data_total.czml'
// import totalDeaths from '../Data/small_data_deaths.czml'
// import totalCasesPM from '../Data/small_data_total_pm.czml'
// import totalDeathsPM from '../Data/small_data_deaths_pm.czml'
import totalCases from '../Data/data_total.czml'
import totalDeaths from '../Data/data_deaths.czml'
import totalCasesPM from '../Data/data_total_pm.czml'
import totalDeathsPM from '../Data/data_deaths_pm.czml'

import {
  ArrowLeftCircle,
  Compass
} from 'react-feather'
import ReactTooltip from 'react-tooltip';

import Box from 'react-bulma-components/lib/components/box'
import Columns from 'react-bulma-components/lib/components/columns'
import Modal from 'react-bulma-components/lib/components/modal'
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
  const [showTotalCasesPM, setShowTotalCasesPM] = useState(false)
  const [showTotalDeathsPM, setShowTotalDeathsPM] = useState(false)

  const [customLatitude, setCustomLatitude] = useState(35)
  const [customLongitude, setCustomLongitude] = useState(104)
  const [showModal, setShowModal] = useState(true)

  const toolBoxStyle = {
    width: '20%',
    color: 'white',
    top: '350px',
    left: '75%',
    zIndex: 2,
    position: 'relative'
  }

  function onChangeLatitude(value) {
    if (isNaN(value)) {
      setCustomLatitude(0)
    } else {
      setCustomLatitude(value)
    }
  }

  function onChangeLongitude(value) {
    if (isNaN(value)) {
      setCustomLongitude(0)
    } else {
      setCustomLongitude(value)
    }
  }


  return (
    <div>
      <Link to='/'>
        <Button 
          data-tip data-for='home'
          style={{ marginTop: '4%', marginLeft: '4%', maxWidth: '5%', position: 'absolute', zIndex: 3}} 
          className='is-transparent-more is-text'
        >
          <ArrowLeftCircle size={32} color='white' />
        </Button>
        <ReactTooltip id='home' place='bottom' effect='solid'>
          Go Back
        </ReactTooltip>
      </Link>
        
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        closeOnBlur={true}
      >
        <Modal.Content style={{color: 'white', width: '70%',}}>
          <h1>NAVIGATING THE APP UI</h1>
          <h2>Cesium Widgets</h2>
          <h3>Navigation tools:</h3>
          Location - Topright corner<br/>
          Functions - Tips on how to navigate the globe, zoom in and out, global zoom, "fly" to a specific location on the map.<br/>
          <h3>Timeline tools:</h3>
          Location - Bottom of screen<br/>
          Functions - Play/pause button for animation, timeline slider, adjusting animation speed.<br/>

          <h2>Custom Toolbar</h2>
          Show/hide certain types of data, fly to a location with known latitude and longitude, legends.

          <h1>INSTRUCTIONS TO GET STARTED</h1>
          Feel free to explore the data in whichever way you would like, but here is a suggestion for starting:<br />
          1. Click to show/hide the dataset that interests you in the Custom Toolbar.<br />
          2. Press the Play |>| button at the bottom left corner of the screen to start the animation. <br />
          3. Watch as the data begins to show up over time on the global. Use your mouse controls to pan around (for mouse control tips, click on the question mark at the top right corner of the screen).
          4. Click on the circles to learn more about its prepresented country's COVID-19 situation.

        </Modal.Content>
      </Modal>
      <Box className='is-transparent' style={toolBoxStyle}>
        <Button 
          data-tip data-for='help'
          className='is-transparent-more is-text' 
          style={{ marginTop: '1%', marginLeft: '80%', maxWidth: '40%' }} 
          onClick={() => setShowModal(true)}
        >
          <Compass size={28} color='black' />
        </Button>
        <ReactTooltip id='help' place='top' effect='solid'>
          Instructions
        </ReactTooltip>
        <Field>
          <Label>Show/Hide Data</Label>
            <Control>
              <Checkbox 
                name="totalCases" 
                onChange={(e) => setShowTotalCases(e.target.checked)} 
                checked={showTotalCases}
              >
                Total Cases
              </Checkbox>
              <br />
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
            <Control>
              <Checkbox 
                name="totalCasesPM" 
                onChange={(e) => setShowTotalCasesPM(e.target.checked)} 
                checked={showTotalCasesPM}
              >
                Total Cases/Million
              </Checkbox>
              <br />
              <Checkbox 
                name="totalDeaths" 
                onChange={(e) => setShowTotalDeathsPM(e.target.checked)} 
                checked={showTotalDeathsPM}
              >
                Total Deaths/Million
              </Checkbox>
            </Control>
        </Field>
        <Field>
          <Label>Custom Location</Label>
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
        
        <Label style={{marginTop: '3%'}}>Legend (# of People)</Label>
        <div className='gradient'></div>
        <p style={{wordSpacing: '40px'}}>50 200 2000 3000+</p>
      </Box>
      <Viewer style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}>
        <ImageryLayer imageryProvider={imageryProvider} />
        <CzmlDataSource data={totalCases} show={showTotalCases}/>
        <CzmlDataSource data={totalDeaths} show={showTotalDeaths}/>
        <CzmlDataSource data={totalCasesPM} show={showTotalCasesPM}/>
        <CzmlDataSource data={totalDeathsPM} show={showTotalDeathsPM}/>
        <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(customLongitude, customLatitude, 6000000)} />
      </Viewer>
    </div>
  )
}