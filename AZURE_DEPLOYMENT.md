# Azure Deployment Guide for Indian Knowledge Quiz

This guide will help you deploy the Indian Knowledge Quiz web application to Azure App Service.

## 📋 Prerequisites

1. **Azure Account**: Sign up at [portal.azure.com](https://portal.azure.com)
2. **GitHub Account**: For source code management and CI/CD
3. **Azure CLI** (optional): For command-line deployment

## 🚀 Deployment Options

### Option 1: GitHub Actions (Recommended)

#### Step 1: Create Azure Web App
1. Log in to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource" → "Web App"
3. Configure:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `indian-quiz-app` (must be globally unique)
   - **Runtime Stack**: Node.js 18 LTS
   - **Operating System**: Linux
   - **Region**: Choose closest to your users
   - **Pricing**: Free F1 or Basic B1

#### Step 2: Configure GitHub Deployment
1. In your Azure Web App, go to **Deployment Center**
2. Choose **GitHub** as source
3. Authorize GitHub access
4. Select your repository: `RGKarthik/DynamicWebApp1`
5. Choose branch: `main`
6. Azure will automatically create deployment workflow

#### Step 3: Set GitHub Secrets
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `AZURE_WEBAPP_NAME`: Your Azure Web App name
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Download from Azure Portal → Your Web App → Get publish profile
   - `AZURE_WEBAPP_URL`: Your app URL (e.g., https://indian-quiz-app.azurewebsites.net)

#### Step 4: Deploy
1. Push code to main branch
2. GitHub Actions will automatically deploy
3. Check deployment status in **Actions** tab

### Option 2: Azure CLI Deployment

```bash
# Login to Azure
az login

# Create resource group
az group create --name quiz-app-rg --location "East US"

# Create App Service plan
az appservice plan create --name quiz-app-plan --resource-group quiz-app-rg --sku F1 --is-linux

# Create Web App
az webapp create --resource-group quiz-app-rg --plan quiz-app-plan --name indian-quiz-app --runtime "NODE|18-lts"

# Deploy from GitHub
az webapp deployment source config --name indian-quiz-app --resource-group quiz-app-rg --repo-url https://github.com/RGKarthik/DynamicWebApp1 --branch main --manual-integration
```

### Option 3: Visual Studio Code Extension

1. Install **Azure App Service** extension
2. Sign in to Azure
3. Right-click project folder
4. Select **Deploy to Web App**
5. Follow the prompts

## ⚙️ Configuration

### Environment Variables
Set these in Azure Portal → Your Web App → Configuration → Application settings:

```
NODE_ENV=production
WEBSITE_NODE_DEFAULT_VERSION=18.17.0
PORT=8000
```

### Custom Domain (Optional)
1. Go to **Custom domains** in Azure Portal
2. Add your domain
3. Configure DNS records
4. Enable SSL certificate

## 📊 Monitoring & Maintenance

### Application Insights
1. Enable Application Insights in Azure Portal
2. Monitor performance, errors, and usage
3. Set up alerts for issues

### Health Monitoring
- Health check endpoint: `/health`
- Returns JSON with app status
- Azure automatically monitors this endpoint

### Logs
- View logs in Azure Portal → Log stream
- Or use Azure CLI: `az webapp log tail --name indian-quiz-app --resource-group quiz-app-rg`

## 🛡️ Security Features

### Implemented Security Measures
- **Helmet.js**: Security headers
- **Content Security Policy**: XSS protection
- **Compression**: Reduced bandwidth usage
- **Static file caching**: Improved performance

### Additional Security (Recommended)
1. **SSL Certificate**: Enable HTTPS (free with Azure)
2. **Authentication**: Add Azure AD authentication if needed
3. **Firewall**: Configure access restrictions
4. **Backup**: Enable automatic backups

## 🔧 Troubleshooting

### Common Issues

1. **Deployment Fails**
   - Check GitHub Actions logs
   - Verify publish profile is correct
   - Ensure Node.js version matches

2. **App Won't Start**
   - Check application logs
   - Verify package.json start script
   - Check environment variables

3. **Static Files Not Loading**
   - Verify file paths in server.js
   - Check web.config rewrite rules

### Support Commands

```bash
# View logs
az webapp log tail --name your-app-name --resource-group your-rg

# Restart app
az webapp restart --name your-app-name --resource-group your-rg

# Check app status
az webapp show --name your-app-name --resource-group your-rg --query state
```

## 📈 Performance Optimization

1. **Enable Application Insights** for monitoring
2. **Configure CDN** for static assets
3. **Set up auto-scaling** for high traffic
4. **Enable compression** (already configured)
5. **Monitor resource usage** and upgrade plan if needed

## 💰 Cost Management

- **Free Tier**: F1 plan (60 CPU minutes/day)
- **Basic Tier**: B1 plan (~$13/month)
- **Monitor costs** in Azure Portal
- **Set spending alerts** to avoid surprises

## 🚀 Go Live Checklist

- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate enabled
- [ ] Environment variables set
- [ ] Health monitoring enabled
- [ ] Application Insights configured
- [ ] Backup enabled
- [ ] GitHub Actions working
- [ ] Performance tested
- [ ] Security headers verified

## 📞 Support

- **Azure Documentation**: [docs.microsoft.com/azure](https://docs.microsoft.com/azure)
- **GitHub Issues**: Create issues in this repository
- **Azure Support**: Available through Azure Portal

---

Your Indian Knowledge Quiz app will be live at: `https://your-app-name.azurewebsites.net`

🎉 **Congratulations! Your quiz app is now running on Azure!**