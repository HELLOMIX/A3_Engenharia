document.addEventListener('DOMContentLoaded', () => {
    const jobListingsContainer = document.getElementById('job-listings');

    const jobs = [
        {
            type: "Vaga Efetiva",
            tag: "Estágio",
            title: "C#, Estágio TI",
            company: "Cas",
            description: "Estamos buscando profissionais para fazer parte do nosso time que desempenhará as seguintes atividades...",
            location: "Caxias do Sul - RS",
            transportation: "Transportes Transportes"
        },
        {
            type: "Vaga Efetiva",
            tag: "Estágio",
            title: "Analista de TI",
            company: "Cas",
            description: "É uma satisfação saber qual é seu interesse nesta vaga. Buscamos profissionais engajados em constante...",
            location: "Caxias do Sul - RS",
            transportation: "Logística"
        },
        {
            type: "Vaga Efetiva",
            tag: "Estágio",
            title: "Analista de Sistemas - TI",
            company: "Cas",
            description: "Mapear processos dos novos de negócios da empresa; Analisar os produtos existentes, documentando fluxes...",
            location: "Bento Gonçalves - RS",
            transportation: "Transportes RH"
        },
        {
            type: "Estágio",
            tag: "Estágio",
            title: "ESTÁGIO EM TI",
            company: "Cas",
            description: "Prestar suporte técnico a usuários internos, auxiliando na resolução de problemas relacionados a hardware e...",
            location: "Vila União - GO",
            transportation: "St. Thereza"
        },
        {
            type: "Estágio",
            tag: "Estágio",
            title: "Estagiário TI",
            company: "Cas",
            description: "Automação no processo; Desenvolvimento; Escrita de testes de códigos; Desenvolvimento e consulta de códigos...",
            location: "João Pessoa - PB",
            transportation: "DINÂMICA"
        },
        {
            type: "Vaga Efetiva",
            tag: "Estágio",
            title: "Assistente de TI - Transporte C...",
            company: "Cas",
            description: "Somos uma empresa feliz de gente, dedicada e que ama o que faz. Nossos resultados acontecem de TI. Se você é...",
            location: "Bento Gonçalves - RS",
            transportation: "Transporte Aéreo"
        }
        // Adicione mais vagas aqui conforme necessário
    ];

    function createJobCard(job) {
        const card = document.createElement('div');
        card.classList.add('job-card');

        card.innerHTML = `
            <div class="job-card-header">
                <span class="job-type">${job.type}</span>
                <button class="tag-button"><i class="fa-solid fa-bookmark"></i> ${job.tag}</button>
            </div>
            <h3 class="job-title">${job.title}</h3>
            <p class="company-name">${job.company}</p>
            <p class="job-description">${job.description}</p>
            <div class="job-meta">
                <div class="location-info">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${job.location}</span>
                </div>
                <div class="apply-button-wrapper">
                    <button class="apply-button"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        `;
        return card;
    }

    jobs.forEach(job => {
        jobListingsContainer.appendChild(createJobCard(job));
    });
});