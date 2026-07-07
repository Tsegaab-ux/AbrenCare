import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            subtitle: "Healthcare • Ethiopia",
            family: "Family Care",
            executive: "Executive Health",
            digital: "Digital Consultation",
            book: "Book a Consultation",
          },

          hero: {
            badge: "Now open — founding members across Ethiopia and abroad",
            title: "Nordic standards.",
            titleAccent: "Ethiopian heart.",
            description:
              "World-class healthcare for families and leaders. Built on Nordic standards. Delivered with Ethiopian heart.",

            feature1Title: "Family-first Care",
            feature1Desc:
              "Healthcare services designed around the people who matter most.",

            feature2Title: "Executive Wellness",
            feature2Desc:
              "Continuous health monitoring for leaders and professionals.",

            feature3Title: "Digital Access",
            feature3Desc:
              "Consult licensed Ethiopian doctors directly from your phone.",

            feature4Title: "Trusted Standards",
            feature4Desc:
              "Built on Nordic healthcare quality with Ethiopian compassion.",

            button: "Explore our services →",
            testimonial:
              "It gives me peace of mind knowing my mother is in good hands.",
            author: "— Yonas, Stockholm",
          },

          stats: {
            label: "Life expectancy gap",
            ethiopia: "Ethiopia",
            nordic: "Nordic",
            closing: "We are closing this gap.",
          },

          familyCard: {
            label: "For diaspora families",
            title: "Home care visits & health monitoring",
            description:
              "Your parent is not lonely — they are medically invisible. We send a vetted caregiver to their home. You get a full health report on your phone. Every single visit.",
            cta: "Get your parent’s care plan →",
          },

          executiveCard: {
            label: "For Ethiopian leaders",
            title: "Executive health programme",
            description:
              "You built an empire. Your heart does not know that. Hypertension has no symptoms. Kidney disease has no symptoms. We monitor everything continuously.",
            cta: "Explore executive health →",
          },

          consultationCard: {
            label: "For Ethiopians in Ethiopia",
            title: "Digital health consultation",
            description:
              "A licensed Ethiopian doctor on your phone. In Amharic. Within hours. No travel. No hospital stress.",
            cta: "Book a consultation →",
          },

          trust: {
            item1: "Confidential",
            item2: "Secure & trusted",
            item3: "Global standards",
            item4: "Human & warm",
            item5: "Available 24/7",
            subtitle: "Premium healthcare support",
          },

          about: {
            label: "About Nordic Abrencare",
            title1: "Where Nordic excellence",
            title2: "meets Ethiopian compassion.",
            description:
              "We combine Nordic healthcare standards with Ethiopian warmth and trust.",
            button: "Learn more →",
          },

          familyHero: {
            badge: "Now open — founding family spots",
            titleLine1: "Your parent is",
            titleLine2: "in Addis.",
            titleAccent: "watching their health?",
            description:
              "Not their neighbours. Not their relatives. Nobody trained. Nobody tracking their health. That is what we do.",
            subDescription:
              "A vetted caregiver visits. A licensed doctor reviews. You get a full report after every visit.",
            cta: "Get your parent's care plan — we call in 24 hrs",
            note: "No payment now · No contract · Cancel any time",

            feature1: "First visit within 48 hours",
            feature2: "GPS-verified every visit",
            feature3: "Full refund if not satisfied",

            reportTitle: "Ato Tadesse · Addis Ababa, Age 74",
            reportSubtitle: "Active care plan · Home visit today",

            live: "Live",
            visitTitle: "Home care visit in progress",
            nurse: "Nurse Meron Girma · GPS verified ✓",
            reportSent: "Visit report sent to your phone",
          },

          familyPage: {
            title: "Family Healthcare",
            description:
              "Comprehensive care for every member of your family",
          },
          
          pain: {
            badge: "The real problem",

            title1: "Your parent is not lonely.",
            title2: "They are medically invisible.",

            description:
              "Ethiopia's elderly are surrounded by love. But love does not catch a rising blood pressure. Love does not follow up on a doctor's prescription. Love does not send you a weekly health report. These are the words we hear every day from diaspora families.",

            story1:
              "I call every day and they say they are fine. Then I find out they have not taken their medication in two weeks because they ran out and did not want to worry me.",

            author1: "Ethiopian family — Stockholm",

            story2:
              "My father had a mild stroke. The relatives around him did not recognise the signs. If a trained caregiver had been there that morning, it could have been caught before it became a stroke.",

            author2: "Ethiopian family — Oslo",

            story3:
              "My mother sees a doctor maybe once a year — if we remember to book it and she is willing to travel. Nobody is tracking anything in between. That terrifies me.",

            author3: "Ethiopian family — London",

            story4:
              "I work 60-hour weeks. I cannot manage the details from here. I need someone I completely trust to handle my parents' health — and tell me only when it matters.",

            author4: "Ethiopian family — Washington DC",

            insightTitle: "The insight that changes everything",

            insight:
              "The problem is not that your parent is alone — they have family around them. The problem is that nobody in that family is trained to notice that their blood pressure has been dangerously high for six months. Nobody is following up on last week's doctor visit. Nobody is sending you a health update. That invisible gap between love and medical care — that is exactly what Nordic Abrencare fills."
          },
          
          comparison: {
            badge: "Before & after",
            title: "The difference Nordic Abrencare makes",
            subtitle:
              "Not in theory. In the daily reality of being a diaspora family with an elderly parent in Ethiopia.",
            headerEmpty: "",
            withoutTitle: "Without Abrencare",
            withTitle: "With Abrencare",

            row1: {
              title: "Health monitoring",
              without: "Annual check-up — if you remember to book it",
              with: "Vital signs, blood samples, X-ray and MRI — tracked continuously",
            },

            row2: {
              title: "Medication",
              without: "You hope they are taking it — nobody confirms",
              with: "Logged and confirmed administered — every time",
            },

            row3: {
              title: "Doctor access",
              without: "Long travel, long wait, you hear about it days later",
              with: "Video consultation same day — you join from your desk",
            },

            row4: {
              title: "Your visibility",
              without: "You call. They say fine. You worry anyway.",
              with: "Full health report on your phone after every visit",
            },

            row5: {
              title: "Emergency",
              without: "Relatives panic — you find out by phone — you manage it from abroad alone",
              with: "24/7 coordinator in Addis — we call you, we handle it",
            },

            row6: {
              title: "Your peace of mind",
              without: "Constant background anxiety — every call could be bad news",
              with: "You know. You are informed. The worry is gone.",
            },
          },
          
          services: {
            badge: "What we do",
            title1: "Two services. One complete solution.",
            title2: "Managed entirely by us.",

            home: {
              title: "Home care visits",
              description:
                "A vetted caregiver visits your parent in Addis Ababa. You see every visit live. You receive a full medical report after every visit.",

              feature1: "Background-checked caregiver",
              feature2: "GPS verified every visit",
              feature3: "Vital signs monitored",
              feature4: "Blood tests coordinated",
              feature5: "Imaging (X-ray & MRI) arranged",
              feature6: "Medication confirmed each visit",
              feature7: "Full health report sent to your phone",
              feature8: "24/7 emergency coordinator in Addis",

              insightTitle: "Proactive care — not reactive care",
              insight:
                "We do not wait for emergencies. We detect issues early using continuous monitoring, lab data, and structured visits.",
            },

            digital: {
              title: "Digital health consultation",
              description:
                "A licensed Ethiopian doctor meets your parent via video. You join from anywhere in the world. Same-day access. No waiting rooms.",

              feature1: "Licensed Ethiopian doctors",
              feature2: "Video / audio / chat",
              feature3: "Join from anywhere globally",
              feature4: "Instant consultation notes",
              feature5: "Same-day availability",
              feature6: "Amharic + English support",

              insightTitle: "You are in the room — remotely",
              insight:
                "You participate in the consultation even from abroad. You hear everything. You ask questions. You stay involved in care decisions.",
            },
          },
          
          testimonialSection: {
            badge: "Real families. Real results.",
            titleLine1: "One specific story beats",
            titleLine2: "a thousand statistics.",

            featuredTag: "Most shared",

            story1: "I had not spoken to my mother's doctor in over a year. Three days after joining, I watched her consultation live from my desk in Stockholm. The doctor spoke to me directly. I cried at my desk.",
            story1Name: "Hiwot M.",
            story1Location: "Stockholm, Sweden",

            story2: "My father's blood pressure had been dangerously high for months. Nobody around him knew. The caregiver caught it on the second visit. We had a doctor consultation the same day. That changed everything.",
            story2Name: "Saron A.",
            story2Location: "Oslo, Norway",

            story3: "I work 70-hour weeks. I cannot manage the details from London. They send me one monthly report. They call me only when something needs my attention. I sleep better now than I have in three years.",
            story3Name: "Yonas T.",
            story3Location: "London, UK",

            stat1Value: "48h",
            stat1Text: "First visit after signup — or your first month is free",

            stat2Value: "100%",
            stat2Text: "GPS-verified check-in on every single caregiver visit",

            stat3Value: "24/7",
            stat3Text: "Emergency coordinator physically present in Addis Ababa",
          },
          
          guaranteeSection: {
            titleLine1: "We take all the risk.",
            titleLine2: "You take none.",
            subtitle: "If we do not deliver — you do not pay. Simple.",

            point1:
              "Doctor does not join the call at the booked time?",
            point1Strong: "Full refund immediately.",

            point2:
              "Not satisfied with the consultation?",
            point2Strong: "We rebook with a different doctor at no charge.",

            point3:
              "Technical problem during the call?",
            point3Strong: "Full refund or free rebook — your choice.",

            button: "Book a consultation now →"
          },
          
          waitlist: {
            spotsRemaining: "14 of 50 founding spots remaining",
            titleLine1: "Get your parent's care plan.",
            titleLine2: "We call you within 24 hours.",
            subtitle: "No payment. No contract. A real person — not a bot — calls you within 24 hours to build your parent's plan together.",

            spotsLeft: "14 of 50 founding spots left",

            name: "Your name",
            namePlaceholder: "Dawit Haile",

            email: "Email address",
            emailPlaceholder: "dawit@email.com",

            country: "Country you live in",
            select: "Select",

            sweden: "Sweden",
            norway: "Norway",
            uk: "United Kingdom",
            usa: "United States",
            canada: "Canada",
            germany: "Germany",
            denmark: "Denmark",
            finland: "Finland",
            uae: "UAE / Gulf",
            australia: "Australia",
            other: "Other",

            whatsapp: "WhatsApp (optional)",

            priority: "What matters most to you right now?",
            selectOne: "Select one",

            option1: "Regular home care visits with reports",
            option2: "Doctor consultations I can join from abroad",
            option3: "Both — fully managed, I am very busy",
            option4: "Not sure yet — I want to talk first",

            alert: "Please enter your name and email.",

            button: "Reserve my spot — it is free →",

            footer: "No spam. No payment. A real person calls you within 24 hours.",

            success1: "You are on the list.",
            success2: "A real person from our team will call you within 24 hours to build your parent's care plan together.",
            success3: "Welcome to Nordic Abrencare Ethiopia."
          },
          executiveHero: {
            badge: "Executive Health Programme — strictly confidential",
            titleLine1: "Ethiopia's most",
            titleLine2: "successful people",
            titleAccent: "are dying too early.",
            statTitle: "Cardiovascular disease kills 24% of Ethiopian adults.",
            statDescription: "Most had no symptoms. They felt completely fine — right up until they did not.",
            description: "Hypertension. Kidney disease. Early heart failure. All silent. All preventable. None monitored. We fix that — continuously, proactively, and completely confidentially.",
            subDescription: "We monitor your vitals daily. Run your blood panel quarterly. Scan annually. Your dedicated physician calls you with results. You focus on leading. We protect the person doing it.",
            cta: "Book your confidential health assessment",
            secondaryCta: "See the data first ↓",
            note: "Strictly confidential · No commitment · Results within 72 hours",
            feature1: "We come to you — your office or home",
            feature2: "Nordic-standard protocols",
            feature3: "Your dedicated physician",
            dashboardHeader: "Live health monitoring dashboard",
            monitoringStatus: "Monitoring active",
            alertTitle: "Blood pressure alert — physician notified",
            alertDescription: "Sustained elevation detected over 72 hours. Dr. Bekele has been alerted. Consultation scheduled for today 14:00.",
            bpLabel: "Blood pressure",
            bpStatus: "High",
            bpTrend: "↑ Rising — 3 consecutive days",
            hrLabel: "Heart rate",
            hrStatus: "Elevated",
            hrTrend: "↑ Above baseline",
            oxygenLabel: "Oxygen sat.",
            oxygenStatus: "Normal",
            oxygenTrend: "→ Stable",
            glucoseLabel: "Blood glucose",
            glucoseStatus: "Watch",
            glucoseTrend: "↑ Slightly above target",
            panelLabel: "Last quarterly blood panel — 14 days ago",
            panelKidney: "Kidney function — normal",
            panelLiver: "Liver enzymes — normal",
            panelLDL: "LDL cholesterol — borderline",
            panelHbA1c: "HbA1c — elevated — action needed"
          },
          whyExecutives: {
            badge: "The data you need to see",
            titleLine1: "Not from poverty.",
            titleLine2: "From being too busy to notice.",
            description: "Ethiopia's most productive people are dying in their 50s and early 60s. Not because they lacked money or access. Because nobody was watching.",
            
            card1Title: "Cardiovascular disease — #1 cause of death in Addis Ababa",
            card1Strong: "24% of all adult deaths",
            card1Text: "in Addis Ababa. Most had no prior diagnosis. They were working. They were leading. They were completely unaware.",
            
            card2Title: "Hypertension — no symptoms until it is too late",
            card2Text: "The majority of Ethiopian leaders with",
            card2Strong: "dangerously high blood pressure do not know they have it.",
            card2Text2: "No symptoms. No check. No warning. The disease progresses invisibly for years.",
            
            card3Title: "Stroke strikes at peak career age",
            card3Text: "Unlike Western countries, stroke in Ethiopia most commonly hits people in their",
            card3Strong: "50s and early 60s.",
            card3Text2: "The most productive years. Years that a monitoring programme could have protected.",
            
            card4Title: "Stress is the silent accelerator",
            card4Text: "Carrying an organisation, a ministry, or a government under pressure is a",
            card4Strong: "chronic physiological stressor.",
            card4Text2: "Unmanaged, it accelerates hypertension, heart disease, and kidney failure — silently and steadily.",
            
            insightTitle: "The 16-year gap that does not have to exist",
            insightText: "Life expectancy in Ethiopia: 68 years. In the Nordic region: 84 years. That gap is not genetic. It is not inevitable. It is the direct result of proactive, continuous, data-driven health management. The same management we now bring to Ethiopia's leaders. The gap closes when someone is finally watching."
          },
          benefits: {
            badge: "What is included",
            titleLine1: "Your complete health",
            titleLine2: "command centre.",
            description: "Six components. We run all of them. You just show up for the tests — we come to you.",
            
            card1Title: "Continuous vital monitoring",
            card1Desc: "Wearable device tracks your heart rate, blood pressure, and oxygen 24 hours a day. Your physician receives alerts the moment something changes — before you feel a symptom.",
            card1Tag: "Daily · Always on",
            
            card2Title: "Quarterly full blood panel",
            card2Desc: "Complete metabolic profile every three months — kidney, liver, glucose, HbA1c, full lipid panel, thyroid, inflammation markers, vitamin deficiencies. A complete picture of what is happening inside.",
            card2Tag: "Every 3 months",
            
            card3Title: "Cardiac screening",
            card3Desc: "ECG, echocardiogram, and stress test every year. We are looking for what you cannot feel — artery narrowing, irregular rhythm, structural changes that precede a heart attack by months or years.",
            card3Tag: "Annually",
            
            card4Title: "Full body imaging",
            card4Desc: "Chest X-ray, abdominal ultrasound, and targeted MRI annually. We find what blood tests cannot — tumours at stage 1, organ changes, vascular abnormalities. Caught early. Treated successfully.",
            card4Tag: "Annually",
            
            card5Title: "Your dedicated physician",
            card5Desc: "One doctor. Knows your complete history, your risks, your targets. Calls you with results — you never chase. Available same day when you need them. The physician every leader deserves and never had time to find.",
            card5Tag: "Always available",
            
            card6Title: "Monthly health intelligence report",
            card6Desc: "Every vital trend, blood result, and lifestyle risk score in one clean monthly document. Written for a busy person. Read in five minutes. One page. One clear picture of where you stand.",
            card6Tag: "Monthly",
            
            emergencyTitle: "Emergency response — included in every plan",
            emergencyDesc: "If monitoring detects a critical event — or you experience any emergency — our medical coordinator activates immediately. We contact your family, coordinate hospital admission, and communicate with your team. You do not manage a medical crisis. We do.",
            emergencyStrong: "Response: under 15 minutes, anywhere in Addis Ababa."
          },
           program: {
            badge: "What is included",
            titleLine1: "Your complete health",
            titleLine2: "command centre.",
            description: "Two service categories. We run all of them. You just show up for the tests — we come to you.",
            
            preventiveTitle: "Preventive Care",
            preventiveDesc: "Catch problems before they become emergencies. Our preventive programme runs continuously in the background — you never have to think about it.",
            preventiveItem1: "Executive Physical Exam — complete head-to-toe assessment annually",
            preventiveItem2: "Full Lab Testing — blood, urine, biomarkers every quarter",
            preventiveItem3: "Imaging Coordination — X-ray, ultrasound, MRI arranged for you",
            preventiveItem4: "Health Risk Analysis — personalised risk score with action plan",
            preventiveItem5: "Continuous vital monitoring — 24/7/365",
            preventiveReportTitle: "Quarterly health intelligence report",
            preventiveReportDesc: "Every vital trend, blood result, and risk score in one clean document. Read in five minutes. Know exactly where you stand.",
            
            conciergeTitle: "Concierge Care",
            conciergeDesc: "Healthcare that works around your schedule — not the other way around. We handle everything. You just show up.",
            conciergeItem1: "Dedicated Health Coordinator — one person who knows your case",
            conciergeItem2: "Fast Specialist Access — appointments within 48 hours",
            conciergeItem3: "Travel Health Support — pre-trip prep and remote care",
            conciergeItem4: "Priority Appointments — same-day when you need them",
            conciergeItem5: "Your dedicated physician — calls you with results, you never chase",
            conciergeEmergencyTitle: "24/7 emergency response",
            conciergeEmergencyDesc: "If monitoring detects a critical event, our medical coordinator activates immediately.",
            conciergeEmergencyStrong: "Response: under 15 minutes, anywhere in Addis Ababa."
          },
          pricing: {
            badge: "Our guarantee",
            titleLine1: "We take all the risk.",
            titleLine2: "You take none.",
            subtitle: "If we do not deliver what we promised — you do not pay for that period. Full stop.",
            
            guarantee1: "Programme not started within one week of your assessment?",
            guarantee1Strong: "Your first month is free.",
            
            guarantee2: "Not satisfied with the quality of care after 30 days?",
            guarantee2Strong: "Full refund. No questions. One conversation.",
            
            guarantee3: "Emergency not responded to within 15 minutes?",
            guarantee3Strong: "That month is free — automatically.",
            
            guarantee4Strong: "No long-term contracts.",
            guarantee4: "Cancel with 30 days notice at any time.",
            
            pricingBadge: "Founding Member Pricing",
            perMonth: "month",
            pricingNote: "Limited founding member slots available. Price increases after 12 founding spots are filled.",
            cta: "Book your confidential assessment →",
            ctaNote: "No commitment · Cancel any time · Results within 72 hours",
            
            feature1: "We come to you",
            feature2: "Nordic protocols",
            feature3: "Your physician"
          },
          consultationHero: {
            badge: "Now available across Ethiopia",

            titleLine1: "See a licensed doctor",
            titleLine2: "from your phone.",

            titleAccent1: "No travel.",
            titleAccent2: "No queue.",

            description:
              "A licensed Ethiopian doctor on video, audio, or chat — in Amharic — within hours. From your home, your office, or anywhere you are in Ethiopia.",

            subDescription:
              "No hospital queue. No 4-hour wait. No travel across the city. Just open the app and your doctor is there.",

            button: "Book a consultation now",

            note:
              "Consultation in Amharic · Pay in ETB · No hospital needed",

            feature1: "Licensed Ethiopian doctors",
            feature2: "Consultation in Amharic",
            feature3: "Available same day"
          },
          bookingCard: {
            title: "Book Consultation",

            cardiology: "Cardiology",
            dermatology: "Dermatology",
            pediatrics: "Pediatrics",
            internalMedicine: "Internal Medicine",

            fee: "Consultation Fee",

            confirm: "Confirm Booking"
          },
          howItWorks: {
            badge: "How it works",

            titleLine1: "From opening the app",
            titleLine2: "to seeing your doctor — in minutes.",

            step1: {
              title: "Open the app",
              time: "2 minutes",
              description:
                "Choose your specialty. See available doctors. Pick a time that works for you."
            },

            step2: {
              title: "Pay in ETB",
              time: "Same day",
              description:
                "Pay securely by Telebirr, CBE Birr, or bank card. No cash. No travel."
            },

            step3: {
              title: "Meet your doctor",
              time: "At your time",
              description:
                "Video, audio, or chat — in Amharic. From anywhere you are. No waiting room."
            },

            step4: {
              title: "Get your notes",
              time: "After the call",
              description:
                "Diagnosis, prescription, and follow-up plan sent to your phone within minutes."
            }
          },
          problemSection: {
            badge: "The problem",
            titleLine1: "Getting healthcare in Ethiopia",
            titleLine2: "should not feel like this.",
            description: "These are the words we hear every day from Ethiopians who need a doctor but dread the process.",
            
            story1: "I took a full day off work to see a doctor. I waited 5 hours. By the time I was seen I had 4 minutes with a doctor who barely looked up from his paper.",
            story1Author: "Teacher — Addis Ababa",
            
            story2: "The nearest specialist to my city is 3 hours away. By the time I travel, pay, and return I have lost two days of income and I am exhausted.",
            story2Author: "Small business owner — Hawassa",
            
            story3: "My child had a fever at night. The nearest clinic was closed. I had nobody to call. I wish I could reach a doctor from my phone at that moment.",
            story3Author: "Mother — Dire Dawa",
            
            story4: "My prescription ran out. To renew it I have to take half a day, travel, wait, pay — just for a doctor to tell me to continue the same medication.",
            story4Author: "Office worker — Bahir Dar",
            
            stat1Value: "1:10k",
            stat1Label: "Doctor to patient ratio in Ethiopia — one of the lowest in the world",
            
            stat2Value: "4hrs",
            stat2Label: "Average time lost per hospital visit — travel, waiting, and consultation combined",
            
            stat3Value: "30min",
            stat3Label: "Average time from booking to seeing your doctor on Nordic Abrencare"
          },
          specialties: {
            badge: "Specialties available",
            titleLine1: "Whatever you need.",
            titleLine2: "We have a doctor for it.",
            
            generalPractice: "General practice",
            generalPracticeDesc: "Fever, infections, chronic conditions, prescriptions, check-ups",
            
            cardiology: "Cardiology",
            cardiologyDesc: "Heart health, blood pressure, chest pain, hypertension management",
            
            paediatrics: "Paediatrics",
            paediatricsDesc: "Children's health, fever, growth, vaccinations, developmental concerns",
            
            diabetes: "Diabetes & endocrinology",
            diabetesDesc: "Diabetes management, blood sugar, thyroid, hormonal conditions",
            
            neurology: "Neurology",
            neurologyDesc: "Headaches, migraines, dizziness, nerve pain, sleep disorders",
            
            respiratory: "Respiratory",
            respiratoryDesc: "Asthma, breathing difficulties, chest infections, allergies",
            
            dermatology: "Dermatology",
            dermatologyDesc: "Skin conditions, rashes, infections, hair loss, acne",
            
            mentalHealth: "Mental health",
            mentalHealthDesc: "Anxiety, depression, stress, counselling — private and confidential"
          },
           beforeAfter: {
            badge: "Before & after",
            titleLine1: "What seeing a doctor looks like",
            titleLine2: "before and after Abrencare.",
            
            withoutTitle: "Without Abrencare",
            withTitle: "With Abrencare",
            
            before1: "Wake up early. Travel across the city. Wait 3 to 5 hours in a queue.",
            before2: "Lose a full day of work or school just to see a doctor",
            before3: "Travel cost plus consultation fee — expensive and exhausting",
            before4: "5 minutes with an overworked doctor who barely knows your history",
            before5: "Outside Addis — no specialist available. Travel hours for basic care.",
            
            after1: "Open the app. Choose a doctor. Book a time. Done in 2 minutes.",
            after2: "See your doctor from home, office, or anywhere — no travel needed",
            after3: "Pay in ETB by Telebirr, CBE Birr, or bank card — quick and secure",
            after4: "30-minute dedicated consultation — in Amharic — doctor knows your file",
            after5: "Specialists available nationwide — Addis, Hawassa, Dire Dawa, anywhere"
          },
          doctors: {
            badge: "Our doctors",
            titleLine1: "Licensed. Experienced.",
            titleLine2: "Speaking your language.",
            description: "Every doctor on Nordic Abrencare is licensed by the Ethiopian Medical Board. No exceptions. No shortcuts.",
            
            doctor1Name: "Dr. Haile Bekele",
            doctor1Specialty: "General practice",
            doctor1Experience: "12 years experience",
            
            doctor2Name: "Dr. Sara Alemu",
            doctor2Specialty: "Paediatrics",
            doctor2Experience: "9 years experience",
            
            doctor3Name: "Dr. Mekdes Tadesse",
            doctor3Specialty: "Cardiology",
            doctor3Experience: "14 years experience",
            
            tagAmharic: "Amharic",
            tagLicensed: "Licensed",
            tagChildrenSpecialist: "Children specialist",
            tagHeartSpecialist: "Heart specialist"
          },
        }
      },

      am: {
        translation: {
          navbar: {
            subtitle: "ጤና • ኢትዮጵያ",
            family: "የቤተሰብ እንክብካቤ",
            executive: "የአስተዳደር ጤና",
            digital: "ዲጂታል ምክክር",
            book: "ቀጠሮ ያዙ",
          },

          hero: {
            badge: "አሁን ክፍት — መስራች አባላት",
            title: "የኖርዲክ ደረጃ.",
            titleAccent: "የኢትዮጵያ ልብ.",
            description: "ዓለም አቀፍ የጤና እንክብካቤ።",

            feature1Title: "የቤተሰብ እንክብካቤ",
            feature1Desc:
              "ለምትወዷቸው ሰዎች የተዘጋጀ የጤና አገልግሎት።",

            feature2Title: "የአስተዳደር ጤና",
            feature2Desc:
              "ለመሪዎች ቀጣይነት ያለው የጤና ክትትል።",

            feature3Title: "ዲጂታል አገልግሎት",
            feature3Desc:
              "ከስልክዎ በቀጥታ ከፈቃድ ያለው ዶክተር ጋር ይነጋገሩ።",

            feature4Title: "የታመነ ደረጃ",
            feature4Desc:
              "በኖርዲክ ደረጃ እና በኢትዮጵያ ርህራሄ የተገነባ።",

            button: "አገልግሎቶችን ይመልከቱ →",
            testimonial: "እናቴ በጥሩ እጅ ነች።",
            author: "— ዮናስ",
          },

          stats: {
            label: "የሕይወት ዕድሜ ልዩነት",
            ethiopia: "ኢትዮጵያ",
            nordic: "ኖርዲክ",
            closing: "ይህን ልዩነት እንቀንሳለን።",
          },

          familyCard: {
            label: "ለዲያስፖራ ቤተሰቦች",
            title: "የቤት እንክብካቤ",
            description: "ወደ ቤት እንመጣለን።",
            cta: "ይጀምሩ →",
          },

          executiveCard: {
            label: "ለመሪዎች",
            title: "የጤና ፕሮግራም",
            description: "ክትትል በቀጣይነት።",
            cta: "ይመልከቱ →",
          },

          consultationCard: {
            label: "ዲጂታል ምክክር",
            title: "ዶክተር በስልክ",
            description: "ፈጣን እና ቀላል።",
            cta: "ቀጠሮ ያዙ →",
          },

          trust: {
            item1: "ሚስጥራዊ",
            item2: "ደህንነት",
            item3: "ዓለም አቀፍ",
            item4: "ሞቅ ያለ",
            item5: "24/7",
            subtitle: "የጤና ድጋፍ",
          },

          about: {
            label: "ስለ እኛ",
            title1: "የኖርዲክ",
            title2: "ከኢትዮጵያ ጋር",
            description: "ጥራት እና ርህራሄ",
            button: "ተጨማሪ →",
          },

          familyHero: {
            badge: "አሁን ክፍት — የቤተሰብ ቦታዎች",
            titleLine1: "ወላጅዎ",
            titleLine2: "በአዲስ አበባ ነው።",
            titleAccent: "ማን ነው የሚከታተለው?",
            description:
              "ማንም አይከታተልም። እኛ ግን እንከታተላለን።",
            subDescription:
              "እንክብካቤ ሰጪ ይመጣል፣ ዶክተር ይመረምራል።",
            cta: "የእንክብካቤ እቅድ ይጀምሩ",
            note: "ክፍያ የለም · ውል የለም",

            feature1: "48 ሰዓት ውስጥ ጉብኝት",
            feature2: "GPS የተረጋገጠ",
            feature3: "ሙሉ መመለስ",

            reportTitle: "አቶ ታደሰ · አዲስ አበባ",
            reportSubtitle: "የእንክብካቤ እቅድ",

            live: "በቀጥታ",
            visitTitle: "ጉብኝት በሂደት ላይ",
            nurse: "ነርስ መሮን",
            reportSent: "ሪፖርት ተላከ",
          },

          familyPage: {
            title: "የቤተሰብ ጤና",
            description: "ሙሉ እንክብካቤ",
          },
          
          pain: {
            badge: "እውነተኛው ችግር",

            title1: "ወላጅዎ ብቻቸውን አይደሉም።",
            title2: "ግን በሕክምና እይታ ውስጥ አይገኙም።",

            description:
              "በኢትዮጵያ አረጋውያን በፍቅር የተከበቡ ናቸው። ግን ፍቅር ከፍ የሚል የደም ግፊት አያውቅም። ፍቅር የዶክተር መድሀኒት ክትትል አያደርግም። ፍቅር ሳምንታዊ የጤና ሪፖርት አይልክም።",

            story1:
              "በየቀኑ እደውላለሁ። ሁልጊዜ ደህና ነን ይላሉ። ከዚያ ሁለት ሳምንት መድሀኒት እንዳልወሰዱ አውቃለሁ።",

            author1: "የኢትዮጵያ ቤተሰብ — Stockholm",

            story2:
              "አባቴ ቀላል ስትሮክ አጋጠመው። ዙሪያው ያሉ ዘመዶች ምልክቱን አላወቁም። የሰለጠነ እንክብካቤ ቢኖር ኖሮ በፊት ሊታወቅ ይችል ነበር።",

            author2: "የኢትዮጵያ ቤተሰብ — Oslo",

            story3:
              "እናቴ አንዳንድ ጊዜ ብቻ ዶክተር ታያለች። በመካከል ማንም አይከታተልም። ይህ ያስፈራኛል።",

            author3: "የኢትዮጵያ ቤተሰብ — London",

            story4:
              "ረጅም ሰዓት እሰራለሁ። ከሩቅ ሆኜ ዝርዝሮቹን መቆጣጠር አልችልም። ወላጆቼን ሙሉ በሙሉ የማምነው ሰው እፈልጋለሁ።",

            author4: "የኢትዮጵያ ቤተሰብ — Washington DC",

            insightTitle: "ሁሉን የሚቀይር እውነታ",

            insight:
              "ችግሩ ወላጅዎ ብቻቸውን መሆናቸው አይደለም። ቤተሰብ አለ። ችግሩ በዚያ ቤተሰብ ውስጥ ማንም ከፍ ያለ የደም ግፊት ለ6 ወራት እንዳለ የሚያውቅ ስልጠና የለውም። የዶክተር ጉብኝት ክትትል የለም። የጤና ሪፖርት የሚልክ የለም። በፍቅር እና በሕክምና መካከል ያለውን ክፍተት Nordic Abrencare ይሞላዋል።"
          },
          
          comparison: {
            badge: "ከበፊት እና ከኋላ",
            title: "ኖርዲክ የሚፈጥረው ልዩነት",
            subtitle:
              "በቲዎሪ አይደለም። በእውነተኛ ሕይወት ውስጥ።",
            headerEmpty: "",
            withoutTitle: "Abrencare ያለ",
            withTitle: "Abrencare ያለ",

            row1: {
              title: "የጤና ክትትል",
              without: "ዓመታዊ ምርመራ — ካስታወሱ ብቻ",
              with: "የሕይወት ምልክቶች ቀጣይነት ክትትል",
            },

            row2: {
              title: "መድሃኒት",
              without: "እየወሰዱ ነው ብለህ ትገምታለህ",
              with: "እያንዳንዱ ጊዜ ተመዝግቦ ይረጋገጣል",
            },

            row3: {
              title: "ዶክተር መዳረሻ",
              without: "ረጅም ጉዞ እና ቆይታ",
              with: "በዚያው ቀን የቪዲዮ ምክክር",
            },

            row4: {
              title: "እውቀት ሁኔታ",
              without: "ትደውላለህ እነሱ ደህና ነን ይላሉ",
              with: "ሙሉ የጤና ሪፖርት በስልክ",
            },

            row5: {
              title: "አደጋ",
              without: "ቤተሰብ ይደነግጣሉ አንተ ከውጭ ትያዛለህ",
              with: "24/7 አስተባባሪ በአዲስ አበባ",
            },

            row6: {
              title: "የልብ ሰላም",
              without: "የተደጋጋሚ ጭንቀት",
              with: "ታውቃለህ፣ ተነግሮሃል፣ ጭንቀት ይጠፋል",
            },
          },
          
          services: {
            badge: "ምን እንሰራለን",
            title1: "ሁለት አገልግሎቶች",
            title2: "አንድ ሙሉ መፍትሄ",

            home: {
              title: "የቤት እንክብካቤ",
              description:
                "ተረጋጋጭ እንክብካቤ ሰጪ በአዲስ አበባ ቤት ይጎበኛል። እያንዳንዱ ጉብኝት በቀጥታ ይታያል።",

              feature1: "የተረጋገጠ እንክብካቤ ሰጪ",
              feature2: "GPS የተረጋገጠ ጉብኝት",
              feature3: "የሕይወት ምልክቶች ክትትል",
              feature4: "የደም ምርመራ አዘጋጅት",
              feature5: "X-ray እና MRI አስተባባሪ",
              feature6: "መድሃኒት ማረጋገጥ",
              feature7: "ሙሉ ሪፖርት በስልክ",
              feature8: "24/7 አስተባባሪ",

              insightTitle: "ቀደም ብሎ ክትትል",
              insight:
                "አደጋ እንዲከሰት አንጠብቅም። በቀጣይነት ክትትል ችግኝነት ቀደም ብሎ እንደሚታወቅ እናደርጋለን።",
            },

            digital: {
              title: "ዲጂታል ምክክር",
              description:
                "የፈቃድ ያለው ዶክተር በቪዲዮ እንዲገናኝ ይደርሳል። ከዓለም ውጭ እንኳ በቀጥታ ትካፈላለህ።",

              feature1: "የፈቃድ ያለው ዶክተር",
              feature2: "ቪዲዮ / ድምጽ / ጽሁፍ",
              feature3: "ከማንኛውም ቦታ መግባት",
              feature4: "ፈጣን ሪፖርት",
              feature5: "በዚያው ቀን አገልግሎት",
              feature6: "አማርኛ + እንግሊዝኛ",

              insightTitle: "በርቀት ቢሆንም አንድ ቦታ ነው",
              insight:
                "ከውጭ ቢሆንም በምክክሩ ትሳተፋለህ። ሁሉን ትሰማለህ። ውሳኔ ውስጥ ትሳተፋለህ።",
            },
          },
          
          testimonialSection: {
            badge: "እውነተኛ ቤተሰቦች። እውነተኛ ውጤቶች።",
            titleLine1: "አንድ ትክክለኛ ታሪክ",
            titleLine2: "ከሺዎች ስታቲስቲክስ ይበልጣል።",

            featuredTag: "ብዙ ጊዜ የተጋራ",

            story1: "ከአንድ ዓመት በላይ ከእናቴ ዶክተር ጋር አልተነጋገርሁም። ከተመዘገብኩ ከሶስት ቀን በኋላ ከስቶክሆልም በቀጥታ ስብሰባዋን ተመለከትሁ። ዶክተሩ በቀጥታ ከእኔ ጋር ተነጋገረ። በዴስኬ ላይ አለቅሼ ነበር።",
            story1Name: "ሂዎት ኤም.",
            story1Location: "ስቶክሆልም, ስዊድን",

            story2: "የአባቴ የደም ግፊት ለወራት አደገኛ ነበር። ማንም አልተረዳም። በሁለተኛው ጉብኝት እንክብካቤ ሰጪው አገኘው። በዚያው ቀን ዶክተር ጋር ምክክር አደረግን። ያ ሁሉን ለወጠ።",
            story2Name: "ሳሮን ኤ.",
            story2Location: "ኦስሎ, ኖርዌይ",

            story3: "70 ሰዓት በሳምንት እሰራለሁ። ከለንደን ዝርዝሮችን መቆጣጠር አልችልም። በወር አንድ ሪፖርት ይላኩልኛል። ችግር ሲኖር ብቻ ይደውሉልኛል። አሁን ከቀድሞ ይልቅ በተሻለ እንቅልፍ እተኛለሁ።",
            story3Name: "ዮናስ ቲ.",
            story3Location: "ለንደን, ዩኬ",

            stat1Value: "48ሰ",
            stat1Text: "ከመመዝገብ በኋላ የመጀመሪያ ጉብኝት — ወይም የመጀመሪያ ወር ነፃ",

            stat2Value: "100%",
            stat2Text: "GPS የተረጋገጠ የእያንዳንዱ ጉብኝት መግቢያ",

            stat3Value: "24/7",
            stat3Text: "በአዲስ አበባ የሚገኝ የአደጋ አስተባባሪ"
          },
          
          guaranteeSection: {
            titleLine1: "ሁሉንም አደጋ እኛ እንይዛለን።",
            titleLine2: "እርስዎ ምንም አይይዙም።",
            subtitle: "ካልሰጠን ክፍያ የለም — ቀላል ነው።",

            point1:
              "ዶክተር በቀጠሮው ሰዓት ካልተገኘ?",
            point1Strong: "ወዲያውኑ ሙሉ መመለስ።",

            point2:
              "ከምክክሩ ካልተደሰቱ?",
            point2Strong: "በነፃ ከሌላ ዶክተር ጋር እንደገና እንያዝልዎታለን።",

            point3:
              "በስብሰባው ጊዜ ቴክኒክ ችግር ካጋጠመ?",
            point3Strong: "ሙሉ መመለስ ወይም ነፃ እንደገና ቀጠሮ — ምርጫዎ ነው።",

            button: "አሁን ቀጠሮ ያዙ →"
          },
          
          waitlist: {
            spotsRemaining: "ከ50 መስራች ቦታዎች 14 ብቻ ቀርተዋል",

            titleLine1: "የወላጅዎን የእንክብካቤ እቅድ ያግኙ።",
            titleLine2: "በ24 ሰዓት ውስጥ እንደውልልዎታለን።",

            subtitle:
              "ምንም ክፍያ የለም። ውል የለም። እውነተኛ ሰው — bot አይደለም — በ24 ሰዓት ውስጥ ደውሎ ከእርስዎ ጋር የወላጅዎን እቅድ ያዘጋጃል።",

            spotsLeft: "ከ50 ቦታዎች 14 ቀርተዋል",

            name: "የእርስዎ ስም",
            namePlaceholder: "ዳዊት ኃይሌ",

            email: "ኢሜይል አድራሻ",
            emailPlaceholder: "dawit@email.com",

            country: "የሚኖሩበት ሀገር",
            select: "ይምረጡ",

            sweden: "ስዊድን",
            norway: "ኖርዌይ",
            uk: "ዩናይትድ ኪንግደም",
            usa: "ዩናይትድ ስቴትስ",
            canada: "ካናዳ",
            germany: "ጀርመን",
            denmark: "ዴንማርክ",
            finland: "ፊንላንድ",
            uae: "ዩኤኢ / ገልፍ",
            australia: "አውስትራሊያ",
            other: "ሌላ",

            whatsapp: "WhatsApp (አማራጭ)",

            priority: "አሁን በጣም አስፈላጊው ምንድነው?",
            selectOne: "አንዱን ይምረጡ",

            option1: "መደበኛ የቤት እንክብካቤ ከሪፖርት ጋር",
            option2: "ከውጭ ሆኜ የምቀላቀልበት የዶክተር ምክክር",
            option3: "ሁለቱም — ሙሉ በሙሉ የሚተዳደር፣ በጣም ስራ አለብኝ",
            option4: "እርግጠኛ አይደለሁም — መጀመሪያ መነጋገር እፈልጋለሁ",

            alert: "እባክዎ ስምዎን እና ኢሜይልዎን ያስገቡ።",

            button: "ቦታዬን አስይዝ — ነፃ ነው →",

            footer:
              "Spam የለም። ክፍያ የለም። እውነተኛ ሰው በ24 ሰዓት ውስጥ ይደውላል።",

            success1: "በዝርዝሩ ውስጥ ገብተዋል።",

            success2:
              "ከቡድናችን እውነተኛ ሰው በ24 ሰዓት ውስጥ ደውሎ ከእርስዎ ጋር የወላጅዎን እቅድ ያዘጋጃል።",

            success3: "ወደ Nordic Abrencare Ethiopia እንኳን በደህና መጡ።"
          },
            executiveHero: {
            badge: "የአስተዳደር ጤና ፕሮግራም — ሙሉ ሚስጥራዊ",
            titleLine1: "የኢትዮጵያ በጣም",
            titleLine2: "ስኬታማ ሰዎች",
            titleAccent: "በጣም ቀድመው እየሞቱ ነው።",
            statTitle: "የልብና የደም ቧንቧ በሽታ ከኢትዮጵያ ጎልማሶች 24% ይገድላል።",
            statDescription: "ብዙዎች ምልክት አልነበራቸውም። ሙሉ ጤናማ ሆነው ተሰምቷቸው ነበር — እስከመጨረሻው ቀን ድረስ።",
            description: "የደም ግፊት። የኩላሊት በሽታ። ቀደምት የልብ ድካም። ሁሉም ዝምተኛ። ሁሉም መከላከል የሚቻል። ማንም የማይከታተል። ያንን እንፈታዋለን — ቀጣይነት ባለው፣ ቅድሚያ በሚሰጥ እና ሙሉ በሙሉ ሚስጥራዊ በሆነ መንገድ።",
            subDescription: "የሕይወት ምልክቶችዎን በየቀኑ እንከታተላለን። የደም ምርመራዎን በየሩብ ዓመቱ እንሰራለን። በየዓመቱ ስካን እናደርጋለን። የእርስዎ ሐኪም ውጤቶቹን ይደውልልዎታል። እርስዎ በመምራት ላይ ያተኩሩ። እኛ የሚሰራውን ሰው እንጠብቃለን።",
            cta: "ሚስጥራዊ የጤና ምርመራዎን ይያዙ",
            secondaryCta: "መረጃውን ይመልከቱ ↓",
            note: "ሙሉ ሚስጥራዊ · ግዴታ የለም · ውጤት በ72 ሰዓት ውስጥ",
            feature1: "እኛ ወደ እርስዎ እንመጣለን — ቢሮዎ ወይም ቤትዎ",
            feature2: "የኖርዲክ ደረጃ ፕሮቶኮሎች",
            feature3: "የእርስዎ የግል ሐኪም",
            dashboardHeader: "የቀጥታ የጤና ክትትል ዳሽቦርድ",
            monitoringStatus: "ክትትል በሂደት ላይ",
            alertTitle: "የደም ግፊት ማስጠንቀቂያ — ሐኪም ተነግሯል",
            alertDescription: "ከ72 ሰዓታት በላይ ከፍተኛ መጠን ተገኝቷል። ዶ/ር በቀለ ተነግረዋል። ምክክር ለዛሬ 14፡00 ተይዟል።",
            bpLabel: "የደም ግፊት",
            bpStatus: "ከፍተኛ",
            bpTrend: "↑ እየጨመረ — ተከታታይ 3 ቀናት",
            hrLabel: "የልብ ምት",
            hrStatus: "ከፍ ያለ",
            hrTrend: "↑ ከመደበኛው በላይ",
            oxygenLabel: "ኦክስጅን",
            oxygenStatus: "መደበኛ",
            oxygenTrend: "→ የተረጋጋ",
            glucoseLabel: "የደም ስኳር",
            glucoseStatus: "ክትትል",
            glucoseTrend: "↑ ከመደበኛው በትንሹ በላይ",
            panelLabel: "የመጨረሻ የሩብ ዓመት የደም ምርመራ — 14 ቀናት በፊት",
            panelKidney: "የኩላሊት ተግባር — መደበኛ",
            panelLiver: "የጉበት ኢንዛይሞች — መደበኛ",
            panelLDL: "LDL ኮሌስትሮል — ድንበር",
            panelHbA1c: "HbA1c — ከፍ ያለ — እርምጃ ያስፈልጋል"
          },
          whyExecutives: {
            badge: "ማየት ያለብዎት መረጃ",
            titleLine1: "ከድህነት አይደለም።",
            titleLine2: "በጣም ስራ ከመብዛት ነው።",
            description: "የኢትዮጵያ በጣም ምርታማ ሰዎች በ50ዎቹ እና በ60ዎቹ መጀመሪያ ላይ እየሞቱ ነው። ገንዘብ ወይም መዳረሻ ስለሌላቸው አይደለም። ማንም ስለማይከታተል ነው።",
            
            card1Title: "የልብና የደም ቧንቧ በሽታ — በአዲስ አበባ ቁጥር 1 የሞት መንስኤ",
            card1Strong: "ከጠቅላላው የጎልማሶች ሞት 24%",
            card1Text: "በአዲስ አበባ። አብዛኞቹ ቀደም ብሎ ምርመራ አልነበራቸውም። እየሰሩ ነበር። እየመሩ ነበር። ሙሉ በሙሉ አላወቁም ነበር።",
            
            card2Title: "የደም ግፊት — እስከመጨረሻው ድረስ ምልክት የለውም",
            card2Text: "አብዛኛው የኢትዮጵያ መሪዎች በ",
            card2Strong: "አደገኛ የደም ግፊት እንዳለባቸው አያውቁም።",
            card2Text2: "ምልክት የለም። ምርመራ የለም። ማስጠንቀቂያ የለም። በሽታው ለዓመታት በማይታይ ሁኔታ ይራመዳል።",
            
            card3Title: "ስትሮክ በስራ ዘመን ከፍተኛ ደረጃ ላይ ይመታል",
            card3Text: "ከምዕራባውያን አገሮች በተለየ፣ በኢትዮጵያ ስትሮክ በብዛት የሚያጠቃው ሰዎች በ",
            card3Strong: "50ዎቹ እና 60ዎቹ መጀመሪያ ላይ ነው።",
            card3Text2: "በጣም ምርታማ ዓመታት። የክትትል ፕሮግራም ሊጠብቃቸው የሚችላቸው ዓመታት።",
            
            card4Title: "ጭንቀት ዝምተኛው አፋጣኝ ነው",
            card4Text: "ድርጅትን፣ ሚኒስቴርን፣ ወይም መንግስትን በጫና ውስጥ መሸከም",
            card4Strong: "ሥር የሰደደ የፊዚዮሎጂ ጭንቀት ነው።",
            card4Text2: "ሳይታከም፣ የደም ግፊትን፣ የልብ በሽታን እና የኩላሊት ውድቀትን በዝምታ እና በተከታታይ ያፋጥናል።",
            
            insightTitle: "መኖር የሌለበት 16-ዓመት ክፍተት",
            insightText: "በኢትዮጵያ የህይወት ዕድሜ፡ 68 ዓመት። በኖርዲክ አገሮች፡ 84 ዓመት። ያ ክፍተት የዘር አይደለም። የማይቀር አይደለም። ንቁ፣ ቀጣይነት ያለው፣ በመረጃ የሚመራ የጤና አያያዝ ቀጥተኛ ውጤት ነው። አሁን ለኢትዮጵያ መሪዎች የምናመጣው ተመሳሳይ አያያዝ ነው። አንድ ሰው በመጨረሻ ሲከታተል ክፍተቱ ይዘጋል።"
          },
          benefits: {
            badge: "የተካተቱት ነገሮች",
            titleLine1: "የእርስዎ ሙሉ የጤና",
            titleLine2: "ማዘዣ ማእከል።",
            description: "ስድስት ክፍሎች። ሁሉንም እኛ እንሰራለን። እርስዎ ለምርመራዎች ብቻ ይገኙ — እኛ ወደ እርስዎ እንመጣለን።",
            
            card1Title: "ቀጣይነት ያለው የሕይወት ምልክት ክትትል",
            card1Desc: "የሚለብሰው መሳሪያ የልብ ምትዎን፣ የደም ግፊትዎን እና ኦክስጅንዎን በ24 ሰዓት ይከታተላል። ሐኪምዎ አንድ ነገር ሲለወጥ ወዲያውኑ ማስጠንቀቂያ ይቀበላሉ — ምልክት ከመሰማትዎ በፊት።",
            card1Tag: "በየቀኑ · ሁልጊዜ በርቷል",
            
            card2Title: "የሩብ ዓመት ሙሉ የደም ምርመራ",
            card2Desc: "በየሶስት ወሩ ሙሉ ሜታቦሊክ መገለጫ — ኩላሊት፣ ጉበት፣ ግሉኮስ፣ HbA1c፣ ሙሉ የሊፒድ ምርመራ፣ ታይሮይድ፣ የእብጠት ምልክቶች፣ የቫይታሚን እጥረቶች። በውስጥ የሚከሰተው ሙሉ ሥዕል።",
            card2Tag: "በየ3 ወሩ",
            
            card3Title: "የልብ ምርመራ",
            card3Desc: "ኢሲጂ፣ ኢኮካርዲዮግራም እና የጭንቀት ምርመራ በየዓመቱ። ሊሰማዎት የማይችለውን እንፈልጋለን — የደም ቧንቧ መጥበብ፣ ያልተለመደ ምት፣ ከልብ ድካም በወራት ወይም በዓመታት በፊት የሚመጡ መዋቅራዊ ለውጦች።",
            card3Tag: "በየዓመቱ",
            
            card4Title: "ሙሉ የሰውነት ምስል",
            card4Desc: "የደረት ኤክስሬይ፣ የሆድ አልትራሳውንድ እና የታለመ ኤምአርአይ በየዓመቱ። የደም ምርመራዎች ሊያገኙ የማይችሉትን እናገኛለን — በደረጃ 1 ላይ ያሉ እጢዎች፣ የአካል ለውጦች፣ የደም ቧንቧ ያልተለመዱ ነገሮች። ቀደም ብሎ ተይዟል። በተሳካ ሁኔታ ታክሟል።",
            card4Tag: "በየዓመቱ",
            
            card5Title: "የእርስዎ የግል ሐኪም",
            card5Desc: "አንድ ዶክተር። ሙሉ ታሪክዎን፣ አደጋዎችዎን፣ ግቦችዎን ያውቃል። ውጤቶችን ይደውልልዎታል — እርስዎ አያሳድዱም። በሚፈልጉበት ጊዜ በዚያው ቀን ይገኛል። እያንዳንዱ መሪ የሚገባው እና ለማግኘት ጊዜ ያላገኘው ሐኪም።",
            card5Tag: "ሁልጊዜ ይገኛል",
            
            card6Title: "ወርሃዊ የጤና እውቀት ሪፖርት",
            card6Desc: "እያንዳንዱ የሕይወት ምልክት አዝማሚያ፣ የደም ውጤት እና የአኗኗር ዘይቤ ስጋት ነጥብ በአንድ ንጹህ ወርሃዊ ሰነድ ውስጥ። ለስራ የበዛ ሰው ተጽፏል። በአምስት ደቂቃ ውስጥ ይነበባል። አንድ ገፅ። የት እንደሆኑ አንድ ግልጽ ሥዕል።",
            card6Tag: "በየወሩ",
            
            emergencyTitle: "የአደጋ ጊዜ ምላሽ — በእያንዳንዱ እቅድ ውስጥ ተካቷል",
            emergencyDesc: "ክትትል አስጊ ክስተት ካገኘ — ወይም ማንኛውም ድንገተኛ ነገር ካጋጠመዎት — የህክምና አስተባባሪያችን ወዲያውኑ ይንቀሳቀሳል። ቤተሰብዎን እናነጋግራለን፣ የሆስፒታል መግቢያን እናስተባብራለን፣ እና ከቡድንዎ ጋር እንገናኛለን። እርስዎ የህክምና ቀውስ አያስተዳድሩም። እኛ እናስተዳድራለን።",
            emergencyStrong: "ምላሽ፡ ከ15 ደቂቃ በታች፣ በአዲስ አበባ ውስጥ በማንኛውም ቦታ።"
          },
          program: {
            badge: "የተካተቱት ነገሮች",
            titleLine1: "የእርስዎ ሙሉ የጤና",
            titleLine2: "ማዘዣ ማእከል።",
            description: "ሁለት የአገልግሎት ምድቦች። ሁሉንም እኛ እንሰራለን። እርስዎ ለምርመራዎች ብቻ ይገኙ — እኛ ወደ እርስዎ እንመጣለን።",
            
            preventiveTitle: "መከላከያ እንክብካቤ",
            preventiveDesc: "ችግሮች ድንገተኛ ከመሆናቸው በፊት ይያዙዋቸው። የመከላከያ ፕሮግራማችን ከበስተጀርባ በቀጣይነት ይሰራል — እርስዎ ስለእሱ ማሰብ አያስፈልግዎትም።",
            preventiveItem1: "የአስተዳደር አካላዊ ምርመራ — ሙሉ የሰውነት ምርመራ በየዓመቱ",
            preventiveItem2: "ሙሉ የላብራቶሪ ምርመራ — ደም፣ ሽንት፣ ባዮማርከሮች በየሩብ ዓመቱ",
            preventiveItem3: "የምስል አስተባባሪነት — ኤክስሬይ፣ አልትራሳውንድ፣ ኤምአርአይ ለእርስዎ ይዘጋጃል",
            preventiveItem4: "የጤና አደጋ ትንተና — በግል የተዘጋጀ የአደጋ ነጥብ ከዕቅድ ጋር",
            preventiveItem5: "ቀጣይነት ያለው የሕይወት ምልክት ክትትል — 24/7/365",
            preventiveReportTitle: "የሩብ ዓመት የጤና እውቀት ሪፖርት",
            preventiveReportDesc: "እያንዳንዱ የሕይወት ምልክት አዝማሚያ፣ የደም ውጤት እና የአደጋ ነጥብ በአንድ ንጹህ ሰነድ ውስጥ። በአምስት ደቂቃ ውስጥ ያንብቡ። በትክክል የት እንደሆኑ ይወቁ።",
            
            conciergeTitle: "ኮንሰርጄ እንክብካቤ",
            conciergeDesc: "በፕሮግራምዎ ዙሪያ የሚሰራ የጤና እንክብካቤ — በተቃራኒው አይደለም። ሁሉንም ነገር እኛ እንይዛለን። እርስዎ ብቻ ይገኙ።",
            conciergeItem1: "የተሰጠ የጤና አስተባባሪ — ጉዳይዎን የሚያውቅ አንድ ሰው",
            conciergeItem2: "ፈጣን ስፔሻሊስት መዳረሻ — ቀጠሮዎች በ48 ሰዓት ውስጥ",
            conciergeItem3: "የጉዞ ጤና ድጋፍ — ከጉዞ በፊት ዝግጅት እና የርቀት እንክብካቤ",
            conciergeItem4: "ቅድሚያ ቀጠሮዎች — በሚያስፈልግበት ጊዜ በዚያው ቀን",
            conciergeItem5: "የእርስዎ የግል ሐኪም — ውጤቶችን ይደውልልዎታል፣ እርስዎ አያሳድዱም",
            conciergeEmergencyTitle: "24/7 የአደጋ ጊዜ ምላሽ",
            conciergeEmergencyDesc: "ክትትል አስጊ ክስተት ካገኘ፣ የህክምና አስተባባሪያችን ወዲያውኑ ይንቀሳቀሳል።",
            conciergeEmergencyStrong: "ምላሽ፡ ከ15 ደቂቃ በታች፣ በአዲስ አበባ ውስጥ በማንኛውም ቦታ።"
          },
          pricing: {
            badge: "የእኛ ዋስትና",
            titleLine1: "ሁሉንም አደጋ እኛ እንይዛለን።",
            titleLine2: "እርስዎ ምንም አይይዙም።",
            subtitle: "የገባነውን ቃል ካልሰጠን — ለዚያ ጊዜ አይከፍሉም። ፍጹም ማቆሚያ።",
            
            guarantee1: "ፕሮግራም ከምርመራዎ በአንድ ሳምንት ውስጥ ካልተጀመረ?",
            guarantee1Strong: "የመጀመሪያ ወርዎ ነፃ ነው።",
            
            guarantee2: "ከ30 ቀናት በኋላ በእንክብካቤ ጥራት ካልተደሰቱ?",
            guarantee2Strong: "ሙሉ መመለስ። ጥያቄ የለም። አንድ ውይይት ብቻ።",
            
            guarantee3: "ድንገተኛ አደጋ በ15 ደቂቃ ውስጥ ካልተሰጠ?",
            guarantee3Strong: "ያ ወር ነፃ ነው — በራስ-ሰር።",
            
            guarantee4Strong: "የረጅም ጊዜ ውሎች የሉም።",
            guarantee4: "በማንኛውም ጊዜ በ30 ቀናት ማስታወቂያ ይሰርዙ።",
            
            pricingBadge: "የመስራች አባል ዋጋ",
            perMonth: "ወር",
            pricingNote: "የተወሰኑ የመስራች አባል ቦታዎች ይገኛሉ። ዋጋው ከ12 ቦታዎች ከተሞሉ በኋላ ይጨምራል።",
            cta: "ሚስጥራዊ ምርመራዎን ይያዙ →",
            ctaNote: "ግዴታ የለም · በማንኛውም ጊዜ ይሰርዙ · ውጤት በ72 ሰዓት ውስጥ",
            
            feature1: "እኛ ወደ እርስዎ እንመጣለን",
            feature2: "የኖርዲክ ፕሮቶኮሎች",
            feature3: "የእርስዎ ሐኪም"
          },
          consultationHero: {
            badge: "አሁን በመላው ኢትዮጵያ ይገኛል",

            titleLine1: "ፈቃድ ያለው ዶክተር",
            titleLine2: "በስልክዎ ያግኙ",

            titleAccent1: "ጉዞ የለም.",
            titleAccent2: "ወረፋ የለም.",

            description:
              "በቪዲዮ፣ ድምጽ ወይም ቻት ፈቃድ ካለው ኢትዮጵያዊ ዶክተር ጋር በሰዓታት ውስጥ ይገናኙ። በቤትዎ፣ በቢሮዎ ወይም በማንኛውም ቦታ።",

            subDescription:
              "የሆስፒታል ወረፋ የለም። 4 ሰዓት ጥበቃ የለም። ከተማ ውስጥ ጉዞ የለም። አፕ ይክፈቱ እና ዶክተርዎ ይገኛል።",

            button: "አሁን ቀጠሮ ያዙ",

            note:
              "በአማርኛ ምክክር · በብር ክፍያ · ሆስፒታል አያስፈልግም",

            feature1: "ፈቃድ ያለው ኢትዮጵያዊ ዶክተር",
            feature2: "በአማርኛ ምክክር",
            feature3: "በዚያው ቀን አገልግሎት"
          },
          bookingCard: {
            title: "ቀጠሮ ያዙ",

            cardiology: "የልብ ሕክምና",
            dermatology: "የቆዳ ሕክምና",
            pediatrics: "የህፃናት ሕክምና",
            internalMedicine: "የውስጥ ሕክምና",

            fee: "የምክክር ክፍያ",

            confirm: "ቀጠሮ አረጋግጥ"
          },
          howItWorks: {
            badge: "እንዴት ይሰራል",

            titleLine1: "አፑን ከመክፈት",
            titleLine2: "እስከ ዶክተርዎን ማግኘት — በደቂቃዎች",

            step1: {
              title: "አፑን ይክፈቱ",
              time: "2 ደቂቃ",
              description:
                "የሚፈልጉትን ሕክምና ይምረጡ። ያሉ ዶክተሮችን ይመልከቱ። ለእርስዎ የሚመች ሰዓት ይምረጡ።"
            },

            step2: {
              title: "በብር ይክፈሉ",
              time: "በዚያው ቀን",
              description:
                "በቴሌብር፣ CBE Birr ወይም ባንክ ካርድ በደህና ይክፈሉ። ጥሬ ገንዘብ የለም። ጉዞ የለም።"
            },

            step3: {
              title: "ዶክተርዎን ያግኙ",
              time: "በመረጡት ሰዓት",
              description:
                "ቪዲዮ፣ ድምጽ ወይም ቻት — በአማርኛ። ከየትም ቦታ ሆነው። መጠበቂያ የለም።"
            },

            step4: {
              title: "ማስታወሻዎን ያግኙ",
              time: "ከጥሪው በኋላ",
              description:
                "ምርመራ፣ መድሀኒት እና ቀጣይ እቅድ በጥቂት ደቂቃዎች ውስጥ ወደ ስልክዎ ይላካል።"
            }
          },
          problemSection: {
            badge: "ችግሩ",
            titleLine1: "በኢትዮጵያ የጤና አገልግሎት ማግኘት",
            titleLine2: "እንደዚህ መሆን የለበትም።",
            description: "እነዚህ ዶክተር የሚፈልጉ ነገር ግን ሂደቱን የሚፈሩ ኢትዮጵያውያን በየቀኑ የሚናገሯቸው ቃላት ናቸው።",
            
            story1: "ዶክተር ለማየት አንድ ሙሉ ቀን ከስራ አቋረጥኩ። 5 ሰዓት ጠበቅሁ። በተራዬ ሳይደርስ በቀረሁበት ጊዜ ከወረቀቱ ሳይነሳ ያየኝ ዶክተር ለ4 ደቂቃ ብቻ ነበር።",
            story1Author: "መምህር — አዲስ አበባ",
            
            story2: "በከተማዬ አቅራቢያ ያለው ስፔሻሊስት ባለሙያ 3 ሰዓት ይርቃል። ሳመላለስ፣ ሳከፍል እና ስመለስ የሁለት ቀን ገቢ አጥቻለሁ እና ደክሞኛል።",
            story2Author: "ትንሽ ንግድ ባለቤት — ሀዋሳ",
            
            story3: "ልጄ በሌሊት ትኩሳት ነበረው። በአቅራቢያ ያለው ክሊኒክ ተዘግቶ ነበር። ማንም የምደውልበት አልነበረም። በዚያ ጊዜ ከስልኬ ዶክተር ማግኘት ብችል እመኛለሁ።",
            story3Author: "እናት — ድሬዳዋ",
            
            story4: "የሐኪም ማዘዣዬ አልቋል። ለማደስ ግማሽ ቀን መውሰድ፣ መጓዝ፣ መጠበቅ፣ መክፈል አለብኝ — ዶክተር ተመሳሳይ መድሀኒት እንድቀጥል ሊነግረኝ ብቻ።",
            story4Author: "ቢሮ ሰራተኛ — ባህርዳር",
            
            stat1Value: "1፡10ሺ",
            stat1Label: "በኢትዮጵያ የዶክተር እና የታካሚ ጥምርታ — በዓለም በጣም ዝቅተኛ ከሆኑት አንዱ",
            
            stat2Value: "4ሰ",
            stat2Label: "በአንድ የሆስፒታል ጉብኝት የሚጠፋ አማካይ ጊዜ — መጓዝ፣ መጠበቅ እና ምክክር በአንድ ላይ",
            
            stat3Value: "30ደቂቃ",
            stat3Label: "በኖርዲክ አብረንኬር ከቀጠሮ ወደ ዶክተር መገናኘት አማካይ ጊዜ"
          },
          specialties: {
            badge: "የሚገኙ ስፔሻሊቲዎች",
            titleLine1: "የሚፈልጉትን ሁሉ።",
            titleLine2: "ለእሱ ዶክተር አለን።",
            
            generalPractice: "አጠቃላይ ህክምና",
            generalPracticeDesc: "ትኩሳት፣ ኢንፌክሽኖች፣ ሥር የሰደዱ በሽታዎች፣ ማዘዣዎች፣ ምርመራዎች",
            
            cardiology: "የልብ ህክምና",
            cardiologyDesc: "የልብ ጤና፣ የደም ግፊት፣ የደረት ህመም፣ የደም ግፊት አያያዝ",
            
            paediatrics: "የህጻናት ህክምና",
            paediatricsDesc: "የህጻናት ጤና፣ ትኩሳት፣ እድገት፣ ክትባቶች፣ የእድገት ጭንቀቶች",
            
            diabetes: "የስኳር በሽታ እና ኢንዶክሪኖሎጂ",
            diabetesDesc: "የስኳር በሽታ አያያዝ፣ የደም ስኳር፣ ታይሮይድ፣ የሆርሞን ሁኔታዎች",
            
            neurology: "የነርቭ ህክምና",
            neurologyDesc: "ራስ ምታት፣ ማይግሬን፣ ማዞር፣ የነርቭ ህመም፣ የእንቅልፍ መዛባት",
            
            respiratory: "የመተንፈሻ አካላት",
            respiratoryDesc: "አስም፣ የመተንፈስ ችግር፣ የደረት ኢንፌክሽኖች፣ አለርጂዎች",
            
            dermatology: "የቆዳ ህክምና",
            dermatologyDesc: "የቆዳ ሁኔታዎች፣ ሽፍታዎች፣ ኢንፌክሽኖች፣ የፀጉር መርገፍ፣ ብጉር",
            
            mentalHealth: "የአእምሮ ጤና",
            mentalHealthDesc: "ጭንቀት፣ ድብርት፣ ጭንቀት፣ ምክር — የግል እና ሚስጥራዊ"
          },
         beforeAfter: {
            badge: "ከበፊት እና ከኋላ",
            titleLine1: "ዶክተር ማየት ምን ይመስላል",
            titleLine2: "ከአብረንኬር በፊት እና በኋላ።",
            
            withoutTitle: "ያለ አብረንኬር",
            withTitle: "ከአብረንኬር ጋር",
            
            before1: "ማለዳ መነሳት። ከተማውን አቋርጦ መጓዝ። ከ3 እስከ 5 ሰዓት በወረፋ መጠበቅ።",
            before2: "ዶክተር ለማየት ብቻ አንድ ሙሉ ቀን ከስራ ወይም ከትምህርት ማጣት",
            before3: "የጉዞ ወጪ እና የምክክር ክፍያ — ውድ እና አድካሚ",
            before4: "ታሪክዎን በደንብ ከማያውቀው በስራ ከመጠን በላይ ከተጫነ ዶክተር ጋር 5 ደቂቃ",
            before5: "ከአዲስ አበባ ውጭ — ስፔሻሊስት አይገኝም። ለመሠረታዊ እንክብካቤ ብቻ ሰዓታት መጓዝ።",
            
            after1: "መተግበሪያውን ይክፈቱ። ዶክተር ይምረጡ። ሰዓት ይያዙ። በ2 ደቂቃ ውስጥ ተጠናቀቀ።",
            after2: "ዶክተርዎን ከቤት፣ ከቢሮ ወይም ከማንኛውም ቦታ ይመልከቱ — ጉዞ አያስፈልግም",
            after3: "በቴሌብርር፣ በሲቢኢ ብር ወይም በባንክ ካርድ በብር ይክፈሉ — ፈጣን እና ደህንነቱ የተጠበቀ",
            after4: "የ30-ደቂቃ የተሰጠ ምክክር — በአማርኛ — ዶክተር ፋይልዎን ያውቃል",
            after5: "ስፔሻሊስቶች በመላ ሀገሪቱ ይገኛሉ — አዲስ አበባ፣ ሀዋሳ፣ ድሬዳዋ፣ በማንኛውም ቦታ"
          },
          doctors: {
            badge: "የእኛ ዶክተሮች",
            titleLine1: "ፈቃድ ያላቸው። ልምድ ያላቸው።",
            titleLine2: "በቋንቋዎ ይናገራሉ።",
            description: "በኖርዲክ አብረንኬር ላይ ያለ እያንዳንዱ ዶክተር በኢትዮጵያ ሕክምና ቦርድ ፈቃድ አለው። ምንም ልዩ ሁኔታ የለም። ምንም አጭር መንገድ የለም።",
            
            doctor1Name: "ዶ/ር ኃይሌ በቀለ",
            doctor1Specialty: "አጠቃላይ ህክምና",
            doctor1Experience: "12 ዓመት ልምድ",
            
            doctor2Name: "ዶ/ር ሳራ አለሙ",
            doctor2Specialty: "የህጻናት ህክምና",
            doctor2Experience: "9 ዓመት ልምድ",
            
            doctor3Name: "ዶ/ር መቅደስ ታደሰ",
            doctor3Specialty: "የልብ ህክምና",
            doctor3Experience: "14 ዓመት ልምድ",
            
            tagAmharic: "አማርኛ",
            tagLicensed: "ፈቃድ ያለው",
            tagChildrenSpecialist: "የህጻናት ስፔሻሊስት",
            tagHeartSpecialist: "የልብ ስፔሻሊስት"
          }
        }
      }
    },

    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;