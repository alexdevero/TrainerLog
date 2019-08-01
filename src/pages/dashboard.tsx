import * as React from 'react'
import styled from 'styled-components'
import { BarChart, LineChart } from 'reaviz'

// import 'reaviz/dist/index.css'

import { View } from '../components/constants'
import { GridCol, GridRow } from '../components/grid'
import { HeadingH5 } from '../components/typography'
import { DashboardSettings } from './dashboard/dashboard-settings'

import { dataBodyFat } from '../data/data-body-fat'
import { dataPrBodyWeight } from '../data/data-pr-body-weight'
import { dataPrEquipment } from '../data/data-pr-equipment'
import { dataBodyWeight } from '../data/data-body-weight'

const SettingsButton = styled.button`
  padding: 0;
  font-size: 18px;
  color: #aaa;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: color .25s ease-out;

  &:hover {
    color: #eee;
  }

  &:focus {
    outline: 0;
  }
`

const Dashboard = () => {
  const [isSettingsVisible, setSettingsVisible] = React.useState(false)
  const [isBodyFatGraphVisible, setBodyFatGraphVisible] = React.useState(true)
  const [isBodyWeightGraphVisible, setBodyWeightGraphVisible] = React.useState(true)
  const [isPrWeightGraphVisible, setPrWeightGraphVisible] = React.useState(true)
  const [isPrEquipmentGraphVisible, setPrEquipmentGraphVisible] = React.useState(true)

  return (
    <View>
      <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
        <SettingsButton onClick={() => setSettingsVisible(!isSettingsVisible)}><span className="fas fa-cog" /></SettingsButton>
      </div>

      {isSettingsVisible && (
        <DashboardSettings
          isBodyFatGraphVisible={isBodyFatGraphVisible}
          isBodyWeightGraphVisible={isBodyWeightGraphVisible}
          isPrEquipmentGraphVisible={isPrEquipmentGraphVisible}
          isPrWeightGraphVisible={isPrWeightGraphVisible}
          setBodyFatGraphVisible={() => setBodyFatGraphVisible(!isBodyFatGraphVisible)}
          setBodyWeightGraphVisible={() => setBodyWeightGraphVisible(!isBodyWeightGraphVisible)}
          setPrEquipmentGraphVisible={() => setPrEquipmentGraphVisible(!isPrEquipmentGraphVisible)}
          setPrWeightGraphVisible={() => setPrWeightGraphVisible(!isPrWeightGraphVisible)}
        />
      )}

      <GridRow>
        {isBodyWeightGraphVisible && <GridCol md={6} xl={3}>
          <HeadingH5>Your weight</HeadingH5>

          <LineChart
            data={dataBodyWeight}
            height={250}
            width={250}
          />
        </GridCol>}

        {isBodyFatGraphVisible && <GridCol md={6} xl={3}>
          <HeadingH5>Your body fat %</HeadingH5>

          <LineChart
            data={dataBodyFat}
            height={250}
            width={250}
          />
        </GridCol>}

        {isPrEquipmentGraphVisible && <GridCol md={6} xl={3}>
          <HeadingH5>Your PRs (equipment)</HeadingH5>

          <BarChart
            data={dataPrEquipment}
            height={250}
            width={350}
            // gridlines={<GridlineSeries />}
          />
        </GridCol>}

        {isPrWeightGraphVisible && <GridCol md={6} xl={3}>
          <HeadingH5>Your PRs (body weight)</HeadingH5>

          <BarChart
            data={dataPrBodyWeight}
            height={250}
            width={350}
            // gridlines={<GridlineSeries />}
          />
        </GridCol>}
      </GridRow>
    </View>
  )
}

export default Dashboard