import CrudService from "@/service/crud.mjs";
import { handleResponse } from "../../route";

// client/app/api/acara/[id]/route.js
export async function GET(req, context) {
  const id = context.params.id;

  try {
    const result = await CrudService.getOneData("acara", id);

    return handleResponse(200, "Berhasil menampilkan data", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}

export async function PUT(req, context) {
  const id = context.params.id;
  const body = await req.json();

  try {
    const result = await CrudService.updateData("acara", id, body);

    return handleResponse(200, "Berhasil mengupdate data", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}

export async function DELETE(req, context) {
  const id = context.params.id;

  try {
    await CrudService.deleteData("acara", id);

    return handleResponse(200, "Berhasil menghapus data");
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}
