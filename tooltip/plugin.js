/**
 * Copyright (c) 2016, SmartCore Studio.
 * Licensed under the terms of the MIT License.
 */

CKEDITOR.plugins.add("tooltip", {
  requires: "widget,dialog",
  lang: "en",
  icons: "tooltip",
  init: function (editor) {
    var TooltipTitle = editor.config.TooltipTitle;
    var Tooltip = editor.config.Tooltip;

    CKEDITOR.dialog.add("tooltip", this.path + "dialogs/tooltip.js");
    editor.ui.addButton("tooltip", {
      label: "add tooltip",
      command: "tooltip",
      toolbar: "insert",
    });
    editor.widgets.add("tooltip", {
      allowedContent:
        "div(*)[open,data-*]{*};" + "div(!tooltip-title){*}; tooltip(*){*}",
      requiredContent: "div",
      editables: {
        content: {
          selector: "div.tooltip-wrapper",
          allowedContent: "br strong em a[href,target](*){*}",
        },
      },
      template:
        '<span class="tooltip-wrapper" >' +
        '<span class="custom-tooltip tooltip--top" tooltip="' +
        Tooltip +
        '">' + TooltipTitle+ "</span>"+
        "</span>",
      dialog: "tooltip",

      upcast: function (element) {
        return element.name == "span" && element.hasClass("custom-tooltip");
      },

      init: function () {
        var title = this.element.findOne(".custom-tooltip").getText();
        if (title) this.setData("title", title);
    
        var tooltip = this.element.findOne(".custom-tooltip").getAttribute(tooltip);
        if (tooltip) this.setData("tooltip", tooltip);
      },

      data: function () {
        if (typeof this.data.text !== "undefined") {
          this.element.findOne(".custom-tooltip").setText(this.data.text);
        }
        
        if (typeof this.data.tooltip !== "undefined") {
          this.element.findOne(".custom-tooltip").setAttribute("tooltip", this.data.tooltip);
        }
      },
    });
  },
});
