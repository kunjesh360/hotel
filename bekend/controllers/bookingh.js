const Booking = require('../models/book'); // Assuming this is the path to your Booking model
const mailsend = require("../config/mailSEnder");
const Bookingroom=require("../models/book")
const hBooks = async (req, res) => {
  try {
    // const booking = new Booking(req.body);
    console.log("kunjesh====");
    // const{name,checkInDate,checkOutDate,roomNumber,hotel,roomType,guests,email}= req.body;
  //  const booktiket = await Booking.create({
  //   name,checkInDate,checkOutDate,roomNumber,roomType,guests,hotel,email
  //  });
  //  if(!name || !checkInDate ||!checkOutDate ||!roomNumber ||!hotel || !roomType ||!guests || !email)

  const { customerName, dateFrom, dateTo, room,hotel } = req.body;
    
    console.log("data",customerName, dateFrom, dateTo, room,hotel);
  //  {
  //   return res.status(500).json({
  //     success: false,
  //     message: 'add all data',

  //     });
  //  }
  //  const sendmail= await mailsend(email,'Booking Confirmation',
  //  `Your booking has been successfully made for ${hotel}. Booking details: Room Number ${roomNumber}, Check-in Date: ${checkInDate}, Check-out Date: ${checkOutDate}.`);

  //  Contact us at ${phoneNumber} for any queries.
    res.status(201).json({
        success: true,
        message: 'Booking created successfully'
    });

  } catch (error) {
    console.error("err-",error);
    res.status(400).json({
        success: false,
        message: 'Error creating booking',
        error: error.message
    });
  }
};

const roombook=async(req,res)=>{
  try {
  console.log("book room data==",req.body);
    const{
      customerName, checkInDate, checkOutDate, roomid, hotelid
    }= req.body;
    const  bookroom=Bookingroom({
      customerName:customerName, 
      dateFrom: checkInDate,
      dateTo:checkOutDate ,
      room:roomid,
      hotel:hotelid
    })
    const bookr=await bookroom.save();
    return  res.json({ 
      success: true,
      message: 'booking sucees fully'});

  } catch (error) {
    console.log("error room booking===",error);
    return  res.json({ 
      success: false,
      message: 'booking not sucessfully'});
  }
}
module.exports = { hBooks,roombook };
