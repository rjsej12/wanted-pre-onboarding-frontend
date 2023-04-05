import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Todo from '../../../pages/todo';
import SignIn from '../../../pages/signin';
import SignUp from '../../../pages/signup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
