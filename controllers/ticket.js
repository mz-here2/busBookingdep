import Ticket from "../models/Ticket.js";


export const createTicket = async (req, res) => {
  const newTicket = new Ticket(req.body);

  try {
    const savedTicket = await newTicket.save();
    res.status(200).json(savedTicket);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json("Ticket has been deleted.");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
  export const updateTicketAvailability = async (req, res) => {
    try {
      await Ticket.updateOne(
        { "seatNumbers._id": req.params.id },
        {
          $push: {
            "seatNumbers.$.unavailableDates": req.body.dates,
          },
        }
      );
      res.status(200).json("Ticket status has been updated.");
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
  };
  export const getAllTickets = async (req, res) => {
    try {
    const post = await Ticket.find(req.query)
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };