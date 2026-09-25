/* =========================================
   DIGITAL LIFE & CHARACTER ACADEMY
   Main Application
========================================= */


/* =========================================
   COURSE DATA
========================================= */

const categoryColors = {
    "Character & Mindset": { main: "#7c3aed", soft: "#f3e8ff" },
    "Mental Wellbeing": { main: "#0ea5e9", soft: "#e0f2fe" },
    "Digital Safety": { main: "#14b8a6", soft: "#ccfbf1" },
    "Digital Citizenship": { main: "#22c55e", soft: "#dcfce7" },
    "Office Skills": { main: "#f59e0b", soft: "#fef3c7" },
    "Content Creation": { main: "#ec4899", soft: "#fce7f3" },
    "Digital Literacy": { main: "#2563eb", soft: "#dbeafe" }
};

const categoryLessonBlueprints = {
    "Character & Mindset": [
        { id: "anger", icon: "😡", title: "Managing Anger", description: "Learn how to respond with calm instead of reaction.", intro: "Anger is a normal emotion, and the goal is not to suppress it but to respond wisely.", keyPoints: ["Notice your trigger", "Pause before reacting", "Breathe slowly", "Choose healthy words"], quiz: [
            { question: "What is the best first step when anger rises?", answers: ["Reply immediately", "Pause and breathe slowly", "Yell to release emotion", "Ignore the problem"], correct: 1, explanation: "Pausing helps your brain calm down before you speak." },
            { question: "Which response is healthier?", answers: ["Use insults", "Take a short break", "Throw objects", "Blame every person"], correct: 1, explanation: "A short break gives you space to think clearly." },
            { question: "Why is writing feelings helpful?", answers: ["It makes anger worse", "It helps you reflect", "It removes emotion", "It avoids all problems"], correct: 1, explanation: "Reflection slows you down and makes better choices easier." }
        ] },
        { id: "humility", icon: "🤝", title: "Humility", description: "Build confidence without looking down on others.", intro: "Humility means being confident in your strengths while respecting the worth of others.", keyPoints: ["Listen before speaking", "Accept correction", "Give credit to others", "Admit mistakes"], quiz: [
            { question: "Which action shows humility?", answers: ["Refusing correction", "Listening to others", "Looking down on people", "Demanding praise"], correct: 1, explanation: "Listening and learning from others shows humility." },
            { question: "Why is humility important?", answers: ["It builds respect", "It removes all disagreement", "It guarantees success", "It stops communication"], correct: 0, explanation: "Humility creates trust and better relationships." },
            { question: "What is a healthy practice?", answers: ["Take all the credit", "Give credit to others", "Never ask for help", "Ignore mistakes"], correct: 1, explanation: "Sharing credit shows maturity and respect." }
        ] },
        { id: "resilience", icon: "🪴", title: "Resilience", description: "Bounce back after setbacks with calm and direction.", intro: "Resilience helps you recover from disappointment and keep moving forward.", keyPoints: ["Notice the setback", "Stay hopeful", "Ask for support", "Try again"], quiz: [
            { question: "What does resilience help you do?", answers: ["Avoid all challenges", "Recover and keep going", "Hide from responsibility", "Stop learning"], correct: 1, explanation: "Resilience means recovering and continuing with purpose." },
            { question: "Why is asking for support helpful?", answers: ["It reduces pressure", "It proves you are weak", "It removes effort", "It ends all learning"], correct: 0, explanation: "Support helps you learn and grow through challenges." },
            { question: "What is a resilient mindset?", answers: ["Quit immediately", "Keep trying with hope", "Blame others", "Ignore progress"], correct: 1, explanation: "A resilient mindset focuses on growth and recovery." }
        ] },
        { id: "focus", icon: "🎯", title: "Focus & Discipline", description: "Train attention so your effort becomes progress.", intro: "Focus is the ability to direct attention toward the right tasks at the right time.", keyPoints: ["Set a clear goal", "Remove distractions", "Take small steps", "Review progress"], quiz: [
            { question: "Why is focus important?", answers: ["It removes all effort", "It helps you work on priorities", "It guarantees no mistakes", "It makes tasks longer"], correct: 1, explanation: "Focus helps you use attention well and complete meaningful work." },
            { question: "What helps concentration?", answers: ["Removing distractions", "Bouncing between tasks", "Ignoring goals", "Doing everything at once"], correct: 0, explanation: "A clear environment supports better attention." },
            { question: "What is a good habit?", answers: ["Never plan", "Break tasks into small steps", "Rush everything", "Skip review"], correct: 1, explanation: "Small steps make action realistic and easier to maintain." }
        ] },
        { id: "kindness", icon: "💛", title: "Kindness", description: "Use your words and actions to build trust and care.", intro: "Kindness is not weakness; it is strength that shows respect and compassion.", keyPoints: ["Speak gently", "Notice others", "Be patient", "Help without showing off"], quiz: [
            { question: "What does kindness look like?", answers: ["Ignoring others", "Being respectful and helpful", "Only helping for attention", "Acting selfishly"], correct: 1, explanation: "Kindness is respectful, helpful, and thoughtful." },
            { question: "Why is patience important?", answers: ["It helps avoid unnecessary conflict", "It always eliminates problems", "It removes feelings", "It makes every task easier"], correct: 0, explanation: "Patience reduces conflict and helps people respond better." },
            { question: "What is a good act of kindness?", answers: ["Mocking someone", "Helping without being asked", "Taking all credit", "Ignoring pain"], correct: 1, explanation: "Kind acts often make a situation better without expecting reward." }
        ] },
        { id: "responsibility", icon: "✅", title: "Responsibility", description: "Take ownership of choices, actions, and outcomes.", intro: "Responsibility means doing what is right even when no one is watching.", keyPoints: ["Own your choices", "Complete your duties", "Fix mistakes", "Learn from consequences"], quiz: [
            { question: "What does responsibility mean?", answers: ["Avoiding all work", "Taking ownership of choices", "Shifting blame", "Ignoring rules"], correct: 1, explanation: "Responsibility means you own your actions and their effects." },
            { question: "What should you do after a mistake?", answers: ["Hide it", "Fix it and learn", "Pretend it did not happen", "Blame someone else"], correct: 1, explanation: "Good responsibility includes correcting errors and learning." },
            { question: "Why is responsibility important?", answers: ["It builds trust", "It removes accountability", "It makes tasks pointless", "It prevents all mistakes"], correct: 0, explanation: "Responsible people are trusted to follow through and do the right thing." }
        ] }
    ],
    "Mental Wellbeing": [
        { id: "anxiety", icon: "🧠", title: "Managing Anxiety", description: "Learn tools that calm stress and restore balance.", intro: "Anxiety becomes easier to manage when we learn to notice it early and respond calmly.", keyPoints: ["Name the feeling", "Breathe slowly", "Use grounding tools", "Talk to someone trusted"], quiz: [
            { question: "Which habit helps anxious feelings?", answers: ["Slow breathing", "Yelling", "Avoiding all people", "Running away"], correct: 0, explanation: "Calm breathing helps the body settle." },
            { question: "What does grounding do?", answers: ["Makes worry worse", "Brings attention to the present", "Creates confusion", "Removes all tasks"], correct: 1, explanation: "Grounding resets attention away from panic." },
            { question: "Why is sleep helpful?", answers: ["It increases stress", "It supports mental wellbeing", "It removes all thoughts", "It replaces all planning"], correct: 1, explanation: "Rest helps the mind work better and feel calmer." }
        ] },
        { id: "stress", icon: "🌊", title: "Stress Management", description: "Use practical habits to reduce pressure and protect energy.", intro: "Stress is part of life, but healthy habits help manage its impact on your body and mind.", keyPoints: ["Recognise signs", "Break tasks down", "Take breaks", "Rest and reset"], quiz: [
            { question: "What is a helpful stress strategy?", answers: ["Avoid every challenge", "Break tasks into smaller parts", "Ignore all feelings", "Keep working nonstop"], correct: 1, explanation: "Smaller steps make pressure feel manageable." },
            { question: "Why do breaks help?", answers: ["They increase overload", "They restore energy", "They remove all deadlines", "They stop learning"], correct: 1, explanation: "Short breaks support focus and reduce mental fatigue." },
            { question: "What should you do when overwhelmed?", answers: ["Panic and react quickly", "Pause and reset", "Blame others", "Hide from the task"], correct: 1, explanation: "Pausing lower stress and improves decision-making." }
        ] },
        { id: "sleep", icon: "😴", title: "Healthy Sleep Habits", description: "Protect your mind and focus through better rest.", intro: "Good sleep restores energy, memory, and emotional balance.", keyPoints: ["Set a routine", "Reduce screen time", "Sleep at a regular time", "Rest enough"], quiz: [
            { question: "Why is sleep important?", answers: ["It makes all tasks easier without effort", "It restores focus and mood", "It removes all responsibilities", "It makes you less tired"], correct: 1, explanation: "Sleep supports concentration, mood, and physical health." },
            { question: "What helps sleep quality?", answers: ["More bright screens", "A regular bedtime", "Skipping rest", "Constant distractions"], correct: 1, explanation: "A regular schedule helps your mind settle and rest." },
            { question: "What is a healthy habit?", answers: ["Ignore restful routines", "Reduce screen time before bed", "Stay online until late", "Sleep unpredictably"], correct: 1, explanation: "Lower screen exposure supports better sleep." }
        ] },
        { id: "boundaries", icon: "🛡️", title: "Healthy Boundaries", description: "Protect your energy and respect your limits.", intro: "Boundaries help you stay well, respectful, and safe in relationships and work.", keyPoints: ["Know your limits", "Speak honestly", "Say no respectfully", "Protect your time"], quiz: [
            { question: "Why are boundaries helpful?", answers: ["They help protect wellbeing", "They remove all conflict", "They create fear", "They increase pressure"], correct: 0, explanation: "Boundaries protect your time and emotional energy." },
            { question: "What is a respectful boundary?", answers: ["Ignoring every request", "Saying no kindly"], correct: 1, explanation: "You can say no respectfully without being rude." },
            { question: "How do boundaries help?", answers: ["They reduce overwhelm", "They increase stress", "They remove all responsibilities", "They stop social contact"], correct: 0, explanation: "Healthy limits reduce overload and support better choices." }
        ] },
        { id: "selfcare", icon: "🌿", title: "Self-Care", description: "Build small daily habits that support a healthy mind.", intro: "Self-care is not selfish; it helps you stay strong and balanced.", keyPoints: ["Eat well", "Move your body", "Rest intentionally", "Keep routines"], quiz: [
            { question: "Why is self-care important?", answers: ["It helps the body and mind stay healthy", "It replaces all responsibilities", "It removes all stress", "It only matters when sick"], correct: 0, explanation: "Self-care supports ongoing wellbeing and resilience." },
            { question: "What is a good self-care habit?", answers: ["Skipping meals", "Regular movement and rest", "Working nonstop", "Always ignoring your needs"], correct: 1, explanation: "Healthy routines build strength and balance." },
            { question: "What does self-care protect?", answers: ["Only free time", "Your energy and wellbeing", "Only your phone", "Only your schedule"], correct: 1, explanation: "Self-care protects your mind, energy, and overall health." }
        ] },
        { id: "mindset", icon: "✨", title: "Growth Mindset", description: "Believe you can learn and improve with practice.", intro: "A growth mindset helps you see mistakes as lessons and effort as progress.", keyPoints: ["Learn from mistakes", "Stay curious", "Practice often", "Celebrate growth"], quiz: [
            { question: "What is a growth mindset?", answers: ["Believing you are fixed forever", "Believing effort can improve skills", "Avoiding challenge", "Only relying on talent"], correct: 1, explanation: "A growth mindset focuses on learning and improvement." },
            { question: "What should you do after a mistake?", answers: ["Blame others", "Learn from it", "Hide it", "Ignore it"], correct: 1, explanation: "Mistakes become useful if you reflect on them." },
            { question: "Why is practice important?", answers: ["It makes growth possible", "It prevents all effort", "It removes need to learn", "It is only for experts"], correct: 0, explanation: "Practice strengthens skills over time." }
        ] }
    ],
    "Digital Safety": [
        { id: "privacy", icon: "🔒", title: "Personal Privacy", description: "Keep private information safe and protected.", intro: "Privacy is the control you have over what you share online and with whom.", keyPoints: ["Limit personal details", "Secure accounts", "Check settings", "Think before posting"], quiz: [
            { question: "Why does privacy matter?", answers: ["It keeps personal information safer", "It guarantees internet success", "It makes every site secure", "It removes all risk"], correct: 0, explanation: "Privacy reduces exposure to harm and misuse." },
            { question: "What should you avoid sharing?", answers: ["Safe public facts", "Private details", "General opinions", "Helpful messages"], correct: 1, explanation: "Private details should be limited to trusted places." },
            { question: "What is a good habit?", answers: ["Share everything publicly", "Review privacy settings", "Post personal data in every app", "Accept every request"], correct: 1, explanation: "Checking settings helps protect personal information." }
        ] },
        { id: "passwords", icon: "🔑", title: "Strong Passwords", description: "Build better habits for account protection.", intro: "Strong passwords are one of the simplest ways to keep accounts secure.", keyPoints: ["Use unique passwords", "Longer is stronger", "Store securely", "Enable two-step protection"], quiz: [
            { question: "Why are strong passwords important?", answers: ["To protect accounts", "To make login easier", "To reduce all risk instantly", "To share with everyone"], correct: 0, explanation: "Strong passwords lower the chance of account hacking." },
            { question: "What is a better habit?", answers: ["Use the same password everywhere", "Use unique passwords", "Tell friends your password", "Write passwords on paper in public"], correct: 1, explanation: "Unique passwords reduce the risk of a single breach affecting many accounts." },
            { question: "What is useful protection?", answers: ["No password at all", "Two-step verification", "Short passwords", "Password sharing"], correct: 1, explanation: "Two-step verification adds an extra layer of protecting security." }
        ] },
        { id: "phishing", icon: "📨", title: "Phishing Awareness", description: "Notice fake messages and suspicious links.", intro: "Phishing tricks people into revealing personal details through fake messages.", keyPoints: ["Pause before clicking", "Verify the source", "Look for urgency", "Do not share passwords"], quiz: [
            { question: "What should you do with a suspicious link?", answers: ["Click it immediately", "Verify the sender first", "Share it with friends", "Reply with your password"], correct: 1, explanation: "Verifying the source protects you from scams." },
            { question: "Why are urgent requests risky?", answers: ["They are always safe", "They often trigger quick mistakes", "They help protect accounts", "They come from trusted websites"], correct: 1, explanation: "Scammers often rely on urgency to pressure people to act without thinking." },
            { question: "What is safest?", answers: ["Use the message link", "Go to the official site directly", "Send all details", "Forward the message"], correct: 1, explanation: "Official websites are safer than direct links in suspicious messages." }
        ] },
        { id: "scams", icon: "💸", title: "Scam Detection", description: "Know how to avoid online tricks and deception.", intro: "Scams often appear realistic, but they are designed to pressure people into quick decisions.", keyPoints: ["Check the sender", "Do not pay quickly", "Verify offers", "Ask an adult or trusted person"], quiz: [
            { question: "What is a red flag?", answers: ["A realistic message", "Urgent pressure to act quickly", "A useful website", "A clear refund policy"], correct: 1, explanation: "Urgency is a common sign of scams." },
            { question: "What helps you avoid fraud?", answers: ["Trust all messages", "Verify before acting", "Send money immediately", "Share your password"], correct: 1, explanation: "Verification helps prevent fraud." },
            { question: "Why ask for help?", answers: ["To test if an adult is online", "To check decisions before acting", "To share the message", "To confirm the scam is real"], correct: 1, explanation: "A second opinion can help you spot danger more clearly." }
        ] },
        { id: "device", icon: "📱", title: "Device Security", description: "Keep your phone, tablet, and computer protected.", intro: "Healthy device habits help reduce threats from malware, lost information, and poor settings.", keyPoints: ["Update software", "Lock screens", "Use security tools", "Back up data"], quiz: [
            { question: "Why should software be updated?", answers: ["To keep security strong", "To make it slower", "To make more ads", "To add confusion"], correct: 0, explanation: "Updates often fix security problems and improve safety." },
            { question: "What helps keep a device safe?", answers: ["Leaving it unlocked", "Using a screen lock", "Sharing it with strangers", "Ignoring backups"], correct: 1, explanation: "A screen lock helps prevent unauthorized access." },
            { question: "What is a smart habit?", answers: ["Skip backups", "Back up important files", "Never update software", "Accept every warning"], correct: 1, explanation: "Backups protect your data if something goes wrong." }
        ] },
        { id: "reporting", icon: "🚩", title: "Reporting Harm", description: "Know how to respond when something online feels unsafe.", intro: "If something is unsafe, upsetting, or harmful, reporting it early matters.", keyPoints: ["Take a screenshot", "Report content", "Tell a trusted adult", "Block or mute if needed"], quiz: [
            { question: "What should you do if content is harmful?", answers: ["Ignore it forever", "Report it and get help", "Share it wider", "Keep it private"], correct: 1, explanation: "Reporting harmful content supports safety." },
            { question: "Why is documentation useful?", answers: ["It helps provide evidence", "It makes it more public", "It guarantees no action", "It keeps it hidden"], correct: 0, explanation: "Screenshots and saved details help track a problem clearly." },
            { question: "Who can help?", answers: ["Only strangers", "A trusted adult or platform report tool", "No one", "Only your best friend"], correct: 1, explanation: "Trusted adults and official reporting tools are important support resources." }
        ] }
    ],
    "Digital Citizenship": [
        { id: "etiquette", icon: "🤝", title: "Online Etiquette", description: "Respectful communication makes online spaces safer and kinder.", intro: "Etiquette is the way we treat others online with respect, patience, and care.", keyPoints: ["Be respectful", "Think before commenting", "Use kind language", "Listen to others"], quiz: [
            { question: "Why is etiquette important online?", answers: ["It makes communication kinder", "It guarantees no arguments", "It removes all feelings", "It is only for adults"], correct: 0, explanation: "Respectful habits reduce conflict and build trust." },
            { question: "What should you avoid?", answers: ["Kind words", "Harsh insults", "Clear messages", "Helpful feedback"], correct: 1, explanation: "Insults often hurt people and make communities less healthy." },
            { question: "What is respectful?", answers: ["Posting hurtful comments", "Using calm and kind language", "Sharing private details", "Ignoring other people"], correct: 1, explanation: "Kind language helps everyone feel safe and heard." }
        ] },
        { id: "netiquette", icon: "📣", title: "Digital Netiquette", description: "Learn the basic manners that make online spaces healthier.", intro: "Netiquette means the rules of polite, respectful online behaviour.", keyPoints: ["Think before posting", "Do not shame people", "Give room for others", "Be clear and respectful"], quiz: [
            { question: "Why does respectful commenting matter?", answers: ["It builds trust", "It increases drama", "It makes everyone angry", "It spreads rumours"], correct: 0, explanation: "Respectful communication supports healthy discussion." },
            { question: "What is best practice?", answers: ["Use harsh words to be heard", "Share feedback kindly", "Post without thinking", "Mock people for laughs"], correct: 1, explanation: "Kind feedback is more helpful and safer." },
            { question: "What helps communities?", answers: ["Respectful behaviour", "Constant sarcasm", "Public embarrassment", "Cluttered posts"], correct: 0, explanation: "Respectful conduct makes online spaces safer and more constructive." }
        ] },
        { id: "factcheck", icon: "✅", title: "Fact Checking", description: "Check sources before believing or sharing online information.", intro: "Not everything online is true. Reliable digital citizenship means checking evidence.", keyPoints: ["Check the source", "Compare sources", "Look for evidence", "Verify dates"], quiz: [
            { question: "What should you do before sharing news?", answers: ["Trust the first post", "Check the source", "Repeat without verifying", "Share with your entire list"], correct: 1, explanation: "Checking the source reduces the spread of false information." },
            { question: "Why compare sources?", answers: ["It helps confirm information", "It increases confusion", "It avoids all facts", "It removes context"], correct: 0, explanation: "Consistency across sources helps identify reliable information." },
            { question: "What is a sign of a reliable source?", answers: ["A clear publisher and evidence", "A dramatic headline", "A friend with no proof", "A viral image"], correct: 0, explanation: "Reliable information usually comes from strong evidence and credible publishers." }
        ] },
        { id: "copyright", icon: "©️", title: "Copyright & Credit", description: "Respect other people's work and give proper acknowledgement.", intro: "Respecting someone's work means not taking it without permission and giving credit where required.", keyPoints: ["Ask before using work", "Cite sources", "Credit creators", "Do not copy falsely"], quiz: [
            { question: "Why give credit?", answers: ["It builds trust and respect", "It removes rights", "It makes work less original", "It is only required online"], correct: 0, explanation: "Credit respects ownership and protects honest use." },
            { question: "What is a good practice?", answers: ["Copy without permission", "Ask and credit properly", "Pretend it is yours", "Use everything freely"], correct: 1, explanation: "Permission and credit respect creators and their rights." },
            { question: "What does copyright protect?", answers: ["Only unpaid work", "Original creative work", "Every idea in the world", "Only websites"], correct: 1, explanation: "Copyright protects original creative work and encourages fairness." }
        ] },
        { id: "media", icon: "📰", title: "Media Literacy", description: "Understand how information is created and shared.", intro: "Media literacy means asking who made a message, why it was made, and whether it is trustworthy.", keyPoints: ["Study the source", "Notice bias", "Look for evidence", "Ask questions"], quiz: [
            { question: "What is media literacy?", answers: ["Ignoring media completely", "Thinking critically about media", "Believing every story", "Using only one platform"], correct: 1, explanation: "Media literacy means questioning and evaluating messages thoughtfully." },
            { question: "Why does bias matter?", answers: ["It affects the message and viewpoint", "It makes every story perfect", "It removes evidence", "It guarantees truth"], correct: 0, explanation: "Bias can influence how information is presented." },
            { question: "What is a good habit?", answers: ["Accept the headline only", "Ask where information came from", "Ignore the date", "Trust every image"], correct: 1, explanation: "Source awareness helps you judge quality and trust." }
        ] },
        { id: "community", icon: "🌐", title: "Online Community Care", description: "Support healthy, safe, respectful digital communities.", intro: "A strong digital community grows when members protect one another and use online spaces responsibly.", keyPoints: ["Report harmful behaviour", "Include others", "Be kind online", "Protect privacy"], quiz: [
            { question: "How can communities stay healthy?", answers: ["By ignoring harmful posts", "By respecting one another and reporting harm", "By avoiding all conversations", "By sharing everything publicly"], correct: 1, explanation: "Healthy communities grow through respect and active care." },
            { question: "Why include others?", answers: ["It makes communities feel safe", "It always ends conflict", "It prevents all disagreements", "It makes everyone famous"], correct: 0, explanation: "Inclusive behaviour helps people feel welcome and safe." },
            { question: "What is a positive action?", answers: ["Ignoring helpful members", "Reporting harmful posts", "Sharing private details", "Posting insulting comments"], correct: 1, explanation: "Reporting harmful content protects the whole community." }
        ] }
    ],
    "Office Skills": [
        { id: "word", icon: "📘", title: "Microsoft Word Basics", description: "Create clear and professional documents.", intro: "Word helps you organize information, format ideas, and create polished writing.", keyPoints: ["Use headings", "Format text clearly", "Add lists and tables", "Check spelling"], quiz: [
            { question: "Why are headings useful in Word?", answers: ["They make documents harder to read", "They organize ideas clearly", "They remove content", "They change the file type"], correct: 1, explanation: "Headings help readers move through information smoothly." },
            { question: "What should you do before submitting a document?", answers: ["Ignore grammar", "Check spelling and formatting", "Delete headings", "Skip proofreading"], correct: 1, explanation: "Reviewing presentation makes your work clearer and stronger." },
            { question: "When should you use bullet points?", answers: ["Only in random notes", "To list steps clearly", "Only in tables", "Never in documents"], correct: 1, explanation: "Bullets help communicate ideas clearly and cleanly." }
        ] },
        { id: "excel", icon: "📊", title: "Microsoft Excel Basics", description: "Organize data and calculate with confidence.", intro: "Excel helps organize information and reveal patterns through formulas and charts.", keyPoints: ["Use columns and rows", "Create formulas", "Format neatly", "Use charts"], quiz: [
            { question: "What is a spreadsheet cell?", answers: ["A single box", "A page margin", "A file type", "A chart"], correct: 0, explanation: "Each cell is a point in the data grid." },
            { question: "Why are formulas helpful?", answers: ["They calculate quickly and accurately", "They remove all data", "They create documents", "They change the file color"], correct: 0, explanation: "Formulas reduce manual mistakes and save time." },
            { question: "What does a chart help with?", answers: ["Visualizing trends", "Deleting rows", "Hiding information", "Turning text into audio"], correct: 0, explanation: "Charts make trends easier to understand." }
        ] },
        { id: "powerpoint", icon: "📽️", title: "PowerPoint Presentation Skills", description: "Present ideas clearly and confidently.", intro: "Presentation tools support clear communication when slides are simple and purposeful.", keyPoints: ["Keep slides focused", "Use visuals helpfully", "Structure the story", "Speak clearly"], quiz: [
            { question: "What is a good rule for slides?", answers: ["One idea per slide", "Everything on one slide", "No text", "Constant animation"], correct: 0, explanation: "Focused slides help people understand better." },
            { question: "Why use visuals?", answers: ["To support the message", "To hide the content", "To replace speaking", "To confuse the audience"], correct: 0, explanation: "Visuals should support understanding, not distract from it." },
            { question: "How do confident presenters prepare?", answers: ["They know key points and speak clearly", "They avoid all preparation", "They read without understanding", "They use too many effects"], correct: 0, explanation: "Preparation and clarity increase confidence." }
        ] },
        { id: "email", icon: "✉️", title: "Professional Email", description: "Write clear, respectful messages for school and work.", intro: "Good email skills help people communicate clearly and professionally.", keyPoints: ["Use a clear subject", "Be polite", "Keep it brief", "Check before sending"], quiz: [
            { question: "Why is the subject line useful?", answers: ["It tells the reader the purpose", "It makes the email longer", "It changes the sender", "It removes context"], correct: 0, explanation: "A clear subject helps the reader understand the message quickly." },
            { question: "What is professional communication?", answers: ["Short and respectful", "Rude and urgent", "Random and emotional", "Only informal messages"], correct: 0, explanation: "Professional messages are respectful and clear." },
            { question: "What should you do before sending?", answers: ["Ignore grammar", "Proofread", "Delete all content", "Send with no check"], correct: 1, explanation: "Proofreading helps messages look thoughtful and professional." }
        ] },
        { id: "docs", icon: "📄", title: "Document Planning", description: "Structure work so it is neat, easy to read, and ethical.", intro: "Planning a document helps you present ideas in a clean and helpful structure.", keyPoints: ["Start with an outline", "Use headings", "Keep paragraphs short", "Review before finalizing"], quiz: [
            { question: "Why outline before writing?", answers: ["It organizes ideas", "It removes all structure", "It makes writing longer", "It is not helpful"], correct: 0, explanation: "Outline helps the writing flow and makes it easier to follow." },
            { question: "What makes a document easier to read?", answers: ["Short paragraphs and headings", "Long blocks of text", "No spacing", "Only one font"], correct: 0, explanation: "Structure and spacing improve readability." },
            { question: "What is the final step?", answers: ["Skip the review", "Check it before submitting", "Change the topic", "Delete the title"], correct: 1, explanation: "Reviewing improves quality and communicates care." }
        ] },
        { id: "spreadsheet", icon: "📉", title: "Spreadsheet Skills", description: "Use tables and formulas to organize information neatly.", intro: "Spreadsheet skills support better decision-making through neat data and clear analysis.", keyPoints: ["Label data", "Use totals", "Format cells", "Check formulas"], quiz: [
            { question: "What is a good spreadsheet practice?", answers: ["Use clear headings", "Hide all numbers", "Mix all data together", "Skip formatting"], correct: 0, explanation: "Clear labels make spreadsheets easier to read." },
            { question: "Why use totals?", answers: ["To summarize meaningfully", "To remove all data", "To hide trends", "To avoid conclusions"], correct: 0, explanation: "Totals help summarize the story behind the numbers." },
            { question: "What improves accuracy?", answers: ["Double-checking formulas and data", "Ignoring mistakes", "Using random values", "Deleting labels"], correct: 0, explanation: "Verification helps maintain accuracy and trust." }
        ] }
    ],
    "Content Creation": [
        { id: "creator", icon: "🎨", title: "Content Creator Basics", description: "Create helpful, original content for real people.", intro: "Strong content helps people learn, be inspired, or solve a problem.", keyPoints: ["Know the purpose", "Respect creators", "Be original", "Check facts"], quiz: [
            { question: "What is the best first step?", answers: ["Post without a plan", "Choose a clear purpose", "Copy a trend", "Skip research"], correct: 1, explanation: "A purpose gives your content direction and value." },
            { question: "Why give credit?", answers: ["To respect ownership", "To shorten content", "To avoid all trust", "To make it viral"], correct: 0, explanation: "Credit shows respect and protects ethical sharing." },
            { question: "What is responsible use of AI?", answers: ["Use it without checking facts", "Check it and use it ethically", "Never use it", "Use it to hide the source"], correct: 1, explanation: "AI should support creativity without replacing critical thinking." }
        ] },
        { id: "posting", icon: "📱", title: "Posting Online Well", description: "Share content with care, clarity, and respect.", intro: "Posting well means thinking before you share and protecting your audience and reputation.", keyPoints: ["Pause before sharing", "Check truth", "Respect privacy", "Use kind language"], quiz: [
            { question: "What should you do before sharing a post?", answers: ["Share immediately", "Check if it is truthful and respectful", "Post anonymously", "Share only if a friend likes it"], correct: 1, explanation: "Thoughtful checking reduces harm and misinformation." },
            { question: "Why is privacy important?", answers: ["It protects people and builds trust", "It reduces all comments", "It guarantees viral reach", "It removes all criticism"], correct: 0, explanation: "Privacy keeps personal information safe." },
            { question: "What makes a good post?", answers: ["It is respectful and accurate", "It is short without checking facts", "It uses all caps", "It includes private details"], correct: 0, explanation: "Good posts are thoughtful, safe, and useful." }
        ] },
        { id: "branding", icon: "🏷️", title: "Content Branding", description: "Build a clear and trustworthy online identity.", intro: "Good branding makes people recognize and trust your content.", keyPoints: ["Be consistent", "Know your audience", "Use a clear voice", "Create recognizable themes"], quiz: [
            { question: "Why does consistency matter?", answers: ["It helps people recognize your content", "It makes all posts random", "It removes identity", "It prevents all growth"], correct: 0, explanation: "Consistency builds recognition and trust." },
            { question: "What helps branding?", answers: ["A clear voice and theme", "No planning", "Different names for each post", "Unclear messaging"], correct: 0, explanation: "A clear style helps audiences understand your work." },
            { question: "Why know the audience?", answers: ["It helps shape useful content", "It guarantees fame", "It replaces creativity", "It removes differences"], correct: 0, explanation: "Understanding your audience makes your communication more relevant." }
        ] },
        { id: "storytelling", icon: "📖", title: "Storytelling", description: "Use stories to make important points memorable.", intro: "Stories help people connect to ideas in a human and memorable way.", keyPoints: ["Begin with a point", "Use clear events", "Add emotion", "End with meaning"], quiz: [
            { question: "Why use storytelling in content?", answers: ["To make ideas more memorable", "To hide the message", "To remove structure", "To replace all facts"], correct: 0, explanation: "Stories help people connect with information emotionally." },
            { question: "What makes a story strong?", answers: ["A beginning, middle, and clear meaning", "Random details only", "Only the ending", "No context"], correct: 0, explanation: "A strong story gives people a reason to follow and remember it." },
            { question: "What matters most?", answers: ["The message and connection to the audience", "Only the length", "Only the visuals", "Only the trending sound"], correct: 0, explanation: "Meaningful stories connect people to the message." }
        ] },
        { id: "video", icon: "🎬", title: "Video Content Skills", description: "Create short, useful videos with clarity and purpose.", intro: "Short videos work best when they have a simple idea and a clear message.", keyPoints: ["Start strong", "Keep it short", "Use clear visuals", "End with a call to action"], quiz: [
            { question: "What helps a short video work well?", answers: ["A clear idea and strong opening", "Random text", "Long, unclear scenes", "No planning"], correct: 0, explanation: "A clear opening and simple idea keep attention." },
            { question: "Why keep videos short?", answers: ["To hold attention and sharpen the message", "To remove the purpose", "To avoid editing", "To hide the message"], correct: 0, explanation: "Short content often has stronger focus and better retention." },
            { question: "What is helpful in a video?", answers: ["A clear call to action", "No ending", "No audience", "No message"], correct: 0, explanation: "A clear final instruction can help viewers respond or learn more." }
        ] },
        { id: "planning", icon: "🗓️", title: "Content Planning", description: "Plan what to create so your work stays useful and consistent.", intro: "Good planning helps you stay focused, consistent, and relevant to your audience.", keyPoints: ["Know your topic", "Set a timetable", "Review your goals", "Create a clear plan"], quiz: [
            { question: "Why is planning important?", answers: ["It keeps content focused", "It removes all effort", "It makes work less useful", "It prevents ideas"], correct: 0, explanation: "Planning helps you create content with purpose and consistency." },
            { question: "What does a plan help with?", answers: ["Staying consistent", "Skipping review", "Ignoring goals", "Hidden work"], correct: 0, explanation: "Planning gives structure and direction." },
            { question: "What is a good habit?", answers: ["Review your audience and message", "Create without purpose", "Use random ideas", "Ignore deadlines"], correct: 0, explanation: "Reviewing your purpose and audience improves quality." }
        ] }
    ],
    "Digital Literacy": [
        { id: "research", icon: "🔎", title: "Smart Research", description: "Search well and evaluate what you find online.", intro: "Digital literacy means learning how to research clearly and verify what you read.", keyPoints: ["Use specific searches", "Check the date", "Compare sources", "Review evidence"], quiz: [
            { question: "Why use specific search terms?", answers: ["They help find relevant information", "They hide useful results", "They make searches slower", "They remove evidence"], correct: 0, explanation: "Specific search terms lead to better-quality results." },
            { question: "What should you check before trusting information?", answers: ["The source and date", "Only the headline", "Only the image", "Only the comments"], correct: 0, explanation: "Source and date help you judge reliability." },
            { question: "What is a smart habit?", answers: ["Compare multiple sources", "Believe one post", "Ignore the author", "Search without a question"], correct: 0, explanation: "Multiple sources help you verify accuracy." }
        ] },
        { id: "digitalwellbeing", icon: "📵", title: "Digital Wellbeing", description: "Use technology in a healthy way without losing balance.", intro: "Healthy digital habits protect your focus, energy, and relationships.", keyPoints: ["Set limits", "Take breaks", "Be intentional", "Protect attention"], quiz: [
            { question: "Why take screen breaks?", answers: ["To protect focus and energy", "To ignore all tasks", "To stop learning", "To hide from work"], correct: 0, explanation: "Breaks restore attention and reduce strain." },
            { question: "What helps digital wellbeing?", answers: ["Healthy limits and balance", "Constant online access", "Never turning devices off", "Ignoring all goals"], correct: 0, explanation: "Healthy limits support your wellbeing." },
            { question: "What is a good habit?", answers: ["Check notifications nonstop", "Create deliberate routines", "Ignore your energy", "Use screens all night"], correct: 1, explanation: "Intentional routines help you stay balanced and focused." }
        ] },
        { id: "ai", icon: "🤖", title: "AI Literacy", description: "Use AI helpfully while checking accuracy and ethics.", intro: "AI can support learning, but it still needs human judgment and responsible use.", keyPoints: ["Ask clear questions", "Review AI answers", "Check facts", "Use it ethically"], quiz: [
            { question: "Why should AI output be checked?", answers: ["It is not always accurate", "It is always perfect", "It never needs review", "It is only for writing"], correct: 0, explanation: "AI can make mistakes or present biased information." },
            { question: "What is responsible AI use?", answers: ["Copying answers without review", "Checking results and using them ethically", "Using AI for everything", "Never using it"], correct: 1, explanation: "Responsible use combines usefulness with critical thinking." },
            { question: "What matters most?", answers: ["Human judgment", "Only speed", "Only convenience", "Only automation"], correct: 0, explanation: "People should still guide how AI is used and checked." }
        ] },
        { id: "cloud", icon: "☁️", title: "Cloud & Files", description: "Save, organize, and share files safely and clearly.", intro: "Cloud tools help people collaborate and access files securely from different devices.", keyPoints: ["Organize files", "Use clear names", "Back up work", "Share carefully"], quiz: [
            { question: "Why organize files?", answers: ["It helps you find and share work more easily", "It makes every file harder to use", "It removes backups", "It increases confusion"], correct: 0, explanation: "Good organization saves time and reduces mistakes." },
            { question: "What is a smart habit?", answers: ["Name files clearly", "Store everything in one random folder", "Never back up work", "Share files without checking"], correct: 0, explanation: "Clear names and backups improve safety and efficiency." },
            { question: "Why is safe sharing important?", answers: ["It protects access and privacy", "It adds random risk", "It removes all files", "It creates more confusion"], correct: 0, explanation: "Careful sharing helps keep information secure and useful." }
        ] },
        { id: "tools", icon: "🧰", title: "Digital Tools", description: "Know how to choose and use digital tools for real tasks.", intro: "The right digital tool makes work faster, clearer, and more effective.", keyPoints: ["Match the tool to the task", "Learn basics", "Practice often", "Keep tools secure"], quiz: [
            { question: "What should you do before choosing a digital tool?", answers: ["Know what task you need to complete", "Use whichever app is newest", "Ignore the purpose", "Never learn the tool"], correct: 0, explanation: "Tools work best when matched to the job." },
            { question: "What improves skill?", answers: ["Regular practice", "Never using tools", "Skipping setup", "Only reading once"], correct: 0, explanation: "Practice turns basic knowledge into real skill." },
            { question: "Why keep tools secure?", answers: ["To protect your work and accounts", "To make them slower", "To hide information", "To ignore backups"], correct: 0, explanation: "Secure tools protect people and their work." }
        ] },
        { id: "verification", icon: "🧾", title: "Verification Skills", description: "Confirm information before you act on it or share it.", intro: "Verification means checking facts and context before trusting or spreading information.", keyPoints: ["Check evidence", "Notice bias", "Ask questions", "Confirm before sharing"], quiz: [
            { question: "Why verify before sharing?", answers: ["To avoid spreading false information", "To increase confusion", "To make content viral", "To ignore the source"], correct: 0, explanation: "Verification helps people avoid misinformation." },
            { question: "What is a good question to ask?", answers: ["Who made this and what evidence supports it?", "Does it look dramatic enough?", "Can I share it right away?", "Who will notice if I ignore it?"], correct: 0, explanation: "Critical questions lead to better understanding." },
            { question: "What is the result of careful verification?", answers: ["Better decisions and safer sharing", "Panic and confusion", "No learning", "Random choices"], correct: 0, explanation: "Verified information supports smarter choices." }
        ] }
    ]
};

