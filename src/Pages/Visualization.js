import React, {useState} from 'react'
import { Viewer, CzmlDataSource, ImageryLayer, CameraFlyTo } from "resium"
import { Ion, BingMapsImageryProvider, BingMapsStyle, Cartesian3 } from 'cesium'
import totalCases from '../Data/small_data_total.czml'
import totalDeaths from '../Data/small_data_deaths.czml'
import totalCasesPM from '../Data/small_data_total_pm.czml'
import totalDeathsPM from '../Data/small_data_deaths_pm.czml'
import {
  Compass
} from 'react-feather'

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
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        closeOnBlur={true}
      >
        <Modal.Content style={{color: 'white'}}>
          <h1>INTRUCSTIONS</h1>
          <h2>CESIUM WIDGETS</h2>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

          <h2>TOOLBAR</h2>
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. 
        </Modal.Content>
      </Modal>
      <Box className='is-transparent' style={toolBoxStyle}>
        <Button 
          className='is-transparent-more is-text' 
          style={{ marginTop: '1%', marginLeft: '80%', maxWidth: '40%' }} 
          onClick={() => setShowModal(true)}
        >
          <Compass size={28} color='black' />
        </Button>
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