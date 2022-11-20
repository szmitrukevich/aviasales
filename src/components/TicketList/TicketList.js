import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { Spin } from 'antd'
import PropTypes from 'prop-types'
import AviasalesService from '../../services/aviasalesService'
// import { getSearchId, getTickets } from '../../store/asyncDataReducer'
import classes from './TicketList.module.scss'
import Ticket from '../Ticket'
import Button from '../Button'

const TicketList = ({ sortItem, searchId }) => {
  const [ticketsData, setTicketsData] = useState([])
  const [sortedList, setSortedList] = useState([...ticketsData].sort((a, b) => a.price - b.price))
  const search = new AviasalesService()
  const ticketList = sortedList.map((item) => (
    <Ticket
      price={item.price}
      carrier={item.carrier}
      routeInfo={item.segments}
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
    search
      .getSearchId()
      .then((res) => search.getTickets(res.searchId))
      .then((res) => setTicketsData(res.tickets.slice(9)))
    sortList(sortItem)
  }, [sortItem, searchId])

  const data = ticketList
  return (
    <div className={classes.wrapper}>
      {data}
      <Button />
    </div>
  )
}
TicketList.defaultProps = { sortItem: '', searchId: '' }

TicketList.propTypes = {
  sortItem: PropTypes.string,
  // ticketsData: PropTypes.arrayOf(PropTypes.shape()),
  searchId: PropTypes.string,
  // isLoading: PropTypes.bool,
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
