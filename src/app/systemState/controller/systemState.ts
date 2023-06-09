import { Request, Response } from "express";
import { getSystemStateById, getAllSystemStates, saveSystemState, updateSystemStateById } from "../service/systemState";

export async function saveSystemStateController(req: Request, res: Response): Promise<Response> {
  const data = await saveSystemState(req.body).catch((e) => e);
  return res.json(data);
}
export async function getAllSystemStatesController(req: Request, res: Response): Promise<Response> {
  const data = await getAllSystemStates().catch((e) => e);
  return res.json(data);
}
export async function getSystemStateByIdController(req: Request, res: Response): Promise<Response> {
  const data = await getSystemStateById(req.params.id).catch((e) => e);
  return res.json(data);
}

export async function updateSystemStateByIdController(req: Request, res: Response): Promise<Response> {
  const data = await updateSystemStateById(req.params.id, req.body).catch((e: any) => e);
  return res.json(data);
}
