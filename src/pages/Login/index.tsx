import LoginForm from './component/LoginForm';
import Title from './component/Title';

export default () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
      <div className="grid h-screen grid-cols-9 grid-rows-6 gap-4 bg-login-bg">
        <header className="col-span-9 row-span-1">header</header>
        <div className="flex flex-col items-center col-span-9 row-span-4">
          <Title />
          <LoginForm />
        </div>
        <footer className="col-span-9 row-span-1">footer</footer>
      </div>
    </div>
  );
};
