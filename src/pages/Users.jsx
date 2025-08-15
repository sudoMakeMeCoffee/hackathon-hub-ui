import React, { useState } from "react";
import AddUserForm from "../components/AddUserForm";
import UsersList from "../components/UsersList";

const Users = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  return (
    <>
      <UsersList
        showAddUserForm={showAddUserForm}
        setShowAddUserForm={setShowAddUserForm}
      />
      {showAddUserForm && (
        <div className="fixed inset-0 bg-secondary flex items-center justify-center z-50">
          <AddUserForm
            showAddUserForm={showAddUserForm}
            setShowAddUserForm={setShowAddUserForm}
          />
        </div>
      )}
    </>
  );
};

export default Users;
