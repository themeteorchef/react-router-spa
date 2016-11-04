import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents.js';
import EditDocument from '../pages/EditDocument.js';
import { Loading } from '../components/Loading.js';

const composer = ({ doc }, onData) => {
  const subscription = Meteor.subscribe('documents.edit', doc._id);

  if (subscription.ready()) {
    const currentDoc = Documents.findOne();
    onData(null, { doc: currentDoc });
  }
};

export default composeWithTracker(composer, Loading)(EditDocument);
