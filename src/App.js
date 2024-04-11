import './App.css';
import NVD_FunctionDemo from './components/NVD_FunctionDemo';
import NVD_classComp from './components/NVD_classComp';

function App() {
  // Khai báo biến đối tượng
  const users = {
    userName:"K22CNT3",
    password:"123456@",
    fistName:"Nguyễn Văn Được",
    lastName:"Được"
  }
  // Khai báo đối tương hàm
  function formatName(user){
    return <h2>Xin chào, {users.fistName} {users.lastName}</h2>
  }
  return (
    <div className="App">
      {/* Biểu thức jsx*/}
      <div>
        <p> FullName: {users.fistName} {users.lastName}</p>
        {formatName(users)}
        {/* sử dụng function component*/}
        <div>
          <NVD_FunctionDemo />
          {/* Sử dụng Func_Comp có props */}
          <NVD_FunctionDemo userName="NVD" fullName="Nguyễn Văn Được" age="20"/>
        </div>
        {/* Sử dụng class component */}
        <div>
          {/* Dùng không sử dụng props */}
          <NVD_classComp />
          {/* Sử dụng props */}
          <NVD_classComp company="Fit-NTU - K22CNT3" course="ReactJS" />
          <NVD_classComp company="Fit-NTU - K22CNT4" course="ReactJS 1" />
          <NVD_classComp company="Fit-NTU - K22CNT5" course="ReactJS 2" />
          <NVD_classComp company="Fit-NTU - K22CNT6" course="ReactJS 3" />
        </div>
      </div>
    </div>
  );
}

export default App;
