import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 footer-custom">
      <Container>
        <Row className="py-3 text-center text-md-start">
          {/* Brand Section */}
          <Col xs={12} md={3} className="mb-3">
            <h5 className="mb-2">
              E<span className="text-warning">Com</span> Universe
            </h5>
            <p className="small">
              Your trusted destination for quality products at unbeatable prices.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} sm={6} md={2} className="mb-3">
            <h6 className="text-uppercase small">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  Shop
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  About Us
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  Contact
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  FAQs
                </Button>
              </li>
            </ul>
          </Col>

          {/* Support Links */}
          <Col xs={12} sm={6} md={2} className="mb-3">
            <h6 className="text-uppercase small">Customer Support</h6>
            <ul className="list-unstyled small">
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  Return Policy
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  Shipping Info
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-white text-decoration-none p-0"
                  onClick={() => navigate("/")}>
                  Help Center
                </Button>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h6 className="text-uppercase small">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://github.com/themanikandang"
                target="_blank"
                className="text-white me-3"
                rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/TheManikandanG"
                target="_blank"
                className="text-white me-3"
                rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/themanikandang/"
                target="_blank"
                className="text-white me-3"
                rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/themanikandang/"
                target="_blank"
                className="text-white"
                rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>

          {/* Newsletter Subscription */}
          <Col xs={12} sm={6} md={2}>
            <h6 className="text-uppercase small">Newsletter</h6>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="mb-2"
                />
                <Button variant="primary" type="submit" className="w-100 btn-sm">
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center py-2">
          <Col className="small">
            &copy; {currentYear} ECom Universe. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
