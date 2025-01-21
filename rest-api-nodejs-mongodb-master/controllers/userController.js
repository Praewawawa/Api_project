const User = require("../models/User");
const bcrypt = require("bcrypt"); // สำหรับการแฮชรหัสผ่าน
const jwt = require("jsonwebtoken"); // สำหรับการสร้าง token

// ฟังก์ชันสำหรับการลงทะเบียนผู้ใช้
async function registerUser(req, res) {
  const { fullname, email, password, gender, phone } = req.body;

  // ตรวจสอบข้อมูล (เพิ่มเติม)

  // แฮชรหัสผ่าน
  const hashedPassword = await bcrypt.hash(password, 10);

  // สร้างผู้ใช้ใหม่และบันทึก
  const newUser = new User({
    fullname,
    email,
    password: hashedPassword,
    gender,
    phone,
  });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
}

// ฟังก์ชันสำหรับการเข้าสู่ระบบผู้ใช้
async function loginUser(req, res) {
  const { email, password } = req.body;

  // ค้นหาผู้ใช้
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  // เปรียบเทียบรหัสผ่าน
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  // สร้าง token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
}

// ฟังก์ชันสำหรับการอัปเดตข้อมูลผู้ใช้
async function updateUser(req, res) {
  const { id } = req.params;
  const { fullname, email, password, gender, phone } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.fullname = fullname || user.fullname;
    user.email = email || user.email; // อัปเดตอีเมลด้วยความระมัดระวัง
    user.gender = gender || user.gender;
    user.phone = phone || user.phone;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { registerUser, loginUser, updateUser };