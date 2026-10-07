/* ============================================================
   MTC KIT CONTENT  —  this is the only file you need to edit.
   ------------------------------------------------------------
   • Add a video: paste the YouTube link between the quotes after
     video:   (unlisted videos work). Commit → live in ~1 minute.
   • Add a lesson: copy one { ... }, block inside a module's
     lessons: [ ... ] and change the text. Keep the comma after } .
   • Add a module: copy a whole { title: ..., lessons: [...] },
     block inside modules: [ ... ].
   • Your photo: upload a photo to the repository (Add file →
     Upload files), then type its file name after  photo:
     e.g.  photo: "bendix.jpg",
   • Text goes between "quotes". For a quote mark inside the text
     use ’ (curly) instead of ' or ".
   ============================================================ */

window.KIT = {
  // ---- Top of the page ----
  title: "The Mental Tennis Kit",
  promise: "Your promise goes here. One sentence about what you’ll be able to do on court after this kit.",
  coach: "Bendix Schroeder",
  hello: "Hey, I’m Bendix. I played four years of college tennis, two of them as captain, and I lost more matches in my head than on the court. Now I coach at Emporia State and help players with the part nobody trains: what happens between the points. This kit is everything I wish someone had handed me as a freshman.",
  photo: "bendix.jpg",            // your photo file in the repository
  welcomeVideo: "",               // optional YouTube link for a short welcome video

  // ---- Your links ----
  substack: "https://bendixschroeder.substack.com/",
  instagram: "https://instagram.com/bendix.schroeder",

  // ---- Classroom: modules with lessons (shown in this order) ----
  modules: [
    {
      title: "Start here",
      lessons: [
        {
          title: "How to use this kit",
          video: "",
          minutes: 3,
          summary: "One or two sentences about what this lesson teaches.",
          todo: "One small thing to try in your next practice."
        }
      ]
    },
    {
      title: "Stay in the present",
      lessons: [
        {
          title: "Lesson title coming soon",
          video: "",
          minutes: 5,
          summary: "One or two sentences about what this lesson teaches.",
          todo: "One small thing to try in your next practice."
        },
        {
          title: "Lesson title coming soon",
          video: "",
          minutes: 5,
          summary: "One or two sentences about what this lesson teaches.",
          todo: "One small thing to try in your next practice."
        }
      ]
    }
  ],

  // ---- Exercises (routines players can use on court) ----
  exercises: [
    {
      title: "The towel reset",
      when: "After a long or important point",
      steps: [
        "Walk to your towel, even if you’re not sweating.",
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
        "Swap it: ‘They’re better than me. This is my chance to show what I can do.’",
        "Play the next point with that sentence in your head."
      ]
    }
  ],

  // ---- Community (Discord) ----
  // invite:    your Discord invite link (set it to "Never expire")
  // serverId / channelId: turn on Developer Mode in Discord (Settings → Advanced),
  //   right-click the server icon → Copy Server ID, right-click a channel → Copy Channel ID.
  //   With both filled in (and the WidgetBot bot added to your server), a live chat window
  //   shows up on the website. Leave them empty to only show the Join button.
  community: {
    invite: "",
    serverId: "",
    channelId: "",
    intro: "This is where players who take the mental side seriously hang out. Ask me anything, share how your last match went, and learn from players who deal with the same nerves you do.",
    channels: [
      ["introduce-yourself", "Who you are, where you play, and what you want to get better at."],
      ["ask-bendix", "Questions about the mental game. I answer every one."],
      ["match-reports", "Post your journal rating after a match and what you learned."],
      ["wins", "Big point you closed out, a routine that clicked, a match you turned around."],
      ["routines", "Share what you do between points and before serves."]
    ],
    rules: [
      "Be the teammate you’d want. Encourage, don’t judge.",
      "No selling, spam or self-promotion.",
      "Keep personal info private. Never share your address, phone number or school schedule.",
      "Discord is 13+. If you’re under 18, keep chats in the public channels."
    ]
  },

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
