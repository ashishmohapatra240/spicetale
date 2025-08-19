import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { fullName, address, phoneNumber, city, pincode, message } = body

        // Validate required fields
        if (!fullName || !address || !phoneNumber || !city || !pincode) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'admin@spicetalebeverages.com',
                pass: process.env.APP_PASSWORD
            }
        })

        // Email content
        const mailOptions = {
            from: 'admin@spicetalebeverages.com',
            to: 'admin@spicetalebeverages.com',
            subject: 'New Distributor Application - Spicetale Beverages',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1A1F0A; margin: 0;">Spicetale Beverages</h1>
            <h2 style="color: #1A1F0A; margin: 10px 0;">New Distributor Application</h2>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #1A1F0A; margin-top: 0;">Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Full Name:</td>
                <td style="padding: 8px 0; color: #333;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone Number:</td>
                <td style="padding: 8px 0; color: #333;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Address:</td>
                <td style="padding: 8px 0; color: #333;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">City:</td>
                <td style="padding: 8px 0; color: #333;">${city}</td>
              </tr>
                             <tr>
                 <td style="padding: 8px 0; font-weight: bold; color: #555;">Pincode:</td>
                 <td style="padding: 8px 0; color: #333;">${pincode}</td>
               </tr>
               ${message ? `
               <tr>
                 <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                 <td style="padding: 8px 0; color: #333; white-space: pre-wrap;">${message}</td>
               </tr>
               ` : ''}
             </table>
           </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This application was submitted through the Spicetale website distributor form.
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
              Submitted on: ${new Date().toLocaleDateString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
            </p>
          </div>
        </div>
      `
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Application submitted successfully!' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to submit application. Please try again.' },
            { status: 500 }
        )
    }
}
