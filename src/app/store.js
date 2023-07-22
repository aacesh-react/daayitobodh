import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import categoryReducer from "./features/category/categorySlice";
import newsReducer from "./features/news/newsSlice";
import roleReducer from "./features/role/roleSlice";
import subcategoryReducer from "./features/subcategory/subcategorySlice";
import userRoleReducer from "./features/userRole/userRoleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
    userRole: userRoleReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    news: newsReducer,
  },
});
