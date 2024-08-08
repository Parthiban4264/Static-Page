// sample response
const response = {
  prompt: {
    id: 2300,
    title: "Kids Story Book (Long without image prompt)",
    meta_title: null,
    meta_description: null,
    slug: "kids-story-book-long-without-image-prompt",
    description:
      "Create fun and engaging stories for kids effortlessly! Perfect for sparking creativity and learning. Get started on amazing adventures today!",
    icon_type: "icon",
    icon_content: "fa-solid fa-book-open-cover",
    category_id: 12,
    language_hide: 0,
    tone_hide: 0,
    plan_id: "",
    frontend_headline: "Get Your Kids Smiling with New engaging Stories",
    frontend_input: "Enter story details",
    frontend_output: "Fun Story Ready",
    frontend_result:
      "**Story Title: Billy and the Birthday Wish**\r\n\r\n**Page 1** Today was Billy's birthday, and he was very excited. He hoped for a special birthday wish to come true.\r\n...",
    frontend_description:
      "## Introduction\r\n\r\nThe Kids Story Book Content Generator is an innovative tool designed to help you create exciting and engaging story content for kids. Whether you're a parent keen to spark your child's imagination, an educator looking to inspire young minds, or a writer to a young audience, this tool is perfect for you. With this template, you don't have to worry about the complexity of story creation anymore. Simply provide basic details and let the AI do the magic of creating the perfect story book!\r\n\r\n## Key Functionalities the tool\r\n\r\nWhile it's quite simple and straightforward to use, the Kids Story Book Content Generator comes with some incredible features, such as:\r\n\r\n1.  **Customizable Inputs**: You have the option to specify the number of characters you want to include in your story, their names, and even the type of story you prefer.\r\n    \r\n2.  **Target Age Group**: You can specify the age group for which the content is being created to ensure the complexity, language, and themes are age-appropriate.\r\n    \r\n3.  **Page Control**: You have control over the desired length of the story, with the option to specify up to a maximum of 10 pages.\r\n    \r\n\r\n## How To Use The Tool\r\n\r\nUsing the Kids Story Book Content Generator is a breeze. Follow these steps for a smooth experience:\r\n\r\n1.  Open the Kids Story Book Content Generator.\r\n    \r\n2.  Provide the title of your book in the input field.\r\n    \r\n3.  Choose the type of story you want to create.\r\n    \r\n4.  Provide the target age group for your content.\r\n    \r\n5.  Specify the number of characters for your story, or list their names.\r\n    \r\n6.  Enter the desired length of your story (maximum up to 10 pages).\r\n    \r\n7.  Click on \"Create Content.\"\r\n    \r\n\r\nThe AI will work its magic and generate your story based on your inputs!\r\n\r\n## Tips for using the tool\r\n\r\n1.  Don't rush: Take your time while providing your inputs to ensure you get a story output you're most satisfied with.\r\n    \r\n2.  Explore: Try different story types and play around with character names and numbers to get a range of outputs.\r\n    \r\n3.  Keep it Short: Since the maximum page limit is 10, try to ensure your story's plot can fit within this range without feeling rushed or incomplete.\r\n\r\n\r\n## FAQ's\r\n1. **Q**: What kind of titles can I use for my book?\r\n\r\n   **A**: Any title can be used. The title should be appropriate and cater to the theme of the book. It should intrigue and engage the child reader.\r\n\r\n2.  **Q**: What does 'Story Type' mean?\r\n    \r\n    **A**: Story type refers to the theme or genre of the story you want to create. Examples include adventure, mystery, fantasy, fairy tale, etc.\r\n    \r\n3.  **Q**: Why do I need to specify the age of the target reader?\r\n    \r\n    **A**: Specifying the age helps in generating content appropriate for that particular age group in terms of vocabulary and complexity.\r\n    \r\n4.  **Q**: How many characters can I include in my story?\r\n    \r\n    **A**: You can include as many characters as you wish. However, please note that a higher number of characters might complicate the story, which may not be suitable for very young readers.\r\n    \r\n5.  **Q**: What if I want to create a story longer than 10 pages?\r\n    \r\n    **A**: Currently, our template can generate content for up to 10 pages at a time for an optimal experience. If you need to create a longer story, you can do so in separate attempts or sections.\r\n    \r\n6.  **Q**: What happens if I don't specify the names of the characters?\r\n    \r\n    **A**: If you don't specify the names, our AI will generate suitable names for your characters based on the story type and the age group you've specified.\r\n    \r\n7.  **Q**: Can I specify the gender of the characters?\r\n    \r\n    **A**: Yes, specifying the gender of the characters is possible. However, this information should be included in the character name field - for example, \"Anna (female)\".\r\n    \r\n8.  **Q**: I don't see the 'Create Content' button, what do I do?\r\n    \r\n    **A**: Please ensure your browser is up-to-date and try refreshing the page. If you are still experiencing issues, please reach out to our support team.\r\n    \r\n9.  **Q**: The story generated does not exactly match the title I put in. Why is that?\r\n    \r\n    **A**: Our AI uses your title as a prompting suggestion and will create the most engaging and appropriate story possible based around it. However, the exact alignment between the title and story might slightly vary.\r\n    \r\n10.  **Q**: Does the AI also provide illustrations for the stories?\r\n    \r\n     **A**: Currently, our platform only provides text-based content generation. You'd need to work with an illustrator or use appropriate graphic software for the illustrations.\r\n    \r\n\r\n## Feedback\r\n\r\nWe're constantly striving to improve our tools, and your feedback is invaluable to us. Tell us about your experience using the Kids Story Book Content Generator, share your suggestions, or let us know if you encounter any issues\u2014we're here to help! Follow this [link](https://websitelearners.typeform.com/gravityai#name=Kids%20Story%20Book%20Content%20Generator) to provide your feedback.",
    ai_model: "chat_gpt",
    questions: [
      {
        id: 482,
        question: "🔍 Enter the story title or a one-line summary of the story",
        placeholders: "e.g., Harry potter",
        type: "single_line",
        options: "",
        short_code: "story_book_title",
        is_required: "optional",
        question_text: null,
        minimum_answer_length: 0,
        maximum_answer_length: null,
        single_prompt_question_text: "",
        is_autofill: 0,
        default_answer: "Billy and the Birthday Wish",
      },
      {
        id: 481,
        question: "🎭 Story Type",
        placeholders: "Select",
        type: "Dropdown",
        options:
          "Moral, Fiction, Non-Fiction, Mystery, Fantasy, Comic, Fairytale, Biography, Poetry, Science Fiction, Ghost Story, Horror",
        short_code: "story_type",
        is_required: "required",
        question_text: null,
        minimum_answer_length: 0,
        maximum_answer_length: null,
        single_prompt_question_text: "",
        is_autofill: 0,
        default_answer: "Non-Fiction",
      },
      {
        id: 474,
        question: "🎂 What age is the content for?",
        placeholders: "Select",
        type: "Dropdown",
        options:
          "Picture Books (0 to 5 Years), Early Readers (5 to 7 Years), Young readers (7 to 12 Years), Young Adult (13 Years and older)",
        short_code: "video_for",
        is_required: "required",
        question_text: null,
        minimum_answer_length: 0,
        maximum_answer_length: null,
        single_prompt_question_text: "",
        is_autofill: 0,
        default_answer: "Early Readers (5 to 7 Years)",
      },
      {
        id: 475,
        question: "🤺 How many characters, or specify their names?",
        placeholders: "Humpty Dumpty, Dora, Barbie",
        type: "single_line",
        options: "",
        short_code: "character_included",
        is_required: "optional",
        question_text: null,
        minimum_answer_length: 0,
        maximum_answer_length: null,
        single_prompt_question_text: "",
        is_autofill: 0,
        default_answer: "Three characters: Nicky, Molly, and Fred the Dog",
      },
      {
        id: 477,
        question: "🕒 What is the desired pages? (Max 50 pages)",
        placeholders: "e.g., 10 pages",
        type: "single_line",
        options: "",
        short_code: "desired_page",
        is_required: "required",
        question_text: null,
        minimum_answer_length: 0,
        maximum_answer_length: null,
        single_prompt_question_text:
          "🕒 What is the desired pages? (Max 50 pages)",
        is_autofill: 0,
        default_answer: "50 Pages",
      },
    ],
    category: {
      id: 12,
      emojis: "💻",
      title: "Writing Assistant",
      slug: "writing-assistant",
      popular: 0,
      txt_color: "#662549",
      bg_color: "#faecf4",
      icon_color: "#fd3552",
      bg_image:
        "https://gravitywrite.sgp1.digitaloceanspaces.com/gw/Vikgyf6gK9tQnF2tUtKfVdwZH7XtHnsOE57fhoJY.svg",
      icon_type: "svg",
      icon_content:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_294_25)"> <path d="M7.46615 15.1497C7.57483 15.1558 7.67708 15.2032 7.75189 15.2822C7.8267 15.3613 7.86839 15.466 7.86839 15.5749C7.86839 15.6837 7.8267 15.7884 7.75189 15.8675C7.67708 15.9466 7.57483 15.994 7.46615 16H0.989583C0.727235 15.9997 0.475731 15.8953 0.290223 15.7098C0.104715 15.5243 0.000344515 15.2728 0 15.0104L0 0.989591C0.000344515 0.727243 0.104715 0.475739 0.290223 0.29023C0.475731 0.104722 0.727235 0.000352219 0.989583 7.70361e-06H12.8073C12.9376 -0.00050625 13.0668 0.0247013 13.1874 0.0741864C13.308 0.123671 13.4176 0.196462 13.51 0.288387C13.6024 0.380312 13.6758 0.489567 13.7259 0.609891C13.776 0.730216 13.8019 0.859246 13.8021 0.989591V8.02084C13.8024 8.0831 13.7984 8.14531 13.7904 8.20704H13.7044H13.6497H13.638H13.6263H13.6159H13.6055H13.5938H13.5833H13.5716H13.5612H13.5508H13.5404H13.5286H13.5182H13.5078H13.4974H13.4857H13.4753H13.4648H13.4544H13.444H13.3997H13.3906H13.3802H13.3698H13.3594H12.9466V0.989591C12.9459 0.952849 12.9311 0.917799 12.9051 0.891814C12.8791 0.865829 12.844 0.850936 12.8073 0.850268H0.989583C0.952652 0.850585 0.917242 0.865028 0.890625 0.890633C0.865242 0.917394 0.850836 0.952712 0.85026 0.989591V15.0091C0.849956 15.0274 0.853509 15.0456 0.860688 15.0624C0.867867 15.0792 0.878511 15.0943 0.891927 15.1068C0.918414 15.1327 0.953801 15.1476 0.990885 15.1484L7.46615 15.1497ZM12.0299 15.1667L9.89583 15.8958L9.91276 13.5195L12.0339 15.1667H12.0299ZM10.5117 12.724L12.8138 9.59897C12.8409 9.56051 12.8803 9.53237 12.9254 9.51913C12.9706 9.50589 13.0189 9.50833 13.0625 9.52605L14.9479 10.9375C14.9681 10.9529 14.9848 10.9725 14.9969 10.9948C15.009 11.0172 15.0162 11.0419 15.018 11.0672C15.0199 11.0926 15.0163 11.118 15.0076 11.1419C14.9989 11.1658 14.9852 11.1875 14.9674 11.2057L12.6302 14.3724L10.5117 12.724ZM3.79297 8.1823C3.74609 8.04127 3.73711 7.89039 3.76693 7.7448C3.82682 7.28256 3.94661 7.19662 4.3737 7.07813C4.85286 6.94792 5.39453 6.93621 5.80599 6.65235C5.84265 6.59275 5.87486 6.53051 5.90234 6.46615C5.95052 6.35548 5.99479 6.23568 6.02214 6.15365C5.90688 6.01135 5.80159 5.86125 5.70703 5.70443L5.38802 5.19662C5.28733 5.06119 5.22523 4.90099 5.20833 4.73308C5.20616 4.67576 5.2173 4.61871 5.24089 4.56641C5.26406 4.51339 5.30204 4.46818 5.35026 4.43621C5.37343 4.41886 5.39942 4.40564 5.42708 4.39714C5.40488 4.09385 5.39967 3.78956 5.41146 3.48568C5.4188 3.41572 5.43186 3.34648 5.45052 3.27865C5.54069 2.9926 5.73244 2.74944 5.98958 2.59506C6.12957 2.50647 6.2818 2.43891 6.44141 2.39454C6.54297 2.36589 6.35417 2.04167 6.45964 2.03126C6.96615 1.97917 7.78516 2.44141 8.13932 2.82423C8.3314 3.04013 8.44154 3.31664 8.45052 3.60548L8.43099 4.4336C8.4715 4.44456 8.50816 4.46656 8.5369 4.49714C8.56564 4.52771 8.58532 4.56567 8.59375 4.60678C8.61198 4.75735 8.5814 4.90979 8.50651 5.04167V5.05339L8.14193 5.65105C8.01928 5.87341 7.86971 6.07982 7.69662 6.26563L7.74609 6.33595C7.8143 6.44408 7.89186 6.54603 7.97787 6.64063C7.98152 6.64318 7.98425 6.64683 7.98568 6.65105C8.29297 6.8672 8.92318 6.96355 9.39063 7.08595C9.78125 7.18881 9.92448 7.21615 10.0117 7.64324C10.056 7.85417 10.0573 8.08595 10 8.181L3.79297 8.1823ZM3.47266 12.7461C3.36262 12.74 3.25908 12.6921 3.18332 12.612C3.10756 12.532 3.06535 12.426 3.06535 12.3158C3.06535 12.2056 3.10756 12.0995 3.18332 12.0195C3.25908 11.9395 3.36262 11.8915 3.47266 11.8854H9.24479L9.23698 11.8971V11.9037V11.9102V12.1094V12.1263V12.1367V12.2396V12.2552H9.22787H9.22005H9.21224H9.20443H9.19662H9.1888H9.18099L9.17188 12.2617H9.16406H9.15625L9.14844 12.2695H9.14193H9.13412L9.1263 12.276H9.11849L9.11068 12.2839H9.10417L9.09635 12.2917L9.08854 12.2995L9.08073 12.3073V12.3151V12.3229V12.3294V12.3372L9.07292 12.3451V12.3529H9.06641V12.3607V12.3685L9.0599 12.3763V12.3841V12.3932V12.401V12.4102V12.418L9.05339 12.4258V12.4336V12.4427V12.4518V12.4609V12.4701V12.4792V12.4883L3.47266 12.7461ZM3.63802 10.3815C3.58021 10.3847 3.52236 10.3761 3.468 10.3562C3.41364 10.3363 3.36391 10.3055 3.32185 10.2657C3.2798 10.2259 3.2463 10.1779 3.2234 10.1248C3.20051 10.0716 3.1887 10.0143 3.1887 9.95639C3.1887 9.89849 3.20051 9.8412 3.2234 9.78802C3.2463 9.73485 3.2798 9.6869 3.32185 9.64711C3.36391 9.60732 3.41364 9.57652 3.468 9.5566C3.52236 9.53668 3.58021 9.52806 3.63802 9.53126H9.86719C9.925 9.52806 9.98285 9.53668 10.0372 9.5566C10.0916 9.57652 10.1413 9.60732 10.1834 9.64711C10.2254 9.6869 10.2589 9.73485 10.2818 9.78802C10.3047 9.8412 10.3165 9.89849 10.3165 9.95639C10.3165 10.0143 10.3047 10.0716 10.2818 10.1248C10.2589 10.1779 10.2254 10.2259 10.1834 10.2657C10.1413 10.3055 10.0916 10.3363 10.0372 10.3562C9.98285 10.3761 9.925 10.3847 9.86719 10.3815H3.63802Z" fill="currentColor" stroke="currentColor" stroke-width="0.3"/> </g> <defs> <clipPath id="clip0_294_25"> <rect width="15.0182" height="16" fill="white"/> </clipPath> </defs> </svg>',
      created_at: "2023-04-13T04:39:18.000000Z",
      updated_at: "2024-04-29T11:41:51.000000Z",
      deleted_at: null,
      position: 6,
    },
  },
  tone: [
    { id: 1, tone: "Friendly" },
    { id: 2, tone: "Luxury" },
    { id: 3, tone: "Relaxed" },
    { id: 4, tone: "Professional" },
    { id: 5, tone: "Bold" },
    { id: 6, tone: "Adventurous" },
    { id: 7, tone: "Witty" },
    { id: 8, tone: "Persuasive" },
    { id: 9, tone: "Empathetic" },
    { id: 10, tone: "Sarcastic" },
  ],
  language: [
    { id: 21, language: "English" },
    { id: 23, language: "Español" },
    { id: 24, language: "Français" },
    { id: 25, language: "Italiano" },
    { id: 26, language: "Português" },
    { id: 27, language: "Polski" },
    { id: 28, language: "Українська" },
    { id: 29, language: "---------------" },
    { id: 30, language: "Af Soomaali" },
    { id: 31, language: "Afrikaans" },
    { id: 32, language: "Azərbaycan dili" },
    { id: 33, language: "Bahasa Indonesia" },
    { id: 34, language: "Bahasa Malaysia" },
    { id: 35, language: "Bahasa Melayu" },
    { id: 36, language: "Basa Jawa" },
    { id: 37, language: "Basa Sunda" },
    { id: 38, language: "Bosanski jezik" },
    { id: 39, language: "Català" },
    { id: 40, language: "Čeština" },
    { id: 41, language: "Chichewa" },
    { id: 42, language: "Cymraeg" },
    { id: 43, language: "Dansk" },
    { id: 44, language: "Deutsch (German)" },
    { id: 45, language: "Eesti keel" },
    { id: 46, language: "English" },
    { id: 47, language: "British English (UK)" },
    { id: 48, language: "English (US)" },
    { id: 49, language: "Español" },
    { id: 50, language: "Esperanto" },
    { id: 51, language: "Euskara" },
    { id: 52, language: "Français" },
    { id: 53, language: "Gaeilge" },
    { id: 54, language: "Galego" },
    { id: 55, language: "Hrvatski jezik" },
    { id: 56, language: "isiXhosa" },
    { id: 57, language: "Íslenska" },
    { id: 58, language: "Italiano" },
    { id: 59, language: "Kiswahili" },
    { id: 60, language: "Kreyòl Ayisyen" },
    { id: 61, language: "Kurdî" },
    { id: 62, language: "Latīna" },
    { id: 63, language: "Latviešu valoda" },
    { id: 64, language: "Lëtzebuergesch" },
    { id: 65, language: "Lietuvių kalba" },
    { id: 66, language: "Magyar" },
    { id: 67, language: "Malagasy" },
    { id: 68, language: "Malti" },
    { id: 69, language: "Māori" },
    { id: 70, language: "Nederlands" },
    { id: 71, language: "Norsk" },
    { id: 72, language: "O'zbek tili" },
    { id: 73, language: "Polski" },
    { id: 74, language: "Português" },
    { id: 75, language: "Română" },
    { id: 76, language: "Sesotho" },
    { id: 77, language: "Shqip" },
    { id: 78, language: "Slovenčina" },
    { id: 79, language: "Slovenščina" },
    { id: 80, language: "Suomi" },
    { id: 81, language: "Svenska" },
    { id: 82, language: "Tagalog" },
    { id: 83, language: "Tatarça" },
    { id: 84, language: "Türkçe" },
    { id: 85, language: "Việt ngữ" },
    { id: 86, language: "Yorùbá" },
    { id: 87, language: "Беларуская мова" },
    { id: 88, language: "Български език" },
    { id: 89, language: "Кыр" },
    { id: 90, language: "Қазақ тілі" },
    { id: 91, language: "Македонски јазик" },
    { id: 92, language: "Монгол хэл" },
    { id: 93, language: "Русский" },
    { id: 94, language: "Српски језик" },
    { id: 95, language: "Тоҷикӣ" },
    { id: 96, language: "Українська" },
    { id: 97, language: "اردو" },
    { id: 98, language: "العربية" },
    { id: 99, language: "नेपाली" },
    { id: 100, language: "ಕನ್ನಡ" },
    { id: 101, language: "සිංහල" },
    { id: 102, language: "한국어" },
    { id: 103, language: "中文" },
    { id: 104, language: "日本語" },
    { id: 105, language: "Hindi" },
    { id: 109, language: "Greek" },
    { id: 110, language: "Bangla" },
    { id: 111, language: "Dutch" },
    { id: 112, language: "Persian (فارسی)" },
    { id: 113, language: "Malayalam (മലയാളം)" },
    { id: 114, language: "Thai (ไทย)" },
    { id: 115, language: "Russian" },
    { id: 116, language: "Tamil (தமிழ்)" },
    { id: 117, language: "Telugu (తెలుగు)" },
  ],
};

