const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    departure: {
      type: String,
      required: [true, 'The field is required'],
    },
    arrival: {
      type: String,
      required: [true, 'The field is required'],
    },
    luggage: [{}],
    reservedSeats: {
      tripGoSeats: [{}],
      tripReturnSeats: [{}],
    },
    checkIn: [],
    roundtrip: {
      type: Boolean,
      required: false,
    },
    isPaid: {
      type: Boolean,
      required: false,
      default: false,
    },
    users: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      required: false,
    },
    tripGoFlight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: false,
    },
    tripGoBackFlight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Booking = model('Booking', bookingSchema);
module.exports = Booking;
