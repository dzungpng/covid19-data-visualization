from czml import czml
import json
import math

def clamp(n, minn, maxn):
  return max(minn, min(n, maxn)) 

def geojsonToCzmlTotal(file, total=True):
  doc = czml.CZML()
  clock={
    'interval': '2019-12-31T00:00:00Z/2020-08-16T23:59:59Z',
    'currentTime': '2019-12-31T00:00:00Z',
    'multiplier': 320000,
    'range': 'LOOP_STOP',
    'step': 'SYSTEM_CLOCK_MULTIPLIER'
  }
  packet1 = czml.CZMLPacket(
    id='document', 
    version='1.0',
    clock=clock
  )
  doc.packets.append(packet1)

  with open(file) as f:
    ids = {}
    data = json.load(f)
    for feature in data['features']:
      total_values = 0
      if total:
        total_values = feature['properties']['total_cases'] if feature['properties']['total_cases'] != None else 0
      else:
        total_values = feature['properties']['total_deaths'] if feature['properties']['total_deaths'] != None else 0
        description = 'Total deaths on ' + feature['properties']['date'] + ' is ' + str(total_values)

      description= '\
        <h2>General Details:</h2> \
        <p>\
          Date: {date} <br /> \
          Total cases: {total_cases} <br /> \
          Total cases/million: {total_cases_pm} <br /> \
          Total deaths: {total_deaths} <br /> \
          Total deaths/million: {total_deaths_pm} <br /> \
          New cases: {new_cases} <br /> \
          New deaths: {new_deaths} <br /> \
        </p>\
        <h2>Demographic Details:</h2> \
        <p> \
          Population: {population} <br /> \
          Median age: {median_age} <br /> \
          Hospital beds/thoudsand: {hospital_beds_per_thousand} \
        </p> \
      '.format(
        date=feature['properties']['date'],
        total_cases=feature['properties']['total_cases'],
        total_cases_pm=feature['properties']['total_cases_per_million'],
        total_deaths=feature['properties']['total_deaths'],
        total_deaths_pm=feature['properties']['total_deaths_per_million'],
        new_cases=feature['properties']['new_cases'],
        new_deaths=feature['properties']['new_deaths'],
        population=feature['properties']['population'],
        median_age=feature['properties']['median_age'],
        hospital_beds_per_thousand=feature['properties']['hospital_beds_per_thousand'],
      )

      id = 0
      if feature['properties']['Address'] in ids:
        ids[feature['properties']['Address']] += 1
        id = ids[feature['properties']['Address']]
      else:
        ids[feature['properties']['Address']] = 0

      packet = czml.CZMLPacket(
        id=feature['properties']['Address']+str(id), 
        name=feature['properties']['Address'],
        description=description,
        availability=feature['properties']['date'] + 'T00:00:00.000Z'+ '/' + feature['properties']['date'] + 'T23:59:59.999Z'
      )
      # pixel_size=0
      # if total_values > 5:
      #   pixel_size = math.log(total_values)

      point = czml.Point(
        show=True,
        pixelSize=clamp(total_values, 0, 100)
      )
      # Coloring based on number of cases
      color = [255, 0, 0, 65]
      if total_values < 50:
        color = [52, 235, 61, 65]
      elif total_values >= 50 and total_values < 200:
        color = [235, 222, 52, 65]
      elif total_values >= 200 and total_values < 2000:
        color = [235, 155, 52, 65]
      else:
        color = [235, 76, 52, 65]

      point.color = {'rgba': color}
      packet.point = point
      packet.position = {
        'cartographicDegrees': [
          feature['geometry']['coordinates'][0], 
          feature['geometry']['coordinates'][1], 
          0.0
        ]
      }
      doc.packets.append(packet)
  
  # Write the czml document to a file
  if total:
    filename = "./data_total.czml"
    doc.write(filename)
  else:
    filename = "./data_deaths.czml"
    doc.write(filename)