// Nav items (breadcrumbs)

document.addEventListener("DOMContentLoaded", function () {
  const category = "HR Tools"; // Replace with your actual category
  const title = "Interview Scheduling Email Generator";
  const description =
    "Organize your interviews smoothly with MeetEase. It's an AI tool that helps you draft professional interview scheduling emails in no time"; // Replace with your actual description

  const categoryLink = document.getElementById("category-link");
  const titleLink = document.getElementById("title-link");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");

  categoryLink.textContent = category;
  categoryLink.href = `/categories/${category
    .toLowerCase()
    .split(" ")
    .join("-")}`;

  titleLink.textContent = title;
  titleLink.href = "#";

  titleElement.textContent = title;
  descriptionElement.textContent = description;
});

// form script

// document.addEventListener("DOMContentLoaded", function () {
//   // Response data integration
//   const response = {
//     prompt: {
//       id: 2300,
//       title: "Kids Story Book (Long without image prompt)",
//       description:
//         "Create fun and engaging stories for kids effortlessly! Perfect for sparking creativity and learning. Get started on amazing adventures today!",
//       frontend_headline: "Get Your Kids Smiling with New engaging Stories",
//       frontend_input: "Enter story details",
//       frontend_output: "Fun Story Ready",
//       questions: [
//         {
//           id: 482,
//           question:
//             "🔍 Enter the story title or a one-line summary of the story",
//           placeholders: "e.g., Harry Potter",
//           type: "single_line",
//           options: "",
//           short_code: "story_book_title",
//           is_required: "optional",
//           default_answer: "",
//         },
//         {
//           id: 481,
//           question: "🎭 Story Type",
//           placeholders: "Select",
//           type: "Dropdown",
//           options:
//             "Moral, Fiction, Non-Fiction, Mystery, Fantasy, Comic, Fairytale, Biography, Poetry, Science Fiction, Ghost Story, Horror",
//           short_code: "story_type",
//           is_required: "required",
//           default_answer: "",
//         },
//         {
//           id: 474,
//           question: "🎂 What age is the content for?",
//           placeholders: "Select",
//           type: "Dropdown",
//           options:
//             "Picture Books (0 to 5 Years), Early Readers (5 to 7 Years), Young readers (7 to 12 Years), Young Adult (13 Years and older)",
//           short_code: "video_for",
//           is_required: "required",
//           default_answer: "",
//         },
//         {
//           id: 475,
//           question: "🤺 How many characters, or specify their names?",
//           placeholders: "Humpty Dumpty, Dora, Barbie",
//           type: "single_line",
//           options: "",
//           short_code: "character_included",
//           is_required: "optional",
//           default_answer: "",
//         },
//         {
//           id: 477,
//           question: "🕒 What is the desired pages? (Max 50 pages)",
//           placeholders: "e.g., 10 pages",
//           type: "single_line",
//           options: "",
//           short_code: "desired_page",
//           is_required: "required",
//           default_answer: "",
//         },
//       ],
//     },
//     tone: [
//       { id: 1, tone: "Friendly" },
//       { id: 2, tone: "Luxury" },
//       { id: 3, tone: "Relaxed" },
//       { id: 4, tone: "Professional" },
//       { id: 5, tone: "Bold" },
//       { id: 6, tone: "Adventurous" },
//       { id: 7, tone: "Witty" },
//       { id: 8, tone: "Persuasive" },
//       { id: 9, tone: "Empathetic" },
//       { id: 10, tone: "Sarcastic" },
//     ],
//     language: [
//       { id: 21, language: "English" },
//       { id: 23, language: "Español" },
//       { id: 24, language: "Français" },
//       { id: 25, language: "Italiano" },
//       { id: 26, language: "Português" },
//       { id: 27, language: "Polski" },
//       { id: 28, language: "Українська" },
//     ],
//   };

