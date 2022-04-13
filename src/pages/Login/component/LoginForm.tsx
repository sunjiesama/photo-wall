import { Button, Form, Input, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as webApi from '@/apis/user';
import Cookies from 'js-cookie';
import { history } from 'umi';
export default () => {
  const [form] = Form.useForm();

  /**
   * 登录
   * @param values
   */
  const onFinish = (values: any) => {
    webApi.login({ ...values }).then((res) => {
      if (res.code === '200') {
        Cookies.set('token', '123123123123');
        history.replace('/');
      } else {
        message.error(res.message);
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  /**
   * 注册用户
   */
  const registered = () => {
    webApi.registered({ ...form.getFieldsValue(true) }).then((res) => {
      console.log(res);
      if (res.code === '200') {
        message.success('注册成功');
      } else {
        message.error(res.message);
      }
    });
  };
  return (
    <Form
      form={form}
      className="w-80"
      name="basic"
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Space size={'large'}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Button type="primary" htmlType="button" onClick={registered}>
            注册
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
