import React, { useState } from 'react'
import './BookingForm.css'

function BookingForm() {

  const [startDate, setStartDate] = useState(23 - 11 - 2024)
  const [endDate, setEndDate] = useState(23 - 11 - 2024)
  const [guests, setGuests] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleForm = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/users/book', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        startDate: startDate,
        endDate: endDate,
        guests: guests,
        totalPrice: totalPrice
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.status == 200) {
          window.location.href = '/booking-summary'
        } else {
          alert('Booking failed, ' +  data.res)
        }
      })
  }
  return (
    <div className='BookingForm'>
      <form
        onSubmit={(e) => handleForm(e)}
      >
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" placeholder='Start Date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" placeholder='End Date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="guests">Guests</label>
          <input type="text" placeholder='Guests' value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>
        <div>
          <label htmlFor="totalPrice">Total Price</label>
          <input type="text" placeholder='TotalPrice' value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />
        </div>
        <input type="submit" className='sb-btn' value="Book Room" />
      </form>
    </div>
  )
}

export default BookingForm
