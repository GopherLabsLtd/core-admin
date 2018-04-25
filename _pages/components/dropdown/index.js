import React from 'react'

    import BasicDemo from './BasicDemo.js'
import ContextMenuDemo from './ContextMenuDemo.js'
import ButtonWithDropdownMenuDemo from './ButtonWithDropdownMenuDemo.js'
import ClickEventDemo from './ClickEventDemo.js'
import OtherElementsDemo from './OtherElementsDemo.js'
import TheWayOfHidingMenuDemo from './TheWayOfHidingMenuDemo.js'
import PlacementDemo from './PlacementDemo.js'
import CascadingMenuDemo from './CascadingMenuDemo.js'
import TriggerModeDemo from './TriggerModeDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

A dropdown list.

## When To Use

If there are too many operations to display, you can wrap them in a \`\`\`Dropdown\`\`\`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.

## API

### Dropdown

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | whether the dropdown menu is disabled | boolean | - |
| getPopupContainer | to set the container of the dropdown menu. The default is to create a \`\`\`div\`\`\` element in \`\`\`body\`\`\`, you can reset it to the scrolling area and make a relative reposition. <a href="https://codepen.io/afc163/pen/zEjNOy?editors=0010">example</a> | Function(triggerNode) | \`\`\`() =&gt; document.body\`\`\` |
| overlay | the dropdown menu | <a href="/components/menu">Menu</a> | - |
| placement | placement of pop menu: \`\`\`bottomLeft\`\`\` \`\`\`bottomCenter\`\`\` \`\`\`bottomRight\`\`\` \`\`\`topLeft\`\`\` \`\`\`topCenter\`\`\` \`\`\`topRight\`\`\` | String | \`\`\`bottomLeft\`\`\` |
| trigger | the trigger mode which executes the drop-down action | Array&lt;\`\`\`click\`\`\`|\`\`\`hover\`\`\`|\`\`\`contextMenu\`\`\`&gt; | \`\`\`['hover']\`\`\` |
| visible | whether the dropdown menu is visible | boolean | - |
| onVisibleChange | a callback function takes an argument: \`\`\`visible\`\`\`, is executed when the visible state is changed | Function(visible) | - |

You should use <a href="/components/menu/">Menu</a> as \`\`\`overlay\`\`\`. The menu items and dividers are also available by using \`\`\`Menu.Item\`\`\` and \`\`\`Menu.Divider\`\`\`.

&gt; Warning: You must set a unique \`\`\`key\`\`\` for \`\`\`Menu.Item\`\`\`.
&gt;
&gt; Menu of Dropdown is unselectable by default, you can make it selectable via \`\`\`&lt;Menu selectable&gt;\`\`\`.

### Dropdown.Button

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | whether the dropdown menu is disabled | boolean | - |
| overlay | the dropdown menu | <a href="/components/menu">Menu</a> | - |
| placement | placement of pop menu: \`\`\`bottomLeft\`\`\` \`\`\`bottomCenter\`\`\` \`\`\`bottomRight\`\`\` \`\`\`topLeft\`\`\` \`\`\`topCenter\`\`\` \`\`\`topRight\`\`\` | String | \`\`\`bottomLeft\`\`\` |
| size | size of the button, the same as <a href="/components/button">Button</a> | string | \`\`\`default\`\`\` |
| trigger | the trigger mode which executes the drop-down action | Array&lt;\`\`\`click\`\`\`|\`\`\`hover\`\`\`|\`\`\`contextMenu\`\`\`&gt; | \`\`\`['hover']\`\`\` |
| type | type of the button, the same as <a href="/components/button">Button</a> | string | \`\`\`default\`\`\` |
| visible | whether the dropdown menu is visible | boolean | - |
| onClick | a callback function, the same as <a href="/components/button">Button</a>, which will be executed when you click the button on the left | Function | - |
| onVisibleChange | a callback function takes an argument: \`\`\`visible\`\`\`, is executed when the visible state is changed | Function | - |
`
const expComponent = () => (
        <div>
            <h4>Dropdown</h4>

            <Card bordered={false}>
                        <BasicDemo />
        <ContextMenuDemo />
        <ButtonWithDropdownMenuDemo />
        <ClickEventDemo />
        <OtherElementsDemo />
        <TheWayOfHidingMenuDemo />
        <PlacementDemo />
        <CascadingMenuDemo />
        <TriggerModeDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        