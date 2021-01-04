// ==========================================================================
// Project:   Contacts.Contact
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Contacts.Contact = SC.Record.extend(
/** @scope Contacts.Contact.prototype */ {

  firstName: SC.Record.attr(String),

  lastName: SC.Record.attr(String),

  telNumber: SC.Record.attr(String),

  imageURI: SC.Record.attr(String),

  description: SC.Record.attr(String),

  group: SC.Record.toOne('Contacts.Group', {
    inverse: 'contacts'
  }),

  fullName: function () {
    var firstName = this.get('firstName'),
      lastName = this.get('lastName');

    return [firstName, lastName].compact().join(' ');
  }.property()

});