//   const formFields = response.prompt.questions.map((question) => ({
//     id: question.id,
//     type: question.type === "single_line" ? "TextInput" : question.type,
//     question: question.question,
//     answer: "",
//     is_required: question.is_required === "required" ? "required" : "optional",
//     placeholders: question.placeholders,
//     options: question.options,
//     error: question.is_required === "required",
//   }));

//   const tones = response.tone.map((tone) => tone.tone);
//   const languages = response.language.map((lang) => lang.language);

//   const formattedLanguageList = languages.map((lang) => lang);
//   const formattedToneList = tones.map((tone) => tone);

//   let hasSubmit = false;

//   function createTextInput(field) {
//     return `
//       <div class="flex flex-col gap-2">
//         <label for="${field.id}" class="text-gray-900 text-lg font-semibold">
//           ${field.question}
//           ${
//             field.is_required !== "required"
//               ? '<span class="ml-2 font-normal text-gray-600">(Optional)</span>'
//               : ""
//           }
//         </label>
//         <input
//           type="text"
//           id="${field.id}"
//           class="p-4 shadow-lg rounded-md border placeholder-gray-400 focus:border-blue-500 hover:border-blue-500 ${
//             field.error ? "border-red-500" : "border-gray-300"
//           }"
//           placeholder="${field.placeholders}"
//           value="${field.answer}"
//           data-id="${field.id}"
//         />
//         ${
//           field.error && hasSubmit
//             ? '<p class="text-red-500">Field should not be empty.</p>'
//             : ""
//         }
//       </div>
//     `;
//   }

