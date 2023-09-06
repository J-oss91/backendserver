import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questions */
export async function insertQuestions(req, res) {
    try {
      await Questions.insertMany({ questions, answers });
      res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
      res.json({ error });
    }
  }
  

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res) {
    try {
      const { username, result, attempts, points, achieved } = req.body;
  
      // Validate data
      if (!username || !result || !Array.isArray(result)) {
        res.status(400).json({ error: "Invalid Data Provided" });
        return;
      }
  
      // Create a new Result instance
      const newResult = new Results({
        username,
        result,
        attempts,
        points,
        achieved,
      });
  
      // Save the result to the database
      await newResult.save();
  
      res.status(201).json({ msg: "Result Saved Successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
/** delete all result */
export async function dropResult(req, res) {
    try {
      await Results.deleteMany();
      res.json({ msg: "Results Deleted Successfully...!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
