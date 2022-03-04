import { Button, Form, Input } from 'antd'
import { formValueSuccessRegister } from 'types/form'

const RegisterForm = () => {
	const onFinish = (values: formValueSuccessRegister) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	const validateMessages = {
		// eslint-disable-next-line no-template-curly-in-string
		required: '${label} is required!',
		types: {
			// eslint-disable-next-line no-template-curly-in-string
			email: '${label} is not a valid email!',
		},
	}

	return (
		<>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				validateMessages={validateMessages}
				autoComplete='off'>
				<Form.Item name={['user', 'email']} label='Email' rules={[{ type: 'email' }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name='password'
					label='Password'
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
					hasFeedback>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name='confirm'
					label='Confirm'
					dependencies={['password']}
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Please confirm your password!',
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve()
								}
								return Promise.reject(new Error('The two passwords that you entered do not match!'))
							},
						}),
					]}>
					<Input.Password />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Register
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
export default RegisterForm