const courses = Object.entries(categoryLessonBlueprints).flatMap(([category, lessonList]) =>
    lessonList.map((lesson) => ({
        ...lesson,
        category,
        lesson: {
            title: lesson.title,
            introduction: lesson.intro,
            objectives: lesson.keyPoints,
            content: `
                <h3>Focus points</h3>
                <ul>${lesson.keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>
                <p>${lesson.intro}</p>
            `,
            quiz: lesson.quiz
        }
    }))
);

const ANALYTICS_KEY = "digitalAcademyAnalytics";
const ANALYTICS_CLIENT_KEY = "digitalAcademyClient";

function getDeviceType() {
    const ua = navigator.userAgent || "";
    if (/iPad|Tablet|PlayBook|Silk/i.test(ua)) return "tablet";
    if (/Mobile|Android|iPhone|iPod|Windows Phone/i.test(ua)) return "mobile";
    return "desktop";
}

function getDefaultAnalyticsState() {
    return {
        totalVisitors: 0,
        returningUsers: 0,
        totalQuizCompletions: 0,
        totalLessonViews: 0,
        totalSessions: 0,
        lastVisit: null,
        deviceTypes: { desktop: 0, mobile: 0, tablet: 0 },
        featureUsage: {},
        lessonViews: {},
        quizResults: { passed: 0, failed: 0 }
    };
}

