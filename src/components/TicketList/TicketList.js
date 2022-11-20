import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { getSearchId, getTickets } from '../../store/asyncDataReducer'
import classes from './TicketList.module.scss'
import Ticket from '../Ticket'
import Button from '../Button'

const TicketList = ({ sortItem, ticketsData, searchId, isLoading }) => {
  const [sortedList, setSortedList] = useState([...ticketsData].sort((a, b) => a.price - b.price))
  const ticketList = sortedList.map(() => (
    <Ticket
      price={1}
      time={1}
      key={Math.random()}
    />
  ))

  const sortList = (method) => {
    switch (method) {
      case 'cheapeast':
        return setSortedList([...ticketsData].sort((a, b) => a.price - b.price))
      case 'fastest':
        setSortedList([...ticketsData].sort((a, b) => a.time - b.time))
        break
      case 'optimal':
        return setSortedList([])
      default:
        return sortList
    }
    return true
  }

  useEffect(() => {
    getSearchId()
    if (isLoading) {
      getTickets(searchId)
    }
    sortList(sortItem)
  }, [sortItem, ticketsData, searchId, isLoading])

  const data = isLoading ? <Spin /> : ticketList
  return (
    <div className={classes.wrapper}>
      {data}
      <Button />
    </div>
  )
}
TicketList.defaultProps = { sortItem: '', ticketsData: [], searchId: '', isLoading: true }

TicketList.propTypes = {
  sortItem: PropTypes.string,
  ticketsData: PropTypes.arrayOf(PropTypes.shape()),
  searchId: PropTypes.string,
  isLoading: PropTypes.bool,
}

function mapStateToProps(state) {
  return {
    sortItem: state.sort.sortItem,
    ticketsData: state.data.tickets,
    seachId: state.data.seachId,
    isLoading: state.data.isLoading,
  }
}

export default connect(mapStateToProps)(TicketList)
