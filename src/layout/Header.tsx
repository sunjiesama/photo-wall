import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const Index: React.FC = () => {
  return (
    <div className="text-center">
      <Menu selectedKeys={['mail']} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          photo
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          text
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Index;
