const pathname = window.location.pathname;
const page = pathname.substring(pathname.lastIndexOf("/") + 1);

if (page !== "index.html" && page !== "") {
    const btn = document.getElementById("backToIndex");
    btn.style.display = "inline-block";
    btn.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
}