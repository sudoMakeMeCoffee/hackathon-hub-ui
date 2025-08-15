import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbTrash } from "react-icons/tb";

const UsersList = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    user: null,
  });

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "ADMIN" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "EDITOR" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "ADMIN" },
    { id: 4, name: "Sara Lee", email: "sara@example.com", role: "EDITOR" },
  ];

  // Filtered list
  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())) &&
      (roleFilter === "" || user.role === roleFilter)
  );

  // Right-click handler
  const handleRightClick = (event, user) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      user,
    });
  };

  // Close menu on click anywhere else
  const closeContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, user: null });
  };

  return (
    <div className="p-4" onClick={closeContextMenu}>
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-primary">Users</h2>
        <button className="bg-primary text-secondary px-4 py-2 rounded hover:opacity-80">
          + Add New User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Roles</option>
          <option value="ADMIN">Admin</option>
          <option value="EDITOR">Editor</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-secondary">
          <thead>
            <tr className="bg-primary text-secondary uppercase text-left">
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                onContextMenu={(e) => handleRightClick(e, user)}
                className="border-t border-gray-300 hover:bg-primary/10 cursor-pointer"
              >
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onContextMenu={(e) => handleRightClick(e, user)}
            className="bg-secondary text-white rounded-lg p-4 shadow cursor-pointer flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-primary">{user.name} </p>
              <span
                className={
                  user.role == "ADMIN"
                    ? "text-xs text-green-500"
                    : "text-xs text-blue-500"
                }
              >
                {user.role}
              </span>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>

            <div>
              <HiDotsHorizontal
                className="text-primary text-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();

                  const menuWidth = 150; // Width of your context menu
                  const menuHeight = 80; // Height of your context menu
                  const padding = 8; // Small gap from the icon

                  let posX = rect.right + padding;
                  let posY = rect.top + window.scrollY;

                  // If it overflows right edge → place it to the left
                  if (posX + menuWidth > window.innerWidth) {
                    posX = rect.left - menuWidth - padding;
                  }

                  // If it overflows bottom edge → place it above
                  if (posY + menuHeight > window.innerHeight + window.scrollY) {
                    posY = rect.bottom + window.scrollY - menuHeight;
                  }

                  setContextMenu({
                    visible: true,
                    x: posX,
                    y: posY,
                    user,
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Context Menu */}
      {contextMenu.visible && (
        <div
          className="absolute bg-white shadow-lg rounded border border-gray-200 w-[150px] text-sm"
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
          }}
        >
          <button className="block w-full px-4 py-2 hover:bg-gray-100 text-left">
            Edit
          </button>
          <button className="block w-full px-4 py-2 hover:bg-gray-100 text-left text-red-600">
            Delete
          </button>
        </div>
      )}

      {/* {contextMenu.visible && (
        <div
          className="absolute bg-white shadow-lg rounded border border-gray-200 text-sm"
          style={{ top: contextMenu.y, left: contextMenu.x, zIndex: 1000 }}
        >
          <button
            className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
            onClick={() => {
              console.log("Edit", contextMenu.user);
              closeContextMenu();
            }}
          >
            Edit
          </button>
          <button
            className="block w-full px-4 py-2 hover:bg-gray-100 text-left text-red-600"
            onClick={() => {
              console.log("Delete", contextMenu.user);
              closeContextMenu();
            }}
          >
            Delete
          </button>
        </div>
      )} */}
    </div>
  );
};

export default UsersList;
