// ═══════════════════════════════════════════════════════
//  Upcoming Events Data  –  Nitya Sundaram Academy
// ═══════════════════════════════════════════════════════
const eventsData = [
    {
        id: 1,
        title: "International Yoga Day",
        category: "Wellness",
        categoryColor: "bg-emerald-500",
        description: "Join us for a mass yoga session on the occasion of International Yoga Day. Open for all students, parents, and community members.",
        date: "June 21, 2026",
        time: "6:00 AM – 8:00 AM",
        location: "Nitya Sundaram Academy Grounds",
        capacity: "200+ Expected",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
        btnColor: "bg-emerald-700 hover:bg-emerald-800",
        whatsapp: "International+Yoga+Day"
    },
    {
        id: 2,
        title: "Career Guidance Seminar",
        category: "Education",
        categoryColor: "bg-amber-500",
        description: "Expert career counselors will guide students on choosing the right career path, higher education options, and job market insights.",
        date: "July 5, 2026",
        time: "10:00 AM – 1:00 PM",
        location: "Nitya Sundaram Academy Hall",
        capacity: "100+ Students",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        btnColor: "bg-amber-500 hover:bg-amber-600",
        whatsapp: "Career+Guidance+Seminar"
    },
    {
        id: 3,
        title: "Computer Awareness Camp",
        category: "Technology",
        categoryColor: "bg-violet-500",
        description: "Free hands-on computer training for school students and senior citizens. Learn basics of internet, email, and online safety.",
        date: "July 15, 2026",
        time: "9:00 AM – 5:00 PM",
        location: "Internet Cafe Center, Soro",
        capacity: "50+ Participants",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        btnColor: "bg-violet-500 hover:bg-violet-600",
        whatsapp: "Computer+Awareness+Camp"
    },
    {
        id: 4,
        title: "Spoken English Workshop",
        category: "Skills",
        categoryColor: "bg-emerald-600",
        description: "Intensive spoken English workshop led by certified trainers. Build fluency and confidence in 3 hours of immersive practice.",
        date: "August 1, 2026",
        time: "3:00 PM – 6:00 PM",
        location: "Nitya Sundaram Academy",
        capacity: "30 Seats",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        btnColor: "bg-emerald-800 hover:bg-emerald-900",
        whatsapp: "Spoken+English+Workshop"
    }
];

// ═══════════════════════════════════════════════════════
//  Past Events Data  –  Nitya Sundaram Academy
// ═══════════════════════════════════════════════════════
const pastEventsData = [
    {
        id: 1,
        title: "Founder's Day Celebration",
        date: "April 10, 2026",
        category: "Celebration",
        categoryColor: "bg-purple-600",
        time: "10:00 AM – 4:00 PM",
        location: "Nitya Sundaram Academy Campus",
        capacity: "500+ Attendees",
        description: "Nitya Sundaram Academy celebrated its Founder's Day with students, parents, and distinguished guests presenting performances and cultural events.",
        image: "https://images.unsplash.com/photo-1505232458627-539c97b839ce?w=800&q=80"
    },
    {
        id: 2,
        title: "Art & Culture Exhibition",
        date: "March 25, 2026",
        category: "Exhibition",
        categoryColor: "bg-pink-600",
        time: "11:00 AM – 6:00 PM",
        location: "NSA Exhibition Hall",
        capacity: "300+ Visitors",
        description: "A vibrant exhibition showcasing traditional Odia painting, sculpture, and local crafts created by our talented students.",
        image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&q=80"
    },
    {
        id: 3,
        title: "Digital Literacy Drive",
        date: "March 10, 2026",
        category: "Outreach",
        categoryColor: "bg-blue-600",
        time: "9:00 AM – 3:00 PM",
        location: "Soro Community Center",
        capacity: "150+ Participants",
        description: "A community outreach initiative teaching basic computer skills, online banking safety, and smart device usage to local residents.",
        image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800&q=80"
    },
    {
        id: 4,
        title: "Annual Sports Day",
        date: "February 28, 2026",
        category: "Sports",
        categoryColor: "bg-emerald-600",
        time: "8:00 AM – 5:00 PM",
        location: "Soro Town Ground",
        capacity: "400+ Competitors",
        description: "A thrilling day of athletic competitions, team sports, and track events promoting physical fitness and team spirit.",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"
    },
    {
        id: 5,
        title: "Republic Day Program",
        date: "January 26, 2026",
        category: "Patriotic",
        categoryColor: "bg-orange-600",
        time: "8:30 AM – 12:30 PM",
        location: "NSA Main Ground",
        capacity: "600+ Attendees",
        description: "Honoring our nation with flag hoisting, patriotic speeches, parade, and cultural dance programs highlighting national integration.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80"
    },
    {
        id: 6,
        title: "Photography Workshop",
        date: "January 15, 2026",
        category: "Workshop",
        categoryColor: "bg-indigo-600",
        time: "10:00 AM – 4:00 PM",
        location: "NSA Media Studio",
        capacity: "40 Students",
        description: "An intensive masterclass on photography fundamentals, composition rules, camera settings, and digital image editing.",
        image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80"
    }
];

// ═══════════════════════════════════════════════════════
//  Card Builders
// ═══════════════════════════════════════════════════════

// ── Horizontal card layout for events.html (Events Page) ──
function buildPageEventCard(event) {
    return `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
        <!-- Left: Image -->
        <div class="relative w-full sm:w-36 md:w-44 flex-shrink-0 h-44 sm:h-auto overflow-hidden">
            <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
            <span class="absolute top-3 left-3 ${event.categoryColor} text-white text-[10px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full shadow">
                ${event.category}
            </span>
        </div>

        <!-- Right: Content -->
        <div class="flex flex-col flex-1 p-5">
            <h3 class="text-lg md:text-xl font-extrabold text-slate-800 font-poppins leading-snug mb-1.5">
                ${event.title}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                ${event.description}
            </p>

            <!-- Meta row -->
            <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-500 font-semibold mb-4">
                <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                    </svg>
                    <span>${event.date}</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <span>${event.time}</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"/>
                    </svg>
                    <span>${event.location}</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0Zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0Z"/>
                    </svg>
                    <span>${event.capacity}</span>
                </div>
            </div>

            <!-- Register Button -->
            <a href="https://wa.me/918637200635?text=Hello%20Nitya%20Sundaram%20Academy!%20I%20would%20like%20to%20register%20for%20the%20${event.whatsapp}%20event.%20Please%20share%20the%20details."
               target="_blank"
               class="${event.btnColor} text-white font-bold py-2.5 px-5 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full">
                <span>Register Now</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                </svg>
            </a>
        </div>
    </div>`;
}

// ── Vertical card layout for index.html (Home Page Preview) ──
function buildHomeEventCard(event) {
    return `
    <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 flex flex-col h-full transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="relative w-full h-52 md:h-56 overflow-hidden">
            <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
            <div class="absolute top-4 left-4 ${event.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                ${event.date}
            </div>
        </div>
        <div class="p-6 flex flex-col flex-grow justify-between">
            <div>
                <h3 class="text-xl md:text-2xl font-bold text-emerald-800 mb-3 font-poppins leading-tight">
                    ${event.title}
                </h3>
                <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    ${event.description}
                </p>
            </div>
            <button onclick="openRegisterModal('${event.title}')" class="w-full bg-[#005f43] hover:bg-[#004732] text-white font-semibold py-3 px-4 rounded-xl text-center transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
                Register Now
            </button>
        </div>
    </div>`;
}

