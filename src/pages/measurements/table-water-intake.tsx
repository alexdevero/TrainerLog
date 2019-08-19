import * as React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

import { SettingsStore } from './../../stores/store-settings'
import { HeadingH6 } from './../../components/typography'

export const TableWaterIntake = () => (
  <>
    <HeadingH6 style={{ marginBottom: 12 }}>Water intake</HeadingH6>

    <Table hover>
      <thead style={{ fontSize: 13 }}>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>{SettingsStore.units ? 'L' : 'Ounces'}</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>11.01.2019</td>
          <td>4.5</td>
          <td>
            <Dropdown alignRight>
              <Dropdown.Toggle style={{ padding: 0, background: 'transparent', border: 'none' }} variant="light" id="dropdown-basic">
                More
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>18.01.2019</td>
          <td>4.7</td>
          <td>
            <Dropdown alignRight>
              <Dropdown.Toggle style={{ padding: 0, background: 'transparent', border: 'none' }} variant="light" id="dropdown-basic">
                More
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  </>
)