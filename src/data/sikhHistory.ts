export interface TimelineEvent {
  id: number;
  year: number;
  title: string;
  titlePa?: string; // Punjabi title
  description: string;
  descriptionPa?: string; // Punjabi description
  category: 'guru' | 'battle' | 'temple' | 'scripture' | 'political' | 'other';
  important?: boolean;
}

export const sikhTimelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: 1469,
    title: "Birth of Guru Nanak Dev Ji",
    titlePa: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ",
    description: "Guru Nanak Dev Ji, the founder of Sikhism, was born in Talwandi, now known as Nankana Sahib, Pakistan.",
    descriptionPa: "ਸਿੱਖ ਧਰਮ ਦੇ ਸੰਸਥਾਪਕ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ ਤਲਵੰਡੀ ਵਿੱਚ ਹੋਇਆ, ਜੋ ਹੁਣ ਪਾਕਿਸਤਾਨ ਵਿੱਚ ਨਨਕਾਣਾ ਸਾਹਿਬ ਦੇ ਨਾਮ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ।",
    category: 'guru',
    important: true
  },
  {
    id: 2,
    year: 1499,
    title: "Guru Nanak's Divine Revelation",
    titlePa: "ਗੁਰੂ ਨਾਨਕ ਦਾ ਦਿਵਯ ਪ੍ਰਕਾਸ਼",
    description: "After disappearing into the river for three days, Guru Nanak emerged with the message 'There is no Hindu, there is no Muslim' and began his missionary work.",
    descriptionPa: "ਨਦੀ ਵਿੱਚ ਤਿੰਨ ਦਿਨ ਗਾਇਬ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਗੁਰੂ ਨਾਨਕ 'ਨਾ ਕੋ ਹਿੰਦੂ, ਨਾ ਕੋ ਮੁਸਲਮਾਨ' ਦੇ ਸੰਦੇਸ਼ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ ਅਤੇ ਆਪਣੇ ਧਾਰਮਿਕ ਪ੍ਰਚਾਰ ਦਾ ਕੰਮ ਸ਼ੁਰੂ ਕੀਤਾ।",
    category: 'guru',
    important: true
  },
  {
    id: 3,
    year: 1504,
    title: "Settlement at Kartarpur",
    description: "Guru Nanak established the town of Kartarpur and created the foundations for Sikh religious practices.",
    category: 'guru'
  },
  {
    id: 4,
    year: 1539,
    title: "Guru Angad Dev Ji becomes the Second Guru",
    description: "Guru Nanak appointed Guru Angad Dev Ji as his successor before his death. Guru Angad developed the Gurmukhi script for writing the Punjabi language.",
    category: 'guru',
    important: true
  },
  {
    id: 5,
    year: 1552,
    title: "Guru Amar Das Ji becomes the Third Guru",
    description: "Guru Amar Das introduced the Langar system, promoting equality by having everyone sit together to eat regardless of caste or status.",
    category: 'guru'
  },
  {
    id: 6,
    year: 1574,
    title: "Guru Ram Das Ji becomes the Fourth Guru",
    description: "Guru Ram Das founded the city of Ramdaspur (later Amritsar) and began the construction of the Harmandir Sahib (Golden Temple).",
    category: 'guru'
  },
  {
    id: 7,
    year: 1581,
    title: "Guru Arjan Dev Ji becomes the Fifth Guru",
    description: "Guru Arjan Dev Ji completed the construction of the Harmandir Sahib and compiled the Adi Granth, the first version of the Sikh scripture.",
    category: 'guru',
    important: true
  },
  {
    id: 8,
    year: 1604,
    title: "Compilation of the Adi Granth",
    description: "The Adi Granth, the first rendition of the Sikh holy text, was compiled and installed at the Harmandir Sahib.",
    category: 'scripture',
    important: true
  },
  {
    id: 9,
    year: 1606,
    title: "Martyrdom of Guru Arjan Dev Ji",
    description: "Guru Arjan Dev Ji became the first Sikh martyr, tortured to death on the orders of Mughal Emperor Jahangir.",
    category: 'guru',
    important: true
  },
  {
    id: 10,
    year: 1606,
    title: "Guru Hargobind Ji becomes the Sixth Guru",
    description: "Guru Hargobind introduced the concept of Miri Piri, representing the temporal and spiritual authority, and built the Akal Takht.",
    category: 'guru'
  },
  {
    id: 11,
    year: 1644,
    title: "Guru Har Rai Ji becomes the Seventh Guru",
    description: "Guru Har Rai was known for his compassion for all living beings and his medical knowledge.",
    category: 'guru'
  },
  {
    id: 12,
    year: 1661,
    title: "Guru Har Krishan Ji becomes the Eighth Guru",
    description: "Guru Har Krishan became guru at the age of five and was known for serving the sick during a smallpox epidemic in Delhi.",
    category: 'guru'
  },
  {
    id: 13,
    year: 1664,
    title: "Guru Tegh Bahadur Ji becomes the Ninth Guru",
    description: "Guru Tegh Bahadur was known for his poetic compositions and his defense of religious freedom.",
    category: 'guru'
  },
  {
    id: 14,
    year: 1675,
    title: "Martyrdom of Guru Tegh Bahadur Ji",
    description: "Guru Tegh Bahadur was executed in Delhi by Mughal Emperor Aurangzeb for refusing to convert to Islam and for defending the religious freedom of Hindus.",
    category: 'guru',
    important: true
  },
  {
    id: 15,
    year: 1675,
    title: "Guru Gobind Singh Ji becomes the Tenth Guru",
    description: "Guru Gobind Singh became the tenth and final human guru of the Sikhs at the age of nine.",
    category: 'guru',
    important: true
  },
  {
    id: 16,
    year: 1699,
    title: "Creation of the Khalsa",
    titlePa: "ਖਾਲਸੇ ਦੀ ਸਾਜਨਾ",
    description: "Guru Gobind Singh established the Khalsa order on Vaisakhi, creating a community of initiated Sikhs with distinct identity and discipline.",
    descriptionPa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 'ਤੇ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਜਿਸ ਨਾਲ ਵਿਲੱਖਣ ਪਛਾਣ ਅਤੇ ਅਨੁਸ਼ਾਸਨ ਵਾਲੇ ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖਾਂ ਦਾ ਸਮੁਦਾਏ ਬਣਿਆ।",
    category: 'guru',
    important: true
  },
  {
    id: 17,
    year: 1708,
    title: "Guru Granth Sahib becomes the Eternal Guru",
    description: "Before his death, Guru Gobind Singh declared the Guru Granth Sahib as the eternal guru of the Sikhs, ending the line of human gurus.",
    category: 'scripture',
    important: true
  },
  {
    id: 18,
    year: 1716,
    title: "Banda Singh Bahadur's Execution",
    description: "Banda Singh Bahadur, a military commander who established Sikh rule in parts of Punjab, was executed by the Mughals after being captured.",
    category: 'political'
  },
  {
    id: 19,
    year: 1762,
    title: "Vadda Ghalughara (The Great Holocaust)",
    description: "Thousands of Sikhs were killed by Afghan forces under Ahmad Shah Durrani in what became known as the Great Holocaust.",
    category: 'battle',
    important: true
  },
  {
    id: 20,
    year: 1799,
    title: "Ranjit Singh establishes the Sikh Empire",
    description: "Maharaja Ranjit Singh unified the Sikh Misls (confederacies) and established the Sikh Empire with its capital at Lahore.",
    category: 'political',
    important: true
  },
  {
    id: 21,
    year: 1839,
    title: "Death of Maharaja Ranjit Singh",
    description: "With the death of Maharaja Ranjit Singh, the Sikh Empire began to decline due to internal disputes and British interference.",
    category: 'political'
  },
  {
    id: 22,
    year: 1845,
    title: "First Anglo-Sikh War",
    description: "The first major conflict between the Sikh Empire and the British East India Company, resulting in the Treaty of Lahore.",
    category: 'battle'
  },
  {
    id: 23,
    year: 1848,
    title: "Second Anglo-Sikh War",
    description: "The final conflict between the Sikh Empire and the British East India Company, resulting in the annexation of the Punjab.",
    category: 'battle',
    important: true
  },
  {
    id: 24,
    year: 1849,
    title: "Annexation of Punjab",
    description: "The Punjab was formally annexed by the British East India Company, ending the Sikh Empire.",
    category: 'political',
    important: true
  },
  {
    id: 25,
    year: 1873,
    title: "Formation of Singh Sabha Movement",
    description: "The Singh Sabha Movement was formed to revive Sikhism and counter the influence of other religions.",
    category: 'political'
  },
  {
    id: 26,
    year: 1920,
    title: "Formation of the Shiromani Gurdwara Parbandhak Committee (SGPC)",
    description: "The SGPC was formed to manage gurdwaras (Sikh temples) throughout Punjab.",
    category: 'political'
  },
  {
    id: 27,
    year: 1925,
    title: "Sikh Gurdwaras Act",
    description: "The British government passed the Sikh Gurdwaras Act, returning control of gurdwaras to the Sikh community.",
    category: 'political'
  },
  {
    id: 28,
    year: 1947,
    title: "Partition of India",
    description: "The Partition of India resulted in the division of Punjab between India and Pakistan, causing massive displacement and violence affecting millions of Sikhs.",
    category: 'political',
    important: true
  },
  {
    id: 29,
    year: 1966,
    title: "Formation of Punjab State",
    description: "The Indian state of Punjab was reorganized on linguistic grounds, creating a Punjabi-speaking state.",
    category: 'political'
  },
  {
    id: 30,
    year: 1973,
    title: "Anandpur Sahib Resolution",
    description: "The Akali Dal political party adopted the Anandpur Sahib Resolution, calling for greater autonomy for Punjab.",
    category: 'political'
  },
  {
    id: 31,
    year: 1984,
    title: "Operation Blue Star",
    titlePa: "ਆਪਰੇਸ਼ਨ ਬਲਿਊ ਸਟਾਰ",
    description: "Indian military operation to remove Sikh militants from the Golden Temple complex in Amritsar, causing damage to sacred buildings and many casualties.",
    descriptionPa: "ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਸੁਨਹਿਰੀ ਮੰਦਰ ਕੰਪਲੈਕਸ ਤੋਂ ਸਿੱਖ ਉਗਰਵਾਦੀਆਂ ਨੂੰ ਹਟਾਉਣ ਲਈ ਭਾਰਤੀ ਫੌਜੀ ਕਾਰਵਾਈ, ਜਿਸ ਕਾਰਨ ਪਵਿੱਤਰ ਇਮਾਰਤਾਂ ਨੂੰ ਨੁਕਸਾਨ ਅਤੇ ਕਈ ਲੋਕਾਂ ਦੀ ਮੌਤ ਹੋਈ।",
    category: 'political',
    important: true
  },
  {
    id: 32,
    year: 1984,
    title: "Anti-Sikh Riots",
    titlePa: "ਸਿੱਖ-ਵਿਰੋਧੀ ਦੰਗੇ",
    description: "Following the assassination of Prime Minister Indira Gandhi by her Sikh bodyguards, anti-Sikh riots broke out across India, particularly in Delhi.",
    descriptionPa: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਇੰਦਰਾ ਗਾਂਧੀ ਦੀ ਉਨ੍ਹਾਂ ਦੇ ਸਿੱਖ ਅੰਗਰਖਿਅਕਾਂ ਦੁਆਰਾ ਹੱਤਿਆ ਤੋਂ ਬਾਅਦ, ਸਾਰੇ ਭਾਰਤ ਵਿੱਚ, ਖਾਸ ਕਰਕੇ ਦਿੱਲੀ ਵਿੱਚ ਸਿੱਖ-ਵਿਰੋਧੀ ਦੰਗੇ ਭੜਕ ਉੱਠੇ।",
    category: 'political',
    important: true
  },
  {
    id: 33,
    year: 1995,
    title: "End of Insurgency in Punjab",
    description: "The Sikh insurgency that began in the 1980s largely came to an end, bringing peace to Punjab.",
    category: 'political'
  },
  {
    id: 34,
    year: 1999,
    title: "Tercentenary of the Khalsa",
    description: "Global celebrations marked 300 years since the creation of the Khalsa by Guru Gobind Singh.",
    category: 'other',
    important: true
  },
  {
    id: 35,
    year: 2004,
    title: "Dr. Manmohan Singh becomes Prime Minister",
    description: "Dr. Manmohan Singh became the first Sikh Prime Minister of India, serving two consecutive terms until 2014.",
    category: 'political',
    important: true
  },
  {
    id: 36,
    year: 2010,
    title: "Golden Temple Entrance Project",
    description: "Completion of the Golden Temple entrance plaza, expanding and beautifying the entrance to the holiest Sikh shrine.",
    category: 'temple'
  }
];

// Helper function to get events by time period
export const getEventsByPeriod = (startYear: number, endYear: number): TimelineEvent[] => {
  return sikhTimelineEvents.filter(event => event.year >= startYear && event.year <= endYear);
};

// Helper function to get events by category
export const getEventsByCategory = (category: string): TimelineEvent[] => {
  return sikhTimelineEvents.filter(event => event.category === category);
};

// Helper function to get important events
export const getImportantEvents = (): TimelineEvent[] => {
  return sikhTimelineEvents.filter(event => event.important);
};
