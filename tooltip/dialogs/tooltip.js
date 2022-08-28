/**
 * Copyright (c) 2016, SmartCore Studio.
 * Licensed under the terms of the MIT License.
 */

CKEDITOR.dialog.add("tooltip", function (editor) {
  return {
    title: editor.lang.tooltip.dialogTitle,
    minWidth: 300,
    minHeight: 100,
    contents: [
      {
        id: "info",
        label: editor.lang.tooltip.tab,
        elements: [
          {
            id: "text",
            type: "text",
            label: editor.lang.tooltip.text,
            setup: function (widget) {
              this.setValue(widget.data.text);
            },
            commit: function (widget) {
              widget.setData("text", this.getValue());
            },
          },

          {
            id: "tooltip",
            type: "text",
            label: editor.lang.tooltip.tooltip,
            setup: function (widget) {
              this.setValue(widget.data.tooltip);
            },
            commit: function (widget) {
              widget.setData("tooltip", this.getValue());
            },
          },
        ],
      },
    ],
  };
});