//   function createDropdown(field) {
//     const options = field.options
//       .split(",")
//       .map(
//         (option) =>
//           `<div class="p-2 px-4 rounded-md focus:text-blue-600 active:text-blue-600 hover:bg-blue-50" data-id="${field.id}" data-value="${option}">${option}</div>`
//       )
//       .join("");
//     return `
//       <div class="flex flex-col gap-2 relative">
//         <label for="${field.id}" class="text-gray-900 text-lg font-semibold">
//           ${field.question}
//           ${
//             field.is_required !== "required"
//               ? '<span class="ml-2 font-normal text-gray-600">(Optional)</span>'
//               : ""
//           }
//         </label>
//         <div
//           class="relative bg-white shadow-lg rounded-md border duration-300 ${
//             field.error ? "border-red-500" : "border-gray-300"
//           } hover:border-blue-600"
//         >
//           <div class="flex items-center justify-between gap-4 p-4 cursor-pointer" onclick="toggleDropdown(${
//             field.id
//           })">
//             <div id="selected-${field.id}">${field.answer || "Select"}</div>
//             <div class="mr-1">
//               <i class="fas fa-chevron-down transition-all duration-300" id="icon-${
//                 field.id
//               }"></i>
//             </div>
//           </div>
//           <div
//             id="dropdown-${field.id}"
//             class="absolute flex flex-col ring-1 ring-blue-50 shadow-lg rounded-md w-full bg-white top-full left-0 cursor-pointer p-2 hidden"
//           >
//             ${options}
//           </div>
//         </div>
//         ${
//           field.error && hasSubmit
//             ? '<p class="text-red-500">Field should not be empty.</p>'
//             : ""
//         }
//       </div>
//     `;
//   }

