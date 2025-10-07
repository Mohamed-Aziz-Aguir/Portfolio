# Mohamed Aziz Aguir - Portfolio

Professional cybersecurity portfolio showcasing expertise in SOC architecture, threat intelligence, and security automation.

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Setup Instructions

1. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages (under Code and automation)
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   \`\`\`

3. **Access Your Site**
   - Your portfolio will be available at: `https://mohamed-aziz-aguir.github.io/`
   - The GitHub Action will automatically build and deploy your site

## 🛠️ Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📝 Updating Content

### Adding Projects
Edit `components/projects.tsx` and add new project objects to the `projects` array:

\`\`\`tsx
{
  title: "Your Project Title",
  period: "Month Year – Month Year",
  description: "Project description...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  highlights: [
    "Achievement 1",
    "Achievement 2"
  ]
}
\`\`\`

### Adding Certifications
Edit `components/certifications.tsx` and uncomment the template, then add your certifications:

\`\`\`tsx
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "Month Year",
  icon: Shield // or Lock, Award, etc.
}
\`\`\`

### Updating Experience
Edit `components/experience.tsx` to add or modify work experience entries.

### Updating Skills
Edit `components/skills.tsx` to add or modify your technical skills.

## 📧 Contact

- Email: mohamedaziz.aguir@outlook.com
- LinkedIn: [Mohamed Aziz Aguir](https://www.linkedin.com/in/mohamedazizaguir)
- GitHub: [Mohamed-Aziz-Aguir](https://github.com/Mohamed-Aziz-Aguir)

## 📄 License

© 2025 Mohamed Aziz Aguir. All rights reserved.
