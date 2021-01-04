// ==========================================================================
// Project:   Contacts.contactsController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Contacts.contactsController = SC.ArrayController.create(
/** @scope Contacts.contactsController.prototype */ {

  contentBinding: 'Contacts.groupController.contacts',

  removeContact: function (sender) {
    var content = this.get('content'),
      selection = this.get('selection');

    // Iterate through the selected contacts.
    selection.forEach(function (contact) {
      // Remove the contact from the group's contacts (i.e. our content).
      content.removeObject(contact);

      // Destroy each contact.
      contact.destroy();
    });
  }

});
