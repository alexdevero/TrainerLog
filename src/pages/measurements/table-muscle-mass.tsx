import * as React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

export const TableMuscleMass = () => (
  <>
    <Table hover responsive style={{ marginTop: 12 }}>
      <thead style={{ fontSize: 13 }}>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>%</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>11.01.2019</td>
          <td>58.4</td>
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
          <td>58.5</td>
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
