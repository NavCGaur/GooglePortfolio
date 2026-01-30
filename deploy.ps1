# Deploy to Cloud Run
# This script builds the container image using Cloud Build and deploys it to Cloud Run.

$SERVICE_NAME = "portfolio-app"
$REGION = "us-central1"
# Ensure the label is correctly formatted and passed.
# Note: Google Cloud labels must be key-value pairs separated by =.
# In gcloud, we can pass --labels "key=value".
$LABELS = "dev-tutorial=devnewyear2026"

# Check if gcloud is installed
if (-not (Get-Command "gcloud" -ErrorAction SilentlyContinue)) {
    Write-Error "Google Cloud SDK (gcloud) is not installed. Please install it and try again."
    exit 1
}

# Get Project ID
$PROJECT_ID = gcloud config get-value project
if (-not $PROJECT_ID) {
    Write-Error "No Google Cloud Project ID found. Please run 'gcloud init' or 'gcloud config set project [PROJECT_ID]'."
    exit 1
}

Write-Host "Deploying $SERVICE_NAME to project $PROJECT_ID in region $REGION..."

# Enable necessary services (optional, but good practice if not enabled)
# gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# Submit the build to Cloud Build
# This builds the image and pushes it to Container Registry / Artifact Registry
Write-Host "Building container image..."
gcloud builds submit --tag "gcr.io/$PROJECT_ID/$SERVICE_NAME" .

if ($LASTEXITCODE -ne 0) {
    Write-Error "Cloud Build failed."
    exit 1
}

# Deploy to Cloud Run
Write-Host "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME `
    --image "gcr.io/$PROJECT_ID/$SERVICE_NAME" `
    --region $REGION `
    --platform managed `
    --allow-unauthenticated `
    --labels "$LABELS"

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed."
    exit 1
}

Write-Host "Deployment complete!"
