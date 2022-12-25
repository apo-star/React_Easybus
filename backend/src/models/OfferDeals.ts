import mongoose, { Schema } from "mongoose";


// _id:'1',
//             picture:'https://themehut.co/html/geair/assets/img/images/offer_img01.jpg',
//             place:'Dhaka to Barishal',
//             date:'09 Jun 2022 - 16 Jun 2022',
//             from:'Economy from',
//             price:'৳ 1200'

const offerDealsSchema = new Schema({
    place: {
        type:String,
        required: [true,"Place is required"],
        unique:true
    },
    date:{
        type:String,
        required:[true,"Date is required"],
    },
    from:{
        type:String,
        required:[true,"From is required"],
    },
    price:{
        type:String,
        required:[true,"Price is required"]
    },
    picture:{
        type:String,
        required:[true,"Picture is required"]
    }
},
{timestamps:true}
)

export default mongoose.model("OfferDeals",offerDealsSchema)