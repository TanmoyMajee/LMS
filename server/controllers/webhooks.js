import { Webhook } from 'svix';
import User from '../model/user_LMS.js'

// Api Controller Func to manage Clerk User with dataBase

 export const clerkWebhook = async (req, res) => {
  try {
    const Whook = new Webhook(process.env.SVIX_SECRET);
    await Whook.verify(JSON.stringify(req.body), {
      'svix-signature': req.headers['svix-signature'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-id': req.headers['svix-id'],
    });
    const {data,type} = req.body;

    // jsut to see the data format
    console.log(data,type);

    switch(type){
      case 'user.created':{
        const userdata = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + ' ' + data.last_name,
          imageUrl: data.image_Url,
        }
        await User.create(userdata);
        res.status(200).json({ message: 'User Created' });
        break;
      }
      case 'user.updated':{
         const userdata = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: data.name,
          imageUrl: data.image_Url,
        }
        await User.findByIdAndUpdate(data.id,userdata);
        res.status(200).json({ message: 'User Updated' });
        break;
      }
      case 'user.deleted':{
        await User.findByIdAndDelete(data.id);
        res.status(200).json({ message: 'User Deleted' });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Webhook Error' ,error });
  }
};

// module.exports = clerkWebhook ;