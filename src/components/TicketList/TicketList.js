import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { getSearchId, getTickets } from '../../redux/store/asyncDataReducer'
import classes from './TicketList.module.scss'
import Ticket from '../Ticket'
import Button from '../Button'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const sortList = (data, method) => {
  switch (method) {
    case 'cheapest':
      return [...data].sort((a, b) => a.price - b.price)
    case 'fastest':
      return [...data].sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
    case 'optimal':
      return [...data].sort(
        (a, b) =>
          a.price -
          b.price +
          (a.segments[0].duration + a.segments[1].duration) -
          (b.segments[0].duration + b.segments[1].duration)
      )
    default:
      return data
  }
}
const getSelectedFilters = (obj) => {
  const keysSelectedFilters = []
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      keysSelectedFilters.push(key)
    }
  })
  return keysSelectedFilters
}

const applyFilters = (data, list) => {
  const selectedFilters = getSelectedFilters(list)
  if (!list.all) {
    return data.filter(
      (item) =>
        selectedFilters.includes(item.segments[0].stops.length.toString()) &&
        selectedFilters.includes(item.segments[1].stops.length.toString())
    )
  }
  return data
}

const createNewTicket = (item) => (
  <Ticket
    price={item.price}
    carrier={item.carrier}
    routeInfo={item.segments}
    key={uuidv4()}
  />
)

const TicketList = ({ sortItem, searchId, filters, ticketsData, isLoading, getId, getTicketsData, error }) => {
  const [ticketsNumber, setTicketsNumber] = useState(5)
  const [processedData, setProcessedData] = useState(sortList(applyFilters(ticketsData, filters), 'cheapest'))

  useEffect(() => {
    getId()
    if (searchId && isLoading) {
      getTicketsData(searchId)
    }
    setProcessedData(sortList(applyFilters(ticketsData, filters), sortItem))
  }, [searchId, isLoading, ticketsData.length, sortItem, searchId, filters, error])

  const ticketList = processedData.length
    ? processedData.slice(0, ticketsNumber).map((item) => createNewTicket(item))
    : []

  let data = ticketList.length ? (
    <>
      {ticketList}
      <Button
        onClick={() => setTicketsNumber(ticketsNumber + 5)}
        btnClass="show-more"
        text="ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!"
      />
    </>
  ) : (
    <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
  )

  const spinner = isLoading && (
    <div className={classes.spinner}>
      <Spin />
    </div>
  )

  let errorMessage
  if (error) {
    data = null
    errorMessage = <ErrorMessage />
  }

  return (
    <div className={classes.wrapper}>
      {spinner}
      {errorMessage}
      {data}
    </div>
  )
}

TicketList.defaultProps = {
  sortItem: 'cheapest',
  searchId: '',
  filters: {},
  getId: () => {},
  getTicketsData: () => {},
  ticketsData: [],
  isLoading: true,
  error: false,
}

TicketList.propTypes = {
  sortItem: PropTypes.string,
  filters: PropTypes.shape(),
  getId: PropTypes.func,
  getTicketsData: PropTypes.func,
  ticketsData: PropTypes.arrayOf(PropTypes.shape()),
  searchId: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
}

function mapStateToProps(state) {
  return {
    sortItem: state.sort.sortItem,
    ticketsData: state.data.tickets,
    searchId: state.data.searchId,
    isLoading: state.data.isLoading,
    filters: state.filter.checked,
    error: state.data.error,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getId: dispatch(getSearchId()),
    getTicketsData: (id) => dispatch(getTickets(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
