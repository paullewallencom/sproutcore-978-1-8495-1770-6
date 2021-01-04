// ==========================================================================
// Project:   Contacts - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*global Contacts */


// This page describes the main user interface for your application.
Contacts.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({

    childViews: ['toolbarView', 'splitView'],

    // The top header of the page.
    toolbarView: SC.ToolbarView.design({
      childViews: ['titleView'],

      titleView: SC.LabelView.design({
        controlSize: SC.LARGE_CONTROL_SIZE,
        layout: { centerY: 0, height: 24, left: 10, width: 200 },
        value: "Contacts"
      })
    }),

    // Flexible container for the lists and details.
    splitView: SC.SplitView.design({
      // Place this below the toolbarView.
      layout: { top: 32 },

      childViews: ['groupsPanel', 'contactsPanel', 'detailPanel'],

      // The list of groups and group control buttons.
      groupsPanel: SC.View.design(SC.SplitChild, {
        minimumSize: 140,
        size: 220,

        childViews: ['list', 'controlBar'],

        // The actual list.
        list: SC.ScrollView.design({
          layout: { bottom: 32 },

          contentView: SC.ListView.design({
            // Allow the group name to be modified within the list.
            canEditContent: true,

            // Display the name of each group in the list.
            contentValueKey: 'name',

            // The content for this list is contained in Contacts.groupsController.
            contentBinding: 'Contacts.groupsController.arrangedObjects',

            // If the list selection changes, update the selection on the controller.
            selectionBinding: 'Contacts.groupsController.selection'
          })
        }),

        // The control buttons bar.
        controlBar: SC.ToolbarView.design({
          anchorLocation: SC.ANCHOR_BOTTOM,

          childViews: ['addButton', 'removeButton'],

          addButton: SC.ButtonView.design({
            action: 'addGroup',
            layout: { centerY: 0, left: 10, width: 40, height: 24 },
            target: Contacts,
            title: '+'
          }),

          removeButton: SC.ButtonView.design({
            action: 'removeGroup',
            isEnabledBinding: 'Contacts.groupsController*selection.length',
            layout: { centerY: 0, left: 60, width: 40, height: 24 },
            target: Contacts.groupsController,
            title: '-'
          })
        })
      }),

      // The list of contacts for the group and contact control buttons.
      contactsPanel: SC.View.design(SC.SplitChild, {
        minimumSize: 140,
        size: 220,

        childViews: ['list', 'controlBar'],

                // The actual list.
        list: SC.ScrollView.design({
          layout: { bottom: 32 },

          contentView: SC.ListView.design({
            // Display the full name of each contact in the list.
            contentValueKey: 'fullName',

            // The content for this list is contained in Contacts.contactsController.
            contentBinding: 'Contacts.contactsController.arrangedObjects',

            // If the list selection changes, update the selection on the controller.
            selectionBinding: 'Contacts.contactsController.selection'
          })
        }),

        // The control buttons bar.
        controlBar: SC.ToolbarView.design({
          anchorLocation: SC.ANCHOR_BOTTOM,

          childViews: ['addButton', 'removeButton'],

          addButton: SC.ButtonView.design({
            action: 'addContact',
            isEnabledBinding: 'Contacts.groupController*selection.length',
            layout: { centerY: 0, left: 10, width: 40, height: 24 },
            target: Contacts.groupController,
            title: '+'
          }),

          removeButton: SC.ButtonView.design({
            action: 'removeContact',
            isEnabledBinding: 'Contacts.contactsController*selection.length',
            layout: { centerY: 0, left: 60, width: 40, height: 24 },
            target: Contacts.contactsController,
            title: '-'
          })
        })
      }),

      // The details for the selected contact.
      detailPanel: SC.View.design(SC.SplitChild, {
        autoResizeStyle: SC.RESIZE_AUTOMATIC,
        minimumSize: 350,

        childViews: ['image', 'fullName', 'telNumber', 'description', 'controlBar'],

        image: SC.ImageView.design({
          layout: { left: 20, top: 20, height: 120, width: 120 },
          scale: SC.BEST_FIT,
          // value: sc_static('sproutcore-128.png')
          valueBinding: 'Contacts.contactController.imageURI'
        }),

        fullName: SC.LabelView.design({
          layout: { left: 160, top: 50, height: 25, width: 150 },
          // value: "Tyler Keating"
          valueBinding: 'Contacts.contactController.fullName'
        }),

        telNumber: SC.LabelView.design({
          layout: { left: 160, top: 75, height: 25, width: 100 },
          // value: "(000) 555-1212"
          valueBinding: 'Contacts.contactController.telNumber'
        }),

        description: SC.TextFieldView.design({
          isEditable: false,
          isTextArea: true,
          layout: { left: 20, top: 160, bottom: 52, right: 20 },
          // value: "Author of the amazing Beginner's Guide to SproutCore book and just generally an all around nice human being.",
          valueBinding: 'Contacts.contactController.description'
        }),

        controlBar: SC.ToolbarView.design({
          anchorLocation: SC.ANCHOR_BOTTOM,

          childViews: ['editButton'],

          editButton: SC.ButtonView.design({
            action: 'editContact',
            layout: { centerY: 0, right: 10, width: 80, height: 24 },
            target: Contacts.contactController,
            title: 'Edit'
          })

        })
      })

    })

  })

});
