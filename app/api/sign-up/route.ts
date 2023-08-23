import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcryptjs";

export async function POST(request: Request){
  
  const { Names, LastName, Email, Password } = await request.json();

  if(!Names || !LastName || !Email || !Password){
    return NextResponse.json({ Message: 'All fields are required'}, { status: 400 })
  }

  if(Password.length < 8) {
    return NextResponse.json({ Message: 'Password must be at least 8 characters'}, { status: 400 });
  }

  try{
    const isRegister = await prismadb?.user.findFirst({
      where:{
        Email : Email
      }
    });  
  
    if(isRegister) {
      return NextResponse.json(
        { Message: 'Email already exists' }, 
        { status: 400 }
      )
    }
  
    const hashedPassword = await bcrypt.hash(Password, 12);

    const newUser = await prismadb?.user.create({
      data: {
        Names,
        LastName,
        Email,
        Password: hashedPassword
      }
    })

    return NextResponse.json(newUser);
  }
  catch (err){
    return NextResponse.json({ Message: 'Somethign went wrong' }, { status: 500 });
  }
}