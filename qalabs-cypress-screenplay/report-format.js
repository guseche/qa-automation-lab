document.addEventListener("DOMContentLoaded", function () {

    const reports = document.querySelectorAll('script#report');
    if (reports.length > 1) {
        reports.forEach((report, index) => { report.remove(); })
    }

    document.querySelectorAll('.scenario-step-container').forEach(container => {
        const textElement = container.querySelector('.text .keyword.highlight');
        if (textElement && textElement.textContent.trim() === 'After') {
            container.style.display = 'none';
        }
    });

    document.querySelectorAll('[id^="info"][id$="-text"]').forEach(textElement => {

        const idNumber = textElement.id.match(/info(.*)-(.*)-text/);

        if (!document.querySelector(`#error${idNumber[1]}-${idNumber[2]}-error`)) {
            document.querySelector(`[href="#info${idNumber[1]}-${idNumber[2]}-text"]`).textContent = 'Steps ▼';
        } else {

            document.querySelector(`[href="#error${idNumber[1]}-${idNumber[2]}-error"]`).textContent = 'Error ▼';
            document.querySelector(`[href="#info${idNumber[1]}-${idNumber[2]}-image"]`).textContent = '';

            const steps = [...document.querySelectorAll('[id$="-error"] ~ [id^="info"][id$="-text"] [class="info"]')];
            if (steps[0].textContent !== '') {
                document.querySelector(`[href="#info${idNumber[1]}-${idNumber[2]}-text"]`).textContent = 'Steps ▼';
            } else {
                document.querySelector(`[href="#info${idNumber[1]}-${idNumber[2]}-text"]`).remove();
            }

            const screenshots = [...document.querySelectorAll('[id$="-error"] ~ [id^="info"][id$="-image"] [class="screenshot"]')];
            if (screenshots.length > 1) {
                screenshots.slice(0, -1).forEach(screenshot => {
                    screenshot.remove();
                });
            }

            const lastElement = screenshots[screenshots.length - 1];
            const targetId = `[id="error${idNumber[1]}-${idNumber[2]}-error"]`;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.append(lastElement);
            } else {
                console.error(`Target element with ID "${targetId}" not found`);
            }

        }

    }

    );

});

document.querySelectorAll(':not([href$="-error"]) + [href$="-text"] + [href^="#info"][href$="-image"] ').forEach(screenshot => {
    screenshot.remove()
});