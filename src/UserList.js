import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
};

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};
