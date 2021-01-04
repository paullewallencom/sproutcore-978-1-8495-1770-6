// ==========================================================================
// Project:   Contacts.groupController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*global Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Contacts.groupController = SC.ObjectController.create(
/** @scope Contacts.groupController.prototype */ {

  contentBinding: 'Contacts.groupsController.selection',

  /**
    Adds a contact to the client store for the selected group.
  */
  addContact: function (sender) {
    var contacts,
      content = this.get('content'),
      group,
      dataHash,
      newContact,
      tempGuid;

    // Content is a 'selection'. Only add a contact if that selection is a single group.
    if (content && content.get('length') === 1) {
      // There is only one group selected, get it.
      group = content.get('firstObject');

      // Define data for a new contact.
      dataHash = {
        firstName: 'New',
        lastName: 'Person',
        group: group.get('id')
      };

      // Give our record a unique guid.  If we committed the record back to the
      // server, the server would generate its own primary key which would
      // overwrite this.
      tempGuid = SC.guidFor(dataHash);

      // Simply create the record in the store and our groupsController content will update automatically.
      newContact = Contacts.store.createRecord(Contacts.Contact, dataHash, tempGuid);

      // Add the newContact to the group's contacts array.
      contacts = group.get('contacts');
      contacts.pushObject(newContact);
    }
  }

});
