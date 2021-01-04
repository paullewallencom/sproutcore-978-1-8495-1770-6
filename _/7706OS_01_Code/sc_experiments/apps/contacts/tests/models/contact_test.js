// ==========================================================================
// Project:   Contacts.Contact Unit Test
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*global Contacts module test ok equals same stop start */

var store;
module("Contacts.Contact", {

  setup: function () {
    store = SC.Store.create().from(SC.Record.fixtures);
  },

  teardown: function () {
    store.destroy();
    store = null;
  }

});

test("Test the fullName property: basic tests", function () {
  var contact;

  // No firstName or lastName.
  contact = store.createRecord(Contacts.Contact, {});
  equals(contact.get('fullName'), '', "`fullName` with no firstName & lastName should equal");

  // firstName only
  contact = store.createRecord(Contacts.Contact, { firstName: 'Julius' });
  equals(contact.get('fullName'), 'Julius', "`fullName` with firstName & no lastName should equal");

  // lastName only
  contact = store.createRecord(Contacts.Contact, { lastName: 'Caesar' });
  equals(contact.get('fullName'), 'Caesar', "`fullName` with lastName & no firstName should equal");

  // firstName & lastName
  contact = store.createRecord(Contacts.Contact, { firstName: 'Julius', lastName: 'Caesar' });
  equals(contact.get('fullName'), 'Julius Caesar', "`fullName` with firstName & lastName should equal");

});

test("Test the fullName property: fixtures", function () {
  var contact;

  contact = store.find(Contacts.Contact, 'tyler');
  equals(contact.get('fullName'), 'Tyler Keating', "`fullName` for 'tyler' should equal");
});
