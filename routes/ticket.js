import express from "express";
import {
    createTicket,
    deleteTicket,
    getTicket,
    getAllTickets,
    updateTicket,
    updateTicketAvailability
  } from "../controllers/ticket.js";
const router = express.Router();

router.post("/", createTicket);
router.delete("/:id", deleteTicket);
router.get("/", getAllTickets);
router.get("/find/:id", getTicket);
router.put("/:id", updateTicket);
router.put("/availability/:id", updateTicketAvailability);

export default router;
