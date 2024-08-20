const mongoose = require('mongoose');
const Philosopher = require('../models/philo.model');
require('dotenv').config();

const arrayPhilosophers = [
    {
        name: "René Descartes",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        born_date: "1596-03-31",
        death_date: "1650-02-11",
        nationality: "French",
        schools: [
            "Rationalism",
            "Cartesianism",
            "Mechanism",
            "Augustinianism",
            "Foundationalism"
        ],
        ideas: [
            "I think, therefore I am",
            "It is not enough to have a good mind; the main thing is to use it well.",
            "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
            "The reading of all good books is like a conversation with the finest minds of past centuries.",
            "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
            "Each problem that I solved became a rule, which served afterwards to solve other problems.",
            "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things",
            "Perfect numbers like perfect men are very rare.",
            "Everything is self-evident",
            "Except our own thoughts, there is nothing absolutely in our power"
        ],
    },
    {
        name: "Immanuel Kant",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Immanuel_Kant_-_Gemaelde_1.jpg",
        born_date: "1724-04-22",
        death_date: "1804-02-12",
        nationality: "German",
        schools: [
            "Kantianism",
            "Transcendental idealism",
            "Classical liberalism"
        ],
        ideas: [
            "He who is cruel to animals becomes hard also in his dealings with men. We can judge the heart of a man by his treatment of animals.",
            "Happiness is not an ideal of reason, but of imagination.",
            "Science is organized knowledge. Wisdom is organized life.",
            "Live your life as though your every act were to become a universal law.",
            "Thoughts without content are empty, intuitions without concepts are blind.",
            "Give me matter, and I will construct a world out of it!",
            "Experience without theory is blind, but theory without experience is mere intellectual play.",
            "Ingratitude is the essence of vileness.",
            "I had therefore to remove knowledge, in order to make room for belief.",
            "What can I know? What ought I to do? What can I hope?",
            "We are not rich by what we possess but by what we can do without."
        ],
    },
    {
        name: "Gottfried Wilhelm Leibniz",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg/486px-Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg",
        born_date: "1646-06-21",
        death_date: "1716-11-14",
        nationality: "German",
        schools: [
            "Rationalism",
            "Optimism",
            "Conceptualism",
            "Foundationalism"
        ],
        ideas: [
            "This is the best of all possible worlds.",
            "He who hasn't tasted bitter things hasn't earned sweet things",
            "There is nothing without a reason",
            "Music is the hidden arithmetical exercise of a mind unconscious that it is calculating",
            "There is nothing in the understanding which has not come from the senses, except the understanding itself, or the one who understands",
            "The present is big with the future",
            "Why is there something rather than nothing?",
            "Nothing is in the intellect that was not first in the senses, except the intellect itself",
            "Nothing is necessitated whose opposite is possible",
            "It is unworthy of excellent men to lose hours like slaves in the labour of calculation which could safely be relegated to anyone else if machines were used",
            "If you could blow the brain up to the size of a mill and walk about inside, you would not find consciousness",
            "The means of obtaining as much variety as possible, but with the greatest possible order...is the means of obtaining as much perfection as possible",
            "He who does not act does not exist"
        ],
    },
    {
        name: "Arthur Schopenhauer",
        photo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg",
        born_date: "1788-02-22",
        death_date: "1860-07-21",
        nationality: "German",
        schools: [
            "Transcendental idealism",
            "Continental philosophy",
            "Philosophical pessimism"
        ],
        ideas: [
            "Talent hits a target no one else can hit. Genius hits a target no one else can see",
            "Compassion is the basis of morality",
            "A man can be himself only so long as he is alone; and if he does not love solitude, he will not love freedom; for it is only when he is alone that he is really free",
            "Mostly it is loss which teaches us about the worth of things",
            "The assumption that animals are without rights and the illusion that our treatment of them has no moral significance is a positively outrageous example of Western crudity and barbarity. Universal compassion is the only guarantee of morality",
            "Every man takes the limits of his own field of vision for the limits of the world",
            "Happiness consists in frequent repetition of pleasure",
            "The person who writes for fools is always sure of a large audience",
            "It is difficult to find happiness within oneself, but it is impossible to find it anywhere else",
            "Compassion for animals is intimately associated with goodness of character, and it may be confidently asserted that he who is cruel to animals cannot be a good man",
            "One should use common words to say uncommon things"
        ],
    },
    {
        name: "Georg Wilhelm Friedrich Hegel",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hegel_by_Schlesinger.jpg/474px-Hegel_by_Schlesinger.jpg",
        born_date: "1770-08-27",
        death_date: "1831-11-14",
        nationality: "German",
        schools: [
            "Conceptualism",
            "Continental philosophy",
            "German idealism",
            "Objective idealism",
            "Hegelianism"
        ],
        ideas: [
            "Nothing great in the world was accomplished without passion",
            "We learn from history that we do not learn from history",
            "To be independent of public opinion is the first formal condition of achieving anything great",
            "Genuine tragedies in the world are not conflicts between right and wrong. They are conflicts between two rights",
            "What experience and history teaches us is that people and governments have never learned anything from history, or acted on principles deduced from it",
            "Truth is found neither in the thesis nor the antithesis, but in an emergent synthesis which reconciles the two",
            "Evil resides in the very gaze which perceives Evil all around itself",
            "Only one man ever understood me, and he didn't understand me",
            "Education is the art of making man ethical"
        ],
    },
    {
        name: "Ludwig Andreas von Feuerbach",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ludwig_Andreas_Feuerbach.jpg/525px-Ludwig_Andreas_Feuerbach.jpg",
        born_date: "1804-07-28",
        death_date: "1872-09-13",
        nationality: "German",
        schools: [
            "Anthropological materialism",
            "Secular humanism",
            "Young Hegelians"
        ],
        ideas: [
            "I would rather be a devil in alliance with truth, than an angel in alliance with falsehood.",
            "It is not as in the Bible, that God created man in his own image. But, on the contrary, man created God in his own image.",
            "As we expand our knowledge of good books, we shrink the circle of men whose company we appreciate.",
            "For the religious the holy is truth, for the philosophic the truth is holy",
            "The power of miracle is the power of imagination",
            "What yesterday was still religion is no longer such today; and what today is atheism, tomorrow will be religion",
            "To theology, ...only what it holds sacred is true, whereas to philosophy, only what holds true is sacred",
            "Is it man that possesses love, or is it not much rather love that possesses man?",
            "The first and highest law must be the love of man to man. Homo homini Deus est - this is the supreme practical maxim, this is the turning point of the world's History",
            "Faith is essentially intolerant ... essentially because necessarily bound up with faith is the illusion that one's cause is also God's cause",
            "Only he is a truly ethical, a truly human being, who has the courage to see through his own religious feelings and needs",
            "The history of philosophical system is the picture gallery of reason"
        ],
    },
    {
        name: "Søren Aabye Kierkegaard",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg",
        born_date: "1813-05-05",
        death_date: "1855-11-11",
        nationality: "Danish",
        schools: [
            "Continental philosophy",
            "Existentialism"
        ],
        ideas: [
            "Life can only be understood backwards; but it must be lived forwards",
            "People demand freedom of speech as a compensation for the freedom of thought which they seldom use",
            "Anxiety is the dizziness of freedom",
            "People understand me so poorly that they don't even understand my complaint about them not understanding me",
            "Life is not a problem to be solved, but a reality to be experienced",
            "There are two ways to be fooled. One is to believe what isn't true; the other is to refuse to believe what is true",
            "The most common form of despair is not being who you are",
        ],
    },
    {
        name: "Martin Heidegger",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Heidegger_2_%281960%29.jpg",
        born_date: "1889-09-26",
        death_date: "1976-05-26",
        nationality: "German",
        schools: [
            "Continental philosophy",
            "Existentialism",
            "Phenomenology",
            "Hermeneutics"
        ],
        ideas: [
            "Tell me how you read and I'll tell you who you are",
            "Man acts as though he were the shaper and master of language, while in fact language remains the master of man",
            "Everyone is the other and no one is himself",
            "Thinking only begins at the point where we have come to know that Reason, glorified for centuries, is the most obstinate adversary of thinking",
            "Only he who already understands can listen",
            "The poets are in the vanguard of a changed conception of Being",
            "And so man, as existing transcendence abounding in and surpassing toward possibilities, is a creature of distance. Only through the primordial distances he establishes toward all being in his transcendence does a true nearness to things flourish in him"
        ],
    },
    {
        name: "Aldous Leonard Huxley",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Aldous_Huxley_psychical_researcher.png/450px-Aldous_Huxley_psychical_researcher.png",
        born_date: "1894-07-26",
        death_date: "1963-11-22",
        nationality: "English",
        schools: [
            "Perennialism"
        ],
        ideas: [
            "Facts do not cease to exist because they are ignored",
            "After silence, that which comes nearest to expressing the inexpressible is music",
            "But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin",
            "You shall know the truth and the truth shall make you mad",
            "The more powerful and original a mind, the more it will incline towards the religion of solitude",
            "If one's different, one's bound to be lonely",
            "I want to know what passion is. I want to feel something strongly",
            "I wanted to change the world. But I have found that the only thing one can be sure of changing is oneself",
            "An intellectual is a person who has discovered something more interesting than sex",
            "One believes things because one has been conditioned to believe them",
            "There are things known and there are things unknown, and in between are the doors of perception",
            "I am I, and I wish I weren't"
        ],
    },
];

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        const allPhilosophers = await Philosopher.find();
        if (allPhilosophers.length !== 0) {
            await Philosopher.collection.drop();
        }
    })
    .catch((err) => { console.log('Error while dropping collection.') })
    .then(async () => {
        const philosDocs = arrayPhilosophers.map((philo) => new Philosopher(philo))
        await Philosopher.insertMany(philosDocs);
        console.log("Seed worked fine!");
    })
    .catch((err) => { console.log('Error while inserting seed data.', err) })
    .finally(() => mongoose.disconnect());