//   function createAdvanceSettings() {
//     const toneOptions = formattedToneList
//       .map(
//         (option) =>
//           `<div class="p-2 px-4 rounded-md focus:text-blue-600 active:text-blue-600 hover:bg-blue-50" data-tone="${option}">${option}</div>`
//       )
//       .join("");
//     const languageOptions = formattedLanguageList
//       .map(
//         (option) =>
//           `<div class="p-2 px-4 rounded-md focus:text-blue-600 active:text-blue-600 hover:bg-blue-50" data-language="${option}">${option}</div>`
//       )
//       .join("");

//     return `
//       <div class="col-span-2 advanced-settings">
//         <div
//           class="flex items-center justify-between hover:bg-blue-50 p-2 rounded-lg select-none duration-300 cursor-pointer"
//           onclick="toggleAdvanceSettings()"
//         >
//           <div class="text-gray-900 text-lg font-semibold">
//             Advance Settings <span class="text-gray-400">(Optional)</span>
//           </div>
//           <div class="rounded-full grid place-items-center p-2 border-2 shadow-lg bg-white border-gray-300">
//             <i
//               class="fas fa-chevron-down transition-all duration-300"
//               id="advance-settings-icon"
//             ></i>
//           </div>
//         </div>
//         <div id="advance-settings-content" class="settings-list duration-300">
//           <div class="flex flex-col gap-6 bg-white mt-3 px-6 py-5 rounded-md shadow-lg border border-gray-200 md:flex-row">
//             <div class="flex flex-col gap-2 relative flex-1">
//               <label class="text-gray-900 text-lg font-semibold">Tone</label>
//               <div
//                 class="relative bg-white shadow-lg rounded-md border duration-300 hover:border-blue-600"
//                 onclick="toggleDropdown('tone')"
//               >
//                 <div class="flex items-center justify-between gap-4 px-4 py-2 cursor-pointer">
//                   <div id="selected-tone">Select</div>
//                   <div class="mr-1">
//                     <i
//                       class="fas fa-chevron-down transition-all duration-300"
//                       id="icon-tone"
//                     ></i>
//                   </div>
//                 </div>
//                 <div
//                   id="dropdown-tone"
//                   class="absolute hidden flex flex-col ring-1 ring-blue-50 shadow-lg rounded-md w-full bg-white top-full left-0 cursor-pointer p-2"
//                 >
//                   ${toneOptions}
//                 </div>
//               </div>
//             </div>
//             <div class="flex flex-col gap-2 relative flex-1">
//               <label class="text-gray-900 text-lg font-semibold">Language</label>
//               <div
//                 class="relative bg-white shadow-lg rounded-md border duration-300 hover:border-blue-600"
//                 onclick="toggleDropdown('language')"
//               >
//                 <div class="flex items-center justify-between gap-4 px-4 py-2 cursor-pointer">
//                   <div id="selected-language">Select</div>
//                   <div class="mr-1">
//                     <i
//                       class="fas fa-chevron-down transition-all duration-300"
//                       id="icon-language"
//                     ></i>
//                   </div>
//                 </div>
//                 <div
//                   id="dropdown-language"
//                   class="absolute hidden flex flex-col ring-1 ring-blue-50 shadow-lg rounded-md w-full bg-white top-full left-0 cursor-pointer p-2"
//                 >
//                   ${languageOptions}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//   }

//   // Definition of toggleAdvanceSettings function
//   function toggleAdvanceSettings() {
//     const content = document.getElementById("advance-settings-content");
//     const icon = document.getElementById("advance-settings-icon");
//     content.classList.toggle("hidden");
//     icon.classList.toggle("rotate-180");
//   }

//   function toggleDropdown(id) {
//     const dropdown = document.getElementById(`dropdown-${id}`);
//     const icon = document.getElementById(`icon-${id}`);
//     if (dropdown && icon) {
//       if (dropdown.classList.contains("hidden")) {
//         dropdown.classList.remove("hidden");
//         dropdown.classList.add("flex");
//         icon.classList.add("rotate-180");
//       } else {
//         dropdown.classList.add("hidden");
//         dropdown.classList.remove("flex");
//         icon.classList.remove("rotate-180");
//       }
//     }
//   }

