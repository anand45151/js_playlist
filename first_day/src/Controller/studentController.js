const Student = require("../models/studentModel");


// CREATE STUDENT
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      message: "Student created successfully",
      student: true,
      data: student
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      message: "Students retrieved successfully",
      students: true,
      data: students
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// GET STUDENT BY ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
        student: false
      });
    }

    res.status(200).json({
      message: "Student found successfully",
      student: true,
      data: student
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
        student: false
      });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student: true,
      data: student
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
        student: false
      });
    }

    res.status(200).json({
      message: "Student deleted successfully",
      student: true,
      data: student
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};