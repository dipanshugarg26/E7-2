import styled from "styled-components";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Box, Container, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scjv5zj",
        "template_c39nuf8",
        form.current,
        "O7o9l2BRkvU1eW-rz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent successfully. We will contact you soon!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#D5D5D5', paddingY: '30px' }}>
        <Typography sx={{ fontSize: '30px' }}>
          Contact Us
        </Typography>
      </Box>

      <Container>
        <Link to='/'>
          <Grid sx={{
            display: 'inline-block',
            alignItems: 'center',
            margin: '20px',
            backgroundColor: '#FF971E',
            padding: '10px',
            borderRadius: '10px',
            color: 'black',
            '&:hover': {
              backgroundColor: '#FFB55F',
              color: '#fff',
            },
          }}>
            ← Go back
          </Grid>
        </Link>
      </Container>

      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>First Name</label>
          <input type="text" name="user_name" />
          <label>Phone Number</label>
          <input type="number" name="user_phone" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Type of service:</label>
          <select name="service" id="cars">
            <option value="volvo">Please Select</option>
            <option value="volvo">Amazon Account Management</option>
            <option value="saab">Amazon Advertising</option>
            <option value="opel">Flipkart Account Management</option>
            <option value="audi">Web Development</option>
          </select>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;
    margin: 0 auto;
    max-width: 400px;
    padding: 0 20px;
  
    input,
    textarea {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
  
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
  
    textarea {
      max-height: 100px;
      min-height: 100px;
    }
  
    label {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  
    input[type="submit"] {
      margin-top: 2rem;
      margin-bottom: 1rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
  
  @media (max-width: 600px) {
    form {
      max-width: 300px;
    }
  }
`;
