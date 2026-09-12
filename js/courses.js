// Featured Courses Data
const coursesData = [
    {
        id: 1,
        title: "Class 6–8 Coaching",
        description: "Foundation building in Math, Science, English, and Social Studies.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        duration: "Academic Year",
        price: "₹ 800/mo",
        category: "Academic Coaching",
        emoji: "📚",
        certificate: false
    },
    {
        id: 2,
        title: "Class 9–10 Coaching",
        description: "Board exam preparation with comprehensive subject coaching and mock tests.",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
        duration: "Academic Year",
        price: "₹ 1,200/mo",
        category: "Academic Coaching",
        emoji: "🎯",
        certificate: true
    },
    {
        id: 3,
        title: "Class 11–12 Coaching",
        description: "Science and Commerce stream coaching with career guidance and entrance prep.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        duration: "Academic Year",
        price: "₹ 1,500/mo",
        category: "Academic Coaching",
        emoji: "🏆",
        certificate: true
    },
    {
        id: 4,
        title: "Computer & MS Office",
        description: "Master Word, Excel, PowerPoint, internet basics, and essential computer skills for modern workplaces.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        duration: "2 Months",
        price: "₹ 1,000/mo",
        category: "Skill Development",
        emoji: "💻",
        certificate: true
    },
    {
        id: 5,
        title: "DTP & Graphic Design",
        description: "Learn Photoshop, CorelDRAW, banner design, visiting cards, brochures, and print media creation.",
        image: "https://images.unsplash.com/photo-1561070791-26c113006238?w=800&q=80",
        duration: "3 Months",
        price: "₹ 1,200/mo",
        category: "Skill Development",
        emoji: "🎨",
        certificate: true
    },
    {
        id: 6,
        title: "Spoken English & Communication",
        description: "Improve fluency, pronunciation, and professional communication through interactive daily practice sessions.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        duration: "3 Months",
        price: "₹ 800/mo",
        category: "Language & Communication",
        emoji: "🗣️",
        certificate: true
    }
];

// Course list state
let isCoursesExpanded = false;

// Function to generate Course Card HTML
function createCourseCardHTML(course, index) {
    const certificateHTML = course.certificate 
        ? `<div class="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50 text-[10px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/>
                </svg>
                <span>Certificate</span>
           </div>`
        : '';

    return `
        <div class="course-card bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full transform transition duration-500 hover:shadow-2xl hover:-translate-y-2" data-index="${index}">
            <!-- Card Image -->
            <div class="relative w-full h-52 overflow-hidden bg-slate-100">
                <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover">
                <!-- Top-Left Emoji/Icon Container -->
                <div class="absolute top-4 left-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-lg">
                    ${course.emoji}
                </div>
                <!-- Top-Right Category Badge -->
                <span class="absolute top-4 right-4 bg-emerald-50 text-emerald-800 text-[10px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-full border border-emerald-100/30 shadow-sm">
                    ${course.category}
                </span>
            </div>
            
            <!-- Card Body -->
            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <!-- Course Title -->
                    <h3 class="text-xl font-extrabold text-slate-800 tracking-tight font-poppins mb-2 leading-tight">
                        ${course.title}
                    </h3>
                    
                    <!-- Description -->
                    <p class="text-slate-500 text-sm leading-relaxed mb-6">
                        ${course.description}
                    </p>
                </div>
                
                <div>
                    <!-- Details Row (bordered) -->
                    <div class="flex items-center justify-between text-slate-500 text-xs font-bold border-t border-b border-slate-100 py-3.5 mb-5">
                        <!-- Left: Duration -->
                        <div class="flex items-center gap-1.5">
                            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <span>${course.duration}</span>
                        </div>
                        
                        <!-- Middle: Certificate -->
                        ${certificateHTML}
                        
                        <!-- Right: Price -->
                        <div class="text-slate-800 text-sm font-extrabold tracking-tight">
                            ${course.price}
                        </div>
                    </div>
                    
                    <!-- Action Button -->
                    <button onclick="enquireCourse('${course.title}')" class="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                        <span>Apply Now</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render either initial 3 or all 5 courses
function renderCourses(animateNew = false) {
    const grid = document.getElementById("courses-grid");
    if (!grid) return;

    const limit = isCoursesExpanded ? coursesData.length : 3;
    
    if (!animateNew) {
        // Full re-render (initial page load or collapse)
        grid.innerHTML = coursesData.slice(0, limit)
            .map((course, idx) => createCourseCardHTML(course, idx))
            .join('');
    } else {
        // Appending new items for a smooth GSAP fade-in transition
        const existingCount = grid.children.length;
        const newCourses = coursesData.slice(existingCount, limit);
        
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = newCourses
            .map((course, idx) => createCourseCardHTML(course, existingCount + idx))
            .join('');
        
        const newNodes = Array.from(tempDiv.children);
        newNodes.forEach(node => grid.appendChild(node));

        // GSAP animate new nodes
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(newNodes, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
            );
        }
    }
}

// Toggle expansion state
function toggleCourses() {
    const btn = document.getElementById("toggle-courses-btn");
    const icon = document.getElementById("toggle-courses-icon");
    const label = btn.querySelector("span");

    if (!btn || !icon || !label) return;

    isCoursesExpanded = !isCoursesExpanded;

    if (isCoursesExpanded) {
        // Expand
        renderCourses(true);
        label.textContent = "Show Less Courses";
        icon.classList.add("rotate-180");
        
        // Scroll slightly down to make new courses prominent
        const grid = document.getElementById("courses-grid");
        if (grid) {
            const cards = Array.from(grid.children);
            // Scroll to the first newly added card (index 3) so they see the expansion
            if (cards[3]) {
                setTimeout(() => {
                    cards[3].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    } else {
        // Collapse
        const grid = document.getElementById("courses-grid");
        const cards = Array.from(grid.children);
        const cardsToCollapse = cards.slice(3);

        if (cardsToCollapse.length > 0 && typeof gsap !== 'undefined') {
            // Animating fade out before removing from DOM
            gsap.to(cardsToCollapse, {
                opacity: 0,
                y: 20,
                duration: 0.35,
                stagger: 0.05,
                ease: "power2.in",
                onComplete: () => {
                    renderCourses(false);
                    label.textContent = "View More Courses";
                    icon.classList.remove("rotate-180");
                    
                    // Smoothly scroll back to the section header
                    const header = document.getElementById("courses-section");
                    if (header) {
                        header.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        } else {
            renderCourses(false);
            label.textContent = "View More Courses";
            icon.classList.remove("rotate-180");
        }
    }
}

// Direct click-to-chat WhatsApp link
function enquireCourse(courseTitle) {
    const phoneNumber = "918637200635"; // Pre-configured Academy Phone Number
    const message = `Hello Nitya Sundaram Academy! I am interested in enrolling in the "${courseTitle}" course. Please share details regarding fees, batches, and enrollment steps.`;
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsAppUrl, "_blank");
}

// Bootstrap – works even when scripts load after DOM is already parsed
function _coursesBootstrap() {
    renderCourses(false);
    const toggleBtn = document.getElementById("toggle-courses-btn");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleCourses);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _coursesBootstrap);
} else {
    _coursesBootstrap();
}
