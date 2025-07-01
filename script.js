document.addEventListener('DOMContentLoaded', function() {
    // Data for all the lesson modules
    const modules = [
        {
            title: "Welcome to Nepali Lessons",
            content: `
                <div class="title-slide">
                    <h1>नेपाली भाषा कक्षामा स्वागत छ</h1>
                    <p>Use the navigation buttons below to begin.</p>
                </div>
            `
        },
        {
            title: "Module 1: Introducing – Is, Am, Are",
            content: `
                <h2>Module 1: Introducing and Describing – Is, Am, Are</h2>
                <h3>Simple present tense - is / am / are</h3>
                <p>In Nepali, the verb 'to be' changes based on the subject. There are two main verbs for this: <strong>हो (ho)</strong> and <strong>छ (chha)</strong>.</p>
                
                <h4>Verb Conjugations: हो (ho) and छ (chha)</h4>
                <table>
                    <thead><tr><th>Pronoun (Eng)</th><th>Pronoun (Nep)</th><th>ho (Positive)</th><th>ho (Negative)</th><th>chha (Positive)</th><th>chha (Negative)</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>ma (म)</td><td>ho (हो)</td><td>hoina (होइन)</td><td>chhu (छु)</td><td>chhaina (छैन)</td></tr>
                        <tr><td>You (inf)</td><td>timi (तिमी)</td><td>hau (हौ)</td><td>hoinau (हैनौ)</td><td>chhau (छौ)</td><td>chhainau (छैनौ)</td></tr>
                        <tr><td>You (formal)</td><td>tapaai (तपाईं)</td><td>hunuhunchha (हुनुहुन्छ)</td><td>hunuhunna (हुनुहुन्न)</td><td>hunuhunchha (हुनुहुन्छ)</td><td>hunuhunna (हुनुहुन्न)</td></tr>
                        <tr><td>He/She, This, That</td><td>u, yo, tyo (उ, यो, त्यो)</td><td>ho (हो)</td><td>hoina (होइन)</td><td>chha (छ)</td><td>chhaina (छैन)</td></tr>
                        <tr><td>She (formal)</td><td>uni (उनी)</td><td>hun (हुन्)</td><td>hoinan (हैनन्)</td><td>chhin (छिन्)</td><td>chhainan (छैनन्)</td></tr>
                        <tr><td>He/She (high formal)</td><td>wahaa (वहाँ)</td><td>hunuhunchha (हुनुहुन्छ)</td><td>hunuhunna (हुनुहुन्न)</td><td>hunuhunchha (हुनुहुन्छ)</td><td>hunuhunna (हुनुहुन्न)</td></tr>
                        <tr><td>We</td><td>haami (हामी)</td><td>haũ (हौं)</td><td>hoinau (हैनौं)</td><td>chhaũ (छौं)</td><td>chhainau (छैनौं)</td></tr>
                        <tr><td>They</td><td>uniharu (उनीहरु)</td><td>hun (हुन्)</td><td>hoinan (हैनन्)</td><td>chhan (छन्)</td><td>chhainan (छैनन्)</td></tr>
                    </tbody>
                </table>
                
                <h3>When to use 'ho' vs 'chha'</h3>
                <ul>
                    <li><strong>Use “ho” (हो) for identity:</strong> what something is, who someone is (profession), the origin of something.</li>
                    <li><strong>Use “chha” (छ) for description/state:</strong> how something is, where something is, if it exists, possession.</li>
                </ul>
            `
        },
        // ... all other modules will be structured similarly
        {
            title: "Module 2: Daily Activities",
            content: `
                <h2>Module 2: Daily routine / activities</h2>
                <h3>Common Daily Verbs</h3>
                <ul>
                    <li>Eat - खानु (khaanu)</li>
                    <li>Do - गर्नु (garnu)</li>
                    <li>Get up - उठ्नु (uthnu)</li>
                    <li>Watch - हेर्नु (hernu)</li>
                    <li>Come - आउनु (aaunu)</li>
                    <li>Go - जानु (jaanu)</li>
                    <li>Study / read - पढ्नु (padhnu)</li>
                    <li>Learn - सिक्नु (siknu)</li>
                    <li>Make - बनाउनु (banaaunu)</li>
                </ul>
                <h3>Simple Present Tense - Verb Endings</h3>
                <table>
                    <thead><tr><th>Subject</th><th>Pronoun</th><th>Positive Suffix</th><th>Negative Suffix</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>म</td><td>छु</td><td>दिनँ</td></tr>
                        <tr><td>We</td><td>हामी</td><td>छौं</td><td>दैनौं</td></tr>
                        <tr><td>You (inf)</td><td>तिमी</td><td>छौ</td><td>दैनौ</td></tr>
                        <tr><td>You (formal)</td><td>तपाईं</td><td>(verb) + हुन्छ</td><td>(verb) + हुन्न</td></tr>
                        <tr><td>He/She/That</td><td>उ/यो/त्यो</td><td>छ</td><td>दैन</td></tr>
                        <tr><td>She (formal)</td><td>उनी</td><td>छिन्</td><td>दैनन्</td></tr>
                        <tr><td>He/She (formal)</td><td>वहाँ</td><td>(verb) + हुन्छ</td><td>(verb) + हुन्न</td></tr>
                        <tr><td>They</td><td>उनीहरु</td><td>छन्</td><td>दैनन्</td></tr>
                    </tbody>
                </table>
                <p><strong>Note:</strong> For verbs ending in vowels, add "n" in the positive form (e.g., 'khaanchhu'). This doesn't apply to negatives or verbs ending in 'unu'.</p>
            `
        },
        {
            title: "Module 3: Asking Questions",
            content: `
                <h2>Module 3: Questions</h2>
                <h3>Yes/No Questions</h3>
                <p>You can form a yes/no question simply by using a rising intonation at the end of a statement. Optionally, you can add <strong>के (ke)</strong> to the beginning of the sentence.</p>
                
                <h3>Wh- Questions</h3>
                <p>The word order is flexible, but the question word often goes after the subject.</p>
                <p>Example: What is your name? → तपाईंको नाम के हो? (tapaaiko naam ke ho?) - Literally "Your name what is?"</p>
                
                <h4>Common Question Words</h4>
                <table>
                    <thead><tr><th>English</th><th>Nepali</th></tr></thead>
                    <tbody>
                        <tr><td>What</td><td>के (ke)</td></tr>
                        <tr><td>Where</td><td>कहाँ (kahaa)</td></tr>
                        <tr><td>Who</td><td>को (ko)</td></tr>
                        <tr><td>Why</td><td>किन (kina)</td></tr>
                        <tr><td>How</td><td>कस्तो (kasto - quality), कसरी (kasari - manner)</td></tr>
                        <tr><td>Which</td><td>कुन (kun)</td></tr>
                    </tbody>
                </table>
            `
        },
        {
            title: "Module 4: Ownership",
            content: `
                <h2>Module 4: Belongings and Ownership</h2>
                <h3>Possessive Pronouns</h3>
                <table>
                    <thead><tr><th>Nepali</th><th>English</th></tr></thead>
                    <tbody>
                        <tr><td>मेरो (mero)</td><td>my</td></tr>
                        <tr><td>तिम्रो (timro)</td><td>your (inf)</td></tr>
                        <tr><td>तपाईंको (tapaaiko)</td><td>your (formal)</td></tr>
                        <tr><td>उसको (usko)</td><td>his/her</td></tr>
                        <tr><td>उहाँको (wahaako)</td><td>his/her (formal)</td></tr>
                        <tr><td>उनीहरुको (uniharuko)</td><td>their</td></tr>
                        <tr><td>हाम्रो (haamro)</td><td>our</td></tr>
                        <tr><td>आफ्नो (aafno)</td><td>one’s own</td></tr>
                    </tbody>
                </table>
                <h3>'Of' and 'Have'</h3>
                <ul>
                    <li><strong>को (ko)</strong> signifies 'of' for belonging or relation. Example: John's book = John<strong>ko</strong> kitaab.</li>
                    <li><strong>सँग (sanga)</strong> is used for 'have'. Example: I have a book = Ma <strong>sanga</strong> kitaab chha.</li>
                </ul>
            `
        },
        {
            title: "Module 5: Present Continuous",
            content: `
                <h2>Module 5: What’s Going On? – Present Continuous</h2>
                <p>Formed by: <strong>Stem verb + दै (dai) + conjugated form of 'chha'</strong>.</p>
                <table>
                    <thead><tr><th>Subject</th><th>Pronoun</th><th>Positive Ending</th><th>Negative Ending</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>म</td><td>दै छु</td><td>दै छैन</td></tr>
                        <tr><td>We</td><td>हामी</td><td>दै छौं</td><td>दै छैनौं</td></tr>
                        <tr><td>You (inf)</td><td>तिमी</td><td>दै छौ</td><td>दै छैनौ</td></tr>
                        <tr><td>You (formal)</td><td>तपाईं</td><td>दै हुनुहुन्छ</td><td>दै हुनुहुन्न</td></tr>
                        <tr><td>He/She/That</td><td>उ/यो/त्यो</td><td>दै छ</td><td>दै छैन</td></tr>
                        <tr><td>She (formal)</td><td>उनी</td><td>दै छिन्</td><td>दै छैनन्</td></tr>
                        <tr><td>He/She (formal)</td><td>वहाँ</td><td>दै हुनुहुन्छ</td><td>दै हुनुहुन्न</td></tr>
                        <tr><td>They</td><td>उनीहरु</td><td>दै छन्</td><td>दै छैनन्</td></tr>
                    </tbody>
                </table>
                <p>Example: I am eating. → म खा<strong>दै छु</strong> (Ma khaadai chhu).</p>
            `
        },
        {
            title: "Module 6: Present Perfect",
            content: `
                <h2>Module 6: What Have You Done? – Present Perfect</h2>
                <p>Formed by: <strong>Stem verb + एको/एकी/एका (eko/eki/eka) + conjugated form of 'chha'</strong>.</p>
                <p>Use <strong>एको (eko)</strong> for masculine singular, <strong>एकी (eki)</strong> for feminine singular, and <strong>एका (eka)</strong> for plural.</p>
                <p>For transitive verbs (verbs with an object), the subject is followed by <strong>ले (le)</strong>.</p>
                <table>
                    <thead><tr><th>Subject</th><th>Positive Ending</th><th>Negative Ending</th></tr></thead>
                    <tbody>
                        <tr><td>I (म)</td><td>एको/एकी छु</td><td>एको/एकी छैन</td></tr>
                        <tr><td>We (हामी)</td><td>एका छौं</td><td>एका छैनौं</td></tr>
                        <tr><td>You (तिमी)</td><td>एका/एकी छौ</td><td>एका/एकी छैनौ</td></tr>
                        <tr><td>He/She (उ)</td><td>एको/एकी छ</td><td>एको/एकी छैन</td></tr>
                        <tr><td>They (उनीहरु)</td><td>एका छन्</td><td>एका छैनन्</td></tr>
                    </tbody>
                </table>
                <p>Example: I have eaten rice. → मैले भात खा<strong>एको छु</strong> (Maile bhaat khaeko chhu).</p>
            `
        },
        {
            title: "Module 7: Simple Past",
            content: `
                 <h2>Module 7: What did you do? – Simple Past</h2>
                <p>The past tense endings are attached directly to the verb stem.</p>
                <table>
                    <thead><tr><th>Subject</th><th>Pronoun</th><th>Positive Suffix</th><th>Negative Suffix</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>म</td><td>एँ</td><td>इनँ</td></tr>
                        <tr><td>We</td><td>हामी</td><td>यौं</td><td>एनौं</td></tr>
                        <tr><td>You (inf)</td><td>तिमी</td><td>यौ</td><td>एनौ</td></tr>
                        <tr><td>You (formal)</td><td>तपाईं</td><td>(verb) + भयो</td><td>(verb) + भएन</td></tr>
                        <tr><td>He/She/That</td><td>उ/यो/त्यो</td><td>यो</td><td>एन</td></tr>
                        <tr><td>She (formal)</td><td>उनी</td><td>इन्</td><td>इनन्</td></tr>
                        <tr><td>He/She (formal)</td><td>वहाँ</td><td>(verb) + भयो</td><td>(verb) + भएन</td></tr>
                        <tr><td>They</td><td>उनीहरु</td><td>ए</td><td>एनन्</td></tr>
                    </tbody>
                </table>
                <p>Example: I went. → म गएँ (Ma gayen). I did not go. → म गइनँ (Ma gaina).</p>
            `
        },
        {
            title: "Module 8: Past Perfect",
            content: `
                <h2>Module 8: Earlier Past – Past Perfect</h2>
                <p>Formed by: <strong>Stem verb + एको/एकी/एका (eko/eki/eka) + conjugated form of 'thiyo' (was/were)</strong>.</p>
                <p>This tense describes an action that was completed before another past action.</p>
                 <table>
                    <thead><tr><th>Subject</th><th>Pronoun</th><th>Positive Ending</th><th>Negative Ending</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>म</td><td>एको/एकी थिएँ</td><td>एको/एकी थिइनँ</td></tr>
                        <tr><td>We</td><td>हामी</td><td>एका थियौं</td><td>एका थिएनौं</td></tr>
                        <tr><td>You (inf)</td><td>तिमी</td><td>एका/एकी थियौ</td><td>एका/एकी थिएनौ</td></tr>
                        <tr><td>He/She/That</td><td>उ/यो/त्यो</td><td>एको/एकी थियो</td><td>एको/एकी थिएन</td></tr>
                        <tr><td>They</td><td>उनीहरु</td><td>एका थिए</td><td>एका थिएनन्</td></tr>
                    </tbody>
                </table>
                <p>Example: I had gone. → म गएको थिएँ (Ma gaeko thien).</p>
            `
        },
        {
            title: "Module 9: Past 'Be' Verbs",
            content: `
                <h2>Module 9: Past – Was and Were Only</h2>
                <p>The simple past tense of the verb 'to be' (हुनु - hunu).</p>
                <table>
                    <thead><tr><th>Subject</th><th>Pronoun</th><th>Positive (was/were)</th><th>Negative</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>म</td><td>थिएँ</td><td>थिइनँ</td></tr>
                        <tr><td>We</td><td>हामी</td><td>थियौं</td><td>थिएनौं</td></tr>
                        <tr><td>You (inf)</td><td>तिमी</td><td>थियौ</td><td>थिएनौ</td></tr>
                        <tr><td>You (formal)</td><td>तपाईं</td><td>हुनुहुन्थ्यो</td><td>हुनुहुन्नथ्यो</td></tr>
                        <tr><td>He/She/That</td><td>उ/यो/त्यो</td><td>थियो</td><td>थिएन</td></tr>
                        <tr><td>She (formal)</td><td>उनी</td><td>थिइन्</td><td>थिइनन्</td></tr>
                        <tr><td>He/She (formal)</td><td>वहाँ</td><td>हुनुहुन्थ्यो</td><td>हुनुहुन्नथ्यो</td></tr>
                        <tr><td>They</td><td>उनीहरु</td><td>थिए</td><td>थिएनन्</td></tr>
                    </tbody>
                </table>
                 <p>Example: I was in Nepal. → म नेपालमा थिएँ (Ma Nepal-ma thien).</p>
            `
        },
        {
            title: "Module 10: Past Continuous",
            content: `
                <h2>Module 10: I Was Doing, You Were Doing – Past Continuous</h2>
                <p>Formed by: <strong>Stem verb + दै (dai) + conjugated form of 'thiyo' (was/were)</strong>.</p>
                <table>
                    <thead><tr><th>Subject</th><th>Positive Ending</th><th>Negative Ending</th></tr></thead>
                    <tbody>
                        <tr><td>I (म)</td><td>दै थिएँ</td><td>दै थिइनँ</td></tr>
                        <tr><td>We (हामी)</td><td>दै थियौं</td><td>दै थिएनौं</td></tr>
                        <tr><td>You (तिमी)</td><td>दै थियौ</td><td>दै थिएनौ</td></tr>
                        <tr><td>He/She (उ)</td><td>दै थियो</td><td>दै थिएन</td></tr>
                        <tr><td>They (उनीहरु)</td><td>दै थिए</td><td>दै थिएनन्</td></tr>
                    </tbody>
                </table>
                <p>Example: I was eating. → म खाँदै थिएँ (Ma khaandai thien).</p>
            `
        },
        {
            title: "Module 11: Future Tense",
            content: `
                <h2>Module 11: Future – Will & Going To</h2>
                <p>Formed by: <strong>Stem verb + ने (ne) + conjugated form of 'chha'</strong>.</p>
                <table>
                    <thead><tr><th>Subject</th><th>Pronoun</th><th>Positive Ending</th><th>Negative Ending</th></tr></thead>
                    <tbody>
                        <tr><td>I</td><td>म</td><td>ने छु</td><td>ने छैन</td></tr>
                        <tr><td>We</td><td>हामी</td><td>ने छौं</td><td>ने छैनौं</td></tr>
                        <tr><td>You (inf)</td><td>तिमी</td><td>ने छौ</td><td>ने छैनौ</td></tr>
                        <tr><td>You (formal)</td><td>तपाईं</td><td>(verb) + हुनेछ</td><td>(verb) + हुनेछैन</td></tr>
                        <tr><td>He/She/That</td><td>उ/यो/त्यो</td><td>ने छ</td><td>ने छैन</td></tr>
                        <tr><td>They</td><td>उनीहरु</td><td>ने छन्</td><td>ने छैनन्</td></tr>
                    </tbody>
                </table>
                <p>Example: I will go. → म जाने छु (Ma jaane chhu).</p>
            `
        },
        {
            title: "Module 12: Linkers & Conjunctions",
            content: `
                <h2>Module 12: Make Longer Sentences – Using Linkers</h2>
                <h3>Prepositions</h3>
                <p>In Nepali, prepositions (postpositions) come <strong>after</strong> the noun.</p>
                <p>Example: In the house → घर <strong>मा</strong> (ghar ma). From the US → अमेरिका <strong>बाट</strong> (America baata).</p>
                
                <h4>Common Prepositions/Postpositions</h4>
                <ul>
                    <li>मा (ma) - in/on/at</li>
                    <li>सँग (sanga) - with</li>
                    <li>लाई (laai) - to/for (used for people as objects)</li>
                    <li>बाट (baata) - from</li>
                    <li>को लागि (ko laagi) - for (purpose)</li>
                </ul>

                <h3>Conjunctions</h3>
                <p>These work in the regular order.</p>
                <ul>
                    <li>र (ra) - and</li>
                    <li>अनि (ani) - and then</li>
                    <li>तर (tara) - but</li>
                </ul>
            `
        },
        {
            title: "Module 13: Likes and Dislikes",
            content: `
                <h2>Module 13: Likes and Dislikes</h2>
                <p>To express likes and dislikes, use the structure:</p>
                <p><strong>Subject + लाई (laai) + Object + मनपर्छ (manparchha) / मनपर्दैन (manpardaina).</strong></p>
                <ul>
                    <li><strong>मनपर्छ (manparchha)</strong> = like</li>
                    <li><strong>मनपर्दैन (manpardaina)</strong> = don't like</li>
                </ul>
                <p>Example: I like Nepali food. → म<strong>लाई</strong> नेपाली खाना <strong>मनपर्छ</strong> (Malaai Nepali khaana manparchha).</p>
                <p>Example: He does not like tea. → उस<strong>लाई</strong> चिया <strong>मनपर्दैन</strong> (Uslaai chiya manpardaina).</p>
            `
        },
        {
            title: "Module 14: Needs and Wants",
            content: `
                <h2>Module 14: Needs and Wants</h2>
                <h3>To Need</h3>
                <p>Use the structure: <strong>Subject + लाई (laai) + Object + चाहिन्छ (chaahinchha) / चाहिदैन (chaahidaina).</strong></p>
                <ul>
                    <li><strong>चाहिन्छ (chaahinchha)</strong> = need</li>
                    <li><strong>चाहिदैन (chaahidaina)</strong> = don't need</li>
                </ul>
                <p>Example: I need water. → मलाई पानी चाहिन्छ (Malaai paani chaahinchha).</p>

                <h3>To Want</h3>
                <p>Use the verb <strong>चाहनु (chaahannu)</strong>, which conjugates like a regular verb.</p>
                <p>Example: I want to go to Nepal. → म नेपाल जान चाहन्छु (Ma Nepal jaana chaahanchhu).</p>
            `
        },
        {
            title: "Module 15: Giving Advice ('Should')",
            content: `
                <h2>Module 15: Advice and Recommendations – ‘Should’</h2>
                <p>To say someone "should" or "needs to" do something, use the structure:</p>
                <p><strong>Full Verb + पर्छ (parchha)</strong></p>
                <p>This is a general statement. It conjugates based on tense but not usually by person.</p>
                <ul>
                    <li>You should go. → तपाईं जानुपर्छ (Tapaai jaanuparchha).</li>
                    <li>We should study. → हामी पढ्नुपर्छ (Haami padhnuparchha).</li>
                </ul>
            `
        },
        {
            title: "Module 16: Ability ('Can')",
            content: `
                <h2>Module 16: Ability – Using ‘Can’</h2>
                <p>To express ability, use the verb <strong>सक्नु (saknu)</strong> combined with another verb stem.</p>
                <p><strong>Verb Stem + न (na) + conjugated form of सक्नु (saknu)</strong></p>
                <p>Example: I can speak Nepali. → म नेपाली बोल्<strong>न सक्छु</strong> (Ma Nepali bolna sakchhu).</p>
                <p>Example: Can you help? → तपाईं मद्दत गर्<strong>न सक्नुहुन्छ</strong>? (Tapaai maddat garna saknuhunchha?)</p>
            `
        },
        {
            title: "Module 17: Feelings and Emotions",
            content: `
                <h2>Module 17: Feelings and Emotions – Using ‘Be’ and ‘Feel’</h2>
                <p>The verb <strong>लाग्नु (laagnu)</strong> is used to express feelings or sensations. The structure is similar to 'likes'.</p>
                <p><strong>Subject + लाई (laai) + Feeling + लाग्छ (laagchha)</strong></p>
                <ul>
                    <li>I feel hungry. → मलाई भोक लाग्यो (Malaai bhok laagyo). (Lit: To me hunger is felt)</li>
                    <li>I feel cold. → मलाई जाडो लाग्यो (Malaai jaado laagyo).</li>
                    <li>I think it's good. → मलाई ठिक लाग्छ (Malaai thik laagchha).</li>
                </ul>
            `
        },
        {
            title: "Module 18: Commands (Imperatives)",
            content: `
                <h2>Module 18: Giving Commands – Imperatives</h2>
                <p>Commands change based on the level of politeness.</p>
                <table>
                    <thead><tr><th>Politeness</th><th>Example (Go - जानु)</th><th>Example (Do - गर्नु)</th></tr></thead>
                    <tbody>
                        <tr><td>Informal (to friends/younger)</td><td>जा (jaa)</td><td>गर (gar)</td></tr>
                        <tr><td>Semi-formal (to friends)</td><td>जाऊ (jaau)</td><td>गर (gara)</td></tr>
                        <tr><td>Formal (to elders/strangers)</td><td>जानुस्/जानुहोस् (jaanus/jaanuhos)</td><td>गर्नुस्/गर्नुहोस् (garnus/garnuhos)</td></tr>
                        <tr><td>High Formal</td><td>जानुहोला (jaanuhola)</td><td>गर्नुहोला (garnuhola)</td></tr>
                    </tbody>
                </table>
                <h3>Helpful Phrases</h3>
                <ul>
                    <li>Please speak slowly. – बिस्तारै बोल्नुहोस् (Bistaarai bolnuhos)</li>
                    <li>Help! – सहयोग गर्नुहोस्! (Sahayog garnuhos!)</li>
                    <li>Wait. – पर्खनुहोस् (Parkhanuhos)</li>
                    <li>Repeat. – फेरि भन्नुहोस् (Pheri bhannuhos)</li>
                </ul>
            `
        },
        {
            title: "Module 19: Numbers, Dates, Time",
            content: `
                <h2>Module 19: Numbers, Dates, Days, and Time</h2>
                <h3>Numbers</h3>
                <table>
                    <thead><tr><th>Number</th><th>Word</th><th>Number</th><th>Word</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>एक (ek)</td><td>20</td><td>बीस (bis)</td></tr>
                        <tr><td>2</td><td>दुई (dui)</td><td>30</td><td>तीस (tis)</td></tr>
                        <tr><td>3</td><td>तीन (tin)</td><td>40</td><td>चालिस (chalis)</td></tr>
                        <tr><td>4</td><td>चार (char)</td><td>50</td><td>पचास (pachas)</td></tr>
                        <tr><td>5</td><td>पाँच (paanch)</td><td>100</td><td>सय (saya)</td></tr>
                        <tr><td>10</td><td>दस (das)</td><td>1,000</td><td>हजार (hajaar)</td></tr>
                    </tbody>
                </table>
                <h3>Telling Time</h3>
                <ul>
                    <li>Half past (e.g., 3:30) → साढे (saadhe) - साढे तीन बज्यो</li>
                    <li>Quarter past (e.g., 4:15) → सवा (sawa) - सवा चार बज्यो</li>
                    <li>Quarter to (e.g., 4:45) → पौने (paune) - पौने पाँच बज्यो</li>
                    <li>O'clock → बजे (baje) - एक बजे (ek baje)</li>
                </ul>
                <h3>Relative Time</h3>
                <ul>
                    <li>Yesterday → हिजो (hijo)</li>
                    <li>Today → आज (aaja)</li>
                    <li>Tomorrow → भोलि (bholi)</li>
                </ul>
            `
        },
        {
            title: "Module 20: Conditional Sentences",
            content: `
                <h2>Module 20: If... Then – Conditional Sentences</h2>
                <p>Conditional sentences are formed using <strong>भने (bhane)</strong> which means 'if'.</p>
                <h3>Type 1: Present/Future Real Condition</h3>
                <p>Structure: <strong>Simple Present + भने (bhane) → Simple Present / Future</strong></p>
                <p>Example: If you come, I will go. → तिमी आयौ भने म जान्छु (Timi aayau bhane ma jaanchhu).</p>
                
                <h3>Type 2: Past Unreal Condition</h3>
                <p>Structure: <strong>Past Participle (eko) + भए (bhae) → would have / could have</strong></p>
                <p>Example: If you had come, I would have gone. → तिमी आएको भए म जाने थिएँ (Timi aaeko bhae ma jaane thien).</p>
            `
        },
        {
            title: "Module 21: Relative Clauses",
            content: `
                <h2>Module 21: Who, Which, That – Relative Clauses</h2>
                <p>These words connect a noun to a descriptive clause.</p>
                <table>
                    <thead><tr><th>Nepali</th><th>English</th></tr></thead>
                    <tbody>
                        <tr><td>जो / जसले (jo / jasle)</td><td>Who (subject)</td></tr>
                        <tr><td>जसलाई (jaslaai)</td><td>Whom (object)</td></tr>
                        <tr><td>जुन (jun)</td><td>Which</td></tr>
                        <tr><td>जहाँ (jahaa)</td><td>Where</td></tr>
                        <tr><td>जहिले (jahile)</td><td>When</td></tr>
                        <tr><td>जसरी (jasari)</td><td>How (manner)</td></tr>
                    </tbody>
                </table>
                <p>Example: The boy <strong>who</strong> came is Ram. → <strong>जो</strong> केटा आयो, त्यो राम हो (Jo keta aayo, tyo Ram ho).</p>
            `
        },
        {
            title: "Module 22: Sharing Opinions",
            content: `
                <h2>Module 22: Sharing Opinions – I Think, I Believe</h2>
                <p>To express an opinion or what you think/feel, use <strong>मलाई लाग्छ (malaai laagchha)</strong>.</p>
                <p>Literally, it means "to me it seems/feels".</p>
                <ul>
                    <li>I think he will come. → मलाई लाग्छ, ऊ आउँछ (Malaai laagchha, u aaunchha).</li>
                    <li>I feel it's okay. → मलाई ठिक लाग्छ (Malaai thik laagchha).</li>
                </ul>
                <p>You can also use <strong>... जस्तो लाग्छ (... jasto laagchha)</strong> to mean "it seems like...".</p>
                <p>Example: It seems like it will rain. → पानी पर्छ जस्तो लाग्छ (Paani parchha jasto laagchha).</p>
            `
        },
        {
            title: "Module 23: Shopping and Prices",
            content: `
                <h2>Module 23: Shopping and Prices</h2>
                <h3>Common Shopping Phrases</h3>
                <ul>
                    <li>How much is this? → यो कति हो? (Yo kati ho?) / यसको कति हो? (Yasko kati ho?)</li>
                    <li>This is 10 Rupees. → यो दस रुपैयाँ हो (Yo das rupiyaan ho).</li>
                    <li>It is too expensive. → धेरै महँगो भयो (Dherai mahango bhayo).</li>
                    <li>It is cheap. → सस्तो छ (Sasto chha).</li>
                </ul>
            `
        },
        {
            title: "Module 24: Past Habits ('Used To')",
            content: `
                <h2>Module 24: I Used To... – Talking About Past Habits</h2>
                <p>To talk about something you used to do, use the structure:</p>
                <p><strong>Verb Stem + थें/थ्यौ/थ्यो (the/thyau/thyo) etc.</strong> This is a specific past tense form.</p>
                <table>
                    <thead><tr><th>Subject</th><th>Positive Ending</th><th>Negative Ending</th></tr></thead>
                    <tbody>
                        <tr><td>I (म)</td><td>न्थें</td><td>न्नथें</td></tr>
                        <tr><td>We (हामी)</td><td>न्थ्यौं</td><td>न्नथ्यौं</td></tr>
                        <tr><td>You (तिमी)</td><td>न्थ्यौ</td><td>न्नथ्यौ</td></tr>
                        <tr><td>He/She (उ)</td><td>न्थ्यो</td><td>न्नथ्यो</td></tr>
                        <tr><td>They (उनीहरु)</td><td>न्थे</td><td>न्नथे</td></tr>
                    </tbody>
                </table>
                <p>Example: I used to play football. → म फुटबल खेल्थें (Ma football khelthe). </p>
            `
        },
        {
            title: "Module 25: Comparisons",
            content: `
                <h2>Module 25: Comparing Things – Than and The Most</h2>
                <h3>Than</h3>
                <p>Use <strong>भन्दा (bhanda)</strong> to compare two things. It means 'than'.</p>
                <p>Structure: <strong>A + भन्दा (bhanda) + B + Adjective + chha.</strong></p>
                <p>Example: Ram is taller than Shyam. → श्याम भन्दा राम अग्लो छ (Shyam bhanda Ram aglo chha).</p>

                <h3>The Most</h3>
                <p>Use <strong>सबभन्दा (sabbhanda)</strong> for the superlative (the most).</p>
                <p>Example: Mount Everest is the tallest mountain. → सगरमाथा सबभन्दा अग्लो हिमाल हो (Sagarmatha sabbhanda aglo himal ho).</p>
            `
        },
        {
            title: "Module 26: Reflexive Pronouns",
            content: `
                <h2>Module 26: Talking About Yourself – Reflexive Pronouns</h2>
                <p>Reflexive pronouns refer back to the subject of the sentence. The main reflexive pronoun is <strong>आफू (aafu)</strong> and its different forms.</p>
                <ul>
                    <li><strong>आफ्नो (aafno)</strong> - one's own</li>
                    <li><strong>आफै (aafai)</strong> - oneself (by oneself)</li>
                    <li><strong>आफुलाई (aafulaai)</strong> - to oneself</li>
                </ul>
                <p>Examples:</p>
                <ul>
                    <li>I am going to my (own) house. → म आफ्नो घर जान्छु (Ma aafno ghar jaanchhu).</li>
                    <li>I will do the work myself. → म आफै काम गर्छु (Ma aafai kaam garchhu).</li>
                </ul>
            `
        },
        {
            title: "Module 27: Talking About Weather",
            content: `
                <h2>Module 27: Weather</h2>
                <p>To talk about the weather, you often use the present perfect structure with <strong>...लागेको छ (...laageko chha)</strong> or simple statements with <strong>...छ (...chha)</strong>.</p>
                <h3>Common Weather Phrases</h3>
                <ul>
                    <li>It is hot. → गर्मी छ (Garmi chha).</li>
                    <li>It is cold. → जाडो छ (Jaado chha).</li>
                    <li>It is raining. → पानी परिरहेको छ (Paani pariraheko chha).</li>
                    <li>The wind is blowing. → हावा चलिरहेको छ (Hawa chaliraheko chha).</li>
                    <li>It is sunny. → घाम लागेको छ (Ghaam laageko chha).</li>
                </ul>
            `
        },
        {
            title: "Module 28: Next Steps & Advanced Topics",
            content: `
                <h2>Module 28: Next Steps</h2>
                <p>Congratulations on covering the basics! Here are some more advanced topics to explore next.</p>
                <ul>
                    <li><strong>Verb + एर (era):</strong> Having done [verb]... (e.g., भात खाएर, म सुतें - Khaana khaera, ma suten - Having eaten, I slept.)</li>
                    <li><strong>Verb + दा (da):</strong> While doing [verb]... (e.g., हिँड्दा, मैले उसलाई देखें - Hind'da, maile uslai dekhen - While walking, I saw him.)</li>
                    <li><strong>Causative Verbs:</strong> Verbs that cause someone to do something (e.g., गर्नु garnu 'to do' vs. गराउनु garaunu 'to make someone do').</li>
                    <li><strong>Particles:</strong> Small words like त (ta), नि (ni), रे (re) that add nuance and emphasis to sentences.</li>
                </ul>
            `
        }
    ];

    // DOM Elements
    const slidesContainer = document.getElementById('slides-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slide-counter');
    const moduleNav = document.getElementById('module-nav');

    let currentSlide = 0;

    // Function to generate slides and navigation
    function initializePresentation() {
        modules.forEach((module, index) => {
            // Create slide element
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = module.content;
            slidesContainer.appendChild(slide);

            // Create navigation option
            const option = document.createElement('option');
            option.value = index;
            option.textContent = module.title;
            moduleNav.appendChild(option);
        });
    }

    // Function to show a specific slide
    function showSlide(index) {
        const allSlides = document.querySelectorAll('.slide');
        
        // Ensure index is within bounds
        if (index >= allSlides.length) {
            index = allSlides.length - 1;
        }
        if (index < 0) {
            index = 0;
        }

        // Hide all slides
        allSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the target slide
        allSlides[index].classList.add('active');
        currentSlide = index;

        // Update navigation
        updateNav();
    }

    // Function to update buttons, counter, and dropdown
    function updateNav() {
        // Update counter
        slideCounter.textContent = `Module ${currentSlide} of ${modules.length - 1}`;
        if (currentSlide === 0) {
            slideCounter.textContent = 'Welcome';
        }

        // Update dropdown
        moduleNav.value = currentSlide;

        // Update buttons
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === modules.length - 1;
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    moduleNav.addEventListener('change', (e) => {
        showSlide(parseInt(e.target.value));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        }
    });

    // Initial setup
    initializePresentation();
    showSlide(0);
});
