import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";



 const  LoadDB = async () => {
    await connectDB();
 }
 
 LoadDB();


// create a new email
 export  async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}` ,
    }
    await EmailModel.create(emailData);

    return NextResponse.json({success:true , msg:"Email Subscribed"})
 }


// retriving the existing email
 export async function GET(request){
   const emails = await EmailModel.find({});

   return NextResponse.json({emails});
 }



// delete the email
 export async function DELETE(request) {
   const id = await request.nextUrl.searchParams.get('id');

   await EmailModel.findByIdAndDelete(id);
   return NextResponse.json({success: true , msg: "Email Deleted"})
 }
