import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    experience: '',
    interest: [],
    previousExperience: '',
    expectations: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const amount = 1.00; // Fixed registration fee in rupees

  useEffect(() => {
    // Clear localStorage on page reload
    localStorage.clear();

    // Optionally, you could reset cache headers if necessary with a timestamp
    const now = new Date().getTime();
    axios.defaults.headers['Cache-Control'] = 'no-cache';
    axios.defaults.headers['Pragma'] = 'no-cache';
    axios.defaults.headers['Expires'] = now.toString(); // Adds timestamp to prevent cache

    // Clear user data as well on reload if needed
    setUserData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      role: '',
      experience: '',
      interest: [],
      previousExperience: '',
      expectations: [],
    });
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setUserData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((v) => v !== value),
      }));
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const missingFields = Object.keys(userData).filter(field => !userData[field]);
    if (missingFields.length > 0) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    localStorage.setItem('userData', JSON.stringify(userData));

    try {
      const response = await axios.post('https://fdp.met.edu/api/initiate', {
        ...userData,
        amount,
      });

      const { action, params } = response.data;
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = action;

      Object.keys(params).forEach((key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      setError('Failed to initiate payment. Please try again.');
      navigate('/failure');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '500px', padding: '20px' }}>
      <img src="https://www.met.edu/frontendassets/images/MET_College_in_Mumbai_logo.png" style={{ maxWidth: '100px', marginBottom: '20px', display: 'block', margin: '0 auto'  }} alt="" />
      <h2 className="text-center mt-4" style={{ color: 'red' }}>MET FDP Registration</h2>
      <Form onSubmit={handlePayment}>
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Contact Number</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your contact number"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="organization">Organization/Institution</Label>
          <Input
            type="text"
            name="organization"
            id="organization"
            placeholder="Enter your organization"
            value={userData.organization}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="role">Role/Designation</Label>
          <Input
            type="text"
            name="role"
            id="role"
            placeholder="Enter your role"
            value={userData.role}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Years of Experience</Label>
          {['Less than 1 year', '1-2 years', '2-5 years', '5-10 years', 'More than 10 years'].map((exp) => (
            <FormGroup check key={exp}>
              <Label check>
                <Input
                  type="radio"
                  name="experience"
                  value={exp}
                  onChange={handleChange}
                  required
                />{' '}
                {exp}
              </Label>
            </FormGroup>
          ))}
        </FormGroup>
        <FormGroup>
          <Label>Interest in Case Study Writing</Label>
          {[
            'Understanding real-world scenarios',
            'Enhancing analytical skills',
            'Improving storytelling abilities',
            'Publishing opportunity',
          ].map((interest) => (
            <FormGroup check key={interest}>
              <Label check>
                <Input
                  type="checkbox"
                  name="interest"
                  value={interest}
                  onChange={handleChange}
                />{' '}
                {interest}
              </Label>
            </FormGroup>
          ))}
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="interest"
                value="Other"
                onChange={handleChange}
              />{' '}
              Other
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Have you previously written or analyzed case studies?</Label>
          {['Yes', 'No', 'Some experience'].map((option) => (
            <FormGroup check key={option}>
              <Label check>
                <Input
                  type="radio"
                  name="previousExperience"
                  value={option}
                  onChange={handleChange}
                  required
                />{' '}
                {option}
              </Label>
            </FormGroup>
          ))}
        </FormGroup>
        <FormGroup>
          <Label>Expectations from this FDP</Label>
          {[
            'Learn the fundamentals of case study writing',
            'Explore best practices in Mass Media case studies',
            'Network with industry professionals',
            'Improve research and analytical skills',
          ].map((expectation) => (
            <FormGroup check key={expectation}>
              <Label check>
                <Input
                  type="checkbox"
                  name="expectations"
                  value={expectation}
                  onChange={handleChange}
                />{' '}
                {expectation}
              </Label>
            </FormGroup>
          ))}
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="expectations"
                value="Other"
                onChange={handleChange}
              />{' '}
              Other (please specify)
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Registration Fee</Label>
          <Input type="number" name="amount" value={amount} readOnly disabled />
        </FormGroup>
        {loading ? (
          <Button color="danger" disabled block>
            Processing...
          </Button>
        ) : (
          <Button color="danger" block type="submit">
            Pay Now
          </Button>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </div>
  );
};

export default PaymentForm;
