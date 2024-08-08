// Navbar scripts
document.getElementById("open-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").style.display = "block";
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").style.display = "none";
});

// search input
const tools = [
  "Blog Post Generator",
  "Article Rewriter",
  "SEO Content Creator",
  "Product Description Writer",
  "Social Media Post Maker",
  "Email Campaign Builder",
  // Add more tools as needed
];

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query) {
    const filteredTools = tools.filter((tool) =>
      tool.toLowerCase().includes(query)
    );
    filteredTools.forEach((tool) => {
      const li = document.createElement("li");
      li.textContent = tool;
      li.className = "px-4 py-2 cursor-pointer hover:bg-gray-100";
      searchResults.appendChild(li);
    });
    searchResults.classList.remove("hidden");
  } else {
    searchResults.classList.add("hidden");
  }
});

document.addEventListener("click", (event) => {
  if (!searchResults.contains(event.target) && event.target !== searchInput) {
    searchResults.classList.add("hidden");
  }
});

// sidebar
const data = [
  {
    id: 40,
    title: "All",
    slug: "all",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
  {
    id: 40,
    title: "Rewriting Tools",
    slug: "rewriting-tools",
    icon_type: "svg",
    icon_content:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_48)"> <path d="M3.54668 9.90668L2.27335 11.82L1.00002 9.90668V2.27335C0.999134 2.10589 1.03147 1.93991 1.09514 1.78502C1.15882 1.63014 1.25258 1.48941 1.371 1.371C1.48941 1.25258 1.63014 1.15882 1.78502 1.09514C1.93991 1.03147 2.10589 0.999134 2.27335 1.00002C2.61106 1.00002 2.93494 1.13417 3.17373 1.37297C3.41253 1.61176 3.54668 1.93564 3.54668 2.27335V9.90668Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M13.7264 14.9998H5.45302C5.11585 14.998 4.79299 14.8633 4.55457 14.6249C4.31616 14.3865 4.18144 14.0636 4.17969 13.7265V12.4531H12.453V13.7265C12.4548 14.0636 12.5895 14.3865 12.8279 14.6249C13.0663 14.8633 13.3892 14.998 13.7264 14.9998Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M14.9999 1V13.7267C14.9999 14.0644 14.8657 14.3883 14.6269 14.6271C14.3881 14.8658 14.0643 15 13.7266 15C13.3889 15 13.065 14.8658 12.8262 14.6271C12.5874 14.3883 12.4532 14.0644 12.4532 13.7267V12.4533H6.72656V1H14.9999Z" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 4.17969H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 6.72656H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> <path d="M8.63379 9.27344H13.0938" stroke="currentColor" stroke-width="1.4" stroke-miterlimit="10"/> </g> <defs> <clipPath id="clip0_294_48"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
    icon_color: "#460079",
    updated_at: "2024-04-29T11:45:08.000000Z",
  },
];

function setActive(element) {
  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.classList.remove(
      "text-palatinate-blue-600",
      "focus:text-palatinate-blue-600",
      "active:text-palatinate-blue-600"
    );
  });
  element.classList.add(
    "text-palatinate-blue-600",
    "focus:text-palatinate-blue-600",
    "active:text-palatinate-blue-600"
  );
}

const sidebarItemsContainer = document.getElementById("sidebar-items");

data.forEach((item) => {
  const link = document.createElement("a");
  link.href = `/${item.slug}`;
  link.classList.add(
    "sidebar-item",
    "!w-full",
    "flex",
    "items-center",
    "px-4",
    "py-2",
    "my-2",
    "text-gray-700",
    "rounded-lg",
    "group",
    "hover:bg-palatinate-blue-50",
    "hover:text-palatinate-blue-600",
    "active:text-palatinate-blue-600",
    "focus:text-palatinate-blue-600"
  );
  link.innerHTML = `<span class="group-active:text-palatinate-blue-600 flex-shrink-0">${item.icon_content}</span> <span class="ml-3 group-active:text-palatinate-blue-600 truncate font-medium">${item.title}</span>`;
  link.onclick = function () {
    setActive(this);
  };

  sidebarItemsContainer.appendChild(link);
});

// Dropdown

document.getElementById("dropdown").addEventListener("click", function (event) {
  var content = document.getElementById("dropdown-content");
  var arrowAnimation = document.getElementById("dropdown-arrow");

  if (
    event.target.id === "dropdown-button" ||
    event.target.id === "dropdown-label" ||
    event.target.id === "dropdown-arrow"
  ) {
    content.classList.toggle("hidden");
    arrowAnimation.classList.toggle("rotate-180");
  } else if (event.target.tagName === "P") {
    document.getElementById("dropdown-label").textContent =
      event.target.textContent;
    content.classList.add("hidden");
    arrowAnimation.classList.remove("rotate-180");
  }
});

// prompt card

document.addEventListener("DOMContentLoaded", () => {
  const response = [
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: true,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: true,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 2307,
      title: "Book Cover Image Ideas",
      slug: "book-cover-image-ideas",
      description:
        "This tool generates unique and creative cover image ideas for non-fiction books, providing detailed prompts to help AI image generators create striking and relevant book covers.",
      icon_type: null,
      icon_content: null,
      category_id: 36,
      plan_id: "",
      usage: 0,
      favcount: 1,
      frontend_description: null,
      frontend_headline: null,
      created_at: "2024-07-29T08:50:06.000000Z",
      updated_at: "2024-08-02T06:14:40.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/tXIzHSfmmLpdkptkWEel2F9IuC4hbtyzlEvpibiB.svg",
      iconColor: "#AD183A",
    },
    {
      id: 1563,
      title: "Social Media Bio Generator",
      slug: "social-media-bio-generator",
      description:
        "A tool that helps you make the perfect bio for your social media accounts.",
      icon_type: "svg",
      icon_content:
        '<svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 76.609 76.609" xml:space="preserve">   <g>     <g>       <path d="M57.455,16.575c0,1.12,1.121,2.24,2.688,2.24c2.239,0,2.911-0.896,2.911-2.24c0-0.224,0-0.224,0-0.447c-0.223-0.672-0.896-1.12-1.566-1.568c-0.225,0-0.672-0.224-1.119-0.224C58.799,14.337,57.455,15.232,57.455,16.575z"/>       <path d="M62.16,9.183c-0.226-1.344-1.121-2.464-2.24-2.464c-1.121,0-1.793,1.12-1.567,2.464c0.226,1.344,1.119,2.464,2.239,2.464C61.488,11.647,62.383,10.527,62.16,9.183z"/>       <path d="M52.08,25.983l3.808-3.808c2.239,1.792,4.93,2.912,7.841,2.912c6.943,0,12.544-5.601,12.544-12.544C76.271,5.599,70.672,0,63.728,0c-6.942,0-12.544,5.6-12.544,12.544c0,3.136,1.119,5.823,2.912,7.84l-3.809,3.809C50.959,24.864,51.631,25.537,52.08,25.983z M65.744,8.511h2.463V6.048h0.896v2.464h2.465v0.896h-2.465v2.465h-0.896V9.407h-2.463V8.511L65.744,8.511z M60.144,12.767c0-0.224,0-0.448,0.226-0.672c-0.226,0-0.226,0-0.447,0c-1.793,0-3.137-1.344-3.137-2.912s1.791-2.912,3.584-2.912H64.4l-0.896,0.672H62.16c0.896,0.225,1.344,1.345,1.344,2.464c0,0.896-0.448,1.568-1.121,2.24c-0.672,0.448-0.896,0.672-0.896,1.12c0,0.448,0.673,1.12,1.12,1.344c1.119,0.672,1.344,1.568,1.344,2.688c0,1.567-1.344,2.912-4.031,2.912c-2.239,0-4.256-0.896-4.256-2.464s1.791-2.912,4.031-2.912c0.225,0,0.447,0,0.672,0C60.367,13.664,60.144,13.216,60.144,12.767z"/>       <path d="M63.728,51.52c-2.911,0-5.823,1.119-7.841,2.912l-3.807-3.809c-0.449,0.672-1.121,1.118-1.568,1.566l3.809,3.809c-1.792,2.238-2.912,4.929-2.912,7.841c0,6.943,5.602,12.544,12.545,12.544c6.942,0,12.545-5.601,12.545-12.544C76.271,56.895,70.672,51.52,63.728,51.52z M60.144,69.664H57.68v-7.841h2.464V69.664z M59.024,60.705L59.024,60.705c-0.896,0-1.567-0.673-1.567-1.346c0-0.672,0.672-1.344,1.567-1.344s1.567,0.672,1.567,1.344C60.367,60.256,59.92,60.705,59.024,60.705z M70.224,69.664h-2.912v-4.031c0-1.119-0.447-1.792-1.345-1.792c-0.672,0-1.119,0.448-1.344,0.896c0,0.227,0,0.449,0,0.673v4.257h-2.688c0,0,0-7.168,0-7.841h2.688v1.12c0.225-0.447,1.121-1.344,2.465-1.344c1.791,0,3.136,1.119,3.136,3.584V69.664L70.224,69.664z"/>       <path d="M24.304,50.625l-3.808,3.809c-2.24-1.793-4.928-2.912-7.84-2.912c-6.944,0-12.544,5.602-12.544,12.543c0,6.944,5.6,12.545,12.544,12.545c6.943,0,12.544-5.601,12.544-12.545c0-2.912-1.12-5.823-2.912-7.84l3.808-3.809C25.424,51.743,24.752,51.07,24.304,50.625z M18.033,62.048c0,3.808-2.912,8.063-8.064,8.063c-1.567,0-3.136-0.448-4.256-1.346c0.224,0,0.448,0,0.672,0c1.344,0,2.464-0.447,3.584-1.119c-1.12,0-2.24-0.896-2.688-2.017c0.224,0,0.447,0,0.447,0c0.225,0,0.448,0,0.673,0c-1.345-0.226-2.24-1.344-2.24-2.688l0,0c0.448,0.225,0.896,0.447,1.344,0.447c-0.672-0.447-1.344-1.344-1.344-2.24c0-0.446,0.224-0.896,0.448-1.344c1.344,1.793,3.359,2.912,5.823,2.912c0-0.226,0-0.447,0-0.672c0-1.568,1.345-2.912,2.912-2.912c0.896,0,1.568,0.447,2.017,0.896c0.672-0.225,1.344-0.448,1.792-0.672c-0.225,0.672-0.673,1.119-1.345,1.566c0.672,0,1.12-0.225,1.568-0.447c-0.448,0.672-0.896,1.119-1.344,1.344C18.033,61.823,18.033,61.823,18.033,62.048z"/>       <path d="M12.656,25.088c2.912,0,5.823-1.12,7.84-2.912l3.808,3.808c0.448-0.672,1.12-1.119,1.568-1.567l-3.809-3.808c1.792-2.24,2.912-4.928,2.912-7.84c0-6.944-5.6-12.544-12.544-12.544c-6.943,0-12.319,5.6-12.319,12.544C0.112,19.487,5.712,25.088,12.656,25.088z M9.744,10.527h1.344V9.183c0-1.792,0.672-2.912,2.912-2.912h1.792v2.24h-1.12c-0.896,0-0.896,0.224-0.896,0.896v1.12h2.016l-0.224,2.24H13.55v6.272h-2.688v-6.272H9.519v-2.24H9.744z"/>       <g>         <path d="M49.617,44.575c-0.226-0.446-0.673-0.673-0.896-0.673c-2.016-0.672-3.807-1.118-5.823-1.791c-0.224,0-0.672-0.447-0.672-1.344c0-0.449,0-0.673-0.447-0.673c-0.226,0,0,0-0.226-0.224c-0.223-0.896-0.223-1.345-0.223-1.568c0-0.223,0.223-0.225,0.223-0.448c0.673-0.896,0.896-2.239,0.896-2.688c0,0,0.225,0,0.225-0.225c0.224-0.448,0.224-0.448,0.224-1.121c0.226-0.446,0.226-1.118-0.224-1.118c-0.225,0.224-0.225,0-0.225-0.448v-2.688c0-0.896-0.673-1.567-1.119-1.791c-0.674-0.449-0.896-0.673-1.121-0.673c-0.225-0.224-0.225-0.448,0-0.672c0.224-0.223,0.447-0.223,0.447-0.448c0,0,0,0-0.225,0s-1.567,0.226-2.239,0.448c-1.12,0.224-2.24,0.672-3.137,1.345c-0.672,0.447-1.12,1.119-1.12,2.017c0,0.446,0,1.791,0,2.688c0,0.226,0,0.448-0.224,0.226c-0.672,0-0.224,0.896-0.224,1.118c0,0.448,0.224,0.673,0.447,1.121c0,0.225,0.225,0.225,0.225,0.225c0.224,0.672,0.448,2.016,0.896,2.688c0,0,0.225,0.225,0.225,0.448c0,0.448,0,1.12-0.225,1.568c0,0,0,0.225-0.224,0.225c-0.448,0-0.448,0.224-0.448,0.672c0,0.672-0.448,1.345-0.672,1.345c-1.12,0.446-4.479,1.567-5.6,1.791c-0.672,0.226-0.896,0.448-1.12,0.672l-1.12,2.688c4.479,0,6.72,2.688,11.424,3.584h2.24c4.704-0.672,8.063-3.584,11.2-3.584L49.617,44.575z"/>       </g>     </g>   </g> </svg>',
      category_id: 37,
      plan_id: "",
      usage: 1326,
      favcount: 12,
      frontend_description:
        "## **Introduction**\r\n\r\nThe 'Social Media Bio Generator' is a powerful tool designed to help you create the perfect bio for your social media accounts. With this template, you can easily showcase your personality, interests, and hobbies in a concise and engaging manner.\r\n\r\n## **How To Use The Tool**\r\n\r\nStart by selecting the social media platform for which you want to create a bio.List some of your hobbies and interests to personalize your bio.Enter the character limit specified for the bio.Press \"Create Content\" to generate your customized social media bio.\r\n\r\n## **Tips for Using the Tool**\r\n\r\nKeep your bio short and sweet to capture the attention of your audience.Use emojis or symbols to add a fun touch to your bio.Update your bio regularly to reflect any changes in your interests or activities.\r\n\r\n## **FAQ for Tools**\r\n\r\n1. **Q**: How do I use the Social Media Bio Generator?\r\n    \r\n    **A**: To use the Social Media Bio Generator, simply input the social media platform you're creating a bio for, list some hobbies and interests, and specify the character limit. Then, press \"Create Content\" to generate the perfect bio for your social media account.\r\n    \r\n2. **Q**: Can I use the Social Media Bio Generator for multiple social media platforms?\r\n    \r\n    **A**: Yes, you can use the Social Media Bio Generator for different social media platforms by specifying the platform in the input.\r\n    \r\n3. **Q**: What type of hobbies and interests should I list in the Social Media Bio Generator?\r\n    \r\n    **A**: You can list any hobbies and interests that best represent you on your social media account. This will help personalize your bio.\r\n    \r\n4. **Q**: What social media platforms are compatible with the Social Media Bio Generator?\r\n    \r\n    **A**: The Social Media Bio Generator is compatible with popular social media platforms like Facebook, Instagram, Twitter, LinkedIn, and more.\r\n    \r\n5. **Q**: Can I include emojis in the generated bio from the Social Media Bio Generator?\r\n    \r\n    **A**: Yes, you can include emojis in the generated bio to add a personal touch and make it more engaging.\r\n    \r\n6. **Q**: Can I use the Social Media Bio Generator for business profiles or personal accounts?\r\n    \r\n    **A**: The Social Media Bio Generator can be used for both business profiles and personal accounts, allowing you to create compelling bios for any purpose.\r\n    \r\n7. **Q**: Is the content generated by the Social Media Bio Generator unique?\r\n    \r\n    **A**: The content generated by the Social Media Bio Generator is based on the input provided by you, making it unique to your hobbies, interests, and character limit.\r\n    \r\n\r\n## **Feedback**\r\n\r\nWe value your feedback! Share your experience using the 'Social Media Bio Generator' and any suggestions for improvement by visiting this [link](https://websitelearners.typeform.com/gravityai#name=Social-Media-Bio-Generator).",
      frontend_headline:
        "Effortlessly enhance your online presence with tailored bios.",
      created_at: "2024-02-15T06:35:29.000000Z",
      updated_at: "2024-05-08T06:21:02.000000Z",
      is_multiprompt: false,
      bgImage:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/hnT284uMbppLY7eISXVZ5fMVchDG3SQOvB7MTSCK.svg",
      iconColor: "#21672B",
    },
  ];
  const cardContainer = document.getElementById("card-container");
  const patterns = [
    "https://res.cloudinary.com/duz0exkwv/image/upload/v1708423359/paper_star_dhmhll.svg",
    "https://res.cloudinary.com/duz0exkwv/image/upload/v1706854340/3_star_gos43i.svg",
    "https://res.cloudinary.com/duz0exkwv/image/upload/v1706854341/shadow_star_fjsscc.svg",
  ];

  // Function to shuffle the patterns array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle patterns
  const shuffledPatterns = shuffleArray([...patterns]);

  response.forEach((item, index) => {
    const pattern = shuffledPatterns[index % shuffledPatterns.length];
    const card = `
    <div 
        style="max-width: 273px; border-radius: 8px; overflow: hidden; transition: all 0.3s ease-in-out; transform: translateY(0); border:1px solid #DBE9FF; cursor:pointer"
        onmouseover="this.style.boxShadow='0 6px 20px rgba(46, 66, 255, 0.18)'; this.style.transform='translateY(-4px)';"
        onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)';"
>

      <div class="relative">
        <img
          class="w-full"
          src="${item.bgImage}"
          alt="Book Cover Image Ideas"
        />
        <img
          src="${pattern}"
          alt="pattern"
          class="absolute top-5 right-5 mix-blend-multiply opacity-60"
        />
        ${
          item.plan_id === "1" && !item.is_multiprompt
            ? `<span class="absolute top-5 right-5 text-xs font-semibold bg-[#FFCF00] py-1 px-2 rounded text-[#443F31]">
            Pro
          </span>`
            : item.plan_id !== "1" && item.is_newtool && !item.is_multiprompt
            ? `<span class="absolute top-5 right-5 text-xs font-semibold bg-[#FFCF00] py-1 px-2 rounded text-[#443F31]" style="background-color:#FFCF00;">
            New 
          </span>`
            : item.is_multiprompt
            ? `<span class="absolute group top-5 right-5 text-xs font-semibold py-1 px-2 rounded" style="background-color:#FFCF00;">
            Kit
         
          </span>`
            : ""
        }
        ${
          item.icon_type === "svg"
            ? `
          <span
            class="absolute flex items-center justify-center w-10 h-10 text-lg bg-white rounded-full top-5 left-5"
            style="color: ${item.iconColor || "black"}"
          >
            ${item.icon_content}
          </span>
        `
            : item.is_multiprompt
            ? `
          <div
            class="absolute flex items-center justify-center w-10 h-10 text-lg font-semibold bg-white rounded-full top-5 left-5"
            style="color: ${item.iconColor || "black"}"
          >
           <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="w-4 h-auto shrink-0"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_709_1225)">
        <path
          d="M6.66573 1.4443C6.69784 1.44412 6.72996 1.44394 6.76305 1.44375C6.86846 1.44326 6.97386 1.44329 7.07927 1.44337C7.15305 1.44323 7.22684 1.44308 7.30062 1.44291C7.455 1.44265 7.60938 1.44265 7.76376 1.44284C7.96091 1.44305 8.15805 1.44245 8.3552 1.44162C8.50751 1.44109 8.65982 1.44106 8.81214 1.44117C8.8848 1.44116 8.95745 1.44097 9.0301 1.44061C9.132 1.44017 9.23387 1.44041 9.33576 1.44082C9.36533 1.44055 9.3949 1.44028 9.42537 1.44C9.77193 1.44307 10.0937 1.5429 10.3555 1.77483C10.6065 2.06537 10.6878 2.32514 10.6829 2.70126C10.6827 2.74582 10.6827 2.74582 10.6826 2.79127C10.6822 2.88531 10.6813 2.97933 10.6804 3.07336C10.68 3.13747 10.6797 3.20157 10.6794 3.26568C10.6786 3.42208 10.6774 3.57848 10.6759 3.73488C10.7145 3.73473 10.7145 3.73473 10.7539 3.73458C11.3794 3.73222 12.005 3.73045 12.6306 3.72934C12.9331 3.72879 13.2356 3.72804 13.5381 3.72681C13.8018 3.72575 14.0655 3.72506 14.3292 3.72482C14.4688 3.72468 14.6084 3.72435 14.748 3.72357C14.8794 3.72285 15.0109 3.72262 15.1423 3.72279C15.2135 3.72274 15.2847 3.72217 15.3559 3.72158C15.4196 3.7218 15.4196 3.7218 15.4846 3.72202C15.5399 3.72187 15.5399 3.72187 15.5963 3.72172C15.7367 3.74013 15.8246 3.80687 15.9383 3.88619C16.0077 3.98666 15.9954 4.08 15.9959 4.20054C15.9963 4.23881 15.9963 4.23881 15.9966 4.27785C15.9973 4.36234 15.9972 4.4468 15.997 4.53129C15.9971 4.59021 15.9973 4.64912 15.9975 4.70804C15.9978 4.83174 15.9978 4.95543 15.9974 5.07913C15.997 5.23687 15.9977 5.39457 15.9987 5.5523C15.9994 5.67414 15.9994 5.79598 15.9992 5.91782C15.9992 5.97591 15.9994 6.034 15.9998 6.09209C16.0026 6.51087 15.9732 6.8763 15.6705 7.19448C15.4957 7.34285 15.2944 7.44477 15.0913 7.54807C15.0652 7.56157 15.039 7.57507 15.0121 7.58898C13.3568 8.43547 11.2331 9.06707 9.354 9.04706C9.31425 9.04674 9.2745 9.04642 9.23354 9.04608C9.20426 9.04567 9.17497 9.04526 9.1448 9.04483C9.14131 9.00482 9.13783 8.96481 9.13423 8.92358C9.09218 8.48495 9.02429 8.14036 8.6819 7.83316C8.39258 7.63605 8.13977 7.58924 7.7917 7.61934C7.48132 7.69322 7.25902 7.87163 7.06619 8.12049C6.95282 8.3256 6.92076 8.52585 6.89706 8.75528C6.89244 8.79718 6.89244 8.79718 6.88774 8.83992C6.88025 8.9082 6.87304 8.97651 6.8659 9.04483C6.52486 9.0533 6.19372 9.02948 5.85553 8.98692C5.83032 8.98381 5.80511 8.98069 5.77914 8.97749C4.07357 8.76475 2.39448 8.30858 0.861522 7.52134C0.831807 7.50625 0.802092 7.49117 0.771477 7.47563C0.40512 7.2813 0.167562 7.05736 0.0291881 6.65713C-0.0073522 6.45004 -0.000130494 6.23867 0.00206489 6.02917C0.00201127 5.96948 0.00188885 5.9098 0.0017014 5.85011C0.00154817 5.72589 0.0021395 5.60171 0.00329065 5.47749C0.00471484 5.3185 0.00437244 5.15958 0.00349603 5.00059C0.00299089 4.87771 0.00334981 4.75485 0.00397688 4.63197C0.00418461 4.57334 0.00414005 4.5147 0.00383398 4.45606C0.00354883 4.37426 0.00441337 4.29256 0.00558569 4.21077C0.00595926 4.14113 0.00595926 4.14113 0.00634038 4.07007C0.0349782 3.91794 0.087631 3.86564 0.207227 3.77052C0.32 3.73289 0.399073 3.73049 0.517503 3.73059C0.559895 3.73054 0.602286 3.73049 0.645963 3.73044C0.692526 3.73057 0.739089 3.7307 0.787064 3.73083C0.836544 3.73084 0.886024 3.73084 0.935504 3.73082C1.06991 3.73081 1.20431 3.73102 1.33871 3.73126C1.47914 3.73149 1.61957 3.73151 1.76 3.73155C2.02596 3.73166 2.29192 3.73195 2.55788 3.73231C2.86065 3.73271 3.16342 3.73291 3.46619 3.73308C4.08905 3.73346 4.71191 3.73408 5.33476 3.73488C5.33401 3.69572 5.33327 3.65656 5.3325 3.61622C5.3299 3.46944 5.32828 3.32267 5.32694 3.17587C5.32623 3.11262 5.32526 3.04937 5.32402 2.98613C5.31539 2.53516 5.33209 2.17069 5.62574 1.80406C5.91625 1.51456 6.27163 1.44313 6.66573 1.4443ZM6.22496 2.34502C6.03055 2.69432 6.03055 2.69432 6.11813 3.73488C7.3637 3.73488 8.60926 3.73488 9.89257 3.73488C9.98015 2.69432 9.98015 2.69432 9.78574 2.34502C9.60088 2.23637 9.44207 2.22261 9.23104 2.22428C9.18678 2.224 9.18678 2.224 9.14163 2.22371C9.04476 2.22324 8.94791 2.22355 8.85104 2.22391C8.78333 2.22384 8.71563 2.22374 8.64793 2.2236C8.50629 2.22345 8.36467 2.22367 8.22303 2.22417C8.04188 2.22478 7.86074 2.22443 7.67958 2.22379C7.53986 2.22341 7.40013 2.22353 7.26041 2.22381C7.19363 2.22388 7.12685 2.22379 7.06007 2.22354C6.96659 2.22327 6.87314 2.22369 6.77966 2.22428C6.75231 2.22406 6.72497 2.22385 6.69679 2.22362C6.51442 2.22576 6.38366 2.25174 6.22496 2.34502Z"
          fill="currentColor"
        ></path>
        <path
          d="M0.777095 8.26081C0.812233 8.2762 0.812233 8.2762 0.848081 8.29189C0.955386 8.33884 1.06273 8.38571 1.17007 8.43258C1.22534 8.45678 1.22534 8.45678 1.28173 8.48147C1.54685 8.59713 1.81251 8.70452 2.08568 8.79982C2.12701 8.81438 2.16834 8.82893 2.21092 8.84392C3.72553 9.37002 5.2736 9.64606 6.86604 9.79321C6.86953 9.83796 6.87302 9.8827 6.87661 9.9288C6.9299 10.5673 6.9299 10.5673 7.29334 11.0762C7.60773 11.2868 7.87814 11.3189 8.25475 11.29C8.52674 11.2257 8.74686 11.0879 8.91238 10.8623C9.11134 10.5382 9.12038 10.1639 9.14495 9.79321C9.19514 9.78798 9.19514 9.78798 9.24635 9.78263C11.293 9.56455 13.2558 9.1768 15.1258 8.29328C15.1983 8.26081 15.1983 8.26081 15.2339 8.26081C15.2372 8.93769 15.2397 9.61457 15.2413 10.2915C15.242 10.6058 15.243 10.9201 15.2446 11.2344C15.2461 11.5085 15.247 11.7825 15.2473 12.0566C15.2475 12.2016 15.2479 12.3466 15.249 12.4916C15.2499 12.6283 15.2502 12.7651 15.25 12.9018C15.25 12.9517 15.2503 13.0017 15.2509 13.0517C15.255 13.4454 15.1932 13.7636 14.9429 14.0761C14.6407 14.3773 14.2841 14.4338 13.8756 14.4358C13.8277 14.4356 13.7798 14.4355 13.7319 14.4354C13.6805 14.4355 13.6291 14.4356 13.5777 14.4358C13.4369 14.4361 13.2962 14.4361 13.1554 14.4359C13.0034 14.4358 12.8514 14.4361 12.6994 14.4364C12.4018 14.4369 12.1042 14.4369 11.8066 14.4368C11.5647 14.4368 11.3228 14.4368 11.0808 14.437C11.0464 14.437 11.0119 14.437 10.9764 14.437C10.9065 14.4371 10.8365 14.4371 10.7665 14.4372C10.1104 14.4376 9.45424 14.4375 8.79811 14.4373C8.19808 14.4371 7.59805 14.4375 6.99802 14.4382C6.38166 14.4389 5.76529 14.4392 5.14893 14.439C4.80299 14.4389 4.45705 14.439 4.11111 14.4395C3.81661 14.44 3.52211 14.44 3.22761 14.4396C3.07742 14.4394 2.92723 14.4393 2.77704 14.4398C2.63941 14.4402 2.50179 14.44 2.36415 14.4395C2.31451 14.4394 2.26486 14.4395 2.21521 14.4398C1.78804 14.4421 1.43114 14.388 1.09757 14.1053C0.782833 13.7793 0.761383 13.4178 0.764968 12.9822C0.764998 12.9305 0.764981 12.8789 0.764921 12.8272C0.76489 12.6878 0.765516 12.5485 0.766264 12.4091C0.766935 12.2632 0.766995 12.1172 0.767121 11.9712C0.767453 11.6952 0.768328 11.4192 0.769402 11.1432C0.770599 10.8288 0.771184 10.5144 0.77172 10.2C0.772834 9.55358 0.774712 8.9072 0.777095 8.26081Z"
          fill="currentColor"
        ></path>
        <path
          d="M8.11224 8.29645C8.24249 8.36915 8.31412 8.42133 8.3971 8.54591C8.40687 8.62633 8.40687 8.62633 8.40801 8.72149C8.40858 8.75718 8.40915 8.79287 8.40974 8.82964C8.41002 8.88744 8.41002 8.88744 8.41032 8.94641C8.4108 9.00594 8.4108 9.00594 8.41129 9.06666C8.41181 9.15069 8.41212 9.23472 8.41226 9.31875C8.41268 9.44711 8.41443 9.57542 8.41623 9.70377C8.41657 9.78542 8.41682 9.86706 8.41699 9.94871C8.41769 9.98703 8.41838 10.0253 8.4191 10.0648C8.41731 10.3626 8.41731 10.3626 8.31129 10.494C8.18514 10.6078 8.10933 10.6269 7.93796 10.6257C7.80545 10.603 7.74181 10.5295 7.64934 10.4347C7.6057 10.3473 7.60851 10.289 7.60743 10.1913C7.60697 10.1555 7.60651 10.1197 7.60604 10.0828C7.60578 10.044 7.60552 10.0051 7.60525 9.96514C7.60496 9.92532 7.60467 9.8855 7.60437 9.84448C7.60388 9.76008 7.6035 9.67569 7.60322 9.5913C7.60261 9.46224 7.60104 9.33321 7.59947 9.20415C7.59911 9.12223 7.59881 9.04031 7.59857 8.95838C7.59795 8.91977 7.59732 8.88116 7.59668 8.84138C7.59745 8.57271 7.59745 8.57271 7.68172 8.43396C7.82167 8.30943 7.92285 8.2737 8.11224 8.29645Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_709_1225">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
          </div>
        `
            : `
          <i
            class="absolute w-10 h-10 text-lg bg-white rounded-full top-5 left-5 fa ${
              item.icon_content || "fa-envelope"
            }"
            style="color: ${item.iconColor || "black"};
            display:grid;
            place-items:center"
          ></i>
        `
        }
        <div class="absolute bottom-5 left-5 font-bold text-2xl text-white" style="
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          ">
          ${item.title}
        </div>
      </div>
      <div class="pt-4 px-4 pb-0">
        <p
          class="text-sm font-medium md:text-lg"
          style="
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          "
        >
          ${item.description}
        </p>
      </div>
      <div class="p-4 pb-3">
        <span class="inline-flex items-center gap-2 py-1 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
          >
            <path
              d="M9.998 0C5.92 0 2.256 3.093 0.145 6.483C0.049 6.642 0 6.821 0 7C0 7.179 0.0480001 7.358 0.144 7.517C2.256 10.907 5.92 14 9.998 14C14.141 14 17.794 10.91 19.862 7.507C19.954 7.351 20 7.175 20 7C20 6.825 19.954 6.649 19.862 6.493C17.794 3.09 14.141 0 9.998 0ZM18.411 7C16.574 9.878 13.514 12.5 9.998 12.5C6.533 12.5 3.466 9.868 1.594 7C3.465 4.132 6.533 1.5 9.998 1.5C13.516 1.5 16.577 4.124 18.411 7ZM10 3C12.208 3 14 4.792 14 7C14 9.208 12.208 11 10 11C7.792 11 6 9.208 6 7C6 4.792 7.792 3 10 3ZM10 4.5C8.62 4.5 7.5 5.62 7.5 7C7.5 8.38 8.62 9.5 10 9.5C11.38 9.5 12.5 8.38 12.5 7C12.5 5.62 11.38 4.5 10 4.5Z"
              fill="#1E2022"
            />
          </svg>
          ${item.usage}
        </span>
        <span class="inline-flex items-center gap-2 pl-4 py-1 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M4.1872 0.00390625C2.0656 0.00390625 0 1.46711 0 4.14551C0 7.12551 3.476 10.3271 7.4424 14.1775C7.5976 14.3287 7.7992 14.4039 8 14.4039C8.2008 14.4039 8.4024 14.3287 8.5576 14.1775C12.5392 10.3127 16 7.12631 16 4.14551C16 1.46311 13.936 0.0111063 11.8168 0.0111063C10.348 0.0111063 8.9 0.703906 8 2.05431C7.096 0.697506 5.652 0.00390625 4.1872 0.00390625ZM4.1872 1.20391C5.7792 1.20471 6.7488 2.28631 7.5112 3.36391C7.6232 3.52231 7.8056 3.61671 8 3.61751C8.1944 3.61751 8.3768 3.52391 8.4896 3.36631C9.2536 2.29511 10.2416 1.21111 11.8168 1.21111C13.2536 1.21111 14.8 2.12951 14.8 4.14551C14.8 6.28231 12.4952 8.68391 8 13.0471C3.6368 8.81911 1.2 6.33591 1.2 4.14551C1.2 3.24551 1.5112 2.49031 2.0992 1.96391C2.6376 1.48071 3.3992 1.20391 4.1872 1.20391Z"
              fill="#1E2022"
            />
          </svg>
          ${item.favcount}
        </span>
      </div>
    </div>`;
    cardContainer.innerHTML += card;
  });
});
