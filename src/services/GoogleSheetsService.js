export const submitToGoogleSheets = async (data) => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbszh8-2du0WX1NJ1CTZjmQ1sx5zfso--FP70iz4Ol9j2UF-1IcPvaG_FhWYBw8gEZyQ/exec';
  const formData = new URLSearchParams();
  formData.append("role", data.role);
  formData.append("school", data.school || "");
  formData.append("name", data.name || "");
  formData.append("phone", data.phone);
  formData.append("modified", data.modified || "");

  await fetch(SCRIPT_URL, {
    method: "POST",
    body: formData, // 🔥 JSON 대신 form-urlencoded
  });

  return { status: "submitted" };
};