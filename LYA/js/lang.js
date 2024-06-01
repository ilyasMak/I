const resources = {
    en: {
        translation: {
            lang : 'English',
            home: 'Home',
            pers: 'Personal',
            prof: 'Professional',
            contact: 'Contact',
            nom: "ILYAS MAKHLOUL ",
            statut: "Engineering student in Computer Engineering at Ecole Nationale des Sciences Appliquée Fés, and I am looking for an application internship PFA (2 months for summer 2024)",
            DownCV: "Download CV",
            DownST: "Internship Application"
        }
    },
    fr: {
        translation: {
            lang : 'Francais',
            home: 'Accueil',
            pers: 'Personnel',
            prof: 'Professionnel',
            contact: 'Contact',
            nom: "ILYAS MAKHLOUL ",
            statut: "Etudiant Ingénieur en Génie Informatique Ecole Nationale des Sciences Appliquée Fés, et je suis à la recherche d'un stage d'application PFA (2mois pour l'été 2024)",
            DownCV : 'Télécharger CV',
            DownST : 'Demande de stage',
       
        }
    },
    ar: {
        translation: {
            lang : 'العربية',
            home: 'الصفحة الرئيسية',
            pers: 'شخصي',
            prof: 'مهني',
            contact: 'اتصل',
            nom: "إلياس مخلول",
            statut: "طالب هندسة في الهندسة الكمبيوترية في المدرسة الوطنية للعلوم التطبيقية بفاس، وأبحث عن تدريب تطبيقي PFA (2 شهرًا لصيف 2024)",
            DownCV: 'تحميل السيرة الذاتية',
            DownST: 'تطبيق للتدريب'
        }
    }
};


// Initialiser i18next
i18next.use(i18nextBrowserLanguageDetector).init({
    resources,
    fallbackLng: 'fr',
    debug: true
}, function(err, t) {
    // Initialize jquery-i18next
    jqueryI18next.init(i18next, $);

    // Traduire le contenu au chargement de la page
    updateContent();
});

// Fonction pour changer la langue
function changeLanguage(lng) {
    i18next.changeLanguage(lng, updateContent);
}

// Fonction pour mettre à jour le contenu traduit
function updateContent() {
    $('body').localize();
}
