import express from 'express';

const userSchema =  new mongoose.Schema(
  {
    _id: {
      type : String , required : true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseLMS'
      }
    ]
  },{timestamps : true}
)

const User = mongoose.model('UserLMS', userSchema);

export default User;
