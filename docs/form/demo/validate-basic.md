# 校验

- order: 9

基本的表单校验例子。

:::lang=en-us
# Validate

- order: 9

Basic usage of validation.
:::

---

````jsx
import { Form, Input, Radio } from '@alifd/next';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

class BasicDemo extends React.Component {
    userExists(rule, value) {
        return new Promise((resolve, reject) => {
            if (!value) {
                resolve();
            } else {
                setTimeout(() => {
                    if (value === 'frank') {
                        reject([new Error('Sorry, this username is already exist.')]);
                    } else {
                        resolve();
                    }
                }, 500);
            }
        });
    }

    render() {
        return (
            <Form {...formItemLayout} >
                <FormItem
                    label="Account:"
                    hasFeedback
                    validator={this.userExists.bind(this)}
                    help=""
                >
                    <Input placeholder="Input frank" name="valUsername" />
                    <Form.Error name="valUsername" >{
                        (errors, state) => {
                            if (state === 'loading') {
                                return 'loading...';
                            } else {
                                return errors;
                            }
                        }
                    }</Form.Error>
                </FormItem>
                <FormItem
                    label="Email:"
                    hasFeedback
                    required
                    format="email"
                >
                    <Input placeholder="Both trigget onBlur and onChange" name="valEmail" />
                </FormItem>

                <FormItem
                    label="Password:"
                    hasFeedback
                    required
                    requiredMessage="Please enter password"
                >
                    <Input htmlType="password" name="valPasswd" />
                </FormItem>

                <FormItem
                    label="Gender:"
                    hasFeedback
                    required
                    requiredMessage="Please select your gender"
                >
                    <RadioGroup name="valSex" >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem
                    label="Remarks:"
                    required
                    requiredMessage="Really do not intend to write anything?"
                >
                    <Input.TextArea maxLength={20} showLimitHint placeholder="Everything is ok!" name="valTextarea" />
                </FormItem>

                <FormItem wrapperCol={{ offset: 6 }} >
                    <Form.Submit validate type="primary" onClick={(v, e) => console.log(v, e)} style={{marginRight: 10}}>Submit</Form.Submit>
                    <Form.Reset >Reset</Form.Reset>
                </FormItem>
            </Form>
        );
    }
}

ReactDOM.render(<BasicDemo />, mountNode);
````
