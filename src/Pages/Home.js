import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <Button style={{ marginTop: '4%', marginLeft: '4%', maxWidth: '5%' }} className='is-black is-rounded' onClick={() => setShowModal(true)}>
          <Compass size={32} color='white' />
        </Button>
        <Container style={{ marginTop: '2%', marginLeft: '18%' }}>
          <h1 style={{ color: 'white' }} className='large'>COVID-19 <br /> 3D Data Exploration</ h1>
          <img src={Subtitle} style={{ width: '50%', height: 'auto', marginTop: '-5%', marginLeft: '-3%' }} alt='' />
          <br />
          <Link to='/visualization' style={{textDecoration: 'none'}}>
            <Button className='is-danger is-rounded' style={{ marginTop: '5%', width: '200px' }}>
              Visualize the Data
            </Button>
          </Link>
          <br />
          <Link to='/story' style={{textDecoration: 'none'}}>
            <Button className='is-info is-rounded' style={{ marginTop: '5%', width: '200px' }}>
              View the Story
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
          <h2>Story Telling</h2>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

          <h2>Data Visualization</h2>
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. 
        </Modal.Content>
      </Modal>
    </div>
  )
}