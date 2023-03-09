import AddNewUser from "./components/AddNewUser";
import DeleteUser from "./components/DeleteUser";
import ShowAllUsers from "./components/ShowAllUsers";
import UpdateUser from "./components/UpdateUser";

import './styles.css';


function App() {

  return (
    <div className="App">
      <ShowAllUsers />
      <AddNewUser />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;