function loadAnalyticsState() {
    try {
        const raw = JSON.parse(localStorage.getItem(ANALYTICS_KEY) || "null");
        const defaults = getDefaultAnalyticsState();
        if (!raw) return defaults;

        return {
            ...defaults,
            ...raw,
            deviceTypes: { ...defaults.deviceTypes, ...(raw.deviceTypes || {}) },
            featureUsage: raw.featureUsage || {},
            lessonViews: raw.lessonViews || {},
            quizResults: { ...defaults.quizResults, ...(raw.quizResults || {}) }
        };
    } catch (error) {
        return getDefaultAnalyticsState();
    }
}

function saveAnalyticsState(data) {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
}

function trackVisit() {
    const analytics = loadAnalyticsState();
    const hasClientId = Boolean(localStorage.getItem(ANALYTICS_CLIENT_KEY));
    const deviceType = getDeviceType();

    analytics.deviceTypes[deviceType] = (analytics.deviceTypes[deviceType] || 0) + 1;
    analytics.totalSessions = (analytics.totalSessions || 0) + 1;
    analytics.lastVisit = new Date().toISOString();

    if (!hasClientId) {
        analytics.totalVisitors = (analytics.totalVisitors || 0) + 1;
        localStorage.setItem(ANALYTICS_CLIENT_KEY, "anon");
    } else {
        analytics.returningUsers = (analytics.returningUsers || 0) + 1;
    }

    saveAnalyticsState(analytics);
}

