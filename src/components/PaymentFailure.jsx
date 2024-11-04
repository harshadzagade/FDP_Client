import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentFailure = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const txnId = queryParams.get('txnid');
  const status = queryParams.get('status');
  const modeOfPayment = queryParams.get('mode');
  const amount = queryParams.get('amount');
  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const phone = queryParams.get('phone');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Thank You for Registering for the FDP Program!</h1>
      <p>We have received your payment, and we will get back to you with further details soon.</p>

      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', display: 'inline-block' }}>
        <h2>Payment Details</h2>
        <p><strong>Transaction ID:</strong> {txnId}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Mode of Payment:</strong> {modeOfPayment}</p>
        <p><strong>Amount Paid:</strong> ₹{amount}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>For any inquiries, feel free to contact us:</p>
        <p><strong>Phone:</strong> 8655401497</p>
        <p><strong>Email:</strong> harshadz_ics@met.edu</p>
      </div>
    </div>
  );
};

export default PaymentFailure;