//   window.changeHandler = function (id, value) {
//     const field = formFields.find((field) => field.id === id);
//     field.answer = value;
//     field.error = field.is_required === "required" && !value;

//     // Update the input directly without re-rendering the entire form
//     const inputElement = document.querySelector(`input[data-id="${id}"]`);
//     if (inputElement) {
//       inputElement.value = value;
//       const errorElement = inputElement.nextElementSibling;
//       if (errorElement && errorElement.classList.contains("text-red-500")) {
//         errorElement.textContent = field.error
//           ? "Field should not be empty."
//           : "";
//       }
//     }
//   };

//   window.setSelectedTone = function (tone) {
//     document.getElementById("selected-tone").textContent = tone;
//     toggleDropdown("tone");
//   };

//   window.setSelectedLanguage = function (language) {
//     document.getElementById("selected-language").textContent = language;
//     toggleDropdown("language");
//   };

//   function handleInputChange(event) {
//     const id = parseInt(event.target.getAttribute("data-id"));
//     changeHandler(id, event.target.value);
//   }

//   function renderForm() {
//     const form = document.getElementById("promptQuestionForm");
//     form.innerHTML = "";
//     formFields.forEach((field) => {
//       if (field.type === "Dropdown") {
//         form.innerHTML += createDropdown(field);
//       } else {
//         form.innerHTML += createTextInput(field);
//       }
//     });
//     form.innerHTML += createAdvanceSettings();
//     form.innerHTML += createSubmitButton();
//     attachEventListeners();
//   }

//   function createSubmitButton() {
//     return `
//       <div class="flex justify-center col-span-2">
//         <button
//           type="submit"
//           class="flex items-center gap-1.5 bg-palatinate-blue-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-palatinate-blue-700"
//           onclick="handleSubmit(event)"
//         >
//           Create Content <i class="fas fa-arrow-right ml-4 text-white"></i>
//         </button>
//       </div>
//     `;
//   }

//   window.handleSubmit = function (event) {
//     event.preventDefault();
//     hasSubmit = true;
//     const hasErrorField = formFields.find(
//       (field) => field.error && field.is_required === "required"
//     );
//     if (hasErrorField) {
//       renderForm();
//       return;
//     }

//     const answers = formFields.map((field) => ({
//       answer: field.answer,
//       shortCode: field.short_code,
//     }));

//     console.log(
//       "Form submitted",
//       answers,
//       document.getElementById("selected-language").textContent,
//       document.getElementById("selected-tone").textContent
//     );
//     hasSubmit = false;
//   };

//   function attachEventListeners() {
//     document.querySelectorAll("input[data-id]").forEach((input) => {
//       input.addEventListener("input", handleInputChange);
//     });

//     document
//       .querySelectorAll("[data-id][data-value]")
//       .forEach((dropdownItem) => {
//         dropdownItem.addEventListener("click", function (event) {
//           const id = parseInt(event.currentTarget.getAttribute("data-id"));
//           const value = event.currentTarget.getAttribute("data-value");
//           changeHandler(id, value);
//           // Update the dropdown display value
//           document.getElementById(`selected-${id}`).textContent = value;
//           // Close the dropdown
//           toggleDropdown(id);
//         });
//       });

//     document.querySelectorAll("[data-tone]").forEach((toneItem) => {
//       toneItem.addEventListener("click", function () {
//         const tone = toneItem.getAttribute("data-tone");
//         setSelectedTone(tone);
//       });
//     });

//     document.querySelectorAll("[data-language]").forEach((languageItem) => {
//       languageItem.addEventListener("click", function () {
//         const language = languageItem.getAttribute("data-language");
//         setSelectedLanguage(language);
//       });
//     });
//   }

//   // Close dropdowns when clicking outside
//   document.addEventListener("click", function (event) {
//     const dropdowns = document.querySelectorAll(
//       ".flex.flex-col.ring-1.ring-blue-50.shadow-lg.rounded-md.w-full.bg-white.top-full.left-0.cursor-pointer.p-2"
//     );
//     dropdowns.forEach((dropdown) => {
//       if (!dropdown.contains(event.target)) {
//         dropdown.classList.add("hidden");
//         dropdown.classList.remove("flex");
//         const icon = dropdown.previousElementSibling.querySelector(
//           ".fas.fa-chevron-down"
//         );
//         if (icon) {
//           icon.classList.remove("rotate-180");
//         }
//       }
//     });
//   });

//   renderForm();
// });

