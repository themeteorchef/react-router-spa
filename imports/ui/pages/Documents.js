import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = props => (
  <Row>
    <Col xs={ 12 }>
      <div className="page-header clearfix">
        <h4 className="pull-left">Documents</h4>
        <Button
          bsStyle="success"
          className="pull-right"
          onClick={(event) => { props.setCurrentPage(event, { page: 'newDocument' }); }}
        >New Document</Button>
      </div>
      <DocumentsList { ...props } />
    </Col>
  </Row>
);

Documents.propTypes = {
  setCurrentPage: React.PropTypes.func,
};

export default Documents;
