import HttpError from "@/config/error";
import { db } from "../config/firebase.mjs";
import {
  doc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export default class CrudService {
  static async getAllData(collect) {
    try {
      const snapshot = await getDocs(collection(db, collect));
      const data = [];

      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      if (data.length > 0) {
        return data;
      } else {
        throw new HttpError("Data masih kosong", 400);
      }
    } catch (error) {
      throw new HttpError(error.message, error.statusCode);
    }
  }

  static async getOneData(collect, id) {
    const docRef = doc(db, collect, id);

    try {
      const result = await getDoc(docRef);
      if (result.exists()) {
        return { id, ...result.data() };
      } else {
        throw new HttpError("Data tidak ditemukan", 400);
      }
    } catch (error) {
      throw new HttpError(error.message, error.statusCode);
    }
  }

  static async addData(collect, data) {
    try {
      const result = await addDoc(collection(db, collect), data);
      return { id: result.id, ...data };
    } catch (error) {
      throw new HttpError(error.message, 500);
    }
  }

  static async updateData(collect, id, data) {
    const isData = await this.getOneData(collect, id);

    if (isData) {
      try {
        const docRef = doc(db, collect, id);
        await updateDoc(docRef, data);

        return { id, ...data };
      } catch (error) {
        throw new HttpError(error.message, 500);
      }
    }
  }

  static async deleteData(collect, id) {
    const isData = await this.getOneData(collect, id);

    if (isData) {
      try {
        await deleteDoc(doc(db, collect, id));
      } catch (error) {
        throw new HttpError(error.message, 500);
      }
    }
  }
  static async filterData(collect, key, value) {
    const q = query(collection(db, collect), where(key, "==", value));
    const snapshot = await getDocs(q);
    const data = [];

    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  }
}
