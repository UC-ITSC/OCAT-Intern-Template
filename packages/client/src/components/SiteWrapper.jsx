import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation } from '.';

export const SiteWrapper = ({ children }) => <>
  <Navigation />

  <main role="main" className="flex-shrink-0" style={{ paddingTop: `5rem` }}>
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </main>
</>;