document.addEventListener("DOMContentLoaded", function () {
  const response = {
    prompt: {
      id: 2300,
      title: "Kids Story Book (Long without image prompt)",
      description:
        "Create fun and engaging stories for kids effortlessly! Perfect for sparking creativity and learning. Get started on amazing adventures today!",
      frontend_headline: "Get Your Kids Smiling with New engaging Stories",
      frontend_input: "Enter story details",
      frontend_output: "Fun Story Ready",
      questions: [
        {
          id: 482,
          question:
            "🔍 Enter the story title or a one-line summary of the story",
          placeholders: "e.g., Harry Potter",
          type: "single_line",
          options: "",
          short_code: "story_book_title",
          is_required: "optional",
          default_answer: "",
        },
        {
          id: 481,
          question: "🎭 Story Type",
          placeholders: "Select",
          type: "Dropdown",
          options:
            "Moral, Fiction, Non-Fiction, Mystery, Fantasy, Comic, Fairytale, Biography, Poetry, Science Fiction, Ghost Story, Horror",
          short_code: "story_type",
          is_required: "required",
          default_answer: "",
        },
        {
          id: 474,
          question: "🎂 What age is the content for?",
          placeholders: "Select",
          type: "Dropdown",
          options:
            "Picture Books (0 to 5 Years), Early Readers (5 to 7 Years), Young readers (7 to 12 Years), Young Adult (13 Years and older)",
          short_code: "video_for",
          is_required: "required",
          default_answer: "",
        },
        {
          id: 475,
          question: "🤺 How many characters, or specify their names?",
          placeholders: "Humpty Dumpty, Dora, Barbie",
          type: "single_line",
          options: "",
          short_code: "character_included",
          is_required: "optional",
          default_answer: "",
        },
        {
          id: 477,
          question: "🕒 What is the desired pages? (Max 50 pages)",
          placeholders: "e.g., 10 pages",
          type: "single_line",
          options: "",
          short_code: "desired_page",
          is_required: "required",
          default_answer: "",
        },
      ],
    },
    tone: [
      { id: 1, tone: "Friendly" },
      { id: 2, tone: "Luxury" },
      { id: 3, tone: "Relaxed" },
      { id: 4, tone: "Professional" },
      { id: 5, tone: "Bold" },
      { id: 6, tone: "Adventurous" },
      { id: 7, tone: "Witty" },
      { id: 8, tone: "Persuasive" },
      { id: 9, tone: "Empathetic" },
      { id: 10, tone: "Sarcastic" },
    ],
    language: [
      { id: 21, language: "English" },
      { id: 23, language: "Español" },
      { id: 24, language: "Français" },
      { id: 25, language: "Italiano" },
      { id: 26, language: "Português" },
      { id: 27, language: "Polski" },
      { id: 28, language: "Українська" },
    ],
  };

  const formFields = response.prompt.questions.map((question) => ({
    id: question.id,
    type: question.type === "single_line" ? "TextInput" : question.type,
    question: question.question,
    answer: "",
    is_required: question.is_required === "required" ? "required" : "optional",
    placeholders: question.placeholders,
    options: question.options,
    error: question.is_required === "required",
  }));

  const tones = response.tone.map((tone) => tone.tone);
  const languages = response.language.map((lang) => lang.language);

  const formattedLanguageList = languages.map((lang) => lang);
  const formattedToneList = tones.map((tone) => tone);

  let hasSubmit = false;

  function createTextInput(field) {
    return `
      <div class="flex flex-col gap-2">
        <label for="${field.id}" class="text-gray-900 text-lg font-semibold">
          ${field.question}
          ${
            field.is_required !== "required"
              ? '<span class="ml-2 font-normal text-gray-600">(Optional)</span>'
              : ""
          }
        </label>
        <input
          type="text"
          id="${field.id}"
          class="p-4 shadow-lg rounded-md border placeholder-gray-400 focus:border-blue-500 hover:border-blue-500 ${
            field.error ? "border-red-500" : "border-gray-300"
          }"
          placeholder="${field.placeholders}"
          value="${field.answer}"
          data-id="${field.id}"
        />
        ${
          field.error && hasSubmit
            ? '<p class="text-red-500">Field should not be empty.</p>'
            : ""
        }
      </div>
    `;
  }

  function createDropdown(field) {
    const options = field.options
      .split(",")
      .map(
        (option) =>
          `<div class="p-2 px-4 rounded-md focus:text-blue-600 active:text-blue-600 hover:bg-blue-50" data-id="${field.id}" data-value="${option}">${option}</div>`
      )
      .join("");
    return `
      <div class="flex flex-col gap-2 relative">
        <label for="${field.id}" class="text-gray-900 text-lg font-semibold">
          ${field.question}
          ${
            field.is_required !== "required"
              ? '<span class="ml-2 font-normal text-gray-600">(Optional)</span>'
              : ""
          }
        </label>
        <div
          class="relative bg-white shadow-lg rounded-md border duration-300 ${
            field.error ? "border-red-500" : "border-gray-300"
          } hover:border-blue-600"
        >
          <div class="flex items-center justify-between gap-4 p-4 cursor-pointer" onclick="toggleDropdown(${
            field.id
          })">
            <div id="selected-${field.id}">${field.answer || "Select"}</div>
            <div class="mr-1">
              <i class="fas fa-chevron-down transition-all duration-300" id="icon-${
                field.id
              }"></i>
            </div>
          </div>
          <div
            id="dropdown-${field.id}"
            class="absolute flex flex-col ring-1 ring-blue-50 shadow-lg rounded-md w-full bg-white top-full left-0 cursor-pointer p-2 hidden"
          >
            ${options}
          </div>
        </div>
        ${
          field.error && hasSubmit
            ? '<p class="text-red-500">Field should not be empty.</p>'
            : ""
        }
      </div>
    `;
  }

  function createAdvanceSettings() {
    const toneOptions = formattedToneList
      .map(
        (option) =>
          `<div class="p-2 px-4 rounded-md focus:text-blue-600 active:text-blue-600 hover:bg-blue-50" data-tone="${option}">${option}</div>`
      )
      .join("");
    const languageOptions = formattedLanguageList
      .map(
        (option) =>
          `<div class="p-2 px-4 rounded-md focus:text-blue-600 active:text-blue-600 hover:bg-blue-50" data-language="${option}">${option}</div>`
      )
      .join("");

    return `
      <div class="col-span-2 advanced-settings">
        <div
          class="flex items-center justify-between hover:bg-blue-50 p-2 rounded-lg select-none duration-300 cursor-pointer"
          onclick="toggleAdvanceSettings()"
        >
          <div class="text-gray-900 text-lg font-semibold">
            Advance Settings <span class="text-gray-400">(Optional)</span>
          </div>
          <div class="rounded-full grid place-items-center p-2 border-2 shadow-lg bg-white border-gray-300">
            <i
              class="fas fa-chevron-down transition-all duration-300"
              id="advance-settings-icon"
            ></i>
          </div>
        </div>
        <div id="advance-settings-content" class="settings-list duration-300 hidden">
          <div class="flex flex-col gap-6 bg-white mt-3 px-6 py-5 rounded-md shadow-lg border border-gray-200 md:flex-row">
            <div class="flex flex-col gap-2 relative flex-1">
              <label class="text-gray-900 text-lg font-semibold">Tone</label>
              <div
                class="relative bg-white shadow-lg rounded-md border duration-300 hover:border-blue-600"
                onclick="toggleDropdown('tone')"
              >
                <div class="flex items-center justify-between gap-4 px-4 py-2 cursor-pointer">
                  <div id="selected-tone">Select</div>
                  <div class="mr-1">
                    <i
                      class="fas fa-chevron-down transition-all duration-300"
                      id="icon-tone"
                    ></i>
                  </div>
                </div>
                <div
                  id="dropdown-tone"
                  class="absolute hidden flex flex-col ring-1 ring-blue-50 shadow-lg rounded-md w-full bg-white top-full left-0 cursor-pointer p-2"
                >
                  ${toneOptions}
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 relative flex-1">
              <label class="text-gray-900 text-lg font-semibold">Language</label>
              <div
                class="relative bg-white shadow-lg rounded-md border duration-300 hover:border-blue-600"
                onclick="toggleDropdown('language')"
              >
                <div class="flex items-center justify-between gap-4 px-4 py-2 cursor-pointer">
                  <div id="selected-language">Select</div>
                  <div class="mr-1">
                    <i
                      class="fas fa-chevron-down transition-all duration-300"
                      id="icon-language"
                    ></i>
                  </div>
                </div>
                <div
                  id="dropdown-language"
                  class="absolute hidden flex flex-col ring-1 ring-blue-50 shadow-lg rounded-md w-full bg-white top-full left-0 cursor-pointer p-2"
                >
                  ${languageOptions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function toggleAdvanceSettings() {
    const content = document.getElementById("advance-settings-content");
    const icon = document.getElementById("advance-settings-icon");
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  }

  function toggleDropdown(id) {
    const dropdown = document.getElementById(`dropdown-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    if (dropdown.classList.contains("hidden")) {
      closeAllDropdowns();
      dropdown.classList.remove("hidden");
      dropdown.classList.add("flex");
      icon.classList.add("rotate-180");
    } else {
      dropdown.classList.add("hidden");
      dropdown.classList.remove("flex");
      icon.classList.remove("rotate-180");
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll("[id^='dropdown-']").forEach((dropdown) => {
      dropdown.classList.add("hidden");
      dropdown.classList.remove("flex");
    });
    document.querySelectorAll("[id^='icon-']").forEach((icon) => {
      icon.classList.remove("rotate-180");
    });
  }

  window.changeHandler = function (id, value) {
    const field = formFields.find((field) => field.id === id);
    field.answer = value;
    field.error = field.is_required === "required" && !value;

    const inputElement = document.querySelector(`input[data-id="${id}"]`);
    if (inputElement) {
      inputElement.value = value;
      const errorElement = inputElement.nextElementSibling;
      if (errorElement && errorElement.classList.contains("text-red-500")) {
        errorElement.textContent = field.error
          ? "Field should not be empty."
          : "";
      }
    }
  };

  window.setSelectedTone = function (tone) {
    document.getElementById("selected-tone").textContent = tone;
    toggleDropdown("tone");
  };

  window.setSelectedLanguage = function (language) {
    document.getElementById("selected-language").textContent = language;
    toggleDropdown("language");
  };

  function handleInputChange(event) {
    const id = parseInt(event.target.getAttribute("data-id"));
    changeHandler(id, event.target.value);
  }

  function renderForm() {
    const form = document.getElementById("promptQuestionForm");
    form.innerHTML = "";
    formFields.forEach((field) => {
      if (field.type === "Dropdown") {
        form.innerHTML += createDropdown(field);
      } else {
        form.innerHTML += createTextInput(field);
      }
    });
    form.innerHTML += createAdvanceSettings();
    form.innerHTML += createSubmitButton();
    attachEventListeners();
  }

  function createSubmitButton() {
    return `
      <div class="flex justify-center col-span-2">
        <button
          type="submit"
          class="flex items-center gap-1.5 bg-palatinate-blue-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-palatinate-blue-700"
          onclick="handleSubmit(event)"
        >
          Create Content <i class="fas fa-arrow-right ml-4 text-white"></i>
        </button>
      </div>
    `;
  }

  window.handleSubmit = function (event) {
    event.preventDefault();
    hasSubmit = true;
    const hasErrorField = formFields.find(
      (field) => field.error && field.is_required === "required"
    );
    if (hasErrorField) {
      renderForm();
      return;
    }

    const answers = formFields.map((field) => ({
      answer: field.answer,
      shortCode: field.short_code,
    }));

    console.log(
      "Form submitted",
      answers,
      document.getElementById("selected-language").textContent,
      document.getElementById("selected-tone").textContent
    );
    hasSubmit = false;
  };

  function attachEventListeners() {
    document.querySelectorAll("input[data-id]").forEach((input) => {
      input.addEventListener("input", handleInputChange);
    });

    document
      .querySelectorAll("[data-id][data-value]")
      .forEach((dropdownItem) => {
        dropdownItem.addEventListener("click", function (event) {
          const id = parseInt(event.currentTarget.getAttribute("data-id"));
          const value = event.currentTarget.getAttribute("data-value");
          changeHandler(id, value);
          document.getElementById(`selected-${id}`).textContent = value;
          toggleDropdown(id);
        });
      });

    document.querySelectorAll("[data-tone]").forEach((toneItem) => {
      toneItem.addEventListener("click", function () {
        const tone = toneItem.getAttribute("data-tone");
        setSelectedTone(tone);
      });
    });

    document.querySelectorAll("[data-language]").forEach((languageItem) => {
      languageItem.addEventListener("click", function () {
        const language = languageItem.getAttribute("data-language");
        setSelectedLanguage(language);
      });
    });
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".relative")) {
      closeAllDropdowns();
    }
  });

  renderForm();
});