def geojsonToCzmlTotalPerMillion(file, total=True):
  doc = czml.CZML()
  clock={
    'interval': '2019-12-31T00:00:00Z/2020-08-16T23:59:59Z',
    'currentTime': '2019-12-31T00:00:00Z',
    'multiplier': 320000,
    'range': 'LOOP_STOP',
    'step': 'SYSTEM_CLOCK_MULTIPLIER'
  }
  packet1 = czml.CZMLPacket(
    id='document', 
    version='1.0',
    clock=clock
  )
  doc.packets.append(packet1)

  with open(file) as f:
    ids = {}
    data = json.load(f)
    for feature in data['features']:
      total_values = 0
      if total:
        total_values = feature['properties']['total_cases_per_million'] if feature['properties']['total_cases_per_million'] != None else 0
      else:
        total_values = feature['properties']['total_deaths_per_million'] if feature['properties']['total_deaths_per_million'] != None else 0

      id = 0
      if feature['properties']['Address'] in ids:
        ids[feature['properties']['Address']] += 1
        id = ids[feature['properties']['Address']]
      else:
        ids[feature['properties']['Address']] = 0
      
      description= '\
        <h2>General Details:</h2> \
        <p>\
          Date: {date} <br /> \
          Total cases: {total_cases} <br /> \
          Total cases/million: {total_cases_pm} <br /> \
          Total deaths: {total_deaths} <br /> \
          Total deaths/million: {total_deaths_pm} <br /> \
          New cases: {new_cases} <br /> \
          New deaths: {new_deaths} <br /> \
        </p>\
        <h2>Demographic Details:</h2> \
        <p> \
          Population: {population} <br /> \
          Median age: {median_age} <br /> \
          Hospital beds/thoudsand: {hospital_beds_per_thousand} \
        </p> \
      '.format(
        date=feature['properties']['date'],
        total_cases=feature['properties']['total_cases'],
        total_cases_pm=feature['properties']['total_cases_per_million'],
        total_deaths=feature['properties']['total_deaths'],
        total_deaths_pm=feature['properties']['total_deaths_per_million'],
        new_cases=feature['properties']['new_cases'],
        new_deaths=feature['properties']['new_deaths'],
        population=feature['properties']['population'],
        median_age=feature['properties']['median_age'],
        hospital_beds_per_thousand=feature['properties']['hospital_beds_per_thousand'],
      )

      packet = czml.CZMLPacket(
        id=feature['properties']['Address']+str(id), 
        name=feature['properties']['Address'],
        description=description,
        availability=feature['properties']['date'] + 'T00:00:00.000Z'+ '/' + feature['properties']['date'] + 'T23:59:59.999Z'
      )


      point = czml.Point(
        show=True,
        pixelSize=clamp(total_values, 0, 100)
      )
      # Coloring based on number of cases
      color = [255, 0, 0, 65]
      if total_values < 50:
        color = [52, 235, 61, 65]
      elif total_values >= 50 and total_values < 200:
        color = [235, 222, 52, 65]
      elif total_values >= 200 and total_values < 2000:
        color = [235, 155, 52, 65]
      else:
        color = [235, 76, 52, 65]

      point.color = {'rgba': color}
      packet.point = point
      # cylinder = {
      #   'show': True,
      #   # 'topRadius': 20,
      #   # 'bottomRadius': 20,
      #   'height': total_values*5000,
      #   'extrudedHeight': total_values*5000,
      #   'outline': False,
      #   'fill': True,
      #   'material': {
      #     'solidColor': {
      #       'color': {
      #         'rgba': color
      #       }
      #     }
      #   }
      # }
      # packet.polygon = cylinder
      # packet.polygon = {
      #   'extrudedHeight': 50000,
      #   'material': {
      #     'solidColor': {
      #       'color': {'rgba': color}
      #     }
      #   },
      #   'show': True,
      #   'outline': False
      # }
      packet.billboard = {
        'color': {
          'rgba': color
        },
        'show': True,
        'scale': clamp(total_values, 0, 100)
      }
      packet.position = {
        'cartographicDegrees': [
          feature['geometry']['coordinates'][0], 
          feature['geometry']['coordinates'][1], 
          0.0
        ]
      }
      doc.packets.append(packet)
      
  
  # Write the czml document to a file
  if total:
    filename = "./data_total_pm.czml"
    doc.write(filename)
  else:
    filename = "./data_deaths_pm.czml"
    doc.write(filename)



