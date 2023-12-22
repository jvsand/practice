
import React, { useState } from 'react';
import './reservationForm.css';

const ReservationForm: React.FC = () => {
  const [datetime, setDatetime] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  const [reservationInfo, setReservationInfo] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 予約情報を設定
    const info = `Reservation confirmed for ${datetime} for ${guests} guests.`;
    setReservationInfo(info);

    // ここでフォームの送信処理を実行する
    console.log(info);
  };

  return (
    <div className="container">
      <h1 className='tytle'>Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="datetime">Date and Time:</label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          required
        />

        <label htmlFor="guests">Number of Guests:</label>
        <select
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10))}
          required
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>

      {reservationInfo && (
        <div className="reservation-info">
          <h2 className='sub-tytle'>Reservation Information</h2>
          <p>{reservationInfo}</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
