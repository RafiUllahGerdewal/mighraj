class AlMadinaStore {
    constructor() {
        this.servicesData = null;
        this.init();
    }

    async init() {
        try {
            const response = await fetch('services.json');
            this.servicesData = await response.json();
            
            this.updateServices();
            this.updateContactInfo();
        } catch (error) {
            // Handle error silently
        }
    }

    updateServices() {
        if (!this.servicesData?.services) return;
        
        const servicesContainer = document.getElementById('services-container');
        if (!servicesContainer) return;
        
        // Clear existing services
        servicesContainer.innerHTML = '';
        
        // Add each service
        this.servicesData.services.forEach(service => {
            const serviceCard = this.createServiceCard(service);
            servicesContainer.appendChild(serviceCard);
        });
    }

    createServiceCard(service) {
        const card = document.createElement('div');
        
        // Determine grid span for featured services
        const gridSpan = service.featured ? 'md:col-span-2 lg:col-span-3' : '';
        
        card.className = `bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${gridSpan}`;
        
        card.innerHTML = `
            <div class="p-6">
                <div class="flex items-center mb-4 space-x-reverse">
                    <div class="${service.bgColor} p-3 rounded-lg">
                        <i class="${service.icon} text-2xl ${service.iconColor}"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mr-4 font-pashto">${service.name}</h3>
                </div>
                <p class="text-gray-600 mb-4 font-pashto">${service.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-primary">${service.price} ${service.currency}</span>
                    <span class="text-sm text-gray-500 font-pashto">${service.vehicleTypes.join(', ')}</span>
                </div>
            </div>
        `;
        
        return card;
    }

    updateContactInfo() {
        if (!this.servicesData?.contact) return;
        
        const contact = this.servicesData.contact;
        
        // Update WhatsApp links
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        whatsappLinks.forEach(link => {
            link.href = `https://wa.me/${contact.whatsapp.replace('+', '')}`;
        });
        
        // Update call links
        const callLinks = document.querySelectorAll('a[href*="tel:"]');
        callLinks.forEach(link => {
            link.href = `tel:${contact.phone}`;
        });
    }

    updateServicePrice(serviceId, newPrice) {
        if (!this.servicesData?.services) return;
        
        const service = this.servicesData.services.find(s => s.id === serviceId);
        if (service) {
            service.price = newPrice;
            this.updateServices();
        }
    }

    addService(newService) {
        if (!this.servicesData?.services) return;
        
        this.servicesData.services.push(newService);
        this.updateServices();
    }

    removeService(serviceId) {
        if (!this.servicesData?.services) return;
        
        this.servicesData.services = this.servicesData.services.filter(s => s.id !== serviceId);
        this.updateServices();
    }
}

// Initialize the store when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.alMadinaStore = new AlMadinaStore();
});

function updateServicePrice(serviceId, newPrice) {
    if (window.alMadinaStore) {
        window.alMadinaStore.updateServicePrice(serviceId, newPrice);
    }
}

function addNewService(serviceData) {
    if (window.alMadinaStore) {
        window.alMadinaStore.addService(serviceData);
    }
}

function removeService(serviceId) {
    if (window.alMadinaStore) {
        window.alMadinaStore.removeService(serviceId);
    }
}
