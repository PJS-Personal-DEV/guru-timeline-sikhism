export interface TimelineEvent {
  id: string;
  year: number;
  exactDate?: string; // ISO date string for exact dates
  title_en: string;
  title_pa: string;
  description_en: string;
  description_pa: string;
  category: 'guru' | 'battle' | 'temple' | 'scripture' | 'political' | 'martyrdom' | 'historical' | 'establishment' | 'general' | 'other';
  important: boolean;
  tags: string[];
}

export const sikhHistory: TimelineEvent[] = [
  {
    id: "guru_nanak_birth",
    year: 1469,
    exactDate: "1469-04-15T00:00:00Z",
    title_en: "Birth of Guru Nanak Dev Ji",
    title_pa: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ",
    description_en: "Guru Nanak Dev Ji, the founder of Sikhism, was born in Talwandi (now Nankana Sahib, Pakistan). His birth marked the beginning of the Sikh faith.",
    description_pa: "ਸਿੱਖ ਧਰਮ ਦੇ ਸੰਸਥਾਪਕ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ, ਪਾਕਿਸਤਾਨ) ਵਿੱਚ ਹੋਇਆ। ਉਨ੍ਹਾਂ ਦੇ ਜਨਮ ਨੇ ਸਿੱਖ ਧਰਮ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ।",
    category: "guru",
    important: true,
    tags: ["Guru Nanak", "Birth", "Talwandi", "Founder"]
  },
  {
    id: "guru_nanak_enlightenment",
    year: 1499,
    title_en: "Guru Nanak's Divine Calling",
    title_pa: "ਗੁਰੂ ਨਾਨਕ ਦਾ ਬ੍ਰਹਮ ਗਿਆਨ",
    description_en: "At the age of 30, Guru Nanak received divine enlightenment while bathing in the River Bein. He disappeared for three days and returned with the message 'There is no Hindu, there is no Muslim'.",
    description_pa: "30 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ, ਗੁਰੂ ਨਾਨਕ ਨੂੰ ਬੇਇਨ ਨਦੀ ਵਿੱਚ ਇਸ਼ਨਾਨ ਕਰਦੇ ਸਮੇਂ ਬ੍ਰਹਮ ਗਿਆਨ ਪ੍ਰਾਪਤ ਹੋਇਆ। ਉਹ ਤਿੱਨ ਦਿਨ ਲਈ ਗਾਇਬ ਹੋ ਗਏ ਅਤੇ 'ਨਾ ਕੋਈ ਹਿੰਦੂ ਹੈ, ਨਾ ਕੋਈ ਮੁਸਲਮਾਨ ਹੈ' ਦੇ ਸੰਦੇਸ਼ ਨਾਲ ਵਾਪਸ ਆਏ।",
    category: "guru",
    important: true,
    tags: ["Divine calling", "River Bein", "Enlightenment"]
  },
  {
    id: "kartarpur_establishment",
    year: 1504,
    title_en: "Establishment of Kartarpur",
    title_pa: "ਕਰਤਾਰਪੁਰ ਦੀ ਸਥਾਪਨਾ",
    description_en: "Guru Nanak established the first Sikh community in Kartarpur, where he spent the last 18 years of his life. This became the model for Sikh community living.",
    description_pa: "ਗੁਰੂ ਨਾਨਕ ਨੇ ਕਰਤਾਰਪੁਰ ਵਿੱਚ ਪਹਿਲਾ ਸਿੱਖ ਸਮੁਦਾਇ ਸਥਾਪਿਤ ਕੀਤਾ, ਜਿੱਥੇ ਉਨ੍ਹਾਂ ਨੇ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਦੇ ਆਖਰੀ 18 ਸਾਲ ਬਿਤਾਏ। ਇਹ ਸਿੱਖ ਸਮੁਦਾਇਕ ਜੀਵਨ ਦਾ ਮਾਡਲ ਬਣਿਆ।",
    category: "establishment",
    important: true,
    tags: ["Kartarpur", "First community", "Sikh society"]
  },
  {
    id: "guru_nanak_death",
    year: 1539,
    exactDate: "1539-09-22T00:00:00Z",
    title_en: "Guru Nanak's Ascension",
    title_pa: "ਗੁਰੂ ਨਾਨਕ ਦਾ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣਾ",
    description_en: "Guru Nanak Dev Ji passed away in Kartarpur at the age of 70. Before his death, he appointed Guru Angad as his successor, establishing the tradition of Guru succession.",
    description_pa: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ 70 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਕਰਤਾਰਪੁਰ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ। ਆਪਣੀ ਮੌਤ ਤੋਂ ਪਹਿਲਾਂ, ਉਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਅੰਗਦ ਨੂੰ ਆਪਣਾ ਉੱਤਰਾਧਿਕਾਰੀ ਨਿਯੁਕਤ ਕੀਤਾ।",
    category: "guru",
    important: true,
    tags: ["Death", "Succession", "Guru Angad"]
  },
  {
    id: "guru_angad_gurmukhi",
    year: 1541,
    title_en: "Development of Gurmukhi Script",
    title_pa: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਵਿਕਾਸ",
    description_en: "Guru Angad Dev Ji standardized and promoted the Gurmukhi script, which became the written form for recording Sikh scriptures and Punjabi language.",
    description_pa: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਮਾਨਕੀਕਰਨ ਅਤੇ ਪ੍ਰਚਾਰ ਕੀਤਾ, ਜੋ ਸਿੱਖ ਧਰਮ ਗ੍ਰੰਥਾਂ ਅਤੇ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ ਲਿਖਤੀ ਰੂਪ ਬਣੀ।",
    category: "scripture",
    important: true,
    tags: ["Gurmukhi", "Script", "Writing system"]
  },
  {
    id: "golden_temple_foundation",
    year: 1588,
    exactDate: "1588-12-15T00:00:00Z",
    title_en: "Foundation of Harmandir Sahib (Golden Temple)",
    title_pa: "ਹਰਿਮੰਦਰ ਸਾਹਿਬ (ਸੁਵਰਨ ਮੰਦਰ) ਦੀ ਨੀਂਹ",
    description_en: "Guru Arjan Dev Ji laid the foundation stone of Harmandir Sahib in Amritsar. The temple was designed to be accessible from all four directions, symbolizing openness to all people.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਨੀਂਹ ਰੱਖੀ। ਮੰਦਰ ਨੂੰ ਚਾਰੇ ਦਿਸ਼ਾਵਾਂ ਤੋਂ ਪਹੁੰਚਯੋਗ ਬਣਾਇਆ ਗਿਆ, ਜੋ ਸਾਰੇ ਲੋਕਾਂ ਲਈ ਖੁੱਲੇਪਨ ਦਾ ਪ੍ਰਤੀਕ ਸੀ।",
    category: "temple",
    important: true,
    tags: ["Golden Temple", "Harmandir Sahib", "Amritsar", "Foundation"]
  },
  {
    id: "adi_granth_compilation",
    year: 1604,
    title_en: "Compilation of Adi Granth",
    title_pa: "ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ",
    description_en: "Guru Arjan Dev Ji compiled the first official Sikh scripture, the Adi Granth, including hymns of the first five Gurus and selected saints from different religions.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਪਹਿਲਾ ਅਧਿਕਾਰਿਕ ਸਿੱਖ ਧਰਮ ਗ੍ਰੰਥ, ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ ਕੀਤਾ, ਜਿਸ ਵਿੱਚ ਪਹਿਲੇ ਪੰਜ ਗੁਰੂਆਂ ਅਤੇ ਵੱਖ-ਵੱਖ ਧਰਮਾਂ ਦੇ ਚੁਣੇ ਹੋਏ ਸੰਤਾਂ ਦੇ ਭਜਨ ਸ਼ਾਮਲ ਸਨ।",
    category: "scripture",
    important: true,
    tags: ["Adi Granth", "Scripture", "Compilation", "Holy book"]
  },
  {
    id: "guru_arjan_martyrdom",
    year: 1606,
    exactDate: "1606-05-30T00:00:00Z",
    title_en: "Martyrdom of Guru Arjan Dev Ji",
    title_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹੀਦੀ",
    description_en: "Guru Arjan Dev Ji was tortured and martyred by Mughal Emperor Jahangir in Lahore. He became the first Guru to be martyred, setting a precedent of sacrifice for faith.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੂੰ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੁਆਰਾ ਲਾਹੌਰ ਵਿੱਚ ਤਸੀਹੇ ਦੇ ਕੇ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ ਗਿਆ। ਉਹ ਸ਼ਹੀਦ ਹੋਣ ਵਾਲੇ ਪਹਿਲੇ ਗੁਰੂ ਬਣੇ।",
    category: "martyrdom",
    important: true,
    tags: ["Martyrdom", "Jahangir", "Lahore", "Sacrifice"]
  },
  {
    id: "khalsa_creation",
    year: 1699,
    exactDate: "1699-04-13T00:00:00Z",
    title_en: "Creation of the Khalsa",
    title_pa: "ਖਾਲਸਾ ਦੀ ਸਿਰਜਨਾ",
    description_en: "Guru Gobind Singh Ji created the Khalsa brotherhood at Anandpur Sahib on Vaisakhi day. The five beloved ones (Panj Pyare) were the first to be initiated into the Khalsa.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵੈਸਾਖੀ ਦੇ ਦਿਨ ਆਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਖਾਲਸਾ ਭਾਈਚਾਰੇ ਦੀ ਸਿਰਜਨਾ ਕੀਤੀ। ਪੰਜ ਪਿਆਰੇ ਖਾਲਸਾ ਵਿੱਚ ਦੀਕਸ਼ਿਤ ਹੋਣ ਵਾਲੇ ਪਹਿਲੇ ਸਨ।",
    category: "historical",
    important: true,
    tags: ["Khalsa", "Panj Pyare", "Vaisakhi", "Anandpur Sahib"]
  },
  {
    id: "guru_gobind_singh_death",
    year: 1708,
    exactDate: "1708-10-07T00:00:00Z",
    title_en: "Guru Gobind Singh's Ascension",
    title_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਦਾ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣਾ",
    description_en: "Guru Gobind Singh Ji, the tenth and last human Guru, passed away at Nanded. Before his death, he declared the Guru Granth Sahib as the eternal Guru of the Sikhs.",
    description_pa: "ਦਸਵੇਂ ਅਤੇ ਆਖਰੀ ਮਨੁੱਖੀ ਗੁਰੂ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਂਦੇੜ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ। ਮੌਤ ਤੋਂ ਪਹਿਲਾਂ, ਉਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਨੂੰ ਸਿੱਖਾਂ ਦਾ ਸਦੀਵੀ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕੀਤਾ।",
    category: "guru",
    important: true,
    tags: ["Last Guru", "Guru Granth Sahib", "Eternal Guru", "Nanded"]
  },
  {
    id: "ranjit_singh_empire",
    year: 1799,
    title_en: "Maharaja Ranjit Singh captures Lahore",
    title_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਲਾਹੌਰ ਤੇ ਕਬਜ਼ਾ",
    description_en: "Maharaja Ranjit Singh captured Lahore and began establishing the Sikh Empire, which would become one of the most powerful empires in Indian history.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਲਾਹੌਰ ਤੇ ਕਬਜ਼ਾ ਕੀਤਾ ਅਤੇ ਸਿੱਖ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ ਸ਼ੁਰੂ ਕੀਤੀ, ਜੋ ਭਾਰਤੀਯ ਇਤਿਹਾਸ ਵਿੱਚ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਾਮਰਾਜਾਂ ਵਿੱਚੋਂ ਇੱਕ ਬਣਿਆ।",
    category: "political",
    important: true,
    tags: ["Ranjit Singh", "Sikh Empire", "Lahore", "Kingdom"]
  }
];
