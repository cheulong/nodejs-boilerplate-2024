import { Request, Response, Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res: Response) => {
    res.status(200).json({
      message: "Get all contacts",
    });
  })
  .post((req, res) => {
    res.status(201).json({
      message: "Create new contact",
    });
  });

router
  .route("/:id")
  .get((req: Request, res) => {
    res.status(200).json({
      message: `Get contact for ${req.params.id}`,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      message: `Update contact for ${req.params.id}`,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      message: `Delete contact for ${req.params.id}`,
    });
  });

export default router;