// toast UI editor
document.addEventListener("DOMContentLoaded", function () {
  const editor = new toastui.Editor({
    el: document.querySelector("#editor"),
    height: "500px",
    initialEditType: "wysiwyg",
    hideModeSwitch: true,
    previewStyle: "vertical",
    initialValue: "",
    editable: true,
  });

  // Optional: If using plugins
  editor.addPlugin(toastui.Editor.plugin.colorSyntax);
});

// tools details and related tools
document.addEventListener("DOMContentLoaded", () => {
  const description = response.prompt.frontend_description;
  const categoryId = response.prompt.category_id;
  const title = response.prompt.title;

  document.getElementById("header").innerText = `How to Use ${title}`;
  document.getElementById("use-button").innerText = `Use ${title}`;
  document.getElementById("view-all-link").href = `/categories/${categoryId}`;

  console.log("Description:", description);

  // Initialize the editor
  const editorContainer = document.getElementById("markdown-content");

  if (editorContainer) {
    const editorInstance = new toastui.Editor({
      el: editorContainer,
      height: "auto",
      initialEditType: "wysiwyg",
      hideModeSwitch: true,
      previewStyle: "vertical",
      initialValue: description, // Set the initial value to the description
      usageStatistics: false,
      autoFocus: false,
    });

    // Ensure all links open in a new tab
    document.querySelectorAll(".md-description a").forEach((link) => {
      link.target = "_blank";
    });

    console.log("Editor initialized and content set.");
  } else {
    console.error("Markdown content container not found.");
  }

  const relatedTools = [
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

  const relatedToolsContainer = document.getElementById("related-tools");
  relatedTools.forEach((item, index) => {
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
    relatedToolsContainer.innerHTML += card;
  });
});
