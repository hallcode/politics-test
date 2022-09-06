const C = "collectivist";
const I = "individualist";
const P = "progressive";
const T = "traditional";

const QUESTIONS = [
  {
    _id: "A1",
    text: "Individual decisions (like eating less meat or recycling more) do not significantly combat climate change; the only way to make a serious difference is for governments to intervene.",
    score: C,
  },
  {
    _id: "A2",
    text: "The best way for us to tackle the climate crisis is for everyone to make the right choices. That will make a difference over time.",
    score: I,
  },
  {
    _id: "A3",
    text: "We will need to take drastic action to prevent climate disaster; that action will most likely include needing to make changes to the way we live our daily lives.",
    score: P,
  },
  {
    _id: "A4",
    text: "The causes of climate change are still being debated, and we should wait for scientists to agree before taking action that would seriously affect people's lives.",
    score: T,
  },
  {
    _id: "B1",
    text: "The value created by work should be shared among the workers.",
    score: C,
  },
  {
    _id: "B2",
    text: "Taxes should be as low as possible so that individuals can use their income to provide for themselves.",
    score: I,
  },
  {
    _id: "B3",
    text: "Being a landlord is unethical; it exploits the renter by taking their wages to fund the landlord's asset while producing no new economic value.",
    score: P,
  },
  {
    _id: "B4",
    text: "Entrepreneurs help build the economy by risking their own money to invest in products and services.",
    score: T,
  },
  {
    _id: "C1",
    text: '"It takes a village to raise a child" - African proverb.',
    score: C,
  },
  {
    _id: "C2",
    text: "A child's parents are best placed to decide what that child learns and what ideas and values they're exposed to.",
    score: I,
  },
  {
    _id: "C3",
    text: "State-provided education should present challenging history, in particular, the negative legacy of British and European empires.",
    score: P,
  },
  {
    _id: "C4",
    text: "The primary purpose of a child's education is to prepare them for the workplace.",
    score: T,
  },
  {
    _id: "D3",
    text: "The way we interpret other people's gender is based on judging how closely the way they look, dress and behave matches our stereotypes.",
    score: P,
  },
  {
    _id: "D4",
    text: "A person's gender is determined by their biological sex characteristics at birth.",
    score: T,
  },
  {
    _id: "E1",
    text: "Everyone should individually try to do what is best for society as a whole.",
    score: C,
  },
  {
    _id: "E2",
    text: "A person's primary responsibility is to look after themselves and their family before anyone else.",
    score: I,
  },
  {
    _id: "E3",
    text: "Concentrations of power and other inequalities should be challenged wherever they appear.",
    score: P,
  },
  {
    _id: "E4",
    text: "It's inevitable that in any group of people hierarchies will form with some on top with more, and most with less.",
    score: T,
  },
  {
    _id: "F1",
    text: "It's the government's job to run the country, provide public services, and protect the weak against the powerful.",
    score: C,
  },
  {
    _id: "F2",
    text: "An ideal society would have as few laws as possible; nothing would be prohibited except causing harm to others.",
    score: I,
  },
  {
    _id: "G1",
    text: "Rich countries should use their wealth and technology to help less developed countries grow in a sustainable way.",
    score: C,
  },
  {
    _id: "G2",
    text: "We should prioritise citizens of our own country before those of other countries, no matter how much they might need help.",
    score: I,
  },
  {
    _id: "G3",
    text: "Borders are a human invention and we would have more to gain by getting rid of them than we would lose.",
    score: P,
  },
  {
    _id: "G4",
    text: "It's important for each country to have a strong sense of identity and sovereignty.",
    score: T,
  },

  {
    _id: "H1",
    text: "The primary purpose of the Law is to keep the peace, by resolving disputes in society so that people don't resort to mob rule or violent retribution.",
    score: C,
  },
  {
    _id: "H2",
    text: "The main benefit to having an established legal system is that it allows individuals and companies to protect their interests and have those decisions enforced.",
    score: I,
  },
  {
    _id: "H3",
    text: "The law should be used to make society better.",
    score: P,
  },
  {
    _id: "H4",
    text: "It's morally good to follow the law, even if you personally disagree with it in a particular case.",
    score: T,
  },

  {
    _id: "I1",
    text: "Governments should use regulation to enforce competition, safety standards, and fairness.",
    score: C,
  },
  {
    _id: "I2",
    text: "The free market is the best way to ensure affordable prices, fair competition, and ultimately the best product.",
    score: I,
  },
  {
    _id: "I3",
    text: "There is no such thing as ethical consumption under capitalism.",
    score: P,
  },
  {
    _id: "I4",
    text: "Capitalism isn't perfect, but it’s the best system we have.",
    score: T,
  },

  {
    _id: "J1",
    text: "Employers and governments should take affirmative action to ensure that people from ethnic and sexual minorities are represented on company boards, sports teams, etc.",
    score: C,
  },
  {
    _id: "J2",
    text: "A person's skin colour, sex or gender should not factor into any decisions taken about them, like whether they get a job or a place at a university.",
    score: I,
  },
  {
    _id: "J3",
    text: "Women who spend most of their time doing housework or raising children should be financially compensated for that work.",
    score: P,
  },
  {
    _id: "J4",
    text: "Women are best suited to childcare and men are better as the breadwinners.",
    score: T,
  },

  {
    _id: "K1",
    text: "Public services should be nationalised or owned by the people.",
    score: C,
  },
  {
    _id: "K2",
    text: "Private companies that run public services are risking their own capital in the event the service makes a loss, so it's only fair that if it makes a profit, they get to keep it.",
    score: I,
  },
  {
    _id: "K3",
    text: "Governments should not intervene to save banks, companies, or services from going out of business, even if they are important to the nation.",
    score: P,
  },
  {
    _id: "K4",
    text: "If there is a recession, governments should spend (by borrowing if needed) on new buildings and big projects to provide more employment and add money to the economy.",
    score: T,
  },

  {
    _id: "L3",
    text: "Contraceptives, sexual health advice, and abortions should be freely available to anyone who chooses to use them.",
    score: P,
  },
  {
    _id: "L4",
    text: "Women should only be allowed to have an abortion in special circumstances.",
    score: T,
  },

  {
    _id: "M1",
    text: "In a crisis, the government should use its power to enforce restrictions and protections in order to keep the majority, or vulnerable minorities, safe.",
    score: C,
  },
  {
    _id: "M2",
    text: "In the event of a national emergency, freedoms must not be curtailed and it should be up to individuals what action they take to protect themselves.",
    score: I,
  },

  {
    _id: "N1",
    text: "Opinions which are based on bad science or are irrational should not be given equal weight or debated as seriously as views which are based on trusted evidence.",
    score: C,
  },
  {
    _id: "N2",
    text: "An individual's views and beliefs should be respected no matter how irrational they are, or how much you might disagree.",
    score: I,
  },
  {
    _id: "N3",
    text: "It's perfectly possible for atheists to be ethical and moral without religion.",
    score: P,
  },
  {
    _id: "N4",
    text: "As society becomes more secular (i.e. less religious) it is losing its moral compass.",
    score: T,
  },

  {
    _id: "O1",
    text: "A reduction in house prices would be good as first time buyers would be helped onto the housing ladder.",
    score: C,
  },
  {
    _id: "O2",
    text: "It's better if house prices stay high as people with mortgages would lose money if prices fell.",
    score: I,
  },
];

export default QUESTIONS;

export { C, I, P, T };
