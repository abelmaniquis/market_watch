import React from 'react'

const TableHead = () => {
  return( 
    <table className="tableHead">
      <tbody>
        <tr>
        <th>Ticker</th>
        <th>Open</th>
        <th>Close</th>
        <th>High</th>
        <th>Low</th>
        <th>Trend</th>
        <th>Delete</th>
        </tr>
      </tbody>
    </table>
    )
}

module.exports = TableHead
