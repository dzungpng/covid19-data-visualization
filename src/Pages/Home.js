import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';

import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Button from 'react-bulma-components/lib/components/button'
import Modal from 'react-bulma-components/lib/components/modal'

import Subtitle from '../Images/subtitle2.gif'
import {
  Compass
} from 'react-feather'


export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Hero className='main-background' size='fullheight'>
        <Button data-tip data-for='helpTip' style={{ marginTop: '4%', marginLeft: '4%', maxWidth: '5%' }} className='is-transparent-more is-text' onClick={() => setShowModal(true)}>
          <Compass size={32} color='white' />
        </Button>
        <ReactTooltip id='helpTip' place='bottom' effect='solid'>
          About the App
        </ReactTooltip>
        <Container style={{ marginTop: '2%', marginLeft: '18%' }}>
          <h1 style={{ color: 'white' }} className='large'>COVID-19 <br /> 3D Data Exploration</ h1>
          <img src={Subtitle} style={{ width: '50%', height: 'auto', marginTop: '-5%', marginLeft: '-3%' }} alt='' />
          <br />
          <Link to='/visualization' style={{textDecoration: 'none'}}>
            <Button className='is-info is-rounded' style={{ marginTop: '5%', width: '200px' }}>
              Explore the Data
            </Button>
          </Link>
        </Container>
      </Hero>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        closeOnBlur={true}
      >
        <Modal.Content style={{ color: 'white' }}>
          <h1>ABOUT THE PROJECT</h1>
          <h2>3D Data Visualization</h2>
          <p>Currently there are numerous websites and tools used to visualize COVID-19 data. However, there are few of which utilize 3D graphics. The goal of this project is to show the power of 3D data visualization and the unique way it can tell the story of the COVID-19 pademic. While viewing the data, users are able to interact with the data and the world itself. There is a component of time, which enhances the way the data is displayed.</p>

          <h2>Technologies Used</h2>
          <p><b>CesiumJS: </b> Cesium is a powerful open-source Javascript library for creating world-class, high-performant 3D maps. The base of the project utilizes this tool, which enables for a unique data format called czml to show time-dependent geospatial data.</p>
          <p><b>ReactJS: </b> The frontend of the project is done entirely in React with Bulma as the CSS framework.</p>
        </Modal.Content>
      </Modal>
    </div>
  )
}