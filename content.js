/* ============================================================
   MTC KIT CONTENT  —  this is the only file you need to edit.
   ------------------------------------------------------------
   • To add a video: paste the YouTube link between the quotes
     after  video:  (unlisted videos work). Save → live in ~1 min.
   • To add a new lesson: copy one { ... }, block, paste it below
     the last one, and change the text. Keep the comma after } .
   • Text goes between "quotes". If you need a quote mark inside
     the text, use ’ (curly) instead of ' or ".
   ============================================================ */

window.KIT = {
  // ---- Top of the page ----
  title: "The Mental Tennis Kit",
  promise: "Your promise goes here. One sentence about what players will be able to do after this kit.",
  coach: "Bendix Schroeder",
  coachLine: "4 years of college tennis, 2 as captain. Assistant coach at Emporia State. Mental tennis coach.",
  welcomeVideo: "",               // paste a YouTube link for a short welcome video (optional)

  // ---- Your links ----
  substack: "https://substack.com", // replace with your Substack link
  instagram: "https://instagram.com/bendix.schroeder",

  // ---- Video lessons (shown in this order) ----
  lessons: [
    {
      title: "Lesson 1 · Title coming soon",
      video: "",                  // YouTube link here
      minutes: 5,
      summary: "One or two sentences about what this lesson teaches.",
      todo: "One small thing to try in your next practice."
    },
    {
      title: "Lesson 2 · Title coming soon",
      video: "",
      minutes: 5,
      summary: "One or two sentences about what this lesson teaches.",
      todo: "One small thing to try in your next practice."
    },
    {
      title: "Lesson 3 · Title coming soon",
      video: "",
      minutes: 5,
      summary: "One or two sentences about what this lesson teaches.",
      todo: "One small thing to try in your next practice."
    }
  ],

  // ---- Exercises (tools players can use on court) ----
  exercises: [
    {
      title: "The towel reset",
      when: "After a long or important point",
      steps: [
        "Walk to your towel, even if you are not sweating.",
        "Walk past the fence and take three slow breaths.",
        "Say your cue word, then walk back to the line for the next point."
      ]
    },
    {
      title: "Five bounces before every serve",
      when: "Before every first and second serve",
      steps: [
        "Bounce the ball exactly five times.",
        "On the last bounce, pick your target.",
        "Serve. Same routine on big points and small points."
      ]
    },
    {
      title: "Flip the script",
      when: "When you face a player you think is better",
      steps: [
        "Notice the old thought: ‘They’re better than me. Why even try?’",
        "Replace it: ‘They’re better than me. This is my chance to show what I can do.’",
        "Play the next point with that sentence in your head."
      ]
    }
  ],

  // ---- Journal (after every practice or match) ----
  journal: {
    focus: "Staying in the present moment",
    scale: [
      [10, "Every point was its own point, even the big ones."],
      [8,  "Present almost the whole time. Drifted once or twice, reset before the next point."],
      [6,  "Mostly present, but on a few big points I thought about the score or the result."],
      [5,  "On about half of the big points I drifted to the score, the future or the last point."],
      [3,  "Often in my head about the score, the result or mistakes. Hard to get back."],
      [1,  "Rarely present. Mostly thinking about winning or losing."],
      [0,  "Not present at all."]
    ],
    questions: [
      "What did I do well to stay present?",
      "When did I lose focus? What was I thinking right then?",
      "How did I get back into the present moment?"
    ]
  }
};
