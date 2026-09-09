import ZodDemo from './components/1-zod-demo/1-ZodDemo';
import BasicForm from './components/2-react-form-demo/1-BasicForm';
import RegisterForm from './components/3-integrasi-zod-react-hook-form-demo/1-RegisterForm';
import WelcomeCard from './components/4-motion-demo/WelcomeCard';
import RegisterFormAnimate from './components/5-integrasi-form-motion-demo/RegisterFormAnimate';

function App() {
  return (
    <div
      style={{
        height: '500dvh',
      }}
    >
      <h1>Class 12 - Zod, React Form and Motion</h1>

      <h2>Materi 1 - Zod</h2>
      <ZodDemo />
      <h2>Materi 2 - React Hooks Form</h2>
      <BasicForm />
      <h2>Materi 3 - Integrasi Zod dan React Hooks Form</h2>
      <RegisterForm />
      <h2>Materi 4 - Motion</h2>
      <WelcomeCard />
      <h2>Materi 5 - Integrasi Motion dan React Hooks Form</h2>
      <RegisterFormAnimate />
    </div>
  );
}

export default App;
