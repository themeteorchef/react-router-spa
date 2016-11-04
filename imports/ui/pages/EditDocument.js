import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';

const EditDocument = props => (
  <div className="EditDocument">
    <h4 className="page-header">Editing "{ props.doc.title }"</h4>
    <DocumentEditor { ...props } />
  </div>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
