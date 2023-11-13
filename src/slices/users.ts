import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resolveUsers } from "../resolvers/resolveUsers";
import { User } from "../entities/User";

const name = "users";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();

const slice = createSlice({
  name,
  initialState,
  reducers: {
    checkAll: (state: any, action: { payload: any }) => {
      state.users = {
        users: state.users.users.map((user: User) => ({
          ...user,
          checked: action.payload,
        })),
      };
    },
    sort: (
      state: any,
      action: { payload: { group: string; direction: number } }
    ) => {
      state.users = {
        users: state.users.users.sort(
          (a: User, b: User) =>
            action.payload.direction *
            ("" + a[action.payload.group as keyof User]).localeCompare(
              //@ts-expect-error
              b[action.payload.group]
            )
        ),
      };
    },
    filter: (state: any, action: { payload: string }) => {
      state.users = {
        users: state.immutableUsers.users.filter(
          (a: User) =>
            Object.values(a).filter((prop: string | boolean) =>
              typeof prop === "string" ? prop.includes(action.payload) : false
            ).length
        ),
      };
    },
  },
  extraReducers,
});
export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;

function createInitialState() {
  return {
    users: {},
  };
}

function createExtraActions() {
  return {
    fetchUsers: fetchUsers(),
  };

  function fetchUsers() {
    return createAsyncThunk(
      `${name}/fetchUsers`,
      async () => await resolveUsers()
    );
  }
}

function createExtraReducers() {
  return {
    ...fetchUsers(),
  };
  function fetchUsers() {
    var { pending, fulfilled, rejected }: any = extraActions.fetchUsers;
    return {
      [pending]: (state: any) => {
        state.users = { loading: true };
      },
      [fulfilled]: (state: any, action: { payload: any }) => {
        state.users = { users: action.payload };
        state.immutableUsers = { users: action.payload };
      },
      [rejected]: (state: any, action: { error: any }) => {
        state.users = { error: action.error };
      },
    };
  }
}
