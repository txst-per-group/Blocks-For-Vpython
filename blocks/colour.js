/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');


Blockly.Blocks.colour.HUE = '#26A69A';

Blockly.Blocks['colour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_colour",
          "name": "COLOUR",
          "colour": "#ffffff"
        }
      ],
      "output": "Vector",
      "colour": Blockly.Blocks.vectors.HUE,
      "helpUrl": Blockly.Msg.COLOUR_PICKER_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Colour block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.COLOUR_PICKER_TOOLTIP;
    });
  }
};


Blockly.Blocks['texture_picker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("texture")
        .appendField(new Blockly.FieldDropdown([["earth", "earth"],
                                                ["flower", "flower"], 
                                                ["granite", "granite"], 
                                                ["gravel", "gravel"], 
                                                ["rock", "rock"], 
                                                ["rough", "rough"], 
                                                ["rug", "rug"], 
                                                ["stones", "stones"], 
                                                ["stucco", "stucco"], 
                                                ["wood", "wood"], 
                                                ["wood_old", "wood_old"], 
                                                ["metal", "metal"]]), "TEXTURE_SELECTION");
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['colour_random'] = {
  /**
   * Block for random colour.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COLOUR_RANDOM_TITLE,
      "output": "Colour",
      "colour": Blockly.Blocks.vectors.HUE,
      "tooltip": Blockly.Msg.COLOUR_RANDOM_TOOLTIP,
      "helpUrl": Blockly.Msg.COLOUR_RANDOM_HELPURL
    });
  }
};

Blockly.Blocks['colour_rgb'] = {
  /**
   * Block for composing a colour from RGB components.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL);
    this.setColour(Blockly.Blocks.vectors.HUE);
    this.appendValueInput('RED')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_RGB_TITLE)
        .appendField(Blockly.Msg.COLOUR_RGB_RED);
    this.appendValueInput('GREEN')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_RGB_GREEN);
    this.appendValueInput('BLUE')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_RGB_BLUE);
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP);
  }
};

Blockly.Blocks['colour_blend'] = {
  /**
   * Block for blending two colours together.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL);
    this.setColour(Blockly.Blocks.vectors.HUE);
    this.appendValueInput('COLOUR1')
        .setCheck('Colour')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_BLEND_TITLE)
        .appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1);
    this.appendValueInput('COLOUR2')
        .setCheck('Colour')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2);
    this.appendValueInput('RATIO')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOUR_BLEND_RATIO);
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP);
  }
};

Blockly.Blocks['scene_colour'] = {
  /**
   * Block for scene background color.
   * @this Blockly.Block
   */
  init: function() {
    this.appendValueInput('COLOUR')
        .setCheck('Vector')
        .appendField('scene color');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip(function() {
      return 'Change the color of the scene background';
    });
  }
};