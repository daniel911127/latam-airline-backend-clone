const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    origin: {
      type: String,
      required: [true, 'The field is required'],
    },
    destination: {
      type: String,
      required: [true, 'The field is required'],
    },
    luggage: {
      kilograms: {
        type: Number,
        emun: [15, 23],
        default: 15,
        required: false,
      },
      amount: {
        type: Number,
        default: 1,
        required: false,
      },
    },
    departureDate: {
      type: Date,
      required: false,
    },
    arrivalDate: {
      type: Date,
      required: false,
    },
    roundtrip: {
      type: Boolean,
      required: true,
    },
    adults: {
      type: Number,
      required: [true, 'Must to travel at leat one adult'],
      default: 1,
    },
    kids: {
      type: Number,
      required: false,
      default: 0,
    },
    babies: {
      type: Number,
      required: false,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model('Booking', bookingSchema);
module.exports = Booking;