function trackFeatureUsage(featureName) {
    const analytics = loadAnalyticsState();
    analytics.featureUsage[featureName] = (analytics.featureUsage[featureName] || 0) + 1;
    saveAnalyticsState(analytics);
    updateAnalyticsPanel();
}

function trackLessonView(courseId) {
    const analytics = loadAnalyticsState();
    analytics.lessonViews[courseId] = (analytics.lessonViews[courseId] || 0) + 1;
    analytics.totalLessonViews = (analytics.totalLessonViews || 0) + 1;
    saveAnalyticsState(analytics);
    updateAnalyticsPanel();
}

function trackQuizCompletion(score, passed) {
    const analytics = loadAnalyticsState();
    analytics.totalQuizCompletions = (analytics.totalQuizCompletions || 0) + 1;
    analytics.quizResults[passed ? "passed" : "failed"] = (analytics.quizResults[passed ? "passed" : "failed"] || 0) + 1;
    saveAnalyticsState(analytics);
    updateAnalyticsPanel();
}

function updateAnalyticsPanel() {
    const panel = document.getElementById("analyticsPanel");
    const analyticsGrid = document.getElementById("learningAnalytics");
    if (!panel || !analyticsGrid) return;

    const analytics = loadAnalyticsState();
    const topLessons = Object.entries(analytics.lessonViews)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([courseId, count]) => {
            const course = courses.find(item => item.id === courseId);
            return `${course ? course.title : courseId} (${count})`;
        });

    const topFeatures = Object.entries(analytics.featureUsage)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4);

    panel.innerHTML = `
        <div class="analytics-card">
            <span>Visitors</span>
            <strong>${analytics.totalVisitors}</strong>
        </div>
        <div class="analytics-card">
            <span>Returning users</span>
            <strong>${analytics.returningUsers}</strong>
        </div>
        <div class="analytics-card">
            <span>Quiz completions</span>
            <strong>${analytics.totalQuizCompletions}</strong>
        </div>
        <div class="analytics-card">
            <span>Top feature</span>
            <strong>${topFeatures.length ? topFeatures[0][0].replace(/_/g, ' ') : 'No data yet'}</strong>
        </div>
    `;

    analyticsGrid.innerHTML = `
        <div class="analytics-card">
            <span>Popular lessons</span>
            <strong>${topLessons.length ? topLessons.join('<br>') : 'No lesson views yet'}</strong>
        </div>
        <div class="analytics-card">
            <span>Device mix</span>
            <strong>Desktop ${analytics.deviceTypes.desktop}<br>Mobile ${analytics.deviceTypes.mobile}<br>Tablet ${analytics.deviceTypes.tablet}</strong>
        </div>
        <div class="analytics-card">
            <span>Quiz outcomes</span>
            <strong>Passed ${analytics.quizResults.passed || 0}<br>Failed ${analytics.quizResults.failed || 0}</strong>
        </div>
        <div class="analytics-card">
            <span>Most-used features</span>
            <strong>${topFeatures.length ? topFeatures.map(([name, count]) => `${name.replace(/_/g, ' ')} (${count})`).join('<br>') : 'No data yet'}</strong>
        </div>
    `;
}

