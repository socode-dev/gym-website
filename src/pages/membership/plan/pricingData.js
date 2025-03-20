const membershipPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 29,
    features: [
      "Full access to gym facilities",
      "Strength & Cardio Equipment",
      "Locker room & shower access",
      "Free introductory training session",
    ],
    BGColor: "bg-neutral-600",
    ring: "ring-neutral-400",
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 49,
    features: [
      "Everything in Basic Plan",
      "Unlimited group classes (HIIT, Yoga, Functional Training)",
      "Personalized workout plan",
      "Monthly progress check-ins with trainers",
    ],
    BGColor: "bg-red-600",
    ring: "ring-red-400",
    popular: true, // Highlight this plan
  },
  {
    id: "elite",
    name: "Elite Plan",
    price: 79,
    features: [
      "Everything in Pro Plan",
      "1-on-1 personal training (4 sessions/month)",
      "Custom nutrition consultation & meal plan",
      "Priority booking for group classes",
      "24/7 Gym Access",
    ],
    BGColor: "bg-neutral-700",
    ring: "ring-neutral-500",
    best: true,
  },
];

export default membershipPlans;
