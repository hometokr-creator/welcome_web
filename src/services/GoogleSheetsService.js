export const submitToGoogleSheets = async (data) => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvGJg_MUaIriOzDxJyvs3l3NBRZe_c34PaT76c6_m3QDrf9IX-PP3hQp8lWXtXYj3aEQ/exec';
  const formData = new URLSearchParams();
  formData.append("role", data.role);
  formData.append("school", data.school || "");
  formData.append("phone", data.phone);

  await fetch(SCRIPT_URL, {
    method: "POST",
    body: formData, // 🔥 JSON 대신 form-urlencoded
  });

  return { status: "submitted" };
};