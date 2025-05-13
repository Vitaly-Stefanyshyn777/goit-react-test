import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
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
      const { data } = await axios.post("/contacts", contact);
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
      const { data } = await axios.delete(`/contacts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.fulfillWithValue(error.message);
    }
  }
);