// ── Image overlaid card layout for Past Events ──
function buildPastEventCard(event) {
    return `
    <div onclick="openPastEventModal(${event.id})" class="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-48 md:h-52 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-slate-100 flex-shrink-0">
        <!-- Background Image -->
        <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105" style="filter: brightness(0.48);">
        <!-- Dark gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
        <!-- Overlaid text at bottom-left -->
        <div class="absolute bottom-0 left-0 p-5 md:p-6 w-full">
            <h3 class="text-white font-extrabold text-lg sm:text-xl font-poppins mb-1 leading-snug drop-shadow-md">
                ${event.title}
            </h3>
            <p class="text-slate-300 text-xs sm:text-sm font-semibold">
                ${event.date}
            </p>
        </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════
//  Render Methods & Stagger Animations
// ═══════════════════════════════════════════════════════

// Render upcoming events page grid
function renderEventsPage() {
    const grid = document.getElementById("events-page-grid");
    if (!grid) return;
    grid.innerHTML = eventsData.map(e => buildPageEventCard(e)).join('');

    if (typeof gsap !== 'undefined') {
        gsap.from("#events-page-grid > div", {
            opacity: 0,
            y: 35,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#events-page-grid",
                start: "top 85%"
            }
        });
    }
}

// Render home page preview grid
function renderEvents() {
    const grid = document.getElementById("events-grid");
    if (!grid) return;
    grid.innerHTML = eventsData.slice(0, 3).map(e => buildHomeEventCard(e)).join('');

    if (typeof gsap !== 'undefined') {
        gsap.from("#events-grid > div", {
            opacity: 0,
            y: 35,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#events-grid",
                start: "top 85%"
            }
        });
    }
}

// Render past events grid (on either home or events page)
function renderPastEvents() {
    const grid = document.getElementById("past-events-grid");
    if (!grid) return;
    grid.innerHTML = pastEventsData.map(e => buildPastEventCard(e)).join('');

    if (typeof gsap !== 'undefined') {
        gsap.from("#past-events-grid > div", {
            opacity: 0,
            y: 35,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#past-events-grid",
                start: "top 85%"
            }
        });
    }
}

// ═══════════════════════════════════════════════════════
//  Registration Modal (used on home page)
// ═══════════════════════════════════════════════════════
function injectRegisterModal() {
    if (document.getElementById("register-modal")) return; // already exists
    const modalHTML = `
        <div id="register-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
            <div id="modal-box" class="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl relative p-8 transform scale-90 transition-transform duration-300">
                <button onclick="closeRegisterModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition cursor-pointer" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="modal-form-container">
                    <h3 id="modal-title" class="text-2xl font-bold text-emerald-800 mb-2 font-poppins">Register Now</h3>
                    <p class="text-slate-500 text-sm mb-6">Please fill in your details to secure your spot.</p>
                    <form id="register-form" onsubmit="handleRegistration(event)" class="space-y-4">
                        <input type="hidden" id="reg-event-title" value="">
                        <div>
                            <label class="block text-slate-700 text-sm font-semibold mb-1" for="reg-name">Full Name</label>
                            <input id="reg-name" type="text" required class="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-800 text-sm" placeholder="John Doe">
                        </div>
                        <div>
                            <label class="block text-slate-700 text-sm font-semibold mb-1" for="reg-phone">Phone Number</label>
                            <input id="reg-phone" type="tel" required class="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-800 text-sm" placeholder="+91 98765 43210">
                        </div>
                        <button type="submit" class="w-full bg-[#005f43] hover:bg-[#004732] text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg mt-6 cursor-pointer text-sm">
                            Submit Registration
                        </button>
                    </form>
                </div>
                <div id="modal-success" class="hidden text-center py-6">
                    <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 class="text-2xl font-bold text-slate-900 mb-2">Registration Successful!</h4>
                    <p class="text-slate-600 mb-6 text-sm">Thank you! We will reach out to you shortly with more details.</p>
                    <button onclick="closeRegisterModal()" class="bg-[#005f43] hover:bg-[#004732] text-white font-semibold py-2.5 px-6 rounded-xl transition shadow-md cursor-pointer text-sm">Close</button>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function openRegisterModal(eventTitle) {
    const modal = document.getElementById("register-modal");
    const box   = document.getElementById("modal-box");
    if (!modal || !box) return;
    document.getElementById("register-form").reset();
    document.getElementById("modal-form-container").classList.remove("hidden");
    document.getElementById("modal-success").classList.add("hidden");
    document.getElementById("reg-event-title").value = eventTitle;
    document.getElementById("modal-title").textContent = `Register for ${eventTitle}`;
    modal.classList.remove("pointer-events-none");
    if (typeof gsap !== 'undefined') {
        gsap.to(modal, { opacity: 1, duration: 0.3 });
        gsap.fromTo(box, { scale: 0.95, y: 15 }, { scale: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" });
    } else {
        modal.style.opacity = "1";
    }
}

function closeRegisterModal() {
    const modal = document.getElementById("register-modal");
    const box   = document.getElementById("modal-box");
    if (!modal || !box) return;
    modal.classList.add("pointer-events-none");
    if (typeof gsap !== 'undefined') {
        gsap.to(modal, { opacity: 0, duration: 0.25 });
        gsap.to(box, { scale: 0.95, y: 15, duration: 0.25 });
    } else {
        modal.style.opacity = "0";
    }
}

function handleRegistration(e) {
    e.preventDefault();
    const formContainer    = document.getElementById("modal-form-container");
    const successContainer = document.getElementById("modal-success");
    if (typeof gsap !== 'undefined') {
        gsap.to(formContainer, {
            opacity: 0, y: -10, duration: 0.25,
            onComplete: () => {
                formContainer.classList.add("hidden");
                successContainer.classList.remove("hidden");
                gsap.fromTo(successContainer, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 });
            }
        });
    } else {
        formContainer.classList.add("hidden");
        successContainer.classList.remove("hidden");
    }
}

document.addEventListener("click", (e) => {
    const modal = document.getElementById("register-modal");
    if (modal && e.target === modal) closeRegisterModal();
});


// ═══════════════════════════════════════════════════════
//  Past Event Detail Modal
// ═══════════════════════════════════════════════════════
function injectPastEventModal() {
    if (document.getElementById("past-event-modal")) return;
    const modalHTML = `
        <div id="past-event-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
            <div id="past-modal-box" class="bg-white rounded-2xl max-w-xl w-full mx-4 overflow-hidden shadow-2xl relative transform scale-90 transition-transform duration-300 flex flex-col">
                <!-- Close Button -->
                <button onclick="closePastEventModal()" class="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/60 p-1.5 rounded-full transition cursor-pointer" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <!-- Modal Body -->
                <div id="past-modal-body" class="overflow-y-auto max-h-[85vh] sm:max-h-[80vh] flex flex-col">
                    <!-- Dynamic content will be injected here -->
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Close modal when clicking background overlay
    document.addEventListener("click", (e) => {
        const modal = document.getElementById("past-event-modal");
        if (modal && e.target === modal) closePastEventModal();
    });
}

function openPastEventModal(id) {
    const event = pastEventsData.find(e => e.id === id);
    if (!event) return;

    const modal = document.getElementById("past-event-modal");
    const box   = document.getElementById("past-modal-box");
    const body  = document.getElementById("past-modal-body");
    if (!modal || !box || !body) return;

    body.innerHTML = `
        <!-- Top Image -->
        <div class="relative w-full h-48 sm:h-60 overflow-hidden flex-shrink-0">
            <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
            <span class="absolute bottom-4 left-4 ${event.categoryColor} text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                ${event.category}
            </span>
        </div>
        <!-- Content Area -->
        <div class="p-6 sm:p-8 flex flex-col">
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-800 font-poppins leading-tight mb-4">${event.title}</h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-6">${event.description}</p>
            
            <!-- Metadata details -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <!-- Date -->
                <div class="flex items-center gap-3 text-slate-600 font-medium">
                    <svg class="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                    </svg>
                    <div class="text-xs">
                        <span class="block text-[10px] text-slate-400 font-bold uppercase">Date</span>
                        <span class="text-sm font-semibold text-slate-700">${event.date}</span>
                    </div>
                </div>
                <!-- Time -->
                <div class="flex items-center gap-3 text-slate-600 font-medium">
                    <svg class="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <div class="text-xs">
                        <span class="block text-[10px] text-slate-400 font-bold uppercase">Time</span>
                        <span class="text-sm font-semibold text-slate-700">${event.time}</span>
                    </div>
                </div>
                <!-- Location -->
                <div class="flex items-center gap-3 text-slate-600 font-medium">
                    <svg class="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"/>
                    </svg>
                    <div class="text-xs">
                        <span class="block text-[10px] text-slate-400 font-bold uppercase">Location</span>
                        <span class="text-sm font-semibold text-slate-700">${event.location}</span>
                    </div>
                </div>
                <!-- Capacity -->
                <div class="flex items-center gap-3 text-slate-600 font-medium">
                    <svg class="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0Zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0Z"/>
                    </svg>
                    <div class="text-xs">
                        <span class="block text-[10px] text-slate-400 font-bold uppercase">Attendees</span>
                        <span class="text-sm font-semibold text-slate-700">${event.capacity}</span>
                    </div>
                </div>
            </div>
        </div>`;

    modal.classList.remove("pointer-events-none");
    if (typeof gsap !== 'undefined') {
        gsap.to(modal, { opacity: 1, duration: 0.3 });
        gsap.fromTo(box, { scale: 0.95, y: 15 }, { scale: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" });
    } else {
        modal.style.opacity = "1";
    }
}

function closePastEventModal() {
    const modal = document.getElementById("past-event-modal");
    const box   = document.getElementById("past-modal-box");
    if (!modal || !box) return;

    modal.classList.add("pointer-events-none");
    if (typeof gsap !== 'undefined') {
        gsap.to(modal, { opacity: 0, duration: 0.25 });
        gsap.to(box, { scale: 0.95, y: 15, duration: 0.25 });
    } else {
        modal.style.opacity = "0";
    }
}


// ═══════════════════════════════════════════════════════
//  Bootstrap  –  works whether DOM is already ready or not
//  (scripts placed after </body> execute when DOM is already
//   parsed, so DOMContentLoaded may have already fired)
// ═══════════════════════════════════════════════════════
function _eventsBootstrap() {
    renderEventsPage();   // events.html page grid  (no-op if div absent)
    renderEvents();       // index.html home-page preview grid  (no-op if div absent)
    renderPastEvents();   // both index.html & events.html past grid (no-op if div absent)
    injectRegisterModal();
    injectPastEventModal();
}

if (document.readyState === 'loading') {
    // DOM not yet ready – wait for it
    document.addEventListener('DOMContentLoaded', _eventsBootstrap);
} else {
    // DOM is already ready – run immediately
    _eventsBootstrap();
}
