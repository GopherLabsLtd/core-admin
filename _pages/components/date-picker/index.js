import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CustomizedDateRenderingDemo from './CustomizedDateRenderingDemo.js'
import DisabledDateTimeDemo from './DisabledDateTimeDemo.js'
import DisabledDemo from './DisabledDemo.js'
import ExtraFooterDemo from './ExtraFooterDemo.js'
import DateFormatDemo from './DateFormatDemo.js'
import ControlledPanelsDemo from './ControlledPanelsDemo.js'
import PresettedRangesDemo from './PresettedRangesDemo.js'
import ThreeSizesDemo from './ThreeSizesDemo.js'
import CustomizedRangePickerDemo from './CustomizedRangePickerDemo.js'
import ChooseTimeDemo from './ChooseTimeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

To select or input a date.

## When To Use

By clicking the input box, you can select a date from a popup calendar.

## API

There are four kinds of picker:

- DatePicker
- MonthPicker
- RangePicker
- WeekPicker

**Note:** Part of locale of DatePicker, MonthPicker, RangePicker, WeekPicker is read from value. So, please set the locale of moment correctly.

\`\`\`jsx
// The default locale is en-US, if you want to use other locale, just set locale in entry file globaly.
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
\`\`\`

### Common API

The following APIs are shared by DatePicker, MonthPicker, RangePicker, WeekPicker.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| allowClear | Whether to show clear button | boolean | true |
| autoFocus | get focus when component mounted | boolean | false |
| className | picker className | string | '' |
| dateRender | custom rendering function for date cells | function(currentDate: moment, today: moment) => React.ReactNode | - |
| disabled | determine whether the DatePicker is disabled | boolean | false |
| disabledDate | specify the date that cannot be selected | (currentDate: moment) => boolean | - |
| getCalendarContainer | to set the container of the floating layer, while the default is to create a \`div\` element in \`body\` | function(trigger) | - |
| locale | localization configuration | object | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |
| open | open state of picker | boolean | - |
| placeholder | placeholder of date input | string\|RangePicker\[] | - |
| popupStyle | to customize the style of the popup calendar | object | {} |
| dropdownClassName | to customize the className of the popup calendar  | string | - |
| size | determine the size of the input box, the height of \`large\` and \`small\`, are 40px and 24px respectively, while default size is 32px | string | - |
| style | to customize the style of the input box | object | {} |
| onOpenChange | a callback function, can be executed whether the popup calendar is popped up or closed | function(status) | - |

### Common Methods

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |

### DatePicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |
| disabledTime | to specify the time that cannot be selected | function(date) | - |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-MM-DD" |
| renderExtraFooter | render extra footer in panel | () => React.ReactNode | - |
| showTime | to provide an additional time selection | object\|boolean | [TimePicker Options](/components/time-picker/#API) |
| showTime.defaultValue | to set default time of selected date, [demo](https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/) | moment() |
| showToday | whether to show "Today" button | boolean | true |
| value | to set date | [moment](http://momentjs.com/) | - |
| onCalendarChange | a callback function, can be executed when the start time or the end time of the range is changing | function(dates: [moment, moment], dateStrings: [string, string]) | 无 |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |
| onOk | callback when click ok button | function() | - |

### MonthPicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-MM" |
| monthCellContentRender | Custom month cell content render method | function(date, locale): ReactNode | - |
| renderExtraFooter | render extra footer in panel | () => React.ReactNode | - |
| value | to set date | [moment](http://momentjs.com/) | - |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |

### WeekPicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-wo" |
| value | to set date | [moment](http://momentjs.com/) | - |
| onChange | a callback function, can be executed when the selected time is changing | function(date: moment, dateString: string) | - |

### RangePicker

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | to set default date | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |
| disabledTime | to specify the time that cannot be selected | function(dates: [moment, moment], partial: \`'start'|'end'\`) | - |
| format | to set the date format | string | "YYYY-MM-DD HH:mm:ss" |
| ranges | preseted ranges for quick selection | { \[range: string\]&#x3A; [moment](http://momentjs.com/)\[] } \| () => { \[range: string\]&#x3A; [moment](http://momentjs.com/)\[] } | - |
| renderExtraFooter | render extra footer in panel | () => React.ReactNode | - |
| showTime | to provide an additional time selection | object\|boolean | [TimePicker Options](/components/time-picker/#API) |
| showTime.defaultValue | to set default time of selected date, [demo](https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/)\[] | [moment(), moment()] |
| value | to set date | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |
| onChange | a callback function, can be executed when the selected time is changing | function(dates: [moment, moment], dateStrings: [string, string]) | - |
| onOk | callback when click ok button | function() | - |

<style>
.code-box-demo .ant-calendar-picker {
  margin: 0 8px 12px 0;
}
</style>
`
const expComponent = () => (
        <div id="component-demos-date-picker">
            <div className="title-bar">
                <h4>Date Picker</h4>
                <p>

To select or input a date.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Customized Date Rendering</h4>
        <CustomizedDateRenderingDemo />
        </div>
<div className="component-demo">
        <h4>Disabled Date Time</h4>
        <DisabledDateTimeDemo />
        </div>
<div className="component-demo">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo">
        <h4>Extra Footer</h4>
        <ExtraFooterDemo />
        </div>
<div className="component-demo">
        <h4>Date Format</h4>
        <DateFormatDemo />
        </div>
<div className="component-demo">
        <h4>Controlled Panels</h4>
        <ControlledPanelsDemo />
        </div>
<div className="component-demo">
        <h4>Presetted Ranges</h4>
        <PresettedRangesDemo />
        </div>
<div className="component-demo">
        <h4>Three Sizes</h4>
        <ThreeSizesDemo />
        </div>
<div className="component-demo">
        <h4>Customized Range Picker</h4>
        <CustomizedRangePickerDemo />
        </div>
<div className="component-demo">
        <h4>Choose Time</h4>
        <ChooseTimeDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        