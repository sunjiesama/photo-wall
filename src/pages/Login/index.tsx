import LoginForm from './component/LoginForm';
import Title from './component/Title';

export default () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
      <div className="grid h-screen grid-cols-9 grid-rows-6 bg-login-bg md:flex md:flex-col md:items-center md:justify-center">
        <header className="col-span-9 row-span-1"></header>
        <div className="max-w-md col-span-9 row-span-4 mx-auto rounded-xl md:max-w-full">
          <div className="md:flex">
            <div className="flex items-center justify-center mr-4 md:flex-shrink-0">
              <Title />
            </div>
            <div className="p-8 shadow-2xl">
              <LoginForm />
            </div>
          </div>
        </div>
        <footer className="col-span-9 row-span-1"></footer>
      </div>
    </div>
  );
};
