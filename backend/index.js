const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://course:12345678A@cluster0.yvvjuzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const { Schema } = mongoose;
const bodyParser = require("body-parser");
const cors = require("cors");

const courseSchema = new Schema(
    {
      title: { type: String, require: true },
      price: { type: Number, require: true },
      imageUrl: { type: String, require: true },
      description: { type: String, require: true },
    }
|  { timestamps: true }
);
const courseModel = mongoose.model('course', courseSchema);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/api/course',async (req, res) => {
  try {
    const courses =  await courseModel.find({});

if (courses.length > 0 ) {
    res.status(200).send({message: "success", data: courses});
} else {
    res.status(204).send({
        message: "data is empty",
        data: null,
    })
}



  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get('/api/course/:id',async (req, res) => {
    const { id } = req.params;
try {
    const courses = await courseModel.findById(id);
if (courses) {
    res.status(200).send({
        message: "success",
        data: courses,
      });
} else {
    res.status(404).send({ message: "data not found" });
}

} catch (error) {
    res.status(500).send({ message: error.message });
}



});
app.delete('/api/course/:id',async (req, res) => {
    const {id}= req.params

    try {
        const deletedCourses = await courseModel.findByIdAndDelete(id);
    
        res.status(200).send({
          message: "deleted succesfully!",
          deletedcourses: deletedCourses,
        });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
});
app.post('/api/course',async (req, res) => {
    try {
        const newCourse = new courseModel({ ...req.body });
        await newCourse.save();
    
        res.status(201).send({ message: "created succesfully!", data: newWatch });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
});



mongoose.connect(DB_URL)
  .then(() => {console.log('Connected!')
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`)
  });
});
