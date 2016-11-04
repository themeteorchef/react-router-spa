import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const DocumentsList = ({ documents, setCurrentPage }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(doc => (
      <ListGroupItem
        key={ doc._id }
        onClick={(event) => { setCurrentPage(event, { page: 'viewDocument', props: { doc } }); }}
      >{ doc.title }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
  setCurrentPage: React.PropTypes.func,
};

export default DocumentsList;
