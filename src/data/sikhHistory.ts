
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
    id: "guru_angad_death",
    year: 1552,
    exactDate: "1552-03-29T00:00:00Z",
    title_en: "Guru Angad Dev Ji's Ascension",
    title_pa: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣਾ",
    description_en: "Guru Angad Dev Ji passed away, and Guru Amar Das Ji became the third Guru of the Sikhs at the age of 73.",
    description_pa: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ, ਅਤੇ ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ 73 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸਿੱਖਾਂ ਦੇ ਤੀਜੇ ਗੁਰੂ ਬਣੇ।",
    category: "guru",
    important: false,
    tags: ["Guru Angad", "Succession", "Guru Amar Das"]
  },
  {
    id: "goindwal_establishment",
    year: 1553,
    title_en: "Establishment of Goindwal",
    title_pa: "ਗੋਇੰਦਵਾਲ ਦੀ ਸਥਾਪਨਾ",
    description_en: "Guru Amar Das Ji established Goindwal as a new center for Sikh pilgrimage and introduced the concept of langar (community kitchen) on a larger scale.",
    description_pa: "ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ ਗੋਇੰਦਵਾਲ ਨੂੰ ਸਿੱਖ ਤੀਰਥ ਯਾਤਰਾ ਦੇ ਇੱਕ ਨਵੇਂ ਕੇਂਦਰ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ ਅਤੇ ਲੰਗਰ ਦੀ ਧਾਰਨਾ ਨੂੰ ਵੱਡੇ ਪੈਮਾਨੇ ਤੇ ਸ਼ੁਰੂ ਕੀਤਾ।",
    category: "establishment",
    important: true,
    tags: ["Goindwal", "Langar", "Pilgrimage"]
  },
  {
    id: "guru_ram_das_period",
    year: 1574,
    title_en: "Guru Ram Das becomes Fourth Guru",
    title_pa: "ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਚੌਥੇ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Ram Das Ji became the fourth Guru and founded the city of Amritsar. He also composed the Lavan (wedding hymns) still used in Sikh marriages.",
    description_pa: "ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਚੌਥੇ ਗੁਰੂ ਬਣੇ ਅਤੇ ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਉਨ੍ਹਾਂ ਨੇ ਲਾਵਾਂ (ਵਿਆਹ ਦੇ ਭਜਨ) ਦੀ ਰਚਨਾ ਵੀ ਕੀਤੀ ਜੋ ਅੱਜ ਵੀ ਸਿੱਖ ਵਿਆਹਾਂ ਵਿੱਚ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।",
    category: "guru",
    important: true,
    tags: ["Guru Ram Das", "Amritsar", "Lavan", "Marriage"]
  },
  {
    id: "amritsar_foundation",
    year: 1577,
    title_en: "Foundation of Amritsar",
    title_pa: "ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਨੀਂਹ",
    description_en: "Guru Ram Das Ji founded the city of Amritsar around a sacred pool. The city would later become the spiritual capital of Sikhism.",
    description_pa: "ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਨੇ ਇੱਕ ਪਵਿੱਤਰ ਸਰੋਵਰ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਇਹ ਸ਼ਹਿਰ ਬਾਅਦ ਵਿੱਚ ਸਿੱਖ ਧਰਮ ਦੀ ਅਧਿਆਤਮਿਕ ਰਾਜਧਾਨੀ ਬਣਿਆ।",
    category: "establishment",
    important: true,
    tags: ["Amritsar", "Sacred pool", "Holy city"]
  },
  {
    id: "guru_arjan_becomes_guru",
    year: 1581,
    title_en: "Guru Arjan becomes Fifth Guru",
    title_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਪੰਜਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Arjan Dev Ji became the fifth Guru at the young age of 18. He would go on to complete the Harmandir Sahib and compile the Adi Granth.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ 18 ਸਾਲ ਦੀ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਪੰਜਵੇਂ ਗੁਰੂ ਬਣੇ। ਉਨ੍ਹਾਂ ਨੇ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਪੂਰਾ ਕੀਤਾ ਅਤੇ ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ ਕੀਤਾ।",
    category: "guru",
    important: true,
    tags: ["Guru Arjan", "Young Guru", "Succession"]
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
    id: "golden_temple_completion",
    year: 1604,
    title_en: "Completion of Harmandir Sahib",
    title_pa: "ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦਾ ਪੂਰਾ ਹੋਣਾ",
    description_en: "The construction of Harmandir Sahib was completed under Guru Arjan Dev Ji. The temple became the central place of worship for Sikhs worldwide.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਅਧੀਨ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦਾ ਨਿਰਮਾਣ ਪੂਰਾ ਹੋਇਆ। ਇਹ ਮੰਦਰ ਦੁਨੀਆ ਭਰ ਦੇ ਸਿੱਖਾਂ ਲਈ ਪੂਜਾ ਦਾ ਕੇਂਦਰੀ ਸਥਾਨ ਬਣਿਆ।",
    category: "temple",
    important: true,
    tags: ["Golden Temple", "Completion", "Central worship"]
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
    id: "guru_hargobind_becomes_guru",
    year: 1606,
    title_en: "Guru Hargobind becomes Sixth Guru",
    title_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਛੇਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Hargobind Ji became the sixth Guru at age 11. He introduced the concept of Miri-Piri (temporal and spiritual authority) and wore two swords.",
    description_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ 11 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਛੇਵੇਂ ਗੁਰੂ ਬਣੇ। ਉਨ੍ਹਾਂ ਨੇ ਮੀਰੀ-ਪੀਰੀ (ਲੌਕਿਕ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ) ਦੀ ਧਾਰਨਾ ਸ਼ੁਰੂ ਕੀਤੀ ਅਤੇ ਦੋ ਤਲਵਾਰਾਂ ਪਹਿਨੀਆਂ।",
    category: "guru",
    important: true,
    tags: ["Guru Hargobind", "Miri-Piri", "Two swords", "Temporal authority"]
  },
  {
    id: "akal_takht_foundation",
    year: 1609,
    title_en: "Foundation of Akal Takht",
    title_pa: "ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਸਥਾਪਨਾ",
    description_en: "Guru Hargobind Ji established the Akal Takht (Throne of the Timeless) opposite the Golden Temple as the seat of temporal authority in Sikhism.",
    description_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਨੇ ਸੁਵਰਨ ਮੰਦਰ ਦੇ ਸਾਮ੍ਹਣੇ ਅਕਾਲ ਤਖ਼ਤ (ਅਕਾਲ ਪੁਰਖ ਦੀ ਗੱਦੀ) ਦੀ ਸਥਾਪਨਾ ਸਿੱਖ ਧਰਮ ਵਿੱਚ ਲੌਕਿਕ ਅਧਿਕਾਰ ਦੀ ਗੱਦੀ ਵਜੋਂ ਕੀਤੀ।",
    category: "establishment",
    important: true,
    tags: ["Akal Takht", "Temporal authority", "Throne"]
  },
  {
    id: "battle_rohilla",
    year: 1621,
    title_en: "Battle of Rohilla",
    title_pa: "ਰੋਹਿੱਲਾ ਦੀ ਲੜਾਈ",
    description_en: "Guru Hargobind Ji fought and won the Battle of Rohilla against Mughal forces, establishing Sikh military prowess.",
    description_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਨੇ ਮੁਗਲ ਫੌਜਾਂ ਦੇ ਵਿਰੁੱਧ ਰੋਹਿੱਲਾ ਦੀ ਲੜਾਈ ਲੜੀ ਅਤੇ ਜਿੱਤੀ, ਸਿੱਖ ਫੌਜੀ ਸ਼ਕਤੀ ਸਥਾਪਿਤ ਕੀਤੀ।",
    category: "battle",
    important: false,
    tags: ["Battle", "Rohilla", "Military", "Victory"]
  },
  {
    id: "battle_amritsar",
    year: 1634,
    title_en: "Battle of Amritsar",
    title_pa: "ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਲੜਾਈ",
    description_en: "A significant battle fought by Guru Hargobind Ji against Mughal forces near Amritsar, defending Sikh sovereignty.",
    description_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਦੁਆਰਾ ਅੰਮ੍ਰਿਤਸਰ ਨੇੜੇ ਮੁਗਲ ਫੌਜਾਂ ਦੇ ਵਿਰੁੱਧ ਲੜੀ ਗਈ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਲੜਾਈ, ਸਿੱਖ ਸਾਰਭੌਮਤਾ ਦੀ ਰੱਖਿਆ ਕੀਤੀ।",
    category: "battle",
    important: true,
    tags: ["Battle", "Amritsar", "Defense", "Sovereignty"]
  },
  {
    id: "guru_har_rai_becomes_guru",
    year: 1644,
    title_en: "Guru Har Rai becomes Seventh Guru",
    title_pa: "ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਸੱਤਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Har Rai Ji became the seventh Guru at age 14. He was known for his love of nature and established herbal medicine gardens.",
    description_pa: "ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ 14 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸੱਤਵੇਂ ਗੁਰੂ ਬਣੇ। ਉਹ ਕੁਦਰਤ ਪ੍ਰੇਮ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ ਅਤੇ ਉਨ੍ਹਾਂ ਨੇ ਜੜੀ-ਬੂਟੀਆਂ ਦੇ ਬਾਗ ਸਥਾਪਿਤ ਕੀਤੇ।",
    category: "guru",
    important: false,
    tags: ["Guru Har Rai", "Nature lover", "Herbal medicine"]
  },
  {
    id: "guru_har_krishan_becomes_guru",
    year: 1661,
    title_en: "Guru Har Krishan becomes Eighth Guru",
    title_pa: "ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਅੱਠਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Har Krishan Ji became the eighth Guru at the tender age of 5, making him the youngest Guru in Sikh history.",
    description_pa: "ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ 5 ਸਾਲ ਦੀ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਅੱਠਵੇਂ ਗੁਰੂ ਬਣੇ, ਸਿੱਖ ਇਤਿਹਾਸ ਵਿੱਚ ਸਭ ਤੋਂ ਛੋਟੇ ਗੁਰੂ ਬਣੇ।",
    category: "guru",
    important: true,
    tags: ["Guru Har Krishan", "Youngest Guru", "Child Guru"]
  },
  {
    id: "guru_har_krishan_death",
    year: 1664,
    exactDate: "1664-03-30T00:00:00Z",
    title_en: "Guru Har Krishan's Ascension",
    title_pa: "ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣਾ",
    description_en: "Guru Har Krishan Ji passed away at the young age of 8 due to smallpox while helping plague victims in Delhi.",
    description_pa: "ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਦਿੱਲੀ ਵਿੱਚ ਪਲੇਗ ਪੀੜਤਾਂ ਦੀ ਮਦਦ ਕਰਦੇ ਸਮੇਂ ਚੇਚਕ ਕਾਰਨ 8 ਸਾਲ ਦੀ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।",
    category: "guru",
    important: true,
    tags: ["Guru Har Krishan", "Smallpox", "Delhi", "Service"]
  },
  {
    id: "guru_tegh_bahadur_becomes_guru",
    year: 1664,
    title_en: "Guru Tegh Bahadur becomes Ninth Guru",
    title_pa: "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੌਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Tegh Bahadur Ji became the ninth Guru. He was known for his extensive travels and protection of religious freedom.",
    description_pa: "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੌਵੇਂ ਗੁਰੂ ਬਣੇ। ਉਹ ਆਪਣੀ ਵਿਆਪਕ ਯਾਤਰਾਵਾਂ ਅਤੇ ਧਾਰਮਿਕ ਸੁਤੰਤਰਤਾ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ।",
    category: "guru",
    important: true,
    tags: ["Guru Tegh Bahadur", "Religious freedom", "Travels"]
  },
  {
    id: "anandpur_sahib_foundation",
    year: 1665,
    title_en: "Foundation of Anandpur Sahib",
    title_pa: "ਆਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ",
    description_en: "Guru Tegh Bahadur Ji founded the city of Anandpur Sahib (City of Bliss), which would later become the birthplace of the Khalsa.",
    description_pa: "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੇ ਆਨੰਦਪੁਰ ਸਾਹਿਬ (ਆਨੰਦ ਦਾ ਸ਼ਹਿਰ) ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਜੋ ਬਾਅਦ ਵਿੱਚ ਖਾਲਸਾ ਦਾ ਜਨਮ ਸਥਾਨ ਬਣਿਆ।",
    category: "establishment",
    important: true,
    tags: ["Anandpur Sahib", "City of Bliss", "Foundation"]
  },
  {
    id: "guru_tegh_bahadur_martyrdom",
    year: 1675,
    exactDate: "1675-11-11T00:00:00Z",
    title_en: "Martyrdom of Guru Tegh Bahadur Ji",
    title_pa: "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹੀਦੀ",
    description_en: "Guru Tegh Bahadur Ji was executed by Mughal Emperor Aurangzeb in Delhi for refusing to convert to Islam and defending the rights of Kashmiri Pandits.",
    description_pa: "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੂੰ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦੁਆਰਾ ਦਿੱਲੀ ਵਿੱਚ ਇਸਲਾਮ ਕਬੂਲ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਅਤੇ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੇ ਅਧਿਕਾਰਾਂ ਦੀ ਰੱਖਿਆ ਕਰਨ ਲਈ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ ਗਿਆ।",
    category: "martyrdom",
    important: true,
    tags: ["Martyrdom", "Aurangzeb", "Religious freedom", "Kashmiri Pandits"]
  },
  {
    id: "guru_gobind_singh_becomes_guru",
    year: 1675,
    title_en: "Guru Gobind Singh becomes Tenth Guru",
    title_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਸਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Gobind Singh Ji became the tenth and final human Guru at age 9 after his father's martyrdom. He would transform Sikhism forever.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਆਪਣੇ ਪਿਤਾ ਦੀ ਸ਼ਹੀਦੀ ਤੋਂ ਬਾਅਦ 9 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਦਸਵੇਂ ਅਤੇ ਆਖਰੀ ਮਨੁੱਖੀ ਗੁਰੂ ਬਣੇ। ਉਨ੍ਹਾਂ ਨੇ ਸਿੱਖ ਧਰਮ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਬਦਲ ਦਿੱਤਾ।",
    category: "guru",
    important: true,
    tags: ["Guru Gobind Singh", "Tenth Guru", "Transformation"]
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
    id: "battle_anandpur",
    year: 1700,
    title_en: "Siege of Anandpur Sahib",
    title_pa: "ਆਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਘੇਰਾਬੰਦੀ",
    description_en: "Hill chiefs allied with Mughal forces laid siege to Anandpur Sahib. Guru Gobind Singh Ji and the Khalsa defended the fort bravely.",
    description_pa: "ਪਹਾੜੀ ਰਾਜਿਆਂ ਨੇ ਮੁਗਲ ਫੌਜਾਂ ਨਾਲ ਮਿਲ ਕੇ ਆਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਘੇਰਾਬੰਦੀ ਕੀਤੀ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਅਤੇ ਖਾਲਸੇ ਨੇ ਬਹਾਦਰੀ ਨਾਲ ਕਿਲੇ ਦੀ ਰੱਖਿਆ ਕੀਤੀ।",
    category: "battle",
    important: true,
    tags: ["Siege", "Anandpur Sahib", "Defense", "Hill chiefs"]
  },
  {
    id: "battle_chamkaur",
    year: 1704,
    exactDate: "1704-12-22T00:00:00Z",
    title_en: "Battle of Chamkaur",
    title_pa: "ਚਮਕੌਰ ਦੀ ਲੜਾਈ",
    description_en: "The heroic Battle of Chamkaur where Guru Gobind Singh Ji's elder sons Ajit Singh and Jujhar Singh attained martyrdom fighting against overwhelming odds.",
    description_pa: "ਚਮਕੌਰ ਦੀ ਬਹਾਦਰੀ ਭਰੀ ਲੜਾਈ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਵੱਡੇ ਪੁੱਤਰ ਅਜੀਤ ਸਿੰਘ ਅਤੇ ਜੁਝਾਰ ਸਿੰਘ ਨੇ ਬੇਮਿਸਾਲ ਮੁਸ਼ਕਲਾਂ ਦੇ ਵਿਰੁੱਧ ਲੜਦੇ ਹੋਏ ਸ਼ਹੀਦੀ ਪਾਈ।",
    category: "battle",
    important: true,
    tags: ["Chamkaur", "Martyrdom", "Sahibzade", "Heroic battle"]
  },
  {
    id: "sahibzade_martyrdom",
    year: 1704,
    exactDate: "1704-12-27T00:00:00Z",
    title_en: "Martyrdom of Younger Sahibzade",
    title_pa: "ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹੀਦੀ",
    description_en: "Guru Gobind Singh Ji's younger sons, Zorawar Singh (9) and Fateh Singh (7), were bricked alive in Sirhind for refusing to convert to Islam.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਛੋਟੇ ਪੁੱਤਰ ਜੋਰਾਵਰ ਸਿੰਘ (9) ਅਤੇ ਫਤਿਹ ਸਿੰਘ (7) ਨੂੰ ਇਸਲਾਮ ਕਬੂਲ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਲਈ ਸਰਹਿੰਦ ਵਿੱਚ ਜਿਉਂਦੇ ਹੀ ਕੰਧ ਵਿੱਚ ਚਿਣ ਦਿੱਤਾ ਗਿਆ।",
    category: "martyrdom",
    important: true,
    tags: ["Sahibzade", "Zorawar Singh", "Fateh Singh", "Sirhind", "Child martyrs"]
  },
  {
    id: "zafarnama",
    year: 1705,
    title_en: "Zafarnama - Letter of Victory",
    title_pa: "ਜ਼ਫ਼ਰਨਾਮਾ - ਜਿੱਤ ਪੱਤਰ",
    description_en: "Guru Gobind Singh Ji wrote the Zafarnama, a letter to Emperor Aurangzeb, criticizing his policies and asserting the righteousness of his cause.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਜ਼ਫ਼ਰਨਾਮਾ ਲਿਖਿਆ, ਜਿਸ ਵਿੱਚ ਉਸ ਦੀਆਂ ਨੀਤੀਆਂ ਦੀ ਆਲੋਚਨਾ ਅਤੇ ਆਪਣੇ ਉਦੇਸ਼ ਦੀ ਧਾਰਮਿਕਤਾ ਦਾ ਦਾਅਵਾ ਸੀ।",
    category: "political",
    important: true,
    tags: ["Zafarnama", "Aurangzeb", "Letter", "Political"]
  },
  {
    id: "muktsar_battle",
    year: 1705,
    title_en: "Battle of Muktsar",
    title_pa: "ਮੁਕਤਸਰ ਦੀ ਲੜਾਈ",
    description_en: "The Battle of Muktsar where the forty Muktas (liberated ones) who had earlier deserted Guru Gobind Singh Ji returned to fight and attain martyrdom.",
    description_pa: "ਮੁਕਤਸਰ ਦੀ ਲੜਾਈ ਜਿੱਥੇ ਚਾਲੀ ਮੁਕਤੇ (ਮੁਕਤ ਹੋਏ) ਜਿਨ੍ਹਾਂ ਨੇ ਪਹਿਲਾਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੂੰ ਛੱਡਿਆ ਸੀ, ਵਾਪਸ ਆ ਕੇ ਲੜੇ ਅਤੇ ਸ਼ਹੀਦੀ ਪਾਈ।",
    category: "battle",
    important: true,
    tags: ["Muktsar", "Forty Muktas", "Redemption", "Martyrdom"]
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
    id: "banda_singh_bahadur_rise",
    year: 1709,
    title_en: "Banda Singh Bahadur's Campaign",
    title_pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੀ ਮੁਹਿੰਮ",
    description_en: "Banda Singh Bahadur, appointed by Guru Gobind Singh Ji, began his campaign against Mughal rule in Punjab, establishing the first Sikh state.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਨਿਯੁਕਤ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਪੰਜਾਬ ਵਿੱਚ ਮੁਗਲ ਸ਼ਾਸਨ ਦੇ ਵਿਰੁੱਧ ਆਪਣੀ ਮੁਹਿੰਮ ਸ਼ੁਰੂ ਕੀਤੀ, ਪਹਿਲਾ ਸਿੱਖ ਰਾਜ ਸਥਾਪਿਤ ਕੀਤਾ।",
    category: "political",
    important: true,
    tags: ["Banda Singh Bahadur", "First Sikh state", "Campaign", "Punjab"]
  },
  {
    id: "sirhind_conquest",
    year: 1710,
    title_en: "Conquest of Sirhind",
    title_pa: "ਸਰਹਿੰਦ ਦੀ ਜਿੱਤ",
    description_en: "Banda Singh Bahadur conquered Sirhind, avenging the martyrdom of the younger Sahibzade and establishing Sikh rule in the region.",
    description_pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਸਰਹਿੰਦ ਜਿੱਤਿਆ, ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹੀਦੀ ਦਾ ਬਦਲਾ ਲਿਆ ਅਤੇ ਇਸ ਖੇਤਰ ਵਿੱਚ ਸਿੱਖ ਸ਼ਾਸਨ ਸਥਾਪਿਤ ਕੀਤਾ।",
    category: "battle",
    important: true,
    tags: ["Sirhind", "Conquest", "Revenge", "Sikh rule"]
  },
  {
    id: "banda_singh_capture",
    year: 1715,
    title_en: "Capture of Banda Singh Bahadur",
    title_pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੀ ਗ੍ਰਿਫਤਾਰੀ",
    description_en: "Banda Singh Bahadur was captured by Mughal forces after a prolonged siege at Gurdas Nangal fort. He was later executed in Delhi.",
    description_pa: "ਗੁਰਦਾਸ ਨੰਗਲ ਕਿਲੇ ਵਿੱਚ ਲੰਮੀ ਘੇਰਾਬੰਦੀ ਤੋਂ ਬਾਅਦ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੂੰ ਮੁਗਲ ਫੌਜਾਂ ਨੇ ਫੜ ਲਿਆ। ਬਾਅਦ ਵਿੱਚ ਉਨ੍ਹਾਂ ਨੂੰ ਦਿੱਲੀ ਵਿੱਚ ਫਾਂਸੀ ਦੇ ਦਿੱਤੀ ਗਈ।",
    category: "martyrdom",
    important: true,
    tags: ["Banda Singh Bahadur", "Capture", "Gurdas Nangal", "Execution"]
  },
  {
    id: "sikh_misls_formation",
    year: 1748,
    title_en: "Formation of Sikh Misls",
    title_pa: "ਸਿੱਖ ਮਿਸਲਾਂ ਦਾ ਗਠਨ",
    description_en: "The formation of Sikh Misls (confederacies) began, dividing Punjab into twelve independent Sikh states that would later unite under Maharaja Ranjit Singh.",
    description_pa: "ਸਿੱਖ ਮਿਸਲਾਂ (ਸੰਘਾਂ) ਦਾ ਗਠਨ ਸ਼ੁਰੂ ਹੋਇਆ, ਪੰਜਾਬ ਨੂੰ ਬਾਰ੍ਹਾਂ ਸੁਤੰਤਰ ਸਿੱਖ ਰਾਜਾਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਜੋ ਬਾਅਦ ਵਿੱਚ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਧੀਨ ਇਕਜੁੱਟ ਹੋਏ।",
    category: "political",
    important: true,
    tags: ["Misls", "Confederacies", "Twelve states", "Independence"]
  },
  {
    id: "ranjit_singh_birth",
    year: 1780,
    exactDate: "1780-11-13T00:00:00Z",
    title_en: "Birth of Maharaja Ranjit Singh",
    title_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਜਨਮ",
    description_en: "Ranjit Singh was born in Gujranwala. He would later become the 'Lion of Punjab' and establish the powerful Sikh Empire.",
    description_pa: "ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਜਨਮ ਗੁਜਰਾਂਵਾਲਾ ਵਿੱਚ ਹੋਇਆ। ਉਹ ਬਾਅਦ ਵਿੱਚ 'ਪੰਜਾਬ ਦਾ ਸ਼ੇਰ' ਬਣਿਆ ਅਤੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਿੱਖ ਸਾਮਰਾਜ ਸਥਾਪਿਤ ਕੀਤਾ।",
    category: "political",
    important: true,
    tags: ["Ranjit Singh", "Birth", "Gujranwala", "Lion of Punjab"]
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
  },
  {
    id: "koh_i_noor_acquisition",
    year: 1813,
    title_en: "Acquisition of Koh-i-Noor Diamond",
    title_pa: "ਕੋਹਿਨੂਰ ਹੀਰੇ ਦਾ ਪ੍ਰਾਪਤੀ",
    description_en: "Maharaja Ranjit Singh acquired the famous Koh-i-Noor diamond from Shah Shuja, adding to the wealth and prestige of the Sikh Empire.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਸ਼ਾਹ ਸ਼ੁਜਾ ਤੋਂ ਮਸ਼ਹੂਰ ਕੋਹਿਨੂਰ ਹੀਰਾ ਪ੍ਰਾਪਤ ਕੀਤਾ, ਸਿੱਖ ਸਾਮਰਾਜ ਦੀ ਦੌਲਤ ਅਤੇ ਮਾਣ ਵਿੱਚ ਵਾਧਾ ਕੀਤਾ।",
    category: "political",
    important: false,
    tags: ["Koh-i-Noor", "Diamond", "Shah Shuja", "Wealth"]
  },
  {
    id: "golden_temple_gold_plating",
    year: 1830,
    title_en: "Gold Plating of Harmandir Sahib",
    title_pa: "ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦਾ ਸੋਨੇ ਨਾਲ ਮੜ੍ਹਣਾ",
    description_en: "Maharaja Ranjit Singh completed the gold plating of Harmandir Sahib, giving it the appearance that earned it the name 'Golden Temple'.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦਾ ਸੋਨੇ ਨਾਲ ਮੜ੍ਹਣ ਦਾ ਕੰਮ ਪੂਰਾ ਕੀਤਾ, ਜਿਸ ਨਾਲ ਇਸ ਨੂੰ ਉਹ ਰੂਪ ਮਿਲਿਆ ਜਿਸ ਕਰਕੇ ਇਸ ਨੂੰ 'ਸੁਵਰਨ ਮੰਦਰ' ਨਾਮ ਮਿਲਿਆ।",
    category: "temple",
    important: true,
    tags: ["Golden Temple", "Gold plating", "Ranjit Singh", "Architecture"]
  },
  {
    id: "ranjit_singh_death",
    year: 1839,
    exactDate: "1839-06-27T00:00:00Z",
    title_en: "Death of Maharaja Ranjit Singh",
    title_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਮੌਤ",
    description_en: "Maharaja Ranjit Singh died in Lahore, leading to the decline of the Sikh Empire due to internal conflicts and weak successors.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਲਾਹੌਰ ਵਿੱਚ ਮੌਤ ਹੋ ਗਈ, ਜਿਸ ਕਾਰਨ ਅੰਦਰੂਨੀ ਝਗੜਿਆਂ ਅਤੇ ਕਮਜ਼ੋਰ ਉੱਤਰਾਧਿਕਾਰੀਆਂ ਕਰਕੇ ਸਿੱਖ ਸਾਮਰਾਜ ਦਾ ਪਤਨ ਸ਼ੁਰੂ ਹੋਇਆ।",
    category: "political",
    important: true,
    tags: ["Ranjit Singh", "Death", "Empire decline", "Succession crisis"]
  },
  {
    id: "first_anglo_sikh_war",
    year: 1845,
    title_en: "First Anglo-Sikh War",
    title_pa: "ਪਹਿਲੀ ਅੰਗਰੇਜ਼-ਸਿੱਖ ਜੰਗ",
    description_en: "The First Anglo-Sikh War began between the British East India Company and the Sikh Empire, resulting in British victory and territorial losses for Sikhs.",
    description_pa: "ਬ੍ਰਿਟਿਸ਼ ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ ਅਤੇ ਸਿੱਖ ਸਾਮਰਾਜ ਵਿਚਕਾਰ ਪਹਿਲੀ ਅੰਗਰੇਜ਼-ਸਿੱਖ ਜੰਗ ਸ਼ੁਰੂ ਹੋਈ, ਜਿਸ ਦੇ ਨਤੀਜੇ ਵਜੋਂ ਅੰਗਰੇਜ਼ਾਂ ਦੀ ਜਿੱਤ ਅਤੇ ਸਿੱਖਾਂ ਦੇ ਖੇਤਰੀ ਨੁਕਸਾਨ ਹੋਏ।",
    category: "battle",
    important: true,
    tags: ["Anglo-Sikh War", "British", "Territory loss", "Colonial period"]
  },
  {
    id: "second_anglo_sikh_war",
    year: 1848,
    title_en: "Second Anglo-Sikh War",
    title_pa: "ਦੂਜੀ ਅੰਗਰੇਜ਼-ਸਿੱਖ ਜੰਗ",
    description_en: "The Second Anglo-Sikh War resulted in the complete annexation of the Sikh Empire by the British, ending Sikh sovereignty in Punjab.",
    description_pa: "ਦੂਜੀ ਅੰਗਰੇਜ਼-ਸਿੱਖ ਜੰਗ ਦੇ ਨਤੀਜੇ ਵਜੋਂ ਅੰਗਰੇਜ਼ਾਂ ਦੁਆਰਾ ਸਿੱਖ ਸਾਮਰਾਜ ਦਾ ਪੂਰਾ ਕਬਜ਼ਾ ਹੋ ਗਿਆ, ਪੰਜਾਬ ਵਿੱਚ ਸਿੱਖ ਪ੍ਰਭੂਸੱਤਾ ਦਾ ਅੰਤ ਹੋ ਗਿਆ।",
    category: "battle",
    important: true,
    tags: ["Anglo-Sikh War", "Annexation", "End of empire", "British rule"]
  },
  {
    id: "punjab_partition",
    year: 1947,
    exactDate: "1947-08-14T00:00:00Z",
    title_en: "Partition of Punjab",
    title_pa: "ਪੰਜਾਬ ਦੀ ਵੰਡ",
    description_en: "The partition of India led to the division of Punjab, with many Sikh holy places going to Pakistan. Massive displacement and communal violence followed.",
    description_pa: "ਭਾਰਤ ਦੀ ਵੰਡ ਕਾਰਨ ਪੰਜਾਬ ਦੀ ਵੰਡ ਹੋਈ, ਬਹੁਤ ਸਾਰੇ ਸਿੱਖ ਪਵਿੱਤਰ ਸਥਾਨ ਪਾਕਿਸਤਾਨ ਚਲੇ ਗਏ। ਵੱਡੇ ਪੈਮਾਨੇ ਤੇ ਵਿਸਥਾਪਨ ਅਤੇ ਸਾਂਪਰਦਾਇਕ ਹਿੰਸਾ ਹੋਈ।",
    category: "political",
    important: true,
    tags: ["Partition", "Punjab", "Pakistan", "Displacement", "Independence"]
  },
  {
    id: "punjabi_suba_movement",
    year: 1966,
    title_en: "Formation of Punjab State",
    title_pa: "ਪੰਜਾਬ ਰਾਜ ਦਾ ਗਠਨ",
    description_en: "After a long struggle for Punjabi Suba, Punjab was reorganized as a Punjabi-speaking state, fulfilling a key demand of the Sikh community.",
    description_pa: "ਪੰਜਾਬੀ ਸੂਬੇ ਲਈ ਲੰਮੇ ਸੰਘਰਸ਼ ਤੋਂ ਬਾਅਦ, ਪੰਜਾਬ ਨੂੰ ਪੰਜਾਬੀ ਭਾਸ਼ੀ ਰਾਜ ਵਜੋਂ ਪੁਨਰਗਠਿਤ ਕੀਤਾ ਗਿਆ, ਸਿੱਖ ਸਮੁਦਾਇ ਦੀ ਮੁੱਖ ਮੰਗ ਪੂਰੀ ਹੋਈ।",
    category: "political",
    important: true,
    tags: ["Punjabi Suba", "Language movement", "State formation", "Reorganization"]
  },
  {
    id: "operation_blue_star",
    year: 1984,
    exactDate: "1984-06-06T00:00:00Z",
    title_en: "Operation Blue Star",
    title_pa: "ਆਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ",
    description_en: "The Indian Army launched Operation Blue Star to remove militants from the Golden Temple complex, causing significant damage to the holy shrine and loss of life.",
    description_pa: "ਭਾਰਤੀ ਫੌਜ ਨੇ ਸੁਵਰਨ ਮੰਦਰ ਕੰਪਲੈਕਸ ਤੋਂ ਅੱਤਵਾਦੀਆਂ ਨੂੰ ਹਟਾਉਣ ਲਈ ਆਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ ਸ਼ੁਰੂ ਕੀਤਾ, ਜਿਸ ਨਾਲ ਪਵਿੱਤਰ ਗੁਰਦਵਾਰੇ ਨੂੰ ਮਹੱਤਵਪੂਰਨ ਨੁਕਸਾਨ ਅਤੇ ਜਾਨੀ ਨੁਕਸਾਨ ਹੋਇਆ।",
    category: "political",
    important: true,
    tags: ["Operation Blue Star", "Golden Temple", "Military operation", "Damage"]
  },
  {
    id: "indira_gandhi_assassination",
    year: 1984,
    exactDate: "1984-10-31T00:00:00Z",
    title_en: "Assassination of Indira Gandhi",
    title_pa: "ਇੰਦਿਰਾ ਗਾਂਧੀ ਦੀ ਹੱਤਿਆ",
    description_en: "Prime Minister Indira Gandhi was assassinated by her Sikh bodyguards in retaliation for Operation Blue Star, leading to anti-Sikh riots across India.",
    description_pa: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਇੰਦਿਰਾ ਗਾਂਧੀ ਦੀ ਆਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ ਦੇ ਬਦਲੇ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੇ ਸਿੱਖ ਬਾਡੀਗਾਰਡਾਂ ਦੁਆਰਾ ਹੱਤਿਆ ਕਰ ਦਿੱਤੀ ਗਈ, ਜਿਸ ਤੋਂ ਬਾਅਦ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਸਿੱਖ ਵਿਰੋਧੀ ਦੰਗੇ ਹੋਏ।",
    category: "political",
    important: true,
    tags: ["Indira Gandhi", "Assassination", "Retaliation", "Anti-Sikh riots"]
  },
  {
    id: "kartarpur_corridor",
    year: 2019,
    exactDate: "2019-11-09T00:00:00Z",
    title_en: "Opening of Kartarpur Corridor",
    title_pa: "ਕਰਤਾਰਪੁਰ ਕਾਰੀਡੋਰ ਦਾ ਖੁੱਲਣਾ",
    description_en: "The Kartarpur Corridor was opened, allowing Indian Sikhs to visit Gurdwara Darbar Sahib in Pakistan without a visa, where Guru Nanak spent his last years.",
    description_pa: "ਕਰਤਾਰਪੁਰ ਕਾਰੀਡੋਰ ਖੋਲ੍ਹਿਆ ਗਿਆ, ਭਾਰਤੀ ਸਿੱਖਾਂ ਨੂੰ ਬਿਨਾਂ ਵੀਜ਼ੇ ਪਾਕਿਸਤਾਨ ਵਿੱਚ ਗੁਰਦਵਾਰਾ ਦਰਬਾਰ ਸਾਹਿਬ ਜਾਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੱਤੀ ਗਈ, ਜਿੱਥੇ ਗੁਰੂ ਨਾਨਕ ਨੇ ਆਪਣੇ ਆਖਰੀ ਸਾਲ ਬਿਤਾਏ ਸਨ।",
    category: "political",
    important: true,
    tags: ["Kartarpur Corridor", "Visa-free", "Gurdwara Darbar Sahib", "Pilgrimage"]
  }
];
