import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://675994a9099e3090dbe22f18.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contact");
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.fulfillWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contact/addContacts",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post("/contact", contact);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.fulfillWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contact/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.fulfillWithValue(error.message);
    }
  }
);
