// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { Table, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const AdminDashboard = () => {
  const [payments, setPayments] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    if (credentials.username === 'FDP' && credentials.password === 'FDP@123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid login credentials');
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get('https://fdp.met.edu/api/users');
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchPayments();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <Container className="mt-5">
        <h1>Admin Login</h1>
        <Form inline className="mt-3">
          <FormGroup>
            <Label for="username" className="mr-2">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </FormGroup>
          <FormGroup className="ml-2">
            <Label for="password" className="mr-2">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </FormGroup>
          <Button color="primary" className="ml-2" onClick={handleLogin}>Login</Button>
        </Form>
      </Container>
    );
  }

  return (
    <Container fluid className="mt-5">
      <h1>Admin Dashboard</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Organization</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Interest</th>
            <th>Previous Experience</th>
            <th>Expectations</th>
            <th>Amount</th>
            <th>Transaction ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.name}</td>
              <td>{payment.email}</td>
              <td>{payment.phone}</td>
              <td>{payment.organization}</td>
              <td>{payment.role}</td>
              <td>{payment.experience}</td>
              <td>{Array.isArray(payment.interest) ? payment.interest.join(', ') : payment.interest}</td>
              <td>{payment.previousExperience}</td>
              <td>{Array.isArray(payment.expectations) ? payment.expectations.join(', ') : payment.expectations}</td>
              <td>{payment.amount}</td>
              <td>{payment.transaction_id}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
