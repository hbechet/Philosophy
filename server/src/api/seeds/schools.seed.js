const mongoose = require('mongoose');
const School = require('../models/school.model');
require('dotenv').config();

const arraySchools = [
    {
        name: "Kantianism",
        description: "The term Kantianism or Kantian is sometimes also used to describe contemporary positions in philosophy of mind, epistemology, and ethics.",
        philosophers: [
            "Immanuel Kant"
        ]
    },
    {
        name: "Transcendental idealism",
        description: "By transcendental (a term that deserves special clarification) Kant means that his philosophical approach to knowledge transcends mere consideration of sensory evidence and requires an understanding of the mind's innate modes of processing that sensory evidence.",
        philosophers: [
            "Immanuel Kant",
            "Arthur Schopenhauer"
        ]
    },
    {
        name: "Classical liberalism",
        description: "Classical liberalism is a political tradition and a branch of liberalism that advocates free market and laissez-faire economics and civil liberties under the rule of law, with special emphasis on individual autonomy, limited government, economic freedom, political freedom and freedom of speech.",
        philosophers: [
            "Immanuel Kant"
        ]
    },
    {
        name: "Rationalism",
        description: 'In philosophy, rationalism is the epistemological view that "regards reason as the chief source and test of knowledge" or "any view appealing to reason as a source of knowledge or justification", often in contrast to other possible sources of knowledge such as faith, tradition, or sensory experience. More formally, rationalism is defined as a methodology or a theory "in which the criterion of truth is not sensory but intellectual and deductive".',
        philosophers: [
            "René Descartes",
            "Gottfried Wilhelm Leibniz"
        ]
    },
    {
        name: "Cartesianism",
        description: 'Cartesianism is the philosophical and scientific system of René Descartes and its subsequent development by other seventeenth century thinkers, most notably François Poullain de la Barre, Nicolas Malebranche and Baruch Spinoza. Descartes is often regarded as the first thinker to emphasize the use of reason to develop the natural sciences. For him, philosophy was a thinking system that embodied all knowledge.',
        philosophers: [
            "René Descartes"
        ]
    },
    {
        name: "Optimism",
        description: 'Philosophers often link the concept of optimism with the name of Gottfried Wilhelm Leibniz, who held that we live in the best of all possible worlds (le meilleur des mondes possibles), or that God created a physical universe that applies the laws of physics.',
        philosophers: [
            "Gottfried Wilhelm Leibniz"
        ]
    },
    {
        name: "Conceptualism",
        description: "In metaphysics, conceptualism is a theory that explains universality of particulars as conceptualized frameworks situated within the thinking mind. Intermediate between nominalism and realism, the conceptualist view approaches the metaphysical concept of universals from a perspective that denies their presence in particulars outside the mind's perception of them. Conceptualism is anti-realist about abstract objects, just like immanent realism is (their difference being that immanent realism accepts there are mind-independent facts about whether universals are instantiated).",
        philosophers: [
            "Gottfried Wilhelm Leibniz",
            "Georg Wilhelm Friedrich Hegel"
        ]
    },
    {
        name: "Foundationalism",
        description: 'Foundationalism concerns philosophical theories of knowledge resting upon non-inferential justified belief, or some secure foundation of certainty such as a conclusion inferred from a basis of sound premises. The main rival of the foundationalist theory of justification is the coherence theory of justification, whereby a body of knowledge, not requiring a secure foundation, can be established by the interlocking strength of its components, like a puzzle solved without prior certainty that each small region was solved correctly.',
        philosophers: [
            "René Descartes",
            "Gottfried Wilhelm Leibniz"
        ]
    },
    {
        name: "Continental philosophy",
        description: "Continental philosophy is an umbrella term for philosophies prominent in continental Europe. Michael E. Rosen has ventured to identify common themes that typically characterize continental philosophy. These themes proposed by Rosen derive from a broadly Kantian thesis that knowledge, experience, and reality are bound and shaped by conditions best understood through philosophical reflection rather than exclusively empirical inquiry.",
        philosophers: [
            "Arthur Schopenhauer",
            "Georg Wilhelm Friedrich Hegel",
            "Søren Aabye Kierkegaard",
            "Martin Heidegger"
        ]
    },
    {
        name: "Philosophical pessimism",
        description: "Philosophical pessimism is a family of philosophical views that assign a negative value to life or existence. Philosophical pessimists commonly argue that the world contains an empirical prevalence of pains over pleasures, that existence is ontologically or metaphysically adverse to living beings, and that life is fundamentally meaningless or without purpose. Philosophical pessimism is not a single coherent movement, but rather a loosely associated group of thinkers with similar ideas and a resemblance to each other.",
        philosophers: [
            "Arthur Schopenhauer"
        ]
    },
    {
        name: "Objective idealism",
        description: "Objective idealism is a philosophical theory that affirms the ideal and spiritual nature of the world and conceives of the idea of which the world is made as the objective and rational form in reality rather than as subjective content of the mind or mental representation. Objective idealism thus differs both from materialism, which holds that the external world is independent of cognizing minds and that mental processes and ideas are by-products of physical events, and from subjective idealism, which conceives of reality as totally dependent on the consciousness of the subject and therefore relative to the subject itself.",
        philosophers: [
            "Georg Wilhelm Friedrich Hegel"
        ]
    },
    {
        name: "Hegelianism",
        description: "Hegel's philosophical system is divided into three parts: the science of logic, the philosophy of nature, and the philosophy of spirit (the latter two of which together constitute the real philosophy).",
        philosophers: [
            "Georg Wilhelm Friedrich Hegel"
        ]
    },
    {
        name: "Anthropological materialism",
        description: "In late modern philosophy, German atheist anthropologist Ludwig Feuerbach signaled a new turn in materialism in his 1841 book The Essence of Christianity, which presented a humanist account of religion as the outward projection of man's inward nature. Feuerbach introduced anthropological materialism, a version of materialism that views materialist anthropology as the universal science.",
        philosophers: [
            "Ludwig Andreas von Feuerbach"
        ]
    },
    {
        name: "Secular humanism",
        description: 'Secular humanism is a philosophy, belief system, or life stance that embraces human reason, logic, secular ethics, and philosophical naturalism, while specifically rejecting religious dogma, supernaturalism, and superstition as the basis of morality and decision-making.',
        philosophers: [
            "Ludwig Andreas von Feuerbach"
        ]
    },
    {
        name: "Existentialism",
        description: 'Existentialism is a family of views and forms of philosophical inquiry that explores the issue of human existence. Existentialist philosophers explore questions related to the meaning, purpose, and value of human existence. Common concepts in existentialist thought include existential crisis, dread, and anxiety in the face of an absurd world and free will, as well as authenticity, courage, and virtue.',
        philosophers: [
            "Søren Aabye Kierkegaard",
            "Martin Heidegger"
        ]
    },
    {
        name: "Perennialism",
        description: 'The perennial philosophy, also referred to as perennialism and perennial wisdom, is a school of thought in philosophy and spirituality which posits that the recurrence of common themes across world religions illuminates universal truths about the nature of reality, humanity, ethics, and consciousness. Some perennialists emphasise common themes in religious experiences and mystical traditions across time and culture, while others argue that religious traditions share a single, metaphysical truth or origin from which all esoteric and exoteric knowledge and doctrine has grown.',
        philosophers: [
            "Aldous Leonard Huxley"
        ]
    }
];

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        const allSchools = await School.find();
        if (allSchools.length !== 0) {
            await School.collection.drop();
        }
    })
    .catch((err) => { console.log('Error while dropping collection.') })
    .then(async () => {
        const schoolDocs = arraySchools.map((school) => new School(school))
        await School.insertMany(schoolDocs);
        console.log("Seed worked fine!");
    })
    .catch((err) => { console.log('Error while inserting seed data.', err) })
    .finally(() => mongoose.disconnect());