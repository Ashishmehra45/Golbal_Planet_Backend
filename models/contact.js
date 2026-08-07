const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    company: { 
      type: String, 
      required: true 
    },
    country: { 
      type: String, 
      required: true 
    },
    product: { 
      type: String, 
      required: true 
    },
    quantity: { 
      type: String, 
      required: true 
    },
    message: { 
      type: String, 
      required: true 
    },
    // Admin dashboard mein track karne ke liye status
    status: { 
      type: String, 
      enum: ['New', 'In Progress', 'Resolved'], 
      default: 'New' 
    }
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model('Contact', contactSchema);