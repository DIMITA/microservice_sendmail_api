import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(data: any) {
    const { user, token } = data;
    const url = `${token}`;

    return await this.mailerService.sendMail({
      to: user.email,
      subject: 'Bienvenue ! Confirmez votre Email',
      html: `
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0;">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <style>
          /* Reset styles */ 
          body {
            font-family: Arial, sans-serif;
            height: 100% !important;
            margin: 0; 
            min-width: 100%;
            padding: 0; 
            width: 100% !important; 
          }
          body, table, td, div, p, a {
            line-height: 100%;
            text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased; 
            -ms-text-size-adjust: 100%; 
            -webkit-text-size-adjust: 100%;
          }
          table, td {
            border-collapse: collapse !important; 
            border-spacing: 0;
            mso-table-lspace: 0pt; 
            mso-table-rspace: 0pt; 
          }
          p {
              margin-block-start: .5em;
              margin-block-end: .5em;
          }
          img {
            border: 0; 
            line-height: 100%; 
            outline: none; 
            text-decoration: none; 
            -ms-interpolation-mode: bicubic;
          }
          .action-item {
            border: 1px solid #005f7f;
            color: #005f7f;
            padding: 8px 20px;
          }
          .action-item:hover {
            background-color: #2a923d;
            border: 1px solid #2a923d;
            color: #fff;
          }
          #outlook a {padding: 0;}
          .ReadMsgBody {width: 100%;}
          .ExternalClass {width: 100%;}
          .ExternalClass, 
          .ExternalClass p, 
          .ExternalClass span, 
          .ExternalClass font, 
          .ExternalClass td, 
          .ExternalClass div {line-height: 100%;}

          /* Rounded corners for advanced mail clients only */ 
          @media all and (min-width: 560px) {
            .container {
              border-radius: 8px; 
              -webkit-border-radius: 8px; 
              -moz-border-radius: 8px; 
              -khtml-border-radius: 8px;
            }
          }
          /* Set color for auto links (addresses, dates, etc.) */ 
          a, a:hover {color: #005f7f;}
          .footer a, 
          .footer a:hover {
            color: #999999;
          }
        </style>
        <!-- MESSAGE SUBJECT -->
        <title>Souscription | Validation </title>
      </head>
      <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; background-color: #ececec; color: #333333;" bgcolor="#ececec" text="#333333">
      <!-- WRAPPER TABLE -->
      <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;">
        <tr>
          <br>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#ececec">
            <!-- WRAPPER -->
            <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 560px; margin: 30px 0 0 0;">
              <!-- PRIMARY IMAGE -->
              
              <!-- CONTENT -->
              <tr>
                <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;">
                  <h3 style="color: #005f7f; font-family: 'Roboto', Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 140%; margin: 20px 0 -5px 0; padding: 0;">Salut ${user.firstname} ${user.lastname},</h3>
                  <p style="color: #333333; font-size: 15px; font-weight: 400; font-family: Arial, sans-serif; line-height: 160%;">Veuillez cliquer ci-dessous pour vérifier votre adresse mail</p>
                  <a href="${token}" target="_blank" style="font-size: 17px; font-weight: 400; font-family: Arial, sans-serif; line-height: 100%; margin: 0; padding: 0;">Vérifier</a>
                <p style="color: #333333; font-size: 15px; font-weight: 400; font-family: Arial, sans-serif; line-height: 160%;">
                    L'équipe vous remercie pour votre inscription. 
                  </p>
                  <hr color="#e0e0e0" align="center" width="100%" size="1" noshade style="margin: 30px 0; padding: 0;" />
                  <p style="color: #333333; font-size: 15px; font-weight: 400; font-family: Arial, sans-serif; line-height: 160%; color: rgb(233, 84, 116) !important;">Si vous n'avez pas commencé cette démarche, vous pouvez ignorer ce mail.</p>
                  
                  <hr color="#e0e0e0" align="center" width="100%" size="1" noshade style="margin: 30px 0; padding: 0;" />
                  <h3 style="color: #005f7f; font-family: 'Roboto', Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 100%; margin: 20px 0 10px 0; padding: 0;">Contacts :</h3>
                  
                  <p style="font-size: 10px; font-weight: 400; line-height: 100%; color: #333333; font-family: Arial, sans-serif;">&nbsp;</p>
                </td>
              </tr>
            </table>
            <!-- FOOTER -->
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 560px;" class="wrapper">
              <tr>
                <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; font-size: 12px; font-weight: 400; line-height: 150%; padding-top: 20px; padding-bottom: 20px; color: #999999; font-family: Arial, sans-serif;" class="footer">
                    Copyright © 2023 Wilfried. All Rights Reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      </body>
      </html>

      `,
      context: {
        user,
        token: url,
      },
    });
  }
}
