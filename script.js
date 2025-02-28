document.addEventListener("DOMContentLoaded", function() {
  // יצירת כפתור והגדרת תכונותיו
  const backToTopButton = document.createElement("button");
  backToTopButton.id = "backToTop";
  backToTopButton.innerText = "חזרה לתחילת הדף";

  // עיצוב הכפתור (ניתן לשנות לפי הצורך או להעביר ל-CSS)
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "30px";
  backToTopButton.style.right = "30px";
  backToTopButton.style.padding = "10px 15px";
  backToTopButton.style.backgroundColor = "#007BFF";
  backToTopButton.style.color = "#fff";
  backToTopButton.style.border = "none";
  backToTopButton.style.borderRadius = "5px";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.display = "none"; // מוסתר כברירת מחדל

  // הוספת הכפתור לגוף הדף
  document.body.appendChild(backToTopButton);

  // הפונקציה בודקת את מיקום הגלילה ומציגה/מסתירה את הכפתור
  window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // בעת לחיצה, מתבצעת גלילה חלקה לתחילת הדף
  backToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
