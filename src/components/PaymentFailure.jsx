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
    <div style={{ textAlign: 'center', padding: '30px', color: '#333', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#B22222', fontWeight: 'bold' }}>Payment Failed</h1>
      <p style={{ marginTop: '20px', color: '#B22222', fontSize: '16px' }}>
        Kindly Retry Again.
      </p>

      {/* <div style={{
        marginTop: '20px',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #B22222',
        display: 'inline-block',
        maxWidth: '500px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ color: '#B22222' }}>Payment Details</h2>
        <p><strong>Transaction ID:</strong> {txnId}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Mode of Payment:</strong> {modeOfPayment}</p>
        <p><strong>Amount Paid:</strong> ₹{amount}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div> */}

      <div style={{ marginTop: '20px', color: '#B22222', fontSize: '16px' }}>
        <p>If you have any inquiries, feel free to contact us:</p>
        <p><strong>Phone:</strong> <a href="tel:9136901541"> 9136901541 </a></p>
        <p><strong>Email:</strong> <a href="mailto:metcet@met.edu">metcet@met.edu</a> </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
