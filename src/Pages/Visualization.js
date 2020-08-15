import React from 'react'
import { Viewer, CzmlDataSource } from "resium"
import { Ion } from 'cesium'
// import data from '../Data/small-covid-data.czml'
import data from '../Data/example.czml'

export default function Visualization() {
  Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_API_KEY

  return (
    <Viewer style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      <CzmlDataSource data={data}/>
    </Viewer>
  )
}