import React from 'react'
import { Viewer } from "resium";
import { Ion } from 'cesium'

export default function Story() {
  Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_API_KEY

  return (
    <Viewer style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }} />
  )
}