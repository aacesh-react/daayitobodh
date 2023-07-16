// import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../app/features/auth/authSlice";
import { addRole, getRoles } from "../../../app/features/role/roleSlice";
import Modal from "../../../components/shared/Modal";
import Pagination from "../../../components/shared/Paginaton";
import TableAction from "../../../components/shared/TableAction";
import { getCookie } from "../../../pkg/universalCookies";
import { RxCrossCircled } from "react-icons/rx";
import {
  addUserRole,
  deleteByUserAndRole,
} from "../../../app/features/userRole/userRoleSlice";
import DeleteModal from "../../../components/shared/DeleteModal";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(undefined);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const style = {
    multiselectContainer: {
      // width: "500px",
    },
    option: {
      color: "red",
    },
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(undefined);
  };

  const deleteButtonHandler = (user) => {
    console.log("delete button handler:", user.id);
    setUser(user);
    setModalType("delete");
    setShowModal(true);
  };

  const deleteUserHandler = async (e) => {
    console.log("delete user handler:", user);
    let data = {
      email: user.email,
    };
    try {
      const result = await dispatch(deleteUser(data)).unwrap();
      setUsers((prev) =>
        [...prev].filter((currUser) => currUser.id != user.id)
      );

      setShowModal(false);
    } catch (error) {
      console.log("err:", error);
    }
  };

  const deleteRoleHandler = async (userId, role) => {
    const data = {
      userId,
      role,
    };
    try {
      const result = await dispatch(deleteByUserAndRole(data)).unwrap();
      console.log("result:", result);
      setUsers((prev) =>
        [...prev].map((currUser) => {
          if (currUser.id == userId) {
            let user = { ...currUser };
            user.roles = currUser.roles.filter((currRole) => currRole != role);
            return user;
          }
          return currUser;
        })
      );
    } catch (error) {
      console.log("err:", error);
    }
  };

  const addButttonHandler = (e, user) => {
    setUser(user);
    setShowModal(true);
    setModalType("addRole");
  };

  const addRoleHandler = async (e, role) => {
    let userRoles = [...user.roles];
    userRoles.push(role.name);
    const data = {
      userId: user.id,
      role: role.name,
    };
    console.log("data:", data);

    try {
      let result = await dispatch(addUserRole(data)).unwrap();
      setUsers((prev) =>
        [...prev].map((currUser) => {
          if (currUser.id == user.id) {
            let user = { ...currUser };
            user.roles = userRoles;
            return user;
          }
          return currUser;
        })
      );
      setUser((prev) => ({ ...prev, roles: userRoles }));
      if (roles.every((role) => userRoles.includes(role.name))) {
        setShowModal(false);
      }
    } catch (error) {
      console.log("err:", error);
    }
  };

  useEffect(() => {
    const allUsers = async () => {
      try {
        const accessToken = getCookie("accessToken");
        const data = await dispatch(getUsers(accessToken)).unwrap();
        // console.log("data:", data.data[1]);
        setUsers(data.data);
        const roleData = await dispatch(getRoles(accessToken)).unwrap();
        // console.log("roleData:", roleData.data);
        setRoles(roleData.data);
      } catch (error) {
        console.log("err:", error);
      }
    };
    allUsers();
  }, []);

  return (
    <div className="flex w-full bg-white p-px ">
      <div className="flex flex-col w-full py-[15px] border ">
        <h3 className=" px-px text-[1.5rem] font-[500] pb-[1rem] ">Users</h3>
        <table className="border font-[300] w-full">
          <thead className="font-[600]">
            <tr>
              <td className="border p-[.5rem]">ID</td>
              <td className="border p-[.5rem]">First Name</td>
              <td className="border p-[.5rem]">Last Name</td>
              <td className="border p-[.5rem]">Email</td>
              <td className="border p-[.5rem]">Roles</td>
              <td className="border p-[.5rem]  w-[10px]">Action</td>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td className="border p-[.5rem]">{user.id}</td>
                <td className="border p-[.5rem]">{user.firstName}</td>
                <td className="border p-[.5rem]">{user.lastName}</td>
                <td className="border p-[.5rem]">{user.email}</td>
                <td className="border p-[.5rem]">
                  <ul className="flex">
                    {user.roles.map((role, index) => (
                      <li
                        className="border  flex items-center px-[12px] rounded-full bg-heading-main text-white mr-[.5rem] "
                        key={index}
                      >
                        <span className=" pb-[4px] ">{role}</span>
                        <RxCrossCircled
                          className={` ${
                            role == "user" ? "hidden" : "block"
                          }  ml-[4px] cursor-pointer`}
                          onClick={(e) => deleteRoleHandler(user.id, role)}
                        />
                      </li>
                    ))}
                    <li
                      className="border cursor-pointer rounded-full h-[26.8px] w-[26.8px] flex justify-center text-[1.125rem] bg-heading-main text-white"
                      onClick={(e) => addButttonHandler(e, user)}
                    >
                      <span className=" ">+</span>
                      {/* <RxCrossCircled className= {` ${role == "user" ? "hidden" :  "block"}  ml-[4px]`  } /> */}
                    </li>
                  </ul>
                </td>
                {/* <td className="border p-[.5rem]">{user.roles.toString()}</td> */}
                <TableAction
                  deleteButtonHandler={(e) => deleteButtonHandler(user)}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[500px] py-[1rem]">
          <Pagination itemsPerPage={1} />
        </div>
        <Modal showModal={showModal}>
          {modalType == "delete" && (
            <DeleteModal
              closeModal={closeModal}
              okButtonHandler={deleteUserHandler}
            />
          )}
          {modalType == "addRole" && (
            <div className="flex flex-col bg-white  items-center justify-center">
              <span
                className="self-end p-px cursor-pointer text-[1.125rem]"
                onClick={closeModal}
              >
                ✕
              </span>
              <ul className="flex px-[2rem] pb-[2rem]">
                {roles.map((role, index) => (
                  <li
                    className={` ${
                      user?.roles.includes(role.name) ? "hidden" : "block"
                    } border cursor-pointer flex items-center px-[12px] rounded-full bg-heading-main text-white mr-[.5rem]`}
                    key={index}
                    onClick={(e) => addRoleHandler(e, role)}
                  >
                    <span className=" pb-[4px] ">{role.name}</span>
                    <div className="border flex rounded-full items-center ml-[4px] justify-center h-[14px] text-[12px] w-[14px]">
                      <span>+</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default AdminUsers;
