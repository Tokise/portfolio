import React, { useState } from 'react';
import styled from '@emotion/styled';

const ContactSection = styled.section`
  padding: 8rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const InfoText = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
    transform: translateX(10px);
  }

  i {
    font-size: 1.5rem;
    color: var(--primary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  background: var(--background-light);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background: var(--background-dark);
  color: var(--text-primary);
  transition: var(--transition);

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background: var(--background-dark);
  color: var(--text-primary);
  min-height: 150px;
  resize: vertical;
  transition: var(--transition);

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Let's talk about everything!</InfoTitle>
            <InfoText>
              Don't like forms? Send me an email. 👋
              I'll get back to you as soon as possible.
            </InfoText>
            <ContactDetails>
              <ContactItem>
                <i className="fas fa-envelope"></i>
                <span>ablenjohnrey@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-phone"></i>
                <span>+63 927 113 5746</span>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-map-marker-alt"></i>
                <span>Philippine, Caloocan City</span>
              </ContactItem>
            </ContactDetails>
            <SocialLinks>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 