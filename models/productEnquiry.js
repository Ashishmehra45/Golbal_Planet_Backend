const mongoose = require('mongoose');

const querySchema = new mongoose.Schema(
  {
    // Product Details
    productName: { 
      type: String, 
      required: true 
    },
    productCategory: { 
      type: String, 
      required: true // Yahan sidha category save ho jayegi!
    },
    productId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true 
    },

    // Client Details
    name: { 
      type: String, 
      required: true 
    },
    company: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    phone: { 
      type: String, 
      default: "" 
    },

    // Enquiry Details
    message: { 
      type: String, 
      required: true 
    },
    
    // Admin Tracking Status
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

module.exports = mongoose.model('ProductQuery', querySchema);