import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeDocument } from '../../api/documents/methods.js';

const handleRemove = (_id, setCurrentPage) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        setCurrentPage(null, { page: 'documents' });
      }
    });
  }
};

const ViewDocument = ({ doc, setCurrentPage }) => (
  <div className="ViewDocument">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ doc && doc.title }</h4>
      <ButtonToolbar className="pull-right">
        <ButtonGroup bsSize="small">
          <Button
            onClick={(event) => {
              setCurrentPage(event, { page: 'editDocument', props: { doc } });
            }}
          >Edit</Button>
          <Button
            onClick={ () => handleRemove(doc._id, setCurrentPage) }
            className="text-danger">Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    { doc && doc.body }
  </div>
);

ViewDocument.propTypes = {
  doc: React.PropTypes.object,
  setCurrentPage: React.PropTypes.func,
};

export default ViewDocument;
