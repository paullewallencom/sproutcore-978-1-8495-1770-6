// ==========================================================================
// Project:   Contacts.groupsController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*global Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Contacts.groupsController = SC.ArrayController.create(
/** @scope Contacts.groupsController.prototype */ {

  removeGroup: function (sender) {
    var selection = this.get('selection');

    // Iterate through the selected groups.
    selection.forEach(function (group) {
      // Destroy each group.
      group.destroy();
    });
  }

});
