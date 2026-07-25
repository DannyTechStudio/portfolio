document.addEventListener("DOMContentLoaded", () => {
    //----------------------------------------------------
    //      Skills Section Filtering Functionality
    //----------------------------------------------------
    const filterBtns  = document.querySelectorAll('.filter-btn');
    const skillCards  = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            skillCards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;

                if (match) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.remove('hidden'), 10);
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => {
                        if (card.classList.contains('hidden')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });



    //----------------------------------------------------
    // Project Section Filtering Functionality
    //----------------------------------------------------
    const projectFilterBtns  = document.querySelectorAll('.project-filter-btn');
    const projectCards  = document.querySelectorAll('.project-card');

    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            projectFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;

                if (match) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.remove('hidden'), 10);
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => {
                        if (card.classList.contains('hidden')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
});