import { Request, Response } from "express";

// This is the action that will be performed before the main action is performed
export const beforePerform = (req: Request, res: Response) => {
  // Your logic here
};

// This is the main action that will be performed
export const perform = (req: Request, res: Response) => {
  // Your logic here
};

// This is the action that will be performed after the main action is performed
export const afterPerform = (req: Request, res: Response) => {
  // Your logic here
};