const quizQuestions = [

    {
        question: "What should you do before responding when you are very angry?",

        answers: [
            "Send the message immediately",
            "Pause and calm yourself",
            "Insult the other person",
            "Break something"
        ],

        correct: 1
    },


    {
        question: "Which behaviour shows humility?",

        answers: [
            "Refusing correction",
            "Looking down on others",
            "Listening to other people",
            "Always demanding praise"
        ],

        correct: 2
    },


    {
        question: "Which is a useful response to anxious feelings?",

        answers: [
            "Slow breathing",
            "Ignoring every problem",
            "Attacking someone",
            "Sharing private information"
        ],

        correct: 0
    },


    {
        question: "Which action improves online security?",

        answers: [
            "Sharing your password",
            "Using the same password everywhere",
            "Using multi-factor authentication",
            "Clicking every link"
        ],

        correct: 2
    },


    {
        question: "What should you do before sharing information online?",

        answers: [
            "Check whether it is reliable",
            "Share it immediately",
            "Remove the source",
            "Change the facts"
        ],

        correct: 0
    },


    {
        question: "What should a digital creator do when using another person's work?",

        answers: [
            "Pretend it is their own",
            "Give appropriate credit",
            "Remove the creator's name",
            "Sell it without permission"
        ],

        correct: 1
    }

];


/* =========================================
   DAILY CHALLENGES
========================================= */

const challenges = [

    "Before replying to an angry message today, pause for 30 seconds.",

    "Check the privacy settings on one of your social media accounts.",

    "Spend 30 minutes away from social media today.",

    "Give credit to the original creator of something you share.",

    "Before sharing a news story, check its source.",

    "Teach someone one digital skill today.",

    "Write down three things you are grateful for."
];

const dailyLearningTips = [
    "A quick way to grow is to pause before you post or reply. Think before you click.",
    "Good digital habits start with checking your source, not just sharing the headline.",
    "A calm response is often stronger than an instant reaction online.",
    "Strong digital skills come from asking: is this true, respectful, safe and useful?"
];

const scenarioGames = [
    {
        title: "Group Project Message",
        prompt: "Your class group chat is asking everyone to send a private video of a classmate. What do you do?",
        options: [
            "Refuse and tell the group to respect privacy.",
            "Send it so you do not seem left out.",
            "Post it publicly to make the point.",
            "Ignore the message and delete the chat."
        ],
        correct: 0,
        explanation: "Protecting privacy and setting healthy boundaries is the safest and most respectful choice."
    },
    {
        title: "Suspicious Login Email",
        prompt: "You receive an email claiming to be from your school and asking you to click a link to verify your account. What is the most careful response?",
        options: [
            "Click the link immediately because it says it is urgent.",
            "Log in through the official school site instead of the email link.",
            "Reply with your password to confirm.",
            "Share the email with everyone."
        ],
        correct: 1,
        explanation: "Checking the official source is the safest way to avoid phishing scams."
    },
    {
        title: "Content Feedback",
        prompt: "A friend posts a video with a catchy comment that embarrasses someone in your class. What do you do?",
        options: [
            "Leave the comment because it is funny.",
            "Tell your friend it is hurtful and encourage respectful content.",
            "Join in and make it worse.",
            "Share it with more people."
        ],
        correct: 1,
        explanation: "Respectful online behaviour protects people and builds healthier digital communities."
    }
];

