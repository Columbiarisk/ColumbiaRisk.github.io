#!/bin/bash

# Columbia Stress Test Website - Setup & Deployment Script
# This script helps set up and deploy the website

set -e

echo "🚀 Columbia Stress Test Website Setup"
echo "================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

print_status "Git is installed"

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_status "Working directory: $SCRIPT_DIR"

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    print_warning "Initializing git repository..."
    git init
    git config user.email "you@example.com"
    git config user.name "Your Name"
else
    print_status "Git repository already initialized"
fi

# Add all files
print_warning "Staging files for commit..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    print_warning "No changes to commit"
else
    # Commit changes
    COMMIT_MESSAGE="${1:-Update documentation and reports}"
    print_warning "Committing changes with message: '$COMMIT_MESSAGE'"
    git commit -m "$COMMIT_MESSAGE"
    print_status "Changes committed"
fi

# Show git status
echo ""
echo "📊 Git Status:"
git status

echo ""
echo "================================="
echo "✓ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Visit: https://columbiariskcolumbia.github.io"
echo ""
echo "To start a local development server:"
echo "  python -m http.server 8000"
echo "  Then visit: http://localhost:8000"
