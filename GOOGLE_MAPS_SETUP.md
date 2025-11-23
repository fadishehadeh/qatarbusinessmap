# Google Maps API Setup Instructions

## Steps to Get Your Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select an existing one)
   - Click on the project dropdown at the top
   - Click "New Project"
   - Give it a name like "MOCI Qatar Portal"
   - Click "Create"

3. **Enable Maps JavaScript API**
   - Go to: https://console.cloud.google.com/google/maps-apis
   - Click "Enable APIs and Services"
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"

4. **Create API Credentials**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

5. **Restrict Your API Key** (Recommended for security)
   - Click on the API key you just created
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain (e.g., `localhost:5173/*` for development)
   - Under "API restrictions", select "Restrict key"
   - Choose "Maps JavaScript API"
   - Click "Save"

6. **Add the API Key to Your Project**
   - Open the `.env.local` file in the project root
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
     ```
     VITE_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     ```
   - Save the file

7. **Restart the Development Server**
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again
   - The map should now load with all industrial zones marked

## Important Notes

- **Never commit your API key to version control**
- The `.env.local` file is already in `.gitignore`
- For production, use environment variables in your hosting platform
- Google Maps API has a free tier with $200 monthly credit
- Monitor your usage at: https://console.cloud.google.com/google/maps-apis/quotas

## Troubleshooting

If the map doesn't load:
1. Check browser console for errors
2. Verify the API key is correct in `.env.local`
3. Make sure Maps JavaScript API is enabled
4. Check if there are any billing issues in Google Cloud Console