const safetyScenarios = [
    {
        title: "Unexpected Password Request",
        prompt: "A message asks for your password and says, 'This is urgent.' What should you do?",
        options: [
            "Give the password to verify the account.",
            "Ask the sender to use an official support channel or ignore it and verify the source.",
            "Share it with a friend for advice.",
            "Reply with your full account details."
        ],
        correct: 1,
        explanation: "Legitimate services will not ask for your password in a random message. Always verify the source."
    },
    {
        title: "Phishing Link",
        prompt: "You open a message from a 'bank' claiming your account is locked and asking you to click a link. What should you do?",
        options: [
            "Go to the bank's official website directly instead of using the message link.",
            "Click the link anyway because it is urgent.",
            "Forward the link to everyone you know.",
            "Send your personal details to confirm."
        ],
        correct: 0,
        explanation: "If something feels urgent or suspicious, checking the official source is the safer choice."
    }
];

function showQuizResultModal({ title, message, passed, retryLabel = "Try again", continueLabel = "Continue", onRetry, onContinue }) {
    const modal = document.getElementById("quizModal");
    const modalBody = document.getElementById("quizModalBody");

    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="result-badge ${passed ? "success" : "fail"}">${passed ? "Success" : "Keep going"}</div>
        <h3>${title}</h3>
        <p>${message}</p>
        <div class="modal-actions">
            <button class="btn secondary" id="quizRetryBtn">${retryLabel}</button>
            <button class="btn primary" id="quizContinueBtn">${continueLabel}</button>
        </div>
    `;

    modal.classList.remove("hidden");

    document.getElementById("quizRetryBtn").addEventListener("click", () => {
        modal.classList.add("hidden");
        if (onRetry) onRetry();
    });

    document.getElementById("quizContinueBtn").addEventListener("click", () => {
        modal.classList.add("hidden");
        if (onContinue) onContinue();
    });
}

/* =========================================
   APP STATE
========================================= */

let state = JSON.parse(
    localStorage.getItem("digitalAcademy")
) || {

    points: 0,

    completedLessons: [],

    lessonScores: {},

    quizScore: 0,

    quizAttempts: 0,

    challengeCompleted: false,

    streak: 0,

    userName: "Learner",

    dailyLearningDoneToday: false,

    lastDailyDate: null,

    creatorDrafts: [],

    lastScenarioIndex: 0

};

state = {
    ...{
        points: 0,
        completedLessons: [],
        lessonScores: {},
        quizScore: 0,
        quizAttempts: 0,
        challengeCompleted: false,
        streak: 0,
        userName: "Learner",
        dailyLearningDoneToday: false,
        lastDailyDate: null,
        creatorDrafts: [],
        lastScenarioIndex: 0
    },
    ...state,
    lessonScores: {
        ...(state.lessonScores || {})
    },
    creatorDrafts: Array.isArray(state.creatorDrafts) ? state.creatorDrafts : []
};

const todayKey = new Date().toDateString();
if (state.lastDailyDate !== todayKey) {
    state.dailyLearningDoneToday = false;
    state.lastDailyDate = todayKey;
}

function lessonIsUnlocked(courseId) {
    const score = state.lessonScores[courseId];
    return typeof score === "number" && score >= 70;
}


/* =========================================
   SAVE STATE
========================================= */

function saveState() {

    localStorage.setItem(
        "digitalAcademy",
        JSON.stringify(state)
    );

}


/* =========================================
   DASHBOARD
========================================= */

function getMasteryScore() {
    const lessonScores = Object.values(state.lessonScores);

    const lessonAverage = lessonScores.length > 0
        ? Math.round(
            lessonScores.reduce((sum, value) => sum + Number(value), 0)
            / lessonScores.length
        )
        : 0;

    const generalAverage = state.quizAttempts > 0
        ? Math.round(state.quizScore / state.quizAttempts)
        : 0;

    const combined = lessonScores.length > 0 && state.quizAttempts > 0
        ? Math.round((lessonAverage + generalAverage) / 2)
        : lessonScores.length > 0
            ? lessonAverage
            : generalAverage;

    return combined;
}

function getNextGoal() {
    if (state.completedLessons.length === 0) return "Complete your first lesson";
    if (state.completedLessons.length < courses.length) return `Finish ${courses.length - state.completedLessons.length} more lesson${courses.length - state.completedLessons.length === 1 ? "" : "s"}`;
    return "Earn your digital champion badge";
}

function getRecommendation() {
    if (state.completedLessons.length === 0) return "Start with a lesson in Mindset or Digital Safety to build your confidence.";

    const lowestCourse = courses
        .filter(course => !state.completedLessons.includes(course.id))
        .sort((a, b) => (state.lessonScores[a.id] || 0) - (state.lessonScores[b.id] || 0))[0];

    if (lowestCourse) return `Try ${lowestCourse.title} next to strengthen your current progress.`;
    return "You are on a great streak. Review your strongest lesson and keep practicing.";
}

function updatePersonalDashboard() {
    const name = (state.userName || "Learner").trim() || "Learner";
    const dashboardSummary = document.getElementById("dashboardSummary");
    const welcomeTitle = document.getElementById("welcomeTitle");
    const nextGoalCard = document.getElementById("nextGoalCard");
    const recommendationCard = document.getElementById("recommendationCard");
    const learnerNameInput = document.getElementById("learnerName");

    if (welcomeTitle) welcomeTitle.textContent = `Welcome, ${name}!`;
    if (dashboardSummary) {
        const masteryText = getMasteryScore();
        dashboardSummary.textContent = masteryText > 0
            ? `${name}, your current mastery is ${masteryText}% and you are building strong digital habits.`
            : `${name}, your learning journey is just beginning. Pick a lesson and start today.`;
    }

    if (nextGoalCard) nextGoalCard.textContent = getNextGoal();
    if (recommendationCard) recommendationCard.textContent = getRecommendation();
    if (learnerNameInput) learnerNameInput.value = name;
}

function updateDashboard() {

    document.getElementById("points").textContent =
        state.points;

    document.getElementById("completed").textContent =
        state.completedLessons.length;

    document.getElementById("quizScore").textContent =
        getMasteryScore() + "%";

    document.getElementById("streak").textContent =
        state.streak;

    const percentage =
        Math.round(
            (state.completedLessons.length / courses.length) * 100
        );

    document.getElementById("progressText").textContent =
        percentage + "%";

    document.getElementById("progressFill").style.width =
        percentage + "%";

    updatePersonalDashboard();
    updateBadges();

}


/* =========================================
   DISPLAY COURSES
========================================= */

function displayCourses() {
    const grid = document.getElementById("courseGrid");
    grid.innerHTML = "";

    const groupedCourses = courses.reduce((groups, course) => {
        if (!groups[course.category]) groups[course.category] = [];
        groups[course.category].push(course);
        return groups;
    }, {});

    Object.entries(groupedCourses).forEach(([category, grouped]) => {
        const categoryColorsForCourse = categoryColors[category] || { main: "#2563eb", soft: "#dbeafe" };

        const group = document.createElement("div");
        group.className = "course-group";

        const groupHeading = document.createElement("div");
        groupHeading.className = "course-group-heading";
        groupHeading.innerHTML = `
            <span class="course-group-dot" style="background: ${categoryColorsForCourse.main};"></span>
            <span>${category}</span>
        `;

        const cardsWrap = document.createElement("div");
        cardsWrap.className = "course-grid-inner";

        grouped.forEach(course => {
            const completed = state.completedLessons.includes(course.id);
            const score = state.lessonScores[course.id];

            const card = document.createElement("div");
            card.className = "course-card";
            card.style.setProperty("--category-main", categoryColorsForCourse.main);
            card.style.setProperty("--category-soft", categoryColorsForCourse.soft);

            card.innerHTML = `
                <div class="course-icon-wrap">
                    <span class="course-icon">${course.icon}</span>
                </div>

                <h3>${course.title}</h3>
                <p>${course.description}</p>

                <div class="course-meta">
                    ${score !== undefined ? `<span class="mini-badge">Mastery: ${score}%</span>` : ""}
                    ${completed ? "<span class='mini-badge success'>Completed</span>" : ""}
                </div>

                <button class="btn primary" onclick="openLesson('${course.id}')">
                    ${completed ? "Review Lesson" : "Start Lesson"}
                </button>
            `;

            cardsWrap.appendChild(card);
        });

        group.appendChild(groupHeading);
        group.appendChild(cardsWrap);
        grid.appendChild(group);
    });
}



const lessonQuizState = {};

function renderLessonQuiz(courseId, showScore = false) {
    const course = courses.find(item => item.id === courseId);
    const quizState = lessonQuizState[courseId];

    if (!course || !quizState) return;

    const currentQuestion = course.lesson.quiz[quizState.current];
    const content = document.getElementById("lessonContent");

    content.innerHTML = `
        <div class="lesson-quiz-box">
            <div class="lesson-meta">
                <span class="course-tag">${course.category}</span>
                <span class="course-tag muted">Question ${quizState.current + 1} / ${course.lesson.quiz.length}</span>
            </div>

            <h2>${course.lesson.title} Quiz</h2>

            <p class="quiz-question">${currentQuestion.question}</p>

            <div class="quiz-answers">
                ${currentQuestion.answers.map((answer, index) => `
                    <button
                        class="answer ${quizState.selected === index ? 'selected' : ''}"
                        data-index="${index}"
                        onclick="selectLessonAnswer('${courseId}', ${index})">
                        ${answer}
                    </button>
                `).join("")}
            </div>

            ${showScore ? `<div class="quiz-result"><strong>Result:</strong> ${quizState.score}/${course.lesson.quiz.length} correct</div>` : ""}

            <div class="lesson-actions">
                <button class="btn primary" onclick="nextLessonQuestion('${courseId}')">
                    ${quizState.current === course.lesson.quiz.length - 1 ? "Finish Quiz" : "Next Question"}
                </button>
                <button class="btn secondary" onclick="openLesson('${courseId}')">Back to Lesson</button>
            </div>
        </div>
    `;
}

function selectLessonAnswer(courseId, answerIndex) {
    const quizState = lessonQuizState[courseId];
    const course = courses.find(item => item.id === courseId);
    const currentQuestion = course.lesson.quiz[quizState.current];

    quizState.selected = answerIndex;
    const correct = answerIndex === currentQuestion.correct;

    if (correct) {
        quizState.score += 1;
    }

    const buttons = document.querySelectorAll(".answer");
    buttons.forEach(button => {
        const btnIndex = Number(button.dataset.index);
        button.disabled = true;

        if (btnIndex === currentQuestion.correct) {
            button.classList.add("correct");
        }

        if (btnIndex === answerIndex && !correct) {
            button.classList.add("wrong");
        }
    });

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";
    feedback.textContent = correct
        ? `Correct! ${currentQuestion.explanation}`
        : `Not quite. ${currentQuestion.explanation}`;

    const actionArea = document.querySelector(".lesson-actions");
    if (actionArea) {
        actionArea.insertAdjacentElement("beforeend", feedback);
    }
}

function nextLessonQuestion(courseId) {
    const quizState = lessonQuizState[courseId];
    const course = courses.find(item => item.id === courseId);

    if (quizState.current < course.lesson.quiz.length - 1) {
        quizState.current += 1;
        quizState.selected = null;
        renderLessonQuiz(courseId);
        return;
    }

    const percentage = Math.round((quizState.score / course.lesson.quiz.length) * 100);
    state.lessonScores[courseId] = percentage;

    saveState();
    updateDashboard();
    displayCourses();

    const content = document.getElementById("lessonContent");
    content.innerHTML = `
        <div class="lesson-quiz-box">
            <h2>${course.lesson.title} Quiz Results</h2>
            <p class="quiz-result">You scored ${percentage}%.</p>
            <p>${percentage >= 70 ? "Great work! You understood the important ideas from this lesson." : "You are learning. Review the lesson and try the quiz again to improve your score."}</p>
            <div class="lesson-actions">
                <button class="btn primary" onclick="openLesson('${courseId}')">Review Lesson</button>
                <button class="btn secondary" onclick="startLessonQuiz('${courseId}')">Retake Quiz</button>
            </div>
        </div>
    `;
}

function startLessonQuiz(courseId) {
    const course = courses.find(item => item.id === courseId);
    if (!course) return;

    lessonQuizState[courseId] = {
        current: 0,
        score: 0,
        selected: null
    };

    renderLessonQuiz(courseId);
}

/* =========================================
   OPEN LESSON
========================================= */

function openLesson(id) {

    const course =
        courses.find(item => item.id === id);

    if (!course) return;

    trackFeatureUsage("lesson_opened");
    trackLessonView(id);

    const section =
        document.getElementById("lessonSection");

    const content =
        document.getElementById("lessonContent");

    const mastery = state.lessonScores[id];
    const unlocked = lessonIsUnlocked(id);

    content.innerHTML = `

        <div class="lesson-meta">
            <span class="course-tag">${course.category}</span>
            ${mastery !== undefined ? `<span class="course-tag muted">Mastery: ${mastery}%</span>` : ""}
        </div>

        <h2>
            ${course.lesson.title}
        </h2>

        <p>
            ${course.lesson.introduction}
        </p>

        <h3>
            Learning Objectives
        </h3>

        <ul>
            ${course.lesson.objectives
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>

        ${course.lesson.content}

        <br>

        <div class="lesson-actions">
            <button
                class="btn primary"
                onclick="startLessonQuiz('${course.id}')">
                ${mastery !== undefined ? "Retake Lesson Quiz" : "Take Lesson Quiz"}
            </button>
            <button
                class="btn secondary"
                onclick="completeLesson('${course.id}')"
                ${unlocked ? "" : "disabled"}>
                ${unlocked ? "Mark Lesson Complete" : "Complete Quiz to Unlock"}
            </button>
        </div>

    `;

    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   COMPLETE LESSON
========================================= */

function completeLesson(id) {

    if (!lessonIsUnlocked(id)) {
        alert("Please complete the lesson quiz and score at least 70% before marking this lesson complete.");
        return;
    }

    if (!state.completedLessons.includes(id)) {

        state.completedLessons.push(id);

        state.points += 20;

        state.streak += 1;

        saveState();

        updateDashboard();

        displayCourses();

        alert("Lesson completed! You earned 20 points.");

    } else {

        alert("You already completed this lesson.");

    }

}


/* =========================================
   BACK BUTTON
========================================= */

document
    .getElementById("backBtn")
    .addEventListener("click", () => {

        document
            .getElementById("lessonSection")
            .classList.add("hidden");

        document
            .getElementById("learn")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================================
   QUIZ SYSTEM
========================================= */

let currentQuestion = 0;

let quizCorrect = 0;

function loadQuizQuestion() {

    const question =
        quizQuestions[currentQuestion];

    document.getElementById("quizQuestion")
        .textContent =
        question.question;

    const answers =
        document.getElementById("quizAnswers");

    answers.innerHTML = "";

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent = answer;

            button.onclick = () =>
                checkAnswer(index, button);

            answers.appendChild(button);

        }
    );

    document
        .getElementById("nextQuestion")
        .classList.add("hidden");

}


function checkAnswer(index, button) {

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (index === question.correct) {

        button.classList.add("correct");

        quizCorrect++;

        state.points += 10;

    } else {

        button.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

    }

    document
        .getElementById("nextQuestion")
        .classList.remove("hidden");

    saveState();

    updateDashboard();

}


document
    .getElementById("nextQuestion")
    .addEventListener("click", () => {

        currentQuestion++;

        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            finishQuiz();

        } else {

            loadQuizQuestion();

        }

    });


function finishQuiz() {

    const percentage =
        Math.round(
            (quizCorrect /
                quizQuestions.length) * 100
        );

    state.quizScore += percentage;

    state.quizAttempts++;
    trackFeatureUsage("quiz_completed");
    trackQuizCompletion(percentage, percentage >= 70);

    saveState();

    const passed = percentage >= 70;
    const title = passed ? "Great job!" : "Almost there!";
    const message = passed
        ? `You scored ${percentage}% and earned ${quizCorrect * 10} points. You are ready to keep learning.`
        : `You scored ${percentage}%. Review the lesson, try again, and you will improve in no time.`;

    document.getElementById("quizQuestion").textContent = "Quiz Complete!";
    document.getElementById("quizAnswers").innerHTML = `
        <h3>Your score: ${percentage}%</h3>
        <p>You earned ${quizCorrect * 10} points.</p>
    `;

    document
        .getElementById("nextQuestion")
        .classList.add("hidden");

    updateDashboard();

    showQuizResultModal({
        title,
        message,
        passed,
        retryLabel: "Try again",
        continueLabel: "Continue",
        onRetry: () => restartQuiz(),
        onContinue: () => {
            restartQuiz();
        }
    });

}


function restartQuiz() {

    currentQuestion = 0;

    quizCorrect = 0;

    loadQuizQuestion();

}


/* =========================================
   DAILY CHALLENGE
========================================= */

function loadDailyChallenge() {

    const today =
        new Date().getDate();

    const challenge =
        challenges[
            today % challenges.length
        ];

    document
        .getElementById("dailyChallenge")
        .textContent = challenge;

}


document
    .getElementById("completeChallenge")
    .addEventListener("click", () => {

        if (state.challengeCompleted) {

            alert(
                "You already completed today's challenge."
            );

            return;
        }

        state.challengeCompleted = true;

        state.points += 15;

        saveState();

        updateDashboard();

        alert(
            "Challenge completed! You earned 15 points."
        );

    });


/* =========================================
   BADGES
========================================= */

function updateBadges() {

    const badges =
        document.getElementById("badges");

    badges.innerHTML = "";

    const badgeData = [

        {
            name: "🌱 Digital Beginner",
            unlocked:
                state.completedLessons.length >= 1
        },

        {
            name: "🧘 Calm Mind",
            unlocked:
                state.completedLessons.includes("anger")
        },

        {
            name: "🤝 Humble Heart",
            unlocked:
                state.completedLessons.includes("humility")
        },

        {
            name: "🧠 Healthy Mind",
            unlocked:
                state.completedLessons.includes("anxiety")
        },

        {
            name: "🔐 Online Guardian",
            unlocked:
                state.completedLessons.includes("safety")
        },

        {
            name: "🌍 Digital Steward",
            unlocked:
                state.completedLessons.includes("stewardship")
        },

        {
            name: "🎨 Creative Mind",
            unlocked:
                state.completedLessons.includes("creator")
        },

        {
            name: "💻 Digital Citizen",
            unlocked:
                state.completedLessons.includes("literacy")
        },

        {
            name: "🏆 Digital Champion",
            unlocked:
                state.completedLessons.length === courses.length
        }

    ];


    badgeData.forEach(badge => {

        const element =
            document.createElement("div");

        element.className =
            "badge-item " +
            (badge.unlocked
                ? "unlocked"
                : "");

        element.textContent =
            badge.name;

        badges.appendChild(element);

    });

}

function renderDailyLearning() {
    const container = document.getElementById("dailyLearningCard");
    if (!container) return;

    const tip = dailyLearningTips[new Date().getDate() % dailyLearningTips.length];
    const done = state.dailyLearningDoneToday;

    container.innerHTML = `
        <div class="challenge-icon">💡</div>
        <h3>Today's focus</h3>
        <p>${tip}</p>
        <button class="btn primary" id="dailyLearningBtn" ${done ? "disabled" : ""}>
            ${done ? "Completed today" : "I did this"}
        </button>
    `;

    const button = document.getElementById("dailyLearningBtn");
    if (button && !done) {
        button.addEventListener("click", () => {
            state.dailyLearningDoneToday = true;
            state.lastDailyDate = new Date().toDateString();
            state.points += 5;
            saveState();
            updateDashboard();
            renderDailyLearning();
        });
    }
}

function renderScenarioGame() {
    const container = document.getElementById("scenarioCard");
    if (!container) return;

    const scenarioIndex = state.lastScenarioIndex % scenarioGames.length;
    const scenario = scenarioGames[scenarioIndex];

    container.innerHTML = `
        <h3>${scenario.title}</h3>
        <p>${scenario.prompt}</p>
        <div class="scenario-grid">
            ${scenario.options.map((option, index) => `
                <button class="scenario-option" data-index="${index}">${option}</button>
            `).join("")}
        </div>
        <div id="scenarioResult" class="scenario-result" hidden></div>
    `;

    container.querySelectorAll(".scenario-option").forEach(button => {
        button.addEventListener("click", () => {
            const selectedIndex = Number(button.dataset.index);
            const isCorrect = selectedIndex === scenario.correct;
            const resultBox = document.getElementById("scenarioResult");
            resultBox.hidden = false;
            resultBox.innerHTML = isCorrect
                ? `<strong>Great choice.</strong> ${scenario.explanation} <br> +15 points.`
                : `<strong>Good thinking.</strong> ${scenario.explanation} <br> Try another scenario to keep learning.`;

            if (isCorrect) {
                state.points += 15;
            }

            state.lastScenarioIndex = (state.lastScenarioIndex + 1) % scenarioGames.length;
            saveState();
            updateDashboard();
            renderScenarioGame();
        });
    });
}

function renderSafetySimulator() {
    const container = document.getElementById("safetySimulatorCard");
    if (!container) return;

    const scenario = safetyScenarios[new Date().getDate() % safetyScenarios.length];

    container.innerHTML = `
        <h3>${scenario.title}</h3>
        <p>${scenario.prompt}</p>
        <div class="safety-grid">
            ${scenario.options.map((option, index) => `
                <button class="safety-option" data-index="${index}">${option}</button>
            `).join("")}
        </div>
        <div id="safetyResult" class="safety-result" hidden></div>
    `;

    container.querySelectorAll(".safety-option").forEach(button => {
        button.addEventListener("click", () => {
            const selectedIndex = Number(button.dataset.index);
            const isCorrect = selectedIndex === scenario.correct;
            const resultBox = document.getElementById("safetyResult");
            resultBox.hidden = false;
            resultBox.innerHTML = isCorrect
                ? `<strong>Safe choice.</strong> ${scenario.explanation}`
                : `<strong>Not quite.</strong> ${scenario.explanation}`;

            if (isCorrect) {
                state.points += 10;
                saveState();
                updateDashboard();
            }
        });
    });
}

function renderAssistantChat() {
    const chat = document.getElementById("assistantChat");
    if (!chat) return;

    const defaultMessages = [
        { role: "assistant", text: "Hi! I can help with anger, online safety, study habits, or content creation." },
        { role: "assistant", text: "Ask me something like: 'How do I stay safe online?' or 'How can I make better posts?'" }
    ];

    const stored = JSON.parse(localStorage.getItem("digitalAcademyAssistant") || "null");
    const messages = Array.isArray(stored) && stored.length ? stored : defaultMessages;

    chat.innerHTML = messages.map(message => `
        <div class="assistant-message ${message.role === "user" ? "user" : ""}">${message.text}</div>
    `).join("");

    chat.scrollTop = chat.scrollHeight;
}

function generateAssistantReply(prompt) {
    const lower = prompt.toLowerCase();

    if (lower.includes("anger") || lower.includes("calm")) {
        return "Try this: pause, breathe slowly, step away, and choose your words after you calm down. A short break often helps you respond wisely.";
    }

    if (lower.includes("phishing") || lower.includes("email") || lower.includes("safe")) {
        return "If an email asks for a password or urgent action, verify the source first. Use the official app or website instead of clicking the message link.";
    }

    if (lower.includes("content") || lower.includes("post") || lower.includes("creator")) {
        return "Good content starts with a clear purpose, useful information, and respect for other people's work. Always check facts before publishing.";
    }

    if (lower.includes("study") || lower.includes("learn")) {
        return "Set one small goal, review what you learned, and practice it in a real task. Small, consistent steps work best.";
    }

    return "A good habit is to pause, check the facts, and choose the respectful option. That helps both your learning and your digital life.";
}

function handleAssistantPrompt(prompt) {
    const chat = document.getElementById("assistantChat");
    const trimmed = prompt.trim();
    if (!trimmed || !chat) return;

    const messages = JSON.parse(localStorage.getItem("digitalAcademyAssistant") || "[]");
    const newMessages = [...messages, { role: "user", text: trimmed }, { role: "assistant", text: generateAssistantReply(trimmed) }];
    localStorage.setItem("digitalAcademyAssistant", JSON.stringify(newMessages.slice(-6)));
    renderAssistantChat();
}

function renderCreatorDrafts() {
    const drafts = document.getElementById("creatorDrafts");
    if (!drafts) return;

    const items = Array.isArray(state.creatorDrafts) ? state.creatorDrafts : [];
    drafts.innerHTML = items.length
        ? items.map(item => `
            <div class="draft-item">
                <strong>${item.type}</strong>
                <p>${item.content}</p>
            </div>
        `).join("")
        : "<div class='draft-item'><strong>No drafts yet</strong><p>Save your first content idea to build your creator portfolio.</p></div>";
}

function renderCertificates() {
    const container = document.getElementById("certificateList");
    if (!container) return;

    const certificates = [
        { name: "Starter Certificate", unlock: state.completedLessons.length >= 1 },
        { name: "Growth Certificate", unlock: state.completedLessons.length >= 3 },
        { name: "Digital Champion", unlock: state.completedLessons.length >= courses.length }
    ];

    container.innerHTML = certificates.map(certificate => `
        <div class="certificate-card ${certificate.unlock ? "" : "locked"}">
            <div class="challenge-icon">🏅</div>
            <h4>${certificate.name}</h4>
            <p>${certificate.unlock ? "Unlocked" : "Complete more lessons to unlock"}</p>
        </div>
    `).join("");
}

function renderFeaturePanels() {
    renderDailyLearning();
    renderScenarioGame();
    renderSafetySimulator();
    renderAssistantChat();
    renderCreatorDrafts();
    renderCertificates();
}

/* =========================================
   DARK MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");

const learnerNameInput = document.getElementById("learnerName");
if (learnerNameInput) {
    learnerNameInput.addEventListener("input", (event) => {
        const value = event.target.value.trim();
        state.userName = value || "Learner";
        saveState();
        updateDashboard();
    });
}

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "darkMode",
            dark
        );

        themeBtn.textContent =
            dark ? "☀️" : "🌙";

    }
);


if (
    localStorage.getItem("darkMode") === "true"
) {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================================
   MOBILE MENU
========================================= */

document
    .getElementById("menuBtn")
    .addEventListener("click", () => {

        document
            .getElementById("navLinks")
            .classList.toggle("show");
        trackFeatureUsage("mobile_menu");

    });

const installBtn = document.getElementById("installBtn");
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    if (installBtn) {
        installBtn.classList.remove("hidden");
    }
});

if (installBtn) {
    installBtn.addEventListener("click", async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
        installBtn.classList.add("hidden");
    });
}

const offlineBanner = document.getElementById("offlineBanner");
function updateOfflineBanner() {
    if (!offlineBanner) return;
    offlineBanner.classList.toggle("hidden", navigator.onLine);
}

window.addEventListener("online", updateOfflineBanner);
window.addEventListener("offline", updateOfflineBanner);
updateOfflineBanner();

window.addEventListener("appinstalled", () => {
    if (installBtn) installBtn.classList.add("hidden");
    trackFeatureUsage("app_installed");
});

const assistantInput = document.getElementById("assistantInput");
const sendAssistantBtn = document.getElementById("sendAssistantBtn");

sendAssistantBtn.addEventListener("click", () => {
    const value = assistantInput.value.trim();
    if (!value) return;

    handleAssistantPrompt(value);
    assistantInput.value = "";
});

assistantInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const value = assistantInput.value.trim();
        if (!value) return;

        handleAssistantPrompt(value);
        assistantInput.value = "";
    }
});

document.querySelectorAll(".mini-btn").forEach(button => {
    button.addEventListener("click", () => {
        const promptText = button.dataset.prompt;
        if (promptText) {
            handleAssistantPrompt(promptText);
        }
    });
});

const creatorForm = document.getElementById("creatorForm");
if (creatorForm) {
    creatorForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const type = document.getElementById("draftType").value;
        const content = document.getElementById("draftContent").value.trim();

        if (!content) {
            alert("Please write a draft before saving it.");
            return;
        }

        state.creatorDrafts = [{ type, content }, ...(Array.isArray(state.creatorDrafts) ? state.creatorDrafts : [])].slice(0, 5);
        saveState();
        renderCreatorDrafts();
        creatorForm.reset();
    });
}

/* =========================================
   RESET
========================================= */

document
    .getElementById("resetBtn")
    .addEventListener("click", () => {

        const confirmReset =
            confirm(
                "Are you sure you want to reset all your progress?"
            );

        if (!confirmReset) return;

        localStorage.removeItem(
            "digitalAcademy"
        );

        location.reload();

    });


/* =========================================
   INITIALISE APP
========================================= */

trackVisit();
updateAnalyticsPanel();

displayCourses();

loadQuizQuestion();

loadDailyChallenge();

renderFeaturePanels();

updateDashboard();
