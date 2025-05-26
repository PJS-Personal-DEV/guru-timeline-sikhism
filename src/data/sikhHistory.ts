
export interface TimelineEvent {
  id: string;
  year: number;
  title_en: string;
  title_pa: string;
  description_en: string;
  description_pa: string;
  category: 'guru' | 'battle' | 'temple' | 'scripture' | 'political' | 'martyrdom' | 'historical' | 'establishment' | 'general' | 'other';
  important: boolean;
  tags?: string[];
}

export const sikhHistory: TimelineEvent[] = [
  {
    id: "guru_nanak_birth",
    year: 1469,
    title_en: "Birth of Guru Nanak Dev Ji",
    title_pa: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ",
    description_en: "Guru Nanak Dev Ji, the founder of Sikhism, was born in Talwandi (now Nankana Sahib, Pakistan). His birth marked the beginning of the Sikh faith.",
    description_pa: "ਸਿੱਖ ਧਰਮ ਦੇ ਸੰਸਥਾਪਕ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ, ਪਾਕਿਸਤਾਨ) ਵਿੱਚ ਹੋਇਆ। ਉਨ੍ਹਾਂ ਦੇ ਜਨਮ ਨੇ ਸਿੱਖ ਧਰਮ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ।",
    category: "guru",
    important: true,
    tags: ["First Guru", "Founder", "Talwandi", "Nankana Sahib", "Birth"]
  },
  {
    id: "guru_nanak_enlightenment",
    year: 1496,
    title_en: "Guru Nanak's Divine Calling",
    title_pa: "ਗੁਰੂ ਨਾਨਕ ਦਾ ਪ੍ਰਭੂ ਦਾ ਬੁਲਾਵਾ",
    description_en: "At age 27, Guru Nanak received divine enlightenment at Sultanpur while bathing in the Kali Bein river. He proclaimed 'There is no Hindu, there is no Muslim'.",
    description_pa: "27 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ, ਗੁਰੂ ਨਾਨਕ ਨੂੰ ਸੁਲਤਾਨਪੁਰ ਵਿੱਚ ਕਾਲੀ ਬੇਈਂ ਨਦੀ ਵਿੱਚ ਇਸ਼ਨਾਨ ਕਰਦੇ ਸਮੇਂ ਪ੍ਰਭੂ ਦਾ ਬੁਲਾਵਾ ਆਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਐਲਾਨ ਕੀਤਾ 'ਨ ਕੋਈ ਹਿੰਦੂ ਨ ਕੋਈ ਮੁਸਲਮਾਨ'।",
    category: "guru",
    important: true,
    tags: ["Divine Calling", "Enlightenment", "Sultanpur", "Kali Bein", "Religious Unity"]
  },
  {
    id: "guru_angad_succession",
    year: 1539,
    title_en: "Guru Angad Dev Ji becomes Second Guru",
    title_pa: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦੂਜੇ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Angad Dev Ji was installed as the second Sikh Guru, continuing Guru Nanak's mission and developing the Gurmukhi script.",
    description_pa: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੂੰ ਦੂਜੇ ਸਿੱਖ ਗੁਰੂ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ, ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਨਾਨਕ ਦੇ ਮਿਸ਼ਨ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ ਅਤੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਵਿਕਾਸ ਕੀਤਾ।",
    category: "guru",
    important: true,
    tags: ["Second Guru", "Succession", "Gurmukhi Script", "Development"]
  },
  {
    id: "guru_amar_das_succession",
    year: 1552,
    title_en: "Guru Amar Das Ji becomes Third Guru",
    title_pa: "ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਤੀਜੇ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Amar Das Ji became the third Guru, establishing the langar system and promoting women's rights in Sikh society.",
    description_pa: "ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਤੀਜੇ ਗੁਰੂ ਬਣੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਲੰਗਰ ਸਿਸਟਮ ਸਥਾਪਿਤ ਕੀਤਾ ਅਤੇ ਸਿੱਖ ਸਮਾਜ ਵਿੱਚ ਔਰਤਾਂ ਦੇ ਅਧਿਕਾਰਾਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ।",
    category: "guru",
    important: true,
    tags: ["Third Guru", "Langar System", "Women's Rights", "Social Reform"]
  },
  {
    id: "guru_ram_das_succession",
    year: 1574,
    title_en: "Guru Ram Das Ji becomes Fourth Guru",
    title_pa: "ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਚੌਥੇ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Ram Das Ji became the fourth Guru and founded the city of Amritsar, establishing it as the spiritual center of Sikhism.",
    description_pa: "ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਚੌਥੇ ਗੁਰੂ ਬਣੇ ਅਤੇ ਅਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਇਸਨੂੰ ਸਿੱਖ ਧਰਮ ਦੇ ਅਧਿਆਤਮਿਕ ਕੇਂਦਰ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ।",
    category: "guru",
    important: true,
    tags: ["Fourth Guru", "Amritsar Foundation", "Spiritual Center", "City Planning"]
  },
  {
    id: "guru_arjan_succession",
    year: 1581,
    title_en: "Guru Arjan Dev Ji becomes Fifth Guru",
    title_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਪੰਜਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Arjan Dev Ji became the fifth Guru and compiled the Adi Granth, the first version of the Sikh holy book.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਪੰਜਵੇਂ ਗੁਰੂ ਬਣੇ ਅਤੇ ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ ਕੀਤਾ, ਜੋ ਸਿੱਖ ਪਵਿੱਤਰ ਗ੍ਰੰਥ ਦਾ ਪਹਿਲਾ ਰੂਪ ਸੀ।",
    category: "guru",
    important: true,
    tags: ["Fifth Guru", "Adi Granth", "Scripture Compilation", "Holy Book"]
  },
  {
    id: "golden_temple_construction",
    year: 1588,
    title_en: "Construction of Harmandir Sahib (Golden Temple)",
    title_pa: "ਹਰਿਮੰਦਿਰ ਸਾਹਿਬ (ਸੁਵਰਨ ਮੰਦਿਰ) ਦਾ ਨਿਰਮਾਣ",
    description_en: "Construction of the Harmandir Sahib (Golden Temple) was completed under Guru Arjan Dev Ji's guidance, becoming the holiest shrine in Sikhism.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਅਗਵਾਈ ਹੇਠ ਹਰਿਮੰਦਿਰ ਸਾਹਿਬ (ਸੁਵਰਨ ਮੰਦਿਰ) ਦਾ ਨਿਰਮਾਣ ਪੂਰਾ ਹੋਇਆ, ਜੋ ਸਿੱਖ ਧਰਮ ਦਾ ਸਭ ਤੋਂ ਪਵਿੱਤਰ ਅਸਥਾਨ ਬਣਿਆ।",
    category: "temple",
    important: true,
    tags: ["Golden Temple", "Harmandir Sahib", "Construction", "Holiest Shrine", "Amritsar"]
  },
  {
    id: "adi_granth_compilation",
    year: 1604,
    title_en: "Compilation of Adi Granth",
    title_pa: "ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ",
    description_en: "Guru Arjan Dev Ji completed the compilation of the Adi Granth, the first authorized version of the Sikh scriptures.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ ਪੂਰਾ ਕੀਤਾ, ਜੋ ਸਿੱਖ ਧਰਮ ਦੇ ਗ੍ਰੰਥਾਂ ਦਾ ਪਹਿਲਾ ਅਧਿਕਾਰਿਤ ਰੂਪ ਸੀ।",
    category: "scripture",
    important: true,
    tags: ["Adi Granth", "Scripture", "Compilation", "Religious Text", "Authorization"]
  },
  {
    id: "guru_arjan_martyrdom",
    year: 1606,
    title_en: "Martyrdom of Guru Arjan Dev Ji",
    title_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹੀਦੀ",
    description_en: "Guru Arjan Dev Ji was tortured and martyred by the Mughal emperor Jahangir, becoming the first Sikh martyr.",
    description_pa: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੂੰ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੁਆਰਾ ਤਸੀਹੇ ਦੇ ਕੇ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ ਗਿਆ, ਉਹ ਪਹਿਲੇ ਸਿੱਖ ਸ਼ਹੀਦ ਬਣੇ।",
    category: "martyrdom",
    important: true,
    tags: ["Martyrdom", "First Martyr", "Jahangir", "Mughal Persecution", "Sacrifice"]
  },
  {
    id: "guru_hargobind_succession",
    year: 1606,
    title_en: "Guru Hargobind Ji becomes Sixth Guru",
    title_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਛੇਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Hargobind Ji became the sixth Guru and introduced the concept of Miri-Piri (temporal and spiritual authority).",
    description_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਛੇਵੇਂ ਗੁਰੂ ਬਣੇ ਅਤੇ ਮੀਰੀ-ਪੀਰੀ (ਲੌਕਿਕ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ) ਦੀ ਧਾਰਨਾ ਪੇਸ਼ ਕੀਤੀ।",
    category: "guru",
    important: true,
    tags: ["Sixth Guru", "Miri-Piri", "Temporal Authority", "Spiritual Authority", "Warrior Saint"]
  },
  {
    id: "akal_takht_construction",
    year: 1609,
    title_en: "Construction of Akal Takht",
    title_pa: "ਅਕਾਲ ਤਖ਼ਤ ਦਾ ਨਿਰਮਾਣ",
    description_en: "Guru Hargobind Ji constructed the Akal Takht, the throne of the timeless one, establishing it as the seat of temporal authority.",
    description_pa: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਨੇ ਅਕਾਲ ਤਖ਼ਤ ਦਾ ਨਿਰਮਾਣ ਕੀਤਾ, ਅਕਾਲ ਪੁਰਖ ਦਾ ਸਿੰਘਾਸਣ, ਇਸਨੂੰ ਲੌਕਿਕ ਅਧਿਕਾਰ ਦੀ ਗੱਦੀ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ।",
    category: "establishment",
    important: true,
    tags: ["Akal Takht", "Construction", "Temporal Authority", "Throne", "Sikh Governance"]
  },
  {
    id: "guru_har_rai_succession",
    year: 1644,
    title_en: "Guru Har Rai Ji becomes Seventh Guru",
    title_pa: "ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ ਸੱਤਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Har Rai Ji became the seventh Guru, known for his love of nature and maintaining a medicinal garden.",
    description_pa: "ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ ਸੱਤਵੇਂ ਗੁਰੂ ਬਣੇ, ਜੋ ਕੁਦਰਤ ਨਾਲ ਪ੍ਰੇਮ ਅਤੇ ਦਵਾਈ ਦੇ ਬਾਗ਼ ਦੇ ਰੱਖ-ਰਖਾਅ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ।",
    category: "guru",
    important: true,
    tags: ["Seventh Guru", "Nature Lover", "Medicinal Garden", "Healing", "Compassion"]
  },
  {
    id: "guru_har_krishan_succession",
    year: 1661,
    title_en: "Guru Har Krishan Ji becomes Eighth Guru",
    title_pa: "ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ ਅੱਠਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Har Krishan Ji became the eighth Guru at the tender age of 5, known for his spiritual wisdom despite his young age.",
    description_pa: "ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ 5 ਸਾਲ ਦੀ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਅੱਠਵੇਂ ਗੁਰੂ ਬਣੇ, ਆਪਣੀ ਛੋਟੀ ਉਮਰ ਦੇ ਬਾਵਜੂਦ ਅਧਿਆਤਮਿਕ ਸਿਆਣਪ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ।",
    category: "guru",
    important: true,
    tags: ["Eighth Guru", "Child Guru", "Young Age", "Spiritual Wisdom", "Divine Grace"]
  },
  {
    id: "guru_tegh_bahadur_succession",
    year: 1665,
    title_en: "Guru Tegh Bahadur Ji becomes Ninth Guru",
    title_pa: "ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਨੌਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Tegh Bahadur Ji became the ninth Guru, known for his extensive travels and protection of religious freedom.",
    description_pa: "ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਨੌਵੇਂ ਗੁਰੂ ਬਣੇ, ਜੋ ਆਪਣੀ ਵਿਆਪਕ ਯਾਤਰਾਵਾਂ ਅਤੇ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ।",
    category: "guru",
    important: true,
    tags: ["Ninth Guru", "Religious Freedom", "Travels", "Protection", "Human Rights"]
  },
  {
    id: "guru_tegh_bahadur_martyrdom",
    year: 1675,
    title_en: "Martyrdom of Guru Tegh Bahadur Ji",
    title_pa: "ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹੀਦੀ",
    description_en: "Guru Tegh Bahadur Ji was executed by Aurangzeb for defending the religious freedom of Kashmiri Pandits and other minorities.",
    description_pa: "ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਨੂੰ ਔਰੰਗਜ਼ੇਬ ਦੁਆਰਾ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਅਤੇ ਹੋਰ ਘੱਟ ਗਿਣਤੀਆਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰੱਖਿਆ ਕਰਨ ਲਈ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ ਗਿਆ।",
    category: "martyrdom",
    important: true,
    tags: ["Martyrdom", "Religious Freedom", "Aurangzeb", "Kashmiri Pandits", "Human Rights"]
  },
  {
    id: "guru_gobind_singh_succession",
    year: 1675,
    title_en: "Guru Gobind Singh Ji becomes Tenth Guru",
    title_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਸਵੇਂ ਗੁਰੂ ਬਣੇ",
    description_en: "Guru Gobind Singh Ji became the tenth and last human Guru of the Sikhs at the age of 9 after his father's martyrdom.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਆਪਣੇ ਪਿਤਾ ਦੀ ਸ਼ਹੀਦੀ ਤੋਂ ਬਾਅਦ 9 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸਿੱਖਾਂ ਦੇ ਦਸਵੇਂ ਅਤੇ ਆਖਰੀ ਮਨੁੱਖੀ ਗੁਰੂ ਬਣੇ।",
    category: "guru",
    important: true,
    tags: ["Tenth Guru", "Last Human Guru", "Young Leader", "Father's Martyrdom", "Leadership"]
  },
  {
    id: "khalsa_creation",
    year: 1699,
    title_en: "Creation of the Khalsa",
    title_pa: "ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਨਾ",
    description_en: "Guru Gobind Singh Ji created the Khalsa on Vaisakhi day, initiating the five beloved ones (Panj Pyare) and establishing the five Ks.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ ਦੇ ਦਿਨ ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਨਾ ਕੀਤੀ, ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਦੀਖਿਤ ਕੀਤਾ ਅਤੇ ਪੰਜ ਕਕਾਰਾਂ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।",
    category: "historical",
    important: true,
    tags: ["Khalsa", "Vaisakhi", "Panj Pyare", "Five Ks", "Initiation", "Sikh Identity"]
  },
  {
    id: "guru_granth_sahib_installation",
    year: 1708,
    title_en: "Guru Granth Sahib as Eternal Guru",
    title_pa: "ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਸਦੀਵੀ ਗੁਰੂ ਵਜੋਂ",
    description_en: "Before his passing, Guru Gobind Singh Ji declared Guru Granth Sahib as the eternal Guru of the Sikhs, ending the line of human Gurus.",
    description_pa: "ਆਪਣੇ ਦੇਹਾਂਤ ਤੋਂ ਪਹਿਲਾਂ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਨੂੰ ਸਿੱਖਾਂ ਦਾ ਸਦੀਵੀ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕੀਤਾ, ਮਨੁੱਖੀ ਗੁਰੂਆਂ ਦੀ ਪਰੰਪਰਾ ਸਮਾਪਤ ਕੀਤੀ।",
    category: "scripture",
    important: true,
    tags: ["Eternal Guru", "Guru Granth Sahib", "Final Declaration", "Scripture Authority", "End of Human Gurus"]
  },
  {
    id: "banda_singh_bahadur_rise",
    year: 1710,
    title_en: "Banda Singh Bahadur's Campaign",
    title_pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੀ ਮੁਹਿੰਮ",
    description_en: "Banda Singh Bahadur began his military campaign against Mughal rule in Punjab, establishing the first Sikh state.",
    description_pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਪੰਜਾਬ ਵਿੱਚ ਮੁਗਲ ਸ਼ਾਸਨ ਦੇ ਵਿਰੁੱਧ ਆਪਣੀ ਫੌਜੀ ਮੁਹਿੰਮ ਸ਼ੁਰੂ ਕੀਤੀ, ਪਹਿਲੀ ਸਿੱਖ ਰਾਜ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।",
    category: "political",
    important: true,
    tags: ["Banda Singh Bahadur", "Military Campaign", "First Sikh State", "Mughal Resistance", "Punjab"]
  },
  {
    id: "misl_period_begins",
    year: 1748,
    title_en: "Beginning of Misl Period",
    title_pa: "ਮਿਸਲ ਕਾਲ ਦੀ ਸ਼ੁਰੂਆਤ",
    description_en: "The Sikh Misls (confederacies) were formed, dividing Punjab into different Sikh-controlled territories.",
    description_pa: "ਸਿੱਖ ਮਿਸਲਾਂ (ਸੰਘਾਂ) ਦਾ ਗਠਨ ਹੋਇਆ, ਪੰਜਾਬ ਨੂੰ ਵੱਖ-ਵੱਖ ਸਿੱਖ-ਨਿਯੰਤਰਿਤ ਖੇਤਰਾਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ।",
    category: "political",
    important: true,
    tags: ["Misl Period", "Confederacies", "Punjab Division", "Sikh Territories", "Political Organization"]
  },
  {
    id: "ranjit_singh_birth",
    year: 1780,
    title_en: "Birth of Maharaja Ranjit Singh",
    title_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਜਨਮ",
    description_en: "Ranjit Singh, who would later establish the Sikh Empire, was born in Gujranwala.",
    description_pa: "ਰਣਜੀਤ ਸਿੰਘ, ਜੋ ਬਾਅਦ ਵਿੱਚ ਸਿੱਖ ਸਾਮਰਾਜ ਸਥਾਪਿਤ ਕਰੇਗਾ, ਦਾ ਜਨਮ ਗੁਜਰਾਂਵਾਲਾ ਵਿੱਚ ਹੋਇਆ।",
    category: "historical",
    important: true,
    tags: ["Ranjit Singh", "Birth", "Future Emperor", "Gujranwala", "Sikh Empire"]
  },
  {
    id: "lahore_capture",
    year: 1799,
    title_en: "Ranjit Singh captures Lahore",
    title_pa: "ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਲਾਹੌਰ ਕਬਜ਼ਾ ਕੀਤਾ",
    description_en: "Ranjit Singh captured Lahore and began the establishment of the Sikh Empire, marking the end of the Misl period.",
    description_pa: "ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਲਾਹੌਰ ਉੱਤੇ ਕਬਜ਼ਾ ਕੀਤਾ ਅਤੇ ਸਿੱਖ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ ਸ਼ੁਰੂ ਕੀਤੀ, ਮਿਸਲ ਕਾਲ ਦਾ ਅੰਤ ਕੀਤਾ।",
    category: "political",
    important: true,
    tags: ["Lahore Capture", "Sikh Empire Beginning", "End of Misl Period", "Political Unification", "Capital"]
  },
  {
    id: "sikh_empire_establishment",
    year: 1801,
    title_en: "Establishment of Sikh Empire",
    title_pa: "ਸਿੱਖ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ",
    description_en: "Maharaja Ranjit Singh was formally crowned, establishing the Sikh Empire which would rule Punjab for 50 years.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਰਸਮੀ ਤਾਜਪੋਸ਼ੀ ਹੋਇਆ, ਸਿੱਖ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਜੋ 50 ਸਾਲ ਤੱਕ ਪੰਜਾਬ ਉੱਤੇ ਰਾਜ ਕਰੇਗਾ।",
    category: "political",
    important: true,
    tags: ["Sikh Empire", "Maharaja Ranjit Singh", "Coronation", "Punjab Rule", "50 Years"]
  },
  {
    id: "golden_temple_gold_plating",
    year: 1830,
    title_en: "Gold plating of Harmandir Sahib",
    title_pa: "ਹਰਿਮੰਦਿਰ ਸਾਹਿਬ ਦਾ ਸੋਨੇ ਦਾ ਕੰਮ",
    description_en: "Maharaja Ranjit Singh completed the gold plating of Harmandir Sahib, giving it the name 'Golden Temple'.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਹਰਿਮੰਦਿਰ ਸਾਹਿਬ ਦਾ ਸੋਨੇ ਦਾ ਕੰਮ ਪੂਰਾ ਕੀਤਾ, ਇਸਨੂੰ 'ਸੁਵਰਨ ਮੰਦਿਰ' ਦਾ ਨਾਮ ਦਿੱਤਾ।",
    category: "temple",
    important: true,
    tags: ["Gold Plating", "Golden Temple", "Maharaja Ranjit Singh", "Temple Renovation", "Sikh Architecture"]
  },
  {
    id: "ranjit_singh_death",
    year: 1839,
    title_en: "Death of Maharaja Ranjit Singh",
    title_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਦੇਹਾਂਤ",
    description_en: "Maharaja Ranjit Singh died, leading to internal conflicts and the eventual decline of the Sikh Empire.",
    description_pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਦੇਹਾਂਤ ਹੋਇਆ, ਜਿਸ ਨਾਲ ਅੰਦਰੂਨੀ ਝਗੜੇ ਅਤੇ ਸਿੱਖ ਸਾਮਰਾਜ ਦੇ ਅੰਤਿਮ ਪਤਨ ਦੀ ਸ਼ੁਰੂਆਤ ਹੋਈ।",
    category: "historical",
    important: true,
    tags: ["Death", "Maharaja Ranjit Singh", "Empire Decline", "Internal Conflicts", "End of Era"]
  },
  {
    id: "first_anglo_sikh_war",
    year: 1845,
    title_en: "First Anglo-Sikh War",
    title_pa: "ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ",
    description_en: "The First Anglo-Sikh War began between the Sikh Empire and the British East India Company.",
    description_pa: "ਸਿੱਖ ਸਾਮਰਾਜ ਅਤੇ ਬ੍ਰਿਟਿਸ਼ ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ ਵਿਚਕਾਰ ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਸ਼ੁਰੂ ਹੋਇਆ।",
    category: "battle",
    important: true,
    tags: ["Anglo-Sikh War", "First War", "British East India Company", "Sikh Empire", "Colonial Conflict"]
  },
  {
    id: "second_anglo_sikh_war",
    year: 1848,
    title_en: "Second Anglo-Sikh War",
    title_pa: "ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ",
    description_en: "The Second Anglo-Sikh War resulted in the complete annexation of Punjab by the British.",
    description_pa: "ਦੂਜੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਦੇ ਨਤੀਜੇ ਵਜੋਂ ਬ੍ਰਿਟਿਸ਼ ਦੁਆਰਾ ਪੰਜਾਬ ਦਾ ਪੂਰਾ ਕਬਜ਼ਾ ਹੋ ਗਿਆ।",
    category: "battle",
    important: true,
    tags: ["Anglo-Sikh War", "Second War", "Punjab Annexation", "British Victory", "End of Sikh Empire"]
  },
  {
    id: "punjab_annexation",
    year: 1849,
    title_en: "Annexation of Punjab",
    title_pa: "ਪੰਜਾਬ ਦਾ ਰਾਜ ਕਬਜ਼ਾ",
    description_en: "Punjab was formally annexed by the British Empire, ending the Sikh Empire and beginning British rule.",
    description_pa: "ਪੰਜਾਬ ਨੂੰ ਬ੍ਰਿਟਿਸ਼ ਸਾਮਰਾਜ ਦੁਆਰਾ ਰਸਮੀ ਤੌਰ ਉੱਤੇ ਕਬਜ਼ੇ ਵਿੱਚ ਲੈ ਲਿਆ ਗਿਆ, ਸਿੱਖ ਸਾਮਰਾਜ ਦਾ ਅੰਤ ਅਤੇ ਬ੍ਰਿਟਿਸ਼ ਸ਼ਾਸਨ ਦੀ ਸ਼ੁਰੂਆਤ ਹੋਈ।",
    category: "political",
    important: true,
    tags: ["Annexation", "Punjab", "British Empire", "End of Sikh Empire", "Colonial Rule"]
  },
  {
    id: "kohinoor_taken",
    year: 1849,
    title_en: "Kohinoor Diamond taken by British",
    title_pa: "ਕੋਹਿਨੂਰ ਹੀਰਾ ਬ੍ਰਿਟਿਸ਼ ਦੁਆਰਾ ਲਿਆ ਗਿਆ",
    description_en: "The famous Kohinoor diamond was taken from the Sikh treasury and presented to Queen Victoria.",
    description_pa: "ਮਸ਼ਹੂਰ ਕੋਹਿਨੂਰ ਹੀਰਾ ਸਿੱਖ ਖਜ਼ਾਨੇ ਤੋਂ ਲਿਆ ਗਿਆ ਅਤੇ ਮਹਾਰਾਣੀ ਵਿਕਟੋਰੀਆ ਨੂੰ ਭੇਟ ਕੀਤਾ ਗਿਆ।",
    category: "historical",
    important: false,
    tags: ["Kohinoor Diamond", "British Loot", "Queen Victoria", "Sikh Treasury", "Cultural Heritage"]
  },
  {
    id: "singh_sabha_movement",
    year: 1873,
    title_en: "Singh Sabha Movement begins",
    title_pa: "ਸਿੰਘ ਸਭਾ ਲਹਿਰ ਦੀ ਸ਼ੁਰੂਆਤ",
    description_en: "The Singh Sabha movement was started to revive Sikh religious practices and counter Christian missionary activities.",
    description_pa: "ਸਿੰਘ ਸਭਾ ਲਹਿਰ ਸਿੱਖ ਧਾਰਮਿਕ ਪ੍ਰਥਾਵਾਂ ਨੂੰ ਮੁੜ ਜਿਉਂਦਾ ਕਰਨ ਅਤੇ ਈਸਾਈ ਮਿਸ਼ਨਰੀ ਗਤੀਵਿਧੀਆਂ ਦਾ ਮੁਕਾਬਲਾ ਕਰਨ ਲਈ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ।",
    category: "political",
    important: true,
    tags: ["Singh Sabha Movement", "Religious Revival", "Counter Missionary", "Sikh Identity", "Reform Movement"]
  },
  {
    id: "chief_khalsa_diwan",
    year: 1902,
    title_en: "Formation of Chief Khalsa Diwan",
    title_pa: "ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦਾ ਗਠਨ",
    description_en: "The Chief Khalsa Diwan was formed to represent Sikh interests and manage gurdwaras.",
    description_pa: "ਸਿੱਖ ਹਿੱਤਾਂ ਦੀ ਨੁਮਾਇੰਦਗੀ ਅਤੇ ਗੁਰਦੁਆਰਿਆਂ ਦੇ ਪ੍ਰਬੰਧ ਲਈ ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ ਦਾ ਗਠਨ ਕੀਤਾ ਗਿਆ।",
    category: "political",
    important: false,
    tags: ["Chief Khalsa Diwan", "Sikh Representation", "Gurdwara Management", "Political Organization", "Community Leadership"]
  },
  {
    id: "gurdwara_reform_movement",
    year: 1920,
    title_en: "Gurdwara Reform Movement",
    title_pa: "ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਲਹਿਰ",
    description_en: "The Gurdwara Reform Movement began to wrest control of gurdwaras from corrupt mahants and return them to the Sikh community.",
    description_pa: "ਗੁਰਦੁਆਰਿਆਂ ਨੂੰ ਭ੍ਰਿਸ਼ਟ ਮਹੰਤਾਂ ਤੋਂ ਵਾਪਸ ਲੈ ਕੇ ਸਿੱਖ ਕੌਮ ਨੂੰ ਸੌਂਪਣ ਲਈ ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਲਹਿਰ ਸ਼ੁਰੂ ਹੋਈ।",
    category: "political",
    important: true,
    tags: ["Gurdwara Reform", "Mahant System", "Religious Control", "Community Rights", "Sikh Awakening"]
  },
  {
    id: "nankana_sahib_tragedy",
    year: 1921,
    title_en: "Nankana Sahib Tragedy",
    title_pa: "ਨਨਕਾਣਾ ਸਾਹਿਬ ਸਾਕਾ",
    description_en: "Peaceful Sikh protesters were killed at Gurdwara Janam Asthan in Nankana Sahib during the Gurdwara Reform Movement.",
    description_pa: "ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਲਹਿਰ ਦੌਰਾਨ ਨਨਕਾਣਾ ਸਾਹਿਬ ਦੇ ਗੁਰਦੁਆਰਾ ਜਨਮ ਅਸਥਾਨ ਵਿੱਚ ਸ਼ਾਂਤੀਪੂਰਣ ਸਿੱਖ ਪ੍ਰਦਰਸ਼ਨਕਾਰੀਆਂ ਨੂੰ ਮਾਰ ਦਿੱਤਾ ਗਿਆ।",
    category: "martyrdom",
    important: true,
    tags: ["Nankana Sahib", "Tragedy", "Peaceful Protest", "Gurdwara Reform", "Martyrdom", "Saka"]
  },
  {
    id: "sgpc_formation",
    year: 1925,
    title_en: "Formation of SGPC",
    title_pa: "ਐਸਜੀਪੀਸੀ ਦਾ ਗਠਨ",
    description_en: "The Shiromani Gurdwara Parbandhak Committee (SGPC) was legally established to manage Sikh gurdwaras.",
    description_pa: "ਸਿੱਖ ਗੁਰਦੁਆਰਿਆਂ ਦੇ ਪ੍ਰਬੰਧ ਲਈ ਸ਼੍ਰੋਮਣੀ ਗੁਰਦੁਆਰਾ ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ (ਐਸਜੀਪੀਸੀ) ਦਾ ਕਾਨੂੰਨੀ ਗਠਨ ਹੋਇਆ।",
    category: "establishment",
    important: true,
    tags: ["SGPC", "Shiromani Gurdwara Parbandhak Committee", "Legal Establishment", "Gurdwara Management", "Sikh Institution"]
  },
  {
    id: "partition_of_india",
    year: 1947,
    title_en: "Partition of India",
    title_pa: "ਹਿੰਦੁਸਤਾਨ ਦੀ ਵੰਡ",
    description_en: "The partition of India led to massive displacement of Sikhs from West Punjab to East Punjab (India).",
    description_pa: "ਹਿੰਦੁਸਤਾਨ ਦੀ ਵੰਡ ਕਰਕੇ ਪੱਛਮੀ ਪੰਜਾਬ ਤੋਂ ਪੂਰਬੀ ਪੰਜਾਬ (ਹਿੰਦੁਸਤਾਨ) ਵਿੱਚ ਸਿੱਖਾਂ ਦਾ ਵਿਸ਼ਾਲ ਵਿਸਥਾਪਨ ਹੋਇਆ।",
    category: "historical",
    important: true,
    tags: ["Partition", "India Pakistan", "Mass Migration", "West Punjab", "East Punjab", "Displacement"]
  },
  {
    id: "punjabi_suba_movement",
    year: 1960,
    title_en: "Punjabi Suba Movement",
    title_pa: "ਪੰਜਾਬੀ ਸੂਬਾ ਲਹਿਰ",
    description_en: "The movement for a Punjabi-speaking state was launched under the leadership of Sant Fateh Singh.",
    description_pa: "ਸੰਤ ਫਤਿਹ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਹੇਠ ਪੰਜਾਬੀ ਭਾਸ਼ੀ ਰਾਜ ਲਈ ਲਹਿਰ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ।",
    category: "political",
    important: true,
    tags: ["Punjabi Suba", "Language Movement", "Sant Fateh Singh", "State Formation", "Linguistic Rights"]
  },
  {
    id: "punjab_reorganization",
    year: 1966,
    title_en: "Reorganization of Punjab",
    title_pa: "ਪੰਜਾਬ ਦਾ ਪੁਨਰਗਠਨ",
    description_en: "Punjab was reorganized to create a Punjabi-speaking state, with Haryana and Himachal Pradesh being carved out.",
    description_pa: "ਪੰਜਾਬੀ ਭਾਸ਼ੀ ਰਾਜ ਬਣਾਉਣ ਲਈ ਪੰਜਾਬ ਦਾ ਪੁਨਰਗਠਨ ਕੀਤਾ ਗਿਆ, ਹਰਿਆਣਾ ਅਤੇ ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਵੱਖ ਕੀਤੇ ਗਏ।",
    category: "political",
    important: true,
    tags: ["Punjab Reorganization", "Punjabi Speaking State", "Haryana", "Himachal Pradesh", "State Division"]
  },
  {
    id: "operation_blue_star",
    year: 1984,
    title_en: "Operation Blue Star",
    title_pa: "ਆਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ",
    description_en: "Indian Army launched Operation Blue Star, storming the Golden Temple complex, resulting in significant damage and casualties.",
    description_pa: "ਭਾਰਤੀ ਫੌਜ ਨੇ ਆਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ ਸ਼ੁਰੂ ਕੀਤਾ, ਸੁਵਰਨ ਮੰਦਿਰ ਕੰਪਲੈਕਸ ਉੱਤੇ ਹਮਲਾ ਕੀਤਾ, ਜਿਸ ਨਾਲ ਭਾਰੀ ਨੁਕਸਾਨ ਅਤੇ ਜਾਨੀ ਨੁਕਸਾਨ ਹੋਇਆ।",
    category: "historical",
    important: true,
    tags: ["Operation Blue Star", "Golden Temple", "Indian Army", "Military Operation", "Religious Site Attack"]
  },
  {
    id: "anti_sikh_riots",
    year: 1984,
    title_en: "Anti-Sikh Riots",
    title_pa: "ਸਿੱਖ ਵਿਰੋਧੀ ਦੰਗੇ",
    description_en: "Following Indira Gandhi's assassination, anti-Sikh riots occurred across India, particularly in Delhi, resulting in thousands of deaths.",
    description_pa: "ਇੰਦਿਰਾ ਗਾਂਧੀ ਦੇ ਕਤਲ ਤੋਂ ਬਾਅਦ, ਪੂਰੇ ਹਿੰਦੁਸਤਾਨ ਵਿੱਚ, ਖਾਸ ਕਰਕੇ ਦਿੱਲੀ ਵਿੱਚ ਸਿੱਖ ਵਿਰੋਧੀ ਦੰਗੇ ਹੋਏ, ਜਿਸ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਲੋਕ ਮਾਰੇ ਗਏ।",
    category: "historical",
    important: true,
    tags: ["Anti-Sikh Riots", "Indira Gandhi Assassination", "Delhi", "Mass Violence", "Community Persecution"]
  },
  {
    id: "tercentenary_guru_gobind_singh",
    year: 1967,
    title_en: "Tercentenary of Guru Gobind Singh Ji",
    title_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਤਿਸੰਦ ਸਾਲਾ",
    description_en: "The 300th birth anniversary of Guru Gobind Singh Ji was celebrated worldwide, strengthening global Sikh identity.",
    description_pa: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ 300ਵਾਂ ਜਨਮ ਦਿਹਾੜਾ ਵਿਸ਼ਵਵਿਆਪੀ ਮਨਾਇਆ ਗਿਆ, ਜਿਸ ਨਾਲ ਵਿਸ਼ਵਿਕ ਸਿੱਖ ਪਛਾਣ ਮਜ਼ਬੂਤ ਹੋਈ।",
    category: "historical",
    important: false,
    tags: ["Tercentenary", "Guru Gobind Singh", "300th Anniversary", "Global Celebration", "Sikh Identity"]
  },
  {
    id: "gurdwara_sis_ganj_renovation",
    year: 1990,
    title_en: "Renovation of Gurdwara Sis Ganj",
    title_pa: "ਗੁਰਦੁਆਰਾ ਸੀਸ ਗੰਜ ਦਾ ਮੁਰੰਮਤ",
    description_en: "Major renovation of Gurdwara Sis Ganj Sahib in Delhi, marking the martyrdom site of Guru Tegh Bahadur Ji.",
    description_pa: "ਦਿੱਲੀ ਵਿੱਚ ਗੁਰਦੁਆਰਾ ਸੀਸ ਗੰਜ ਸਾਹਿਬ ਦੀ ਵਿਸ਼ਾਲ ਮੁਰੰਮਤ, ਜੋ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੇ ਸ਼ਹੀਦੀ ਸਥਾਨ ਨੂੰ ਚਿੰਨ੍ਹਿਤ ਕਰਦਾ ਹੈ।",
    category: "temple",
    important: false,
    tags: ["Gurdwara Sis Ganj", "Renovation", "Delhi", "Martyrdom Site", "Guru Tegh Bahadur"]
  },
  {
    id: "khalsa_tercentenary",
    year: 1999,
    title_en: "Khalsa Tercentenary Celebrations",
    title_pa: "ਖ਼ਾਲਸਾ ਤਿਸੰਦ ਸਾਲਾ ਜਸ਼ਨ",
    description_en: "The 300th anniversary of the creation of the Khalsa was celebrated globally with great enthusiasm.",
    description_pa: "ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਨਾ ਦਾ 300ਵਾਂ ਸਾਲਗਿਰਹ ਵਿਸ਼ਵਵਿਆਪੀ ਬਹੁਤ ਉਤਸ਼ਾਹ ਨਾਲ ਮਨਾਇਆ ਗਿਆ।",
    category: "historical",
    important: true,
    tags: ["Khalsa Tercentenary", "300th Anniversary", "Global Celebrations", "Khalsa Creation", "Sikh Pride"]
  },
  {
    id: "guru_nanak_550th_birth_anniversary",
    year: 2019,
    title_en: "550th Birth Anniversary of Guru Nanak Dev Ji",
    title_pa: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ 550ਵਾਂ ਜਨਮ ਦਿਹਾੜਾ",
    description_en: "The 550th birth anniversary of Guru Nanak Dev Ji was celebrated worldwide with the opening of Kartarpur Corridor.",
    description_pa: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ 550ਵਾਂ ਜਨਮ ਦਿਹਾੜਾ ਕਰਤਾਰਪੁਰ ਕਾਰੀਡੋਰ ਦੇ ਖੁੱਲਣ ਨਾਲ ਵਿਸ਼ਵਵਿਆਪੀ ਮਨਾਇਆ ਗਿਆ।",
    category: "historical",
    important: true,
    tags: ["550th Anniversary", "Guru Nanak", "Kartarpur Corridor", "Global Celebration", "Pilgrimage"]
  }
];

// Export alias for backward compatibility
export const sikhTimelineEvents = sikhHistory;
