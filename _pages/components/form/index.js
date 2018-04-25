import React from 'react'

    import AdvancedSearchDemo from './AdvancedSearchDemo.js'
import CoordinatedControlsDemo from './CoordinatedControlsDemo.js'
import CustomizedFormControlsDemo from './CustomizedFormControlsDemo.js'
import DynamicFormItemDemo from './DynamicFormItemDemo.js'
import DynamicRulesDemo from './DynamicRulesDemo.js'
import FormInModalToCreateDemo from './FormInModalToCreateDemo.js'
import StoreFormDataIntoUpperComponentDemo from './StoreFormDataIntoUpperComponentDemo.js'
import HorizontalLoginFormDemo from './HorizontalLoginFormDemo.js'
import FormLayoutDemo from './FormLayoutDemo.js'
import LoginFormDemo from './LoginFormDemo.js'
import RegistrationDemo from './RegistrationDemo.js'
import TimerelatedControlsDemo from './TimerelatedControlsDemo.js'
import OtherFormControlsDemo from './OtherFormControlsDemo.js'
import CustomizedValidationDemo from './CustomizedValidationDemo.js'
import HandleFormDataManuallyDemo from './HandleFormDataManuallyDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.

## Form

You can align the controls of a \`\`\`form\`\`\` using the \`\`\`layout\`\`\` prop：

- \`\`\`horizontal\`\`\`：to horizontally align the \`\`\`label\`\`\`s and controls of the fields. (Default)
- \`\`\`vertical\`\`\`：to vertically align the \`\`\`label\`\`\`s and controls of the fields.
- \`\`\`inline\`\`\`：to render form fields in one line.

## Form fields

A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.
A form field is defined using \`\`\`&lt;Form.Item /&gt;\`\`\`.

\`\`\`jsx &lt;Form.Item {...props}&gt; {children} &lt;/Form.Item&gt;\`\`\`

## API

### Form

<strong>more example <a href="http://react-component.github.io/form/">rc-form</a></strong>。

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| form | Decorated by \`\`\`Form.create()\`\`\` will be automatically set \`\`\`this.props.form\`\`\` property, so just pass to form, you don't need to set it by yourself after 1.7.0. | object | n/a |
| hideRequiredMark | Hide required mark of all form items | Boolean | false |
| layout | Define form layout(Support after 2.8) | 'horizontal'|'vertical'|'inline' | 'horizontal' |
| onSubmit | Defines a function will be called if form data validation is successful. | Function(e:Event) |  |

### Form.create(options)

How to use：

\`\`\`jsx class CustomizedForm extends React.Component {} CustomizedForm = Form.create({})(CustomizedForm);\`\`\`

The following \`\`\`options\`\`\` are available:

| Property | Description | Type |
| -------- | ----------- | ---- |
| mapPropsToFields | Convert props to field value(e.g. reading the values from Redux store). And you must mark returned fields with <a href="#Form.createFormField">\`\`\`Form.createFormField\`\`\`</a> | (props) =&gt; Object{ fieldName: FormField { value } } |
| validateMessages | Default validate message. And its format is similar with <a href="https://github.com/yiminghe/async-validator/blob/master/src/messages.js">newMessages</a>'s returned value | Object { [nested.path]: String } |
| onFieldsChange | Specify a function that will be called when the value a \`\`\`Form.Item\`\`\` gets changed. Usage example: saving the field's value to Redux store. | Function(props, fields) |
| onValuesChange | A handler while value of any field is changed | (props, changedValues, allValues) =&gt; void |

If the form has been decorated by \`\`\`Form.create\`\`\` then it has \`\`\`this.props.form\`\`\` property. \`\`\`this.props.form\`\`\` provides some APIs as follows:

&gt; Note: Before using \`\`\`getFieldsValue\`\`\` \`\`\`getFieldValue\`\`\` \`\`\`setFieldsValue\`\`\` and so on, please make sure that corresponding field had been registered with \`\`\`getFieldDecorator\`\`\`.

| Method | Description | Type |
| ------ | ----------- | ---- |
| getFieldDecorator | Two-way binding for form, please read below for details. |  |
| getFieldError | Get the error of a field. | Function(name) |
| getFieldsError | Get the specified fields' error. If you don't specify a parameter, you will get all fields' error. | Function([names: string[]]) |
| getFieldsValue | Get the specified fields' values. If you don't specify a parameter, you will get all fields' values. | Function([fieldNames: string[]]) |
| getFieldValue | Get the value of a field. | Function(fieldName: string) |
| isFieldsTouched | Check whether any of fields is touched by \`\`\`getFieldDecorator\`\`\`'s \`\`\`options.trigger\`\`\` event | (names?: string[]) =&gt; boolean |
| isFieldTouched | Check whether a field is touched by \`\`\`getFieldDecorator\`\`\`'s \`\`\`options.trigger\`\`\` event | (name: string) =&gt; boolean |
| isFieldValidating | Check if the specified field is being validated. | Function(name) |
| resetFields | Reset the specified fields' value(to \`\`\`initialValue\`\`\`) and status. If you don't specify a parameter, all the fields will be reset. | Function([names: string[]]) |
| setFields | Set the value and error of a field. <a href="https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79">Code Sample</a> | Function({ [fieldName]: { value: any, errors: [Error] } }) |
| setFields |  | Function(obj: object) |
| setFieldsValue | Set the value of a field.(Note: please don't use it in \`\`\`componentWillReceiveProps\`\`\`, otherwise, it will cause an endless loop, <a href="https://github.com/ant-design/ant-design/issues/2985">more</a>) | Function({ [fieldName]: value } |
| validateFields | Validate the specified fields and get theirs values and errors. If you don't specify the parameter of fieldNames, you will vaildate all fields. | Function([fieldNames: string[]], [options: object], callback: Function(errors, values)) |
| validateFieldsAndScroll | This function is similar to \`\`\`validateFields\`\`\`, but after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area. | same as \`\`\`validateFields\`\`\` |

### this.props.form.validateFields/validateFieldsAndScroll([fieldNames: string[]], [options: object], callback: Function(errors, values))

| Method | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| options.first | If \`\`\`true\`\`\`, every field will stop validation at first failed rule | boolean | false |
| options.firstFields | Those fields will stop validation at first failed rule | String[] | [] |
| options.force | Should validate validated field again when \`\`\`validateTrigger\`\`\` is been triggered again | boolean | false |
| options.scroll | Config scroll behavior of \`\`\`validateFieldsAndScroll\`\`\`, more: <a href="https://github.com/yiminghe/dom-scroll-into-view#function-parameter">dom-scroll-into-view's config</a> | Object | {} |

### Form.createFormField

To mark the returned fields data in \`\`\`mapPropsToFields\`\`\`, <a href="#components-form-demo-global-state">demo</a>.

### this.props.form.getFieldDecorator(id, options)

After wrapped by \`\`\`getFieldDecorator\`\`\`, \`\`\`value\`\`\`(or other property defined by \`\`\`valuePropName\`\`\`) \`\`\`onChange\`\`\`(or other property defined by \`\`\`trigger\`\`\`) props will be added to form controls，the flow of form data will be handled by Form which will cause:

1. You shouldn't use \`\`\`onChange\`\`\` to collect data, but you still can listen to \`\`\`onChange\`\`\`(and so on) events.
2. You can not set value of form control via \`\`\`value\`\`\` \`\`\`defaultValue\`\`\` prop, and you should set default value with \`\`\`initialValue\`\`\` in \`\`\`getFieldDecorator\`\`\` instead.
3. You shouldn't call \`\`\`setState\`\`\` manually, please use \`\`\`this.props.form.setFieldsValue\`\`\` to change value programmatically.

#### Special attention

1. \`\`\`getFieldDecorator\`\`\` can not be used to decorate stateless component.
2. If you use \`\`\`react@&lt;15.3.0\`\`\`, then, you can't use \`\`\`getFieldDecorator\`\`\` in stateless component: <a href="https://github.com/facebook/react/pull/6534">https://github.com/facebook/react/pull/6534</a>

#### getFieldDecorator(id, options) parameters

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| id | The unique identifier is required. support <a href="https://github.com/react-component/form/pull/48">nested fields format</a>. | string |  |
| options.getValueFromEvent | Specify how to get value from event or other onChange arguments | function(..args) | <a href="https://github.com/react-component/form#option-object">reference</a> |
| options.initialValue | You can specify initial value, type, optional value of children node. (Note: Because \`\`\`Form\`\`\` will test equality with \`\`\`===\`\`\` internaly, we recommend to use vairable as \`\`\`initialValue\`\`\`, instead of literal) |  | n/a |
| options.normalize | Normalize value to form component, <a href="https://codepen.io/afc163/pen/JJVXzG?editors=001">a select-all example</a> | function(value, prevValue, allValues): any | - |
| options.rules | Includes validation rules. Please refer to &quot;Validation Rules&quot; part for details. | object[] | n/a |
| options.trigger | When to collect the value of children node | string | 'onChange' |
| options.validateFirst | Whether stop validate on first rule of error for this field. | boolean | false |
| options.validateTrigger | When to validate the value of children node. | string|string[] | 'onChange' |
| options.valuePropName | Props of children node, for example, the prop of Switch is 'checked'. | string | 'value' |

More option at <a href="https://github.com/react-component/form#option-object">rc-form option</a>。

### Form.Item

Note:

- If Form.Item has multiple children that had been decorated by \`\`\`getFieldDecorator\`\`\`, \`\`\`help\`\`\` and \`\`\`required\`\`\` and \`\`\`validateStatus\`\`\` can't be generated automatically.
- Before \`\`\`2.2.0\`\`\`, form controls must be child of Form.Item, otherwise, you need to set \`\`\`help\`\`\`, \`\`\`required\`\`\` and \`\`\`validateStatus\`\`\` by yourself.

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| colon | Used with \`\`\`label\`\`\`, whether to display \`\`\`:\`\`\` after label text. | boolean | true |
| extra | The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time. | string|ReactNode |  |
| hasFeedback | Used with \`\`\`validateStatus\`\`\`, this option specifies the validation status icon. Recommended to be used only with \`\`\`Input\`\`\`. | boolean | false |
| help | The prompt message. If not provided, the prompt message will be generated by the validation rule. | string|ReactNode |  |
| label | Label text | string|ReactNode |  |
| labelCol | The layout of label. You can set \`\`\`span\`\`\` \`\`\`offset\`\`\` to something like \`\`\`{span: 3, offset: 12}\`\`\` or \`\`\`sm: {span: 3, offset: 12}\`\`\` same as with \`\`\`&lt;Col&gt;\`\`\` | <a href="https://ant.design/components/grid/#Col">object</a> |  |
| required | Whether provided or not, it will be generated by the validation rule. | boolean | false |
| validateStatus | The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating' | string |  |
| wrapperCol | The layout for input controls, same as \`\`\`labelCol\`\`\` | <a href="https://ant.design/components/grid/#Col">object</a> |  |

### Validation Rules

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| enum | validate a value from a list of possible values | string | - |
| len | validate an exact length of a field | number | - |
| max | validate a max length of a field | number | - |
| message | validation error message | string | - |
| min | validate a min length of a field | number | - |
| pattern | validate from a regular expression | RegExp | - |
| required | indicates whether field is required | boolean | \`\`\`false\`\`\` |
| transform | transform a value before validation | function(value) =&gt; transformedValue:any | - |
| type | built-in validation type, <a href="https://github.com/yiminghe/async-validator#type">available options</a> | string | 'string' |
| validator | custom validate function (Note: <a href="https://github.com/ant-design/ant-design/issues/5155">callback must be called</a>) | function(rule, value, callback) | - |
| whitespace | treat required fields that only contain whitespace as errors | boolean | \`\`\`false\`\`\` |

See more advanced usage at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.

&lt;style&gt;
.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
max-width: 600px;
}
&lt;/style&gt;

## Using in TypeScript

\`\`\`jsx import { Form } from 'antd'; import { FormComponentProps } from 'antd/lib/form'; interface UserFormProps extends FormComponentProps { age: number; name: string; } class UserForm extends React.Component&lt;UserFormProps, any&gt; { }\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Form</h4>

            <Card bordered={false}>
                        <AdvancedSearchDemo />
        <CoordinatedControlsDemo />
        <CustomizedFormControlsDemo />
        <DynamicFormItemDemo />
        <DynamicRulesDemo />
        <FormInModalToCreateDemo />
        <StoreFormDataIntoUpperComponentDemo />
        <HorizontalLoginFormDemo />
        <FormLayoutDemo />
        <LoginFormDemo />
        <RegistrationDemo />
        <TimerelatedControlsDemo />
        <OtherFormControlsDemo />
        <CustomizedValidationDemo />
        <HandleFormDataManuallyDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        