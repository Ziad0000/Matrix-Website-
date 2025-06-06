document.addEventListener('DOMContentLoaded', () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitchButtons = document.querySelectorAll('#theme-switch, #theme-dark');

    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    };

    if (darkmode === "active") enableDarkmode();

    themeSwitchButtons.forEach(button => {
        button.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkmode() : disableDarkmode();
        });
    });
});




const translations = {
    en: {
        switch: "Now you can switch to night theme to take best experience",
        zezo: "Ziad",
        content: "My Skills",
        mshry3: "Projects",
        klmny: "Contact",
        ana: "Hello, I`m Ziad",
        back: "Back End Developer",
        i: "I Build Web Development",
        view: "View My Work",
        s: "My Skills",
        web: "Web Development",
        web2: "Web development involves creating, building, and maintaining websites and web applications.",
        hack: "Ethical hacking",
        hack2: "Ethical hacking, also known as White-Hat Hacking, involves using hacking techniques to identify and fix security vulnerabilities in computer systems, networks, and applications.",
        cp: "Computer Programmer",
        cp2: "Computer programmers write, modify, and test code and scripts that allow computer software and applications to function properly.",
        azay: "How to make calculator by python",
        azay2: "How to make clock by python",
        azay3: "How to Make QrCode By VS",
        azay4: "How to make the dinosaur running without dying",
        azay5: "s",
        azay6: "s",
        p: "Projects",
        c: "Contact",
        phone: "Phone",
        e: "Emial",
        design: "Designed & Developed by ",
        ziad: "Ziad Moahmed",
    },
    ar: {
        swra: "images/background logo blue.svg",
        switch: 'يمكنك الآن التبديل إلى المظهر الليلي للحصول على أفضل تجربة',
        zezo: "زياد",
        content: "مهاراتي",
        mshry3: "المشاريع",
        klmny:"اتصال",
        ana: "مرحبا أنا زياد",
        back: "مطور الواجهة الخلفية",
        i: "أقوم ببناء تطوير الويب",
        view: "عرض عملي",
        s: "مهاراتي",
        web: "تطوير الويب",
        web2: "يتضمن تطوير الويب إنشاء مواقع الويب وتطبيقات الويب وإنشائها وصيانتها.",
        hack: "القرصنة الأخلاقية",
        hack2: "تتضمن القرصنة الأخلاقية، المعروفة أيضًا باسم White-Hat Hacking، استخدام تقنيات القرصنة لتحديد وإصلاح الثغرات الأمنية في أنظمة الكمبيوتر والشبكات والتطبيقات.",
        cp: "مبرمج كمبيوتر",
        cp2: "يقوم مبرمجو الكمبيوتر بكتابة وتعديل واختبار التعليمات البرمجية والبرامج النصية التي تسمح لبرامج وتطبيقات الكمبيوتر بالعمل بشكل صحيح.",
        azay: "كيفية صنع آلة حاسبة بواسطة بايثون",
        azay2: "كيفية صنع الساعة بواسطة بايثون",
        azay3: 'كيفية عمل رمز الاستجابة السريع بواسطة فيجوال ستوديو',
        azay4: "كيفية جعل الديناصور يركض دون أن يموت",
        azay5: "s",
        azay6: "s",
        p: "المشاريع",
        c: "أتصال",
        phone: "هاتف",
        e: "بريد إلكتروني",
        design: "تصميم وتطوير بواسطة",
        ziad: "زياد محمد",
    },
}    

function changeLanguage(lang) {
    document.getElementById('switch').textContent = translations[lang].switch;
    document.getElementById('zezo').textContent = translations[lang].zezo;
    document.getElementById('content').textContent = translations[lang].content;
    document.getElementById('mshry3').textContent = translations[lang].mshry3;
    document.getElementById('klmny').textContent = translations[lang].klmny;
    document.getElementById('ana').textContent = translations[lang].ana;
    document.getElementById('back').textContent = translations[lang].back;
    document.getElementById('i').textContent = translations[lang].i;
    document.getElementById('view').textContent = translations[lang].view;
    document.getElementById('s').textContent = translations[lang].s;
    document.getElementById('web').textContent = translations[lang].web;
    document.getElementById('web2').textContent = translations[lang].web2;
    document.getElementById('hack').textContent = translations[lang].hack;
    document.getElementById('hack2').textContent = translations[lang].hack2;
    document.getElementById('cp').textContent = translations[lang].cp;
    document.getElementById('cp2').textContent = translations[lang].cp2;
    document.getElementById('azay').textContent = translations[lang].azay;
    document.getElementById('azay2').textContent = translations[lang].azay2;
    document.getElementById('azay3').textContent = translations[lang].azay3;
    document.getElementById('azay4').textContent = translations[lang].azay4;
    document.getElementById('azay5').textContent = translations[lang].azay5;
    document.getElementById('azay6').textContent = translations[lang].azay6;
    document.getElementById('p').textContent = translations[lang].p;
    document.getElementById('cp2').textContent = translations[lang].cp2;
    document.getElementById('c').textContent = translations[lang].c;
    document.getElementById('phone').textContent = translations[lang].phone;
    document.getElementById('e').textContent = translations[lang].e;
    document.getElementById('design').textContent = translations[lang].design;
    document.getElementById('ziad').textContent = translations[lang].ziad;

    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);

    if (lang === 'en') {
        document.getElementById('btn-en').style.display = 'none';
        document.getElementById('btn-ar').style.display = 'inline';
    } else {
        document.getElementById('btn-en').style.display = 'inline';
        document.getElementById('btn-ar').style.display = 'none';
    }
    document.documentElement.lang = lang;
    localStorage.setItem('language2', lang);

    if (lang === 'en') {
        document.getElementById('btn-en2').style.display = 'none';
        document.getElementById('btn-ar2').style.display = 'inline';
    } else {
        document.getElementById('btn-en2').style.display = 'inline';
        document.getElementById('btn-ar2').style.display = 'none';
    }
}

window.onload = () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
};


// window.onload = () => {
//     const savedLanguage = localStorage.getItem('language') || 'en';
//     changeLanguage(savedLanguage);
// };





let span = document.querySelector(".up");

window.onscroll = function () {

    this.scrollY >= 700 ?  span.classList.add("show") : span.classList.remove("show");
};


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  

let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
    nav.classList.add("open");
}

close.onclick = function () {
    this.parentElement.classList.remove("open");
}


document.onpointerup = function (e) {
    console.log(e);
    if (e.key === "touch");{
        nav.classList.remove("open");
    }
};


document.onkeyup = function (e) {
    console.log(e);
    if (e.key === "Escape");{
        nav.classList.remove("open");
    }
};

// window.onload = function() {
// // Select element with box class, assign to box variable
// const box = document.querySelector(".box")
// // Detect all clicks on the document
//     document.addEventListener("click", function(event) {
// // If user clicks inside the element, do nothing
//     if (event.target.closest(".box")) return
// // If user clicks outside the element, hide it!
//     box.classList.add("js-is-hidden")
// // Detect all page on website
//     overlay.style.display = 'none'
// })

window.onload = function() {
    const box = document.querySelector(".box");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close2");

    // Detect all clicks on the document
    document.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".box")) return;

        // If user clicks outside the element, hide it!
        box.classList.add("js-is-hidden");
        overlay.style.display = 'none';
    });

    // Close button functionality
    closeButton.addEventListener("click", function() {
        box.classList.add("js-is-hidden");
        overlay.style.display = 'none';
    });
};


//   };