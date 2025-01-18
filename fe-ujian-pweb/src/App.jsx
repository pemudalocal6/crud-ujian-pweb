import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
