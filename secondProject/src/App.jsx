import React, { useState } from 'react';
import Table from './component/Table';
import AddUser from './component/AddUser';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleUserAdded = () => {
    setRefresh(!refresh); 
  };

  return (
    <div className="p-4">
      <AddUser onUserAdded={handleUserAdded} />
      <div className="my-8"> 
        <Table refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
