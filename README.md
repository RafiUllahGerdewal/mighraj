# Al-Madina Auto Services Web

A responsive auto services web interface for Afghanistan-based shop using HTML5, Tailwind CSS, and Vanilla JavaScript with full Pashto translation and RTL support.

## 🚗 Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Service Cards**: Beautiful card layout for each service with icons and pricing
- **Contact Information**: Easy access to phone and WhatsApp contact
- **Dynamic Content**: JSON-based data structure for easy updates
- **Modern UI**: Clean, professional design with smooth animations
- **Print-Ready**: Optimized for both digital and print formats
- **Pashto Translation**: Complete Pashto translation with RTL support
- **Proper Font Support**: Noto Naskh Arabic and Amiri fonts for Pashto script

## 🌐 Language Support

### Pashto Translation
- **Complete Localization**: All text translated to Eastern Pashto (Kabul/Nangarhar dialect)
- **RTL Support**: Right-to-left text direction for Pashto
- **Font Optimization**: Noto Naskh Arabic and Amiri fonts for proper Pashto rendering
- **Cultural Adaptation**: Uses commonly understood terms for mechanics and locals

### Marketing Message
- **Main Headline**: "ستاسې د موټر د ژوند ملاتړ" (Your Vehicle's Life Support)
- **Subtitle**: "د افغانستان ترټولو غوره د موټرو خدمتونه" (Afghanistan's Best Vehicle Services)
- **Experience**: "له ۱۹۹۹ کال راهیسې د موټرو د ترمیم او سپیر پارټونو په برخه کې تجربه" (Experience in vehicle repair and spare parts since 1999)

## 📋 Services Offered

### Vehicle Services
- **د تیلو بدلول (Oil Change)** - 500 AFN
- **د تیلو فلټر خدمت (Oil Filter Service)** - 150 AFN  
- **د هوا فلټر خدمت (Air Filter Service)** - 120 AFN
- **د غوړ خدمت (Grease Service)** - 300 AFN
- **د انجن تشویش (Engine Flushing)** - 800 AFN
- **د بریک تیل چیک (Brake Oil Check)** - 100 AFN
- **د بشپړ موټر خدمت پیکج (Full Vehicle Service Package)** - 1000 AFN

### Vehicle Types Supported
- دوه-څرخه (2-wheelers - Motorcycles, Scooters)
- درې-څرخه (3-wheelers - Auto-rickshaws, Trikes)
- درن موټرونه (Trucks - Commercial vehicles)

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with RTL support
- **Tailwind CSS**: Utility-first CSS framework with RTL utilities
- **Font Awesome**: Icons for services and UI elements
- **Vanilla JavaScript**: Dynamic content loading
- **JSON**: Data structure for services and contact info
- **Noto Naskh Arabic & Amiri**: Fonts for proper Pashto script rendering

## 📁 Project Structure

```
mighraj/
├── index.html          # Main HTML file with RTL support
├── app.js             # JavaScript for dynamic functionality
├── services.json      # Service data and pricing in Pashto
├── README.md          # Project documentation
└── LICENSE            # License file
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/RafiUllahGerdewal/mighraj.git
   cd mighraj
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```

### Local Development

For local development, you can use any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📊 Data Management

### Updating Services

All service data is stored in `services.json`. To update prices or add new services:

1. **Edit** `services.json`
2. **Update** the service information in Pashto
3. **Refresh** the page to see changes

### Example Service Structure

```json
{
  "id": "service-name",
  "name": "د خدمت نوم",
  "description": "د خدمت تشریح",
  "price": 500,
  "currency": "AFN",
  "icon": "fas fa-icon-name",
  "iconColor": "text-primary",
  "bgColor": "bg-blue-100",
  "vehicleTypes": ["دوه-څرخه", "درې-څرخه", "درن موټرونه"]
}
```

### JavaScript API

The page includes JavaScript functions for dynamic updates:

```javascript
// Update service price
updateServicePrice('oil-change', 600);

// Add new service
addNewService({
  id: 'new-service',
  name: 'نوی خدمت',
  price: 200,
  // ... other properties
});

// Remove service
removeService('service-id');
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### RTL Responsive Features
- **Proper Spacing**: `space-x-reverse` for RTL layouts
- **Icon Positioning**: Automatic icon placement for RTL
- **Text Alignment**: Right-aligned for Pashto
- **Navigation**: Proper menu item ordering

## 🎨 Design Features

- **Color Scheme**: Professional blue and red theme
- **Typography**: Noto Naskh Arabic and Amiri for Pashto text
- **Icons**: Font Awesome icons for visual appeal
- **Animations**: Smooth hover effects and transitions
- **Cards**: Modern card-based layout for services
- **RTL Support**: Full right-to-left layout for Pashto

## 📞 Contact Information

- **Store Name**: المدینه موټرو پلورنځی
- **Location**: کابل، افغانستان
- **Phone**: +93 76 524 8595
- **WhatsApp**: +93 76 524 8595
- **Hours**: له ۷ بجو څخه تر ۷ پورې، له شنبې تر پنجشنبې
- **Friday**: جمعه: د لمانځه لپاره بند
- **Experience**: Since 1999 in vehicle repair and spare parts
- **Facebook**: [Al-Madina Auto Store](https://www.facebook.com/almadinaautostore)

## 🚀 Deployment

This project is ready for deployment on various platforms:

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect your GitHub repository
2. Set build command: `none`
3. Set publish directory: `.`
4. Deploy

### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Deploy
firebase deploy
```

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select source branch (main)
4. Save

## 🔧 Customization

### Colors
Update the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',    // Main blue
                secondary: '#dc2626',   // Red accent
                accent: '#f59e0b'       // Yellow accent
            },
            fontFamily: {
                'pashto': ['Noto Naskh Arabic', 'serif']
            }
        }
    }
}
```

### Fonts
The website uses multiple fonts for Pashto text:
- **Primary**: Noto Naskh Arabic (Google Fonts)
- **Secondary**: Amiri (Google Fonts)
- **Fallback**: Serif fonts for better Pashto rendering

### RTL Styling
Custom CSS for RTL support:
```css
.rtl {
    direction: rtl;
    text-align: right;
}
```

## 📄 Print Optimization

The design is optimized for printing:
- **Clean Layout**: High-contrast layout for Pashto
- **Proper Page Breaks**: RTL-aware page breaks
- **Readable Fonts**: Appropriate font sizes for Pashto
- **Essential Information**: Prominently displayed contact details

## 🔮 Future Enhancements

Potential improvements for future versions:
- **Backend Integration**: Connect to Firebase or similar for real-time updates
- **Online Booking**: Add appointment scheduling system
- **Gallery**: Add workshop photos and before/after service images
- **Reviews**: Customer testimonials section in Pashto
- **Multi-language**: Support for additional languages (Dari, Urdu)
- **Payment Integration**: Online payment options
- **Voice Navigation**: Audio support for accessibility

## 📄 License

This project is created for Al-Madina Auto Store. All rights reserved.

## 🤝 Support

For technical support or customization requests, contact the development team.

---

**المدینه موټرو پلورنځی** - افغانستان کې مسلکي د موټرو خدمتونه 🇦🇫