// ==========================================================================
// Project:   Contacts
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*global Contacts */

/** @namespace

  My cool new app.  Describe your application.

  @extends SC.Object
*/
Contacts = SC.Application.create(
  /** @scope Contacts.prototype */ {

  NAMESPACE: 'Contacts',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),

  /**
    Adds a group to the client store.
  */
  addGroup: function (sender) {
    var dataHash,
      tempGuid;

    // Define data for a new group.
    dataHash = {
      name: 'New Group',
      contacts: []
    };

    // Give our record a unique guid.  If we committed the record back to the
    // server, the server would generate its own primary key which would
    // overwrite this.
    tempGuid = SC.guidFor(dataHash);

    // Simply create the record in the store and our groupsController content will update automatically.
    Contacts.store.createRecord(Contacts.Group, dataHash, tempGuid);
  }

});
