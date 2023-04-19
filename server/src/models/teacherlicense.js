import mongoose from "mongoose";
import moment from "moment";

const teacherLicenseSchema = new mongoose.Schema({
  transaction_hash: { type: String, required: true },
  citizen_id_hash: { type: String, required: true }, //citizen id
  created_at: { type: Date, default: moment().format() },
  expire_at: { type: Date, default: moment().add(1, "year").format() },
});

const TeacherLicense = mongoose.model("teacherLicense", teacherLicenseSchema);

export default TeacherLicense;